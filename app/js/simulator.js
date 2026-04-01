(function () {
  'use strict';

  var CIRCUMFERENCE = 251.2; // 2 * Math.PI * 40

  var DEFAULT_OPTIONS = {
    design: {
      title: 'Fabless Design',
      description: 'Focus on chip design and IP, outsourcing fabrication. Low capex, high margin, fastest path to global competitiveness.',
      risk: 35,
      payoff: 82,
      capital: '$50M – $200M',
      timeline: '3 – 5 years',
      pros: ['Low capital requirement', 'High margin potential', 'Leverages existing global fabs', 'Fastest to market'],
      cons: ['Dependent on foreign fabs', 'Limited manufacturing IP', 'Geopolitical supply risk'],
      companies: 'MediaTek, Qualcomm, Apple Silicon, ARM',
      insight: 'India has 20% of global chip design talent. Fabless is the highest-ROI entry point with existing human capital.',
    },
    packaging: {
      title: 'Advanced Packaging (ATMP)',
      description: 'Build world-class Assembly, Test, Marking & Packaging facilities. Capital-moderate, near-term revenue, bridges to full fab.',
      risk: 42,
      payoff: 68,
      capital: '$200M – $800M',
      timeline: '2 – 4 years',
      pros: ['Moderate capex vs full fab', 'Strong global demand for ATMP', 'Chiplet era boosts relevance', 'Near-term job creation'],
      cons: ['Lower margin than design', 'Commoditisation risk', 'Requires process discipline'],
      companies: 'Amkor, ASE Group, TATA Electronics',
      insight: 'Advanced packaging is the fastest-growing segment of the semiconductor value chain, driven by chiplet architectures.',
    },
    fabrication: {
      title: 'Full Fabrication (Fab)',
      description: 'Build domestic wafer fabrication. Highest strategic autonomy and long-term value, but requires massive sustained investment.',
      risk: 78,
      payoff: 95,
      capital: '$5B – $20B+',
      timeline: '7 – 12 years',
      pros: ['Maximum strategic autonomy', 'Full value-chain capture', 'National security resilience', 'Anchor for ecosystem'],
      cons: ['Enormous capital requirement', 'Long gestation period', 'Technology catch-up challenge', 'Talent pipeline critical'],
      companies: 'TSMC, Samsung Foundry, Intel Foundry, Micron',
      insight: 'A domestic fab anchors the entire ecosystem. Even a legacy-node fab (28nm+) creates compounding strategic value.',
    },
  };

  function getData() {
    return (window.APP_DATA && window.APP_DATA.simulatorOptions) || DEFAULT_OPTIONS;
  }

  /* ── Gauge helpers ── */
  function riskColor(value) {
    if (value <= 30) return '#10b981';
    if (value <= 60) return '#fbbf24';
    return '#ef4444';
  }

  function buildGaugeSVG(containerId, fillId, textId, color) {
    var container = document.getElementById(containerId);
    if (!container) return null;
    container.innerHTML = [
      '<svg viewBox="0 0 100 100" class="gauge-svg" style="width:100%;height:100%;">',
      '  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="8" class="gauge-bg"/>',
      '  <circle cx="50" cy="50" r="40" fill="none"',
      '    stroke="' + color + '" stroke-width="8"',
      '    stroke-dasharray="' + CIRCUMFERENCE + '"',
      '    stroke-dashoffset="' + CIRCUMFERENCE + '"',
      '    stroke-linecap="round"',
      '    transform="rotate(-90 50 50)"',
      '    class="gauge-fill" id="' + fillId + '"/>',
      '  <text x="50" y="54" text-anchor="middle" dominant-baseline="middle"',
      '    fill="rgba(255,255,255,0.9)" font-size="18" font-family="Space Grotesk, sans-serif"',
      '    class="gauge-text" id="' + textId + '">0%</text>',
      '</svg>',
    ].join('\n');
    return container.querySelector('#' + fillId);
  }

  function animateGauge(fillEl, textEl, value) {
    var target = CIRCUMFERENCE - (value / 100) * CIRCUMFERENCE;
    if (window.gsap) {
      gsap.fromTo(
        fillEl,
        { attr: { 'stroke-dashoffset': CIRCUMFERENCE } },
        {
          attr: { 'stroke-dashoffset': target },
          duration: 1.2,
          ease: 'power2.out',
          onUpdate: function () {
            var current = parseFloat(fillEl.getAttribute('stroke-dashoffset'));
            var pct = Math.round(((CIRCUMFERENCE - current) / CIRCUMFERENCE) * 100);
            if (textEl) textEl.textContent = pct + '%';
          },
          onComplete: function () {
            if (textEl) textEl.textContent = value + '%';
          },
        }
      );
    } else {
      fillEl.setAttribute('stroke-dashoffset', target);
      if (textEl) textEl.textContent = value + '%';
    }
  }

  /* ── Populate result panel ── */
  function populateResult(optionKey) {
    var data = getData();
    var opt = data[optionKey];
    if (!opt) return;

    function setText(id, val) {
      var el = document.getElementById(id);
      if (el) el.textContent = val;
    }
    function setHTML(id, val) {
      var el = document.getElementById(id);
      if (el) el.innerHTML = val;
    }

    setText('sim-result-title', opt.title);
    setText('sim-result-description', opt.description);
    setText('sim-capital', opt.capital);
    setText('sim-timeline', opt.timeline);
    setText('sim-companies', opt.companies);
    setText('sim-key-insight', opt.insight);

    if (opt.pros) {
      setHTML(
        'sim-pros-list',
        opt.pros.map(function (p) { return '<li>' + p + '</li>'; }).join('')
      );
    }
    if (opt.cons) {
      setHTML(
        'sim-cons-list',
        opt.cons.map(function (c) { return '<li>' + c + '</li>'; }).join('')
      );
    }

    /* Risk gauge */
    var riskFill = buildGaugeSVG('sim-risk-gauge', 'risk-fill', 'risk-value', riskColor(opt.risk));
    if (riskFill) {
      var riskText = document.getElementById('risk-value');
      animateGauge(riskFill, riskText, opt.risk);
    }

    /* Payoff gauge */
    var payoffFill = buildGaugeSVG('sim-payoff-gauge', 'payoff-fill', 'payoff-value', '#10b981');
    if (payoffFill) {
      var payoffText = document.getElementById('payoff-value');
      animateGauge(payoffFill, payoffText, opt.payoff);
    }

    /* Show result panel */
    var panel = document.getElementById('sim-result');
    if (panel) {
      panel.style.display = 'block';
      panel.style.opacity = '0';
      panel.style.transition = 'opacity 0.4s ease';
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          panel.style.opacity = '1';
          panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
      });
    }

    /* Update scenario chart if available */
    if (window.APP_CHARTS && window.APP_CHARTS.updateScenarioChart) {
      window.APP_CHARTS.updateScenarioChart(optionKey);
    }
  }

  /* ── Init ── */
  function init() {
    var optionIds = ['design', 'packaging', 'fabrication'];

    optionIds.forEach(function (key) {
      var card = document.getElementById('sim-option-' + key);
      if (!card) return;
      card.style.cursor = 'pointer';
      card.addEventListener('click', function () {
        optionIds.forEach(function (k) {
          var c = document.getElementById('sim-option-' + k);
          if (c) c.classList.remove('active');
        });
        card.classList.add('active');
        populateResult(key);
      });
    });

    /* Auto-select design on load */
    var defaultCard = document.getElementById('sim-option-design');
    if (defaultCard) {
      defaultCard.classList.add('active');
      populateResult('design');
    }
  }

  window.APP_SIMULATOR = { init: init };
})();
