```js id="x4m2qn"
/*
 * Amarii Productions Inc.
 * Simple progressive enhancement for page animations.
 *
 * IMPORTANT:
 * The CSS keeps all content visible by default.
 * JavaScript only adds the optional animation.
 */

document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  // Nothing to animate — safely exit.
  if (!fadeElements.length) {
    return;
  }

  // If the browser does not support IntersectionObserver,
  // leave everything visible.
  if (!("IntersectionObserver" in window)) {
    fadeElements.forEach((element) => {
      element.classList.add("visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");

        // Once animated, stop watching the element.
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12
    }
  );

  fadeElements.forEach((element) => {
    observer.observe(element);
  });
});
```
