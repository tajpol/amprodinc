/* ============================================================
   AMARII PRODUCTIONS INC
   GLOBAL JAVASCRIPT
   ============================================================ */


/*
   This script ONLY enhances the page with animations.

   IMPORTANT:
   The CSS keeps all content visible by default.

   Therefore, if JavaScript fails to load, the website
   and all of its content will still be visible.
*/


document.addEventListener("DOMContentLoaded", function () {

  const fadeElements =
    document.querySelectorAll(".fade-in");


  /*
     Nothing to animate.
  */

  if (!fadeElements.length) {
    return;
  }


  /*
     Respect the user's reduced-motion preference.
  */

  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  if (reducedMotion) {
    return;
  }


  /*
     If IntersectionObserver isn't supported,
     leave the content completely normal.
  */

  if (!("IntersectionObserver" in window)) {
    return;
  }


  const observer =
    new IntersectionObserver(
      function (entries, observer) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add("animate");

            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.08,

        rootMargin:
          "0px 0px -30px 0px"
      }
    );


  /*
     Watch each fade-in element.
  */

  fadeElements.forEach(function (element) {

    observer.observe(element);

  });

});
