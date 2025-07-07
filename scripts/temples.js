// Footer dynamic date info
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  // Toggle hamburger symbol to 'X' or back
  if (navMenu.classList.contains('show')) {
    hamburger.textContent = '✖';
  } else {
    hamburger.textContent = '☰';
  }
});
