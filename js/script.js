// Simple scroll animation trigger
document.addEventListener("DOMContentLoaded", () => {
  const fadeElems = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.2 });

  fadeElems.forEach(el => observer.observe(el));
});
