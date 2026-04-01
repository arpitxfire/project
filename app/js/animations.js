/* animations.js — GSAP 3.12 + ScrollTrigger for dark futuristic semiconductor SPA */
(function () {
  "use strict";

  let ctx; // gsap.context for cleanup

  /* ─── Helper: animate a number counter ─────────────────────────────────── */
  function animateCounter(element, target, duration) {
    duration = duration || 2;
    var obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: duration,
      ease: "power2.out",
      onUpdate: function () {
        element.textContent = Math.round(obj.val).toLocaleString();
      },
    });
  }

  /* ─── Helper: manually trigger a section reveal ─────────────────────────── */
  function triggerSectionReveal(sectionId) {
    var section = document.getElementById(sectionId);
    if (!section) return;
    var targets = section.querySelectorAll(".reveal-up, .reveal-fade");
    gsap.to(targets, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" });
  }

  /* ─── Main init ──────────────────────────────────────────────────────────── */
  function init() {
    gsap.registerPlugin(ScrollTrigger);

    ctx = gsap.context(function () {

      /* 1. HERO ENTRANCE ---------------------------------------------------- */
      gsap.from(".hero-tag", { opacity: 0, y: 30, duration: 0.8, delay: 0.3, ease: "power2.out" });
      gsap.from(".hero-title", { opacity: 0, y: 40, duration: 1, delay: 0.5, ease: "power2.out" });
      gsap.from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.8, delay: 0.7, ease: "power2.out" });
      gsap.from(".hero-stats .stat-card", {
        opacity: 0, y: 40, duration: 0.8, delay: 0.9, stagger: 0.15, ease: "power2.out",
      });
      gsap.from(".scroll-hint", {
        opacity: 0, duration: 0.6, delay: 1.5, ease: "power2.out",
        onComplete: function () {
          var hint = document.querySelector(".scroll-hint");
          if (hint) hint.classList.add("bouncing");
        },
      });

      /* 2. SCROLL PROGRESS BAR ---------------------------------------------- */
      gsap.to("#scroll-progress", {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      /* 3. NAVBAR scrolled class -------------------------------------------- */
      ScrollTrigger.create({
        start: "50px top",
        onEnter: function () {
          var nav = document.getElementById("navbar");
          if (nav) nav.classList.add("scrolled");
        },
        onLeaveBack: function () {
          var nav = document.getElementById("navbar");
          if (nav) nav.classList.remove("scrolled");
        },
      });

      /* 4. SECTION REVEALS (.reveal-up / .reveal-fade) ---------------------- */
      gsap.utils.toArray(".reveal-up, .reveal-fade").forEach(function (el) {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      /* 5. VALUE CHAIN SECTION ---------------------------------------------- */
      var vcSection = document.querySelector("#value-chain");
      if (vcSection) {
        // Section title
        gsap.from("#value-chain .section-title, #value-chain h2", {
          opacity: 0, y: -30, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: "#value-chain", start: "top 80%", toggleActions: "play none none reverse" },
        });

        // Chain stages staggered from left
        gsap.from("#value-chain .chain-stage", {
          opacity: 0, x: -60, duration: 0.7, stagger: 0.18, ease: "power2.out",
          scrollTrigger: { trigger: "#value-chain", start: "top 75%", toggleActions: "play none none reverse" },
        });

        // Chain arrows fade in after stages
        gsap.from("#value-chain .chain-arrow", {
          opacity: 0, duration: 0.4, stagger: 0.18, delay: 0.3, ease: "power2.out",
          scrollTrigger: { trigger: "#value-chain", start: "top 75%", toggleActions: "play none none reverse" },
        });

        // India entry pulse
        ScrollTrigger.create({
          trigger: "#value-chain .chain-stage.india-entry",
          start: "top 80%",
          onEnter: function () {
            gsap.fromTo(
              "#value-chain .chain-stage.india-entry",
              { scale: 1 },
              { scale: 1.08, duration: 0.25, yoyo: true, repeat: 3, ease: "power1.inOut",
                onComplete: function () { gsap.set("#value-chain .chain-stage.india-entry", { scale: 1 }); } }
            );
          },
        });
      }

      /* 6. PROBLEM SECTION -------------------------------------------------- */
      var problemSection = document.querySelector("#problem");
      if (problemSection) {
        gsap.from("#problem .problem-left", {
          opacity: 0, x: -60, duration: 0.9, ease: "power2.out",
          scrollTrigger: { trigger: "#problem", start: "top 80%", toggleActions: "play none none reverse" },
        });
        gsap.from("#problem .problem-right", {
          opacity: 0, x: 60, duration: 0.9, ease: "power2.out",
          scrollTrigger: { trigger: "#problem", start: "top 80%", toggleActions: "play none none reverse" },
        });

        // Animated counters
        ScrollTrigger.create({
          trigger: "#problem",
          start: "top 80%",
          once: true,
          onEnter: function () {
            document.querySelectorAll("#problem .problem-stat .stat-number").forEach(function (el) {
              var target = parseFloat(el.getAttribute("data-target"));
              if (!isNaN(target)) animateCounter(el, target, 2);
            });
          },
        });
      }

      /* 7. INTERVIEW SECTION ------------------------------------------------ */
      var interviewSection = document.querySelector("#interviews");
      if (interviewSection) {
        gsap.from("#interviews .insight-card", {
          opacity: 0, y: 50, duration: 0.7, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: "#interviews", start: "top 80%", toggleActions: "play none none reverse" },
        });

        // Magnetic hover effect
        document.querySelectorAll("#interviews .insight-card").forEach(function (card) {
          card.addEventListener("mousemove", function (e) {
            var rect = card.getBoundingClientRect();
            var cx = rect.left + rect.width / 2;
            var cy = rect.top + rect.height / 2;
            var dx = (e.clientX - cx) / rect.width * 10;
            var dy = (e.clientY - cy) / rect.height * 10;
            gsap.to(card, { x: dx, y: dy, duration: 0.3, ease: "power2.out" });
          });
          card.addEventListener("mouseleave", function () {
            gsap.to(card, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
          });
        });
      }

      /* 8. ROADMAP SECTION -------------------------------------------------- */
      var roadmapSection = document.querySelector("#roadmap");
      if (roadmapSection) {
        // Timeline line fill
        gsap.fromTo("#roadmap .timeline-line",
          { scaleY: 0 },
          {
            scaleY: 1, transformOrigin: "top center", ease: "none",
            scrollTrigger: {
              trigger: "#roadmap",
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
            },
          }
        );

        // Phase nodes pop in
        gsap.from("#roadmap .phase-node", {
          scale: 0, duration: 0.5, stagger: 0.2, ease: "back.out(1.7)",
          scrollTrigger: { trigger: "#roadmap", start: "top 75%", toggleActions: "play none none reverse" },
        });

        // Phase cards alternating left/right
        document.querySelectorAll("#roadmap .phase-card").forEach(function (card, i) {
          var fromX = i % 2 === 0 ? -50 : 50;
          gsap.from(card, {
            opacity: 0, x: fromX, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" },
          });
        });
      }

      /* 9. SCENARIOS SECTION ----------------------------------------------- */
      var scenariosSection = document.querySelector("#scenarios");
      if (scenariosSection) {
        gsap.from("#scenarios .scenario-tab", {
          opacity: 0, y: -30, duration: 0.6, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: "#scenarios", start: "top 80%", toggleActions: "play none none reverse" },
        });
        gsap.from("#scenarios .scenario-content", {
          opacity: 0, duration: 0.5, ease: "power2.out",
          scrollTrigger: { trigger: "#scenarios", start: "top 75%", toggleActions: "play none none reverse" },
        });
      }

      /* 10. CONCLUSION SECTION --------------------------------------------- */
      var conclusionSection = document.querySelector("#conclusion");
      if (conclusionSection) {
        gsap.from("#conclusion .conclusion-quote", {
          opacity: 0, scale: 0.95, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: "#conclusion", start: "top 80%", toggleActions: "play none none reverse" },
        });
        gsap.from("#conclusion .strategic-pillar", {
          opacity: 0, y: 40, duration: 0.7, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: "#conclusion", start: "top 75%", toggleActions: "play none none reverse" },
        });
        // CTA breathing pulse
        gsap.to("#conclusion .cta-button", {
          scale: 1.05, duration: 1.2, repeat: -1, yoyo: true, ease: "sine.inOut",
        });
      }

      /* 11. PARALLAX EFFECTS ----------------------------------------------- */
      gsap.to(".hero-content", {
        y: -100, ease: "none",
        scrollTrigger: {
          trigger: ".hero-content",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray(".section-bg, .parallax-bg").forEach(function (bg) {
        gsap.to(bg, {
          y: "15%", ease: "none",
          scrollTrigger: {
            trigger: bg.closest("section") || bg,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      });

      /* 12. CHIP SIM SECTION ----------------------------------------------- */
      var chipSimSection = document.querySelector("#chip-sim");
      if (chipSimSection) {
        gsap.from("#chip-sim", {
          opacity: 0, y: 50, duration: 0.9, ease: "power2.out",
          scrollTrigger: { trigger: "#chip-sim", start: "top 80%", toggleActions: "play none none reverse" },
        });
        gsap.from("#chip-sim .progress-fill, #chip-sim .progress-bar-inner", {
          scaleX: 0, transformOrigin: "left center", duration: 1.2, ease: "power2.out",
          scrollTrigger: { trigger: "#chip-sim", start: "top 75%", toggleActions: "play none none reverse" },
        });
      }

      /* 13. SWOT SECTION ---------------------------------------------------- */
      var swotSection = document.querySelector("#swot");
      if (swotSection) {
        var corners = [
          { selector: "#swot .swot-quadrant:nth-child(1)", x: -60, y: -60 },
          { selector: "#swot .swot-quadrant:nth-child(2)", x: 60,  y: -60 },
          { selector: "#swot .swot-quadrant:nth-child(3)", x: -60, y:  60 },
          { selector: "#swot .swot-quadrant:nth-child(4)", x: 60,  y:  60 },
        ];
        corners.forEach(function (c) {
          gsap.from(c.selector, {
            opacity: 0, x: c.x, y: c.y, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: "#swot", start: "top 80%", toggleActions: "play none none reverse" },
          });
        });
        gsap.from("#swot .swot-card", {
          opacity: 0, y: 30, duration: 0.6, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: "#swot", start: "top 75%", toggleActions: "play none none reverse" },
        });
      }

    }); // end gsap.context
  }

  /* ─── Public API ─────────────────────────────────────────────────────────── */
  window.APP_ANIMATIONS = {
    init: init,
    animateCounter: animateCounter,
    triggerSectionReveal: triggerSectionReveal,
  };
})();
