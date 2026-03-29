export function initRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate"); // enables RE-ANIMATION
        }
      });
    },
    { threshold: 0.5 } // visible at 50% -> trigger
  );

  elements.forEach(el => observer.observe(el));
}
