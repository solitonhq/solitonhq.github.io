// Scroll reveal for `.tk-rv` blocks. Anything already on screen opens immediately.
// The `rv-ready` class tells the CSS fail-safe that this script ran.
document.documentElement.classList.add('rv-ready');

const els = [...document.querySelectorAll('.tk-rv')];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveal = (el: Element) => el.classList.add('in');

if (reduce || !('IntersectionObserver' in window)) {
  els.forEach(reveal);
} else {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } }),
    { threshold: 0.1 },
  );
  els.forEach((el) => (el.getBoundingClientRect().top < innerHeight * 0.95 ? reveal(el) : io.observe(el)));
}

export {};
