// Mobile menu toggle (simple reveal of links on small screens)
const menuBtn = document.getElementById('menuBtn');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const nav = document.querySelector('.nav-links');
    if (!nav) return;
    const isOpen = nav.style.display === 'flex';
    nav.style.display = isOpen ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '72px';
    nav.style.right = '24px';
    nav.style.background = 'rgba(10,14,22,.95)';
    nav.style.border = '1px solid #1e293b';
    nav.style.padding = '12px 16px';
    nav.style.borderRadius = '12px';
  });
}

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
if (navbar) {
  const onScroll = () => {
    if (window.scrollY > 10) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Smooth scroll for in-page anchors
for (const link of document.querySelectorAll('a[href^="#"]')) {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' });
    }
  });
}

// Counter utility
function animateCounter(el, value, duration = 900) {
  if (!el) return;
  const start = performance.now();
  const step = (t) => {
    const p = Math.min(1, (t - start) / duration);
    el.textContent = Math.floor(p * value).toString();
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// About page counters
const aboutCounters = [
  { id: 'statProjects', value: 20 },
  { id: 'statInUse', value: 12 },
  { id: 'statCompleted', value: 18 },
  { id: 'statCoffees', value: 500 }
];

// Home page counters
const homeCounters = [
  { id: 'homeProjects', value: 20 },
  { id: 'homeInUse', value: 15 },
  { id: 'homeCompleted', value: 5 }
];

window.addEventListener('load', () => {
  [...aboutCounters, ...homeCounters].forEach(({ id, value }) => {
    const el = document.getElementById(id);
    if (el) animateCounter(el, value);
  });
});
