// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const targetId = a.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${targetId}`);
    }
  });
});

// Active nav link highlighting on scroll
const sections = [...document.querySelectorAll('main section[id]')];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-list a').forEach(l => l.classList.remove('active'));
      const link = document.querySelector(`.nav-list a[href="#${entry.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));

// Countdown (target: 22 Nov 2025 14:00 local start of Haldi)
const countdownEl = document.getElementById('countdown');
if (countdownEl) {
  const target = new Date('2025-11-22T14:00:00');
  const pad = n => String(n).padStart(2, '0');
  const render = () => {
    const now = new Date();
    let diff = target - now;
    if (diff <= 0) { countdownEl.textContent = 'The celebrations have begun!'; return; }
    const days = Math.floor(diff / (1000*60*60*24)); diff -= days*1000*60*60*24;
    const hours = Math.floor(diff / (1000*60*60)); diff -= hours*1000*60*60;
    const mins = Math.floor(diff / (1000*60)); diff -= mins*1000*60;
    const secs = Math.floor(diff / 1000);
    countdownEl.innerHTML = [
      {label:'Days', value:days},
      {label:'Hours', value:pad(hours)},
      {label:'Minutes', value:pad(mins)},
      {label:'Seconds', value:pad(secs)}
    ].map(u => `<div class="unit"><span class="value">${u.value}</span><span class="label">${u.label}</span></div>`).join('');
  };
  render();
  setInterval(render, 1000);
}

