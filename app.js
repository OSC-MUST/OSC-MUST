/* ===================================================================
   OSC-MUST — Vanilla JS  (typing effect + scroll reveal)
   Total: ~50 lines.  No frameworks, no dependencies.
   =================================================================== */

(function () {
  'use strict';

  /* ── Typing Effect ─────────────────────────────────────────────── */
  var el = document.getElementById('typing-text');
  if (el) {
    var phrases = ['We build. We share. We libre.', 'Free as in freedom, not free beer.'];
    try {
      var attr = el.getAttribute('data-phrases');
      if (attr) { var parsed = JSON.parse(attr); if (parsed.length) phrases = parsed; }
    } catch (e) {}
    var phraseIdx = 0;
    var charIdx = 0;
    var deleting = false;

    function tick() {
      var phrase = phrases[phraseIdx % phrases.length];

      if (!deleting) {
        charIdx++;
        el.textContent = phrase.slice(0, charIdx);
        if (charIdx === phrase.length) {
          deleting = true;
          setTimeout(tick, 2400);
          return;
        }
        setTimeout(tick, 75);
      } else {
        charIdx--;
        el.textContent = phrase.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          setTimeout(tick, 500);
          return;
        }
        setTimeout(tick, 35);
      }
    }

    tick();
  }

  /* ── Scroll Reveal (IntersectionObserver) ───────────────────────── */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.08 }
    );

    reveals.forEach(function (r) {
      observer.observe(r);
    });
  }
})();
