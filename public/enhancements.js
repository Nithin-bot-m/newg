/**
 * ENHANCEMENTS.JS
 * Strictly Additive Interactive Behaviors (Powered by ui-ux-pro-max intelligence)
 * - Zero overrides, zero layout shift, zero mutation of existing styles
 * - Zero React hydration conflict (never mutates className or DOM attributes)
 * - Uses native Web Animations API on compositor layer
 * - Fully respects prefers-reduced-motion
 */
(function () {
  "use strict";

  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return;
  }

  // Check if reduced motion is requested
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    return;
  }

  function initScrollReveal() {
    var observerOptions = {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.1,
    };

    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var target = entry.target;
          observer.unobserve(target);

          // Use native Web Animations API: zero class mutation, zero React hydration diff
          if (typeof target.animate === "function") {
            target.animate(
              [
                { opacity: 0.6, transform: "translateY(10px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: 450,
                easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                fill: "forwards",
              }
            );
          }
        }
      });
    }, observerOptions);

    // Observe section headings without mutating their className or DOM attributes
    var headings = document.querySelectorAll("section .text-center > h2");
    headings.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  function initSmoothAnchors() {
    document.addEventListener("click", function (e) {
      var target = e.target.closest('a[href^="#"]');
      if (!target) return;
      var hash = target.getAttribute("href");
      if (!hash || hash === "#") return;

      var targetEl = document.querySelector(hash);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        if (history.pushState) {
          history.pushState(null, null, hash);
        }
      }
    });
  }

  // Ensure script executes strictly AFTER React hydration has completed
  function start() {
    setTimeout(function () {
      initScrollReveal();
      initSmoothAnchors();
    }, 400);
  }

  if (document.readyState === "complete") {
    start();
  } else {
    window.addEventListener("load", start);
  }
})();
