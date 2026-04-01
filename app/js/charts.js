(function () {
  'use strict';

  function setGlobalDefaults() {
    if (!window.Chart) return;
    Chart.defaults.color = 'rgba(255,255,255,0.6)';
    Chart.defaults.borderColor = 'rgba(255,255,255,0.06)';
    Chart.defaults.font.family = "'Space Grotesk', sans-serif";
  }

  var ANIM = { duration: 1500, easing: 'easeInOutQuart' };

  var TOOLTIP_PLUGIN = {
    backgroundColor: 'rgba(15,23,42,0.92)',
    borderColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1,
    titleColor: '#e2e8f0',
    bodyColor: 'rgba(255,255,255,0.7)',
    padding: 12,
    cornerRadius: 8,
  };

  function canvas(id) {
    return document.getElementById(id);
  }

  /* ── 1. Market Share Radar ── */
  function initRadarChart() {
    var el = canvas('market-radar');
    if (!el) return;
    new Chart(el, {
      type: 'radar',
      data: {
        labels: ['Design', 'Fabrication', 'Equipment', 'ATMP', 'IP Ownership', 'Infrastructure'],
        datasets: [
          {
            label: 'India',
            data: [15, 2, 1, 8, 3, 45],
            backgroundColor: 'rgba(251,191,36,0.2)',
            borderColor: '#fbbf24',
            borderWidth: 2,
            pointBackgroundColor: '#fbbf24',
            pointRadius: 4,
          },
          {
            label: 'Global Average',
            data: [60, 70, 80, 55, 75, 65],
            backgroundColor: 'rgba(0,212,255,0.1)',
            borderColor: '#00d4ff',
            borderWidth: 2,
            pointBackgroundColor: '#00d4ff',
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: ANIM,
        plugins: { legend: { labels: { color: '#94a3b8' } }, tooltip: TOOLTIP_PLUGIN },
        scales: {
          r: {
            min: 0,
            max: 100,
            ticks: { color: 'rgba(255,255,255,0.7)', backdropColor: 'transparent', stepSize: 20 },
            grid: { color: 'rgba(255,255,255,0.08)' },
            angleLines: { color: 'rgba(255,255,255,0.08)' },
            pointLabels: { color: '#94a3b8', font: { size: 12 } },
          },
        },
      },
    });
  }

  /* ── 2. Value Chain Bar Chart ── */
  function initChainChart() {
    var el = canvas('chain-chart');
    if (!el) return;
    new Chart(el, {
      type: 'bar',
      data: {
        labels: ['Design', 'Fabrication', 'Equipment', 'ATMP', 'Final Products'],
        datasets: [
          {
            label: 'Global Market ($B)',
            data: [180, 220, 85, 42, 73],
            backgroundColor: 'rgba(0,212,255,0.7)',
            borderColor: '#00d4ff',
            borderWidth: 1,
          },
          {
            label: 'India Presence ($B)',
            data: [4, 0.2, 0.1, 1.5, 2],
            backgroundColor: 'rgba(251,191,36,0.7)',
            borderColor: '#fbbf24',
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: ANIM,
        plugins: {
          legend: { labels: { color: 'rgba(255,255,255,0.7)' } },
          tooltip: TOOLTIP_PLUGIN,
        },
        scales: {
          x: {
            ticks: { color: 'rgba(255,255,255,0.7)' },
            grid: { color: 'rgba(255,255,255,0.06)' },
          },
          y: {
            ticks: { color: 'rgba(255,255,255,0.7)' },
            grid: { color: 'rgba(255,255,255,0.06)' },
          },
        },
      },
    });
  }

  /* ── 3. Roadmap Timeline Chart ── */
  function initRoadmapChart() {
    var el = canvas('roadmap-chart');
    if (!el) return;
    var phases = [
      { label: 'Phase 1', start: 2024, end: 2027, color: '#00d4ff' },
      { label: 'Phase 2', start: 2027, end: 2030, color: '#fbbf24' },
      { label: 'Phase 3', start: 2030, end: 2035, color: '#10b981' },
      { label: 'Phase 4', start: 2035, end: 2040, color: '#a855f7' },
    ];
    new Chart(el, {
      type: 'bar',
      data: {
        labels: phases.map(function (p) { return p.label; }),
        datasets: [
          {
            label: 'Start offset',
            data: phases.map(function (p) { return p.start - 2024; }),
            backgroundColor: 'transparent',
            borderWidth: 0,
          },
          {
            label: 'Duration',
            data: phases.map(function (p) { return p.end - p.start; }),
            backgroundColor: phases.map(function (p) { return p.color + 'cc'; }),
            borderColor: phases.map(function (p) { return p.color; }),
            borderWidth: 2,
            borderRadius: 4,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: ANIM,
        plugins: {
          legend: { display: false },
          tooltip: Object.assign({}, TOOLTIP_PLUGIN, {
            callbacks: {
              label: function (ctx) {
                var p = phases[ctx.dataIndex];
                return ctx.datasetIndex === 1 ? p.start + ' – ' + p.end : '';
              },
            },
          }),
        },
        scales: {
          x: {
            stacked: true,
            min: 0,
            max: 16,
            ticks: {
              color: 'rgba(255,255,255,0.7)',
              callback: function (v) { return 2024 + v; },
            },
            grid: { color: 'rgba(255,255,255,0.06)' },
          },
          y: {
            stacked: true,
            ticks: { color: 'rgba(255,255,255,0.7)' },
            grid: { color: 'rgba(255,255,255,0.06)' },
          },
        },
      },
    });
  }

  /* ── 4. Scenario Impact Chart ── */
  var scenarioChartInstance = null;

  var SCENARIOS = {
    conservative: {
      label: 'Conservative',
      gdp: 35,
      jobs: 150,
    },
    moderate: {
      label: 'Moderate',
      gdp: 110,
      jobs: 520,
    },
    aggressive: {
      label: 'Aggressive',
      gdp: 300,
      jobs: 1500,
    },
  };

  function buildScenarioData(activeId) {
    var ids = ['conservative', 'moderate', 'aggressive'];
    var labels = ids.map(function (id) { return SCENARIOS[id].label; });
    var gdpData = ids.map(function (id) { return SCENARIOS[id].gdp; });
    var jobsData = ids.map(function (id) { return SCENARIOS[id].jobs; });

    var gdpColors = ids.map(function (id) {
      return id === activeId ? 'rgba(0,212,255,0.9)' : 'rgba(0,212,255,0.3)';
    });
    var jobColors = ids.map(function (id) {
      return id === activeId ? 'rgba(251,191,36,0.9)' : 'rgba(251,191,36,0.3)';
    });

    return { labels: labels, gdpData: gdpData, jobsData: jobsData, gdpColors: gdpColors, jobColors: jobColors };
  }

  function initScenarioChart() {
    var el = canvas('scenario-chart');
    if (!el) return;
    var d = buildScenarioData('moderate');
    scenarioChartInstance = new Chart(el, {
      type: 'bar',
      data: {
        labels: d.labels,
        datasets: [
          {
            label: 'GDP Impact ($B)',
            data: d.gdpData,
            backgroundColor: d.gdpColors,
            borderColor: d.gdpColors.map(function (c) { return c.replace('0.9', '1').replace('0.3', '0.6'); }),
            borderWidth: 1,
            yAxisID: 'y',
          },
          {
            label: 'Jobs (thousands)',
            data: d.jobsData,
            backgroundColor: d.jobColors,
            borderColor: d.jobColors.map(function (c) { return c.replace('0.9', '1').replace('0.3', '0.6'); }),
            borderWidth: 1,
            yAxisID: 'y1',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: ANIM,
        plugins: {
          legend: { labels: { color: 'rgba(255,255,255,0.7)' } },
          tooltip: TOOLTIP_PLUGIN,
        },
        scales: {
          x: { ticks: { color: 'rgba(255,255,255,0.7)' }, grid: { color: 'rgba(255,255,255,0.06)' } },
          y: {
            type: 'linear',
            position: 'left',
            ticks: { color: 'rgba(255,255,255,0.7)' },
            grid: { color: 'rgba(255,255,255,0.06)' },
            title: { display: true, text: 'GDP Impact ($B)', color: '#00d4ff' },
          },
          y1: {
            type: 'linear',
            position: 'right',
            ticks: { color: 'rgba(255,255,255,0.7)' },
            grid: { drawOnChartArea: false },
            title: { display: true, text: 'Jobs (thousands)', color: '#fbbf24' },
          },
        },
      },
    });
  }

  function updateScenarioChart(scenarioId) {
    if (!scenarioChartInstance) return;
    var d = buildScenarioData(scenarioId);
    scenarioChartInstance.data.datasets[0].backgroundColor = d.gdpColors;
    scenarioChartInstance.data.datasets[1].backgroundColor = d.jobColors;
    scenarioChartInstance.update();
  }

  /* ── 5. Startup Opportunity Bubble Chart ── */
  function initOpportunityChart() {
    var el = canvas('opportunity-chart');
    if (!el) return;

    var opportunities = [
      { label: 'Analog/Mixed-Signal', x: 3, y: 42, r: 18, risk: 'low', color: '#10b981' },
      { label: 'Chiplet Interconnects', x: 5, y: 55, r: 14, risk: 'medium', color: '#fbbf24' },
      { label: 'ATMP Services', x: 2, y: 28, r: 22, risk: 'low', color: '#10b981' },
      { label: 'Power Semi (GaN/SiC)', x: 4, y: 48, r: 16, risk: 'medium', color: '#fbbf24' },
      { label: 'Legacy Fab', x: 7, y: 20, r: 20, risk: 'high', color: '#ef4444' },
      { label: 'EDA Tools', x: 6, y: 60, r: 12, risk: 'medium', color: '#fbbf24' },
    ];

    new Chart(el, {
      type: 'bubble',
      data: {
        datasets: opportunities.map(function (o) {
          return {
            label: o.label,
            data: [{ x: o.x, y: o.y, r: o.r }],
            backgroundColor: o.color + '55',
            borderColor: o.color,
            borderWidth: 2,
          };
        }),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: ANIM,
        plugins: {
          legend: { labels: { color: 'rgba(255,255,255,0.7)', boxWidth: 12 } },
          tooltip: Object.assign({}, TOOLTIP_PLUGIN, {
            callbacks: {
              label: function (ctx) {
                var o = opportunities[ctx.datasetIndex];
                return [
                  o.label,
                  'Time to profit: ' + o.x + ' yrs',
                  'Margin: ' + o.y + '%',
                  'Risk: ' + o.risk,
                ];
              },
            },
          }),
        },
        scales: {
          x: {
            title: { display: true, text: 'Time to Profit (years)', color: 'rgba(255,255,255,0.7)' },
            ticks: { color: 'rgba(255,255,255,0.7)' },
            grid: { color: 'rgba(255,255,255,0.06)' },
          },
          y: {
            title: { display: true, text: 'Margin %', color: 'rgba(255,255,255,0.7)' },
            ticks: { color: 'rgba(255,255,255,0.7)' },
            grid: { color: 'rgba(255,255,255,0.06)' },
          },
        },
      },
    });
  }

  /* ── Public API ── */
  function init() {
    if (!window.Chart) {
      console.warn('APP_CHARTS: Chart.js not loaded');
      return;
    }
    setGlobalDefaults();
    initRadarChart();
    initChainChart();
    initRoadmapChart();
    initScenarioChart();
    initOpportunityChart();
  }

  window.APP_CHARTS = { init: init, updateScenarioChart: updateScenarioChart };
})();
