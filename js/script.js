```js
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  if (!fadeElements.length) {
    return;
  }

  /*
   * If IntersectionObserver isn't available,
   * everything remains visible.
   */
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
