```javascript
/* ============================================================
   AMARII PRODUCTIONS INC
   Global JavaScript
   ============================================================ */


/*
   Wait until the document has completely loaded.
*/

document.addEventListener("DOMContentLoaded", () => {


  /* ==========================================================
     FADE-IN ANIMATION
     ========================================================== */

  const fadeElements =
    document.querySelectorAll(".fade-in");


  /*
     If there are no fade-in elements on the page,
     there is nothing else to do.
  */

  if (!fadeElements.length) {
    return;
  }


  /*
     Make sure users who have requested reduced motion
     still see all content immediately.
  */

  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  if (reducedMotion) {

    fadeElements.forEach((element) => {

      element.classList.add("visible");

    });

    return;
  }


  /* ==========================================================
     INTERSECTION OBSERVER
     ========================================================== */

  /*
     Older browsers may not support IntersectionObserver.

     In that situation we deliberately make everything
     visible rather than allowing content to disappear.
  */

  if (!("IntersectionObserver" in window)) {

    fadeElements.forEach((element) => {

      element.classList.add("visible");

    });

    return;
  }


  /*
     Create the observer.

     rootMargin causes the animation to begin slightly
     before the element reaches the exact center of the
     viewport.
  */

  const observer =
    new IntersectionObserver(
      (entries, observerInstance) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            /*
               Reveal the element.
            */

            entry.target.classList.add("visible");


            /*
               Once revealed, stop observing it.

               This prevents the animation from repeatedly
               firing when the user scrolls up and down.
            */

            observerInstance.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.08,

        rootMargin:
          "0px 0px -40px 0px"
      }
    );


  /* ==========================================================
     START OBSERVING
     ========================================================== */

  fadeElements.forEach((element) => {

    observer.observe(element);

  });

});
```
