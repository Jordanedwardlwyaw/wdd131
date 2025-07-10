document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  const expanded = navMenu.classList.contains('open');
  hamburger.textContent = expanded ? '✖' : '☰';
  hamburger.setAttribute('aria-expanded', expanded);
});
