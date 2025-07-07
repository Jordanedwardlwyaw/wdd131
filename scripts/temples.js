
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  
  if (navMenu.classList.contains('show')) {
    hamburger.textContent = '✖';
  } else {
    hamburger.textContent = '☰';
  }
});
