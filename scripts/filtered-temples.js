// Footer Date Logic
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  const expanded = navMenu.classList.contains('open');
  hamburger.textContent = expanded ? '✖' : '☰';
  hamburger.setAttribute('aria-expanded', expanded);
});

// Temple Data Array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
  templeName: "Manti Utah",
  location: "Manti, Utah, United States",
  dedicated: "1888, May, 21",
  area: 74792,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
},

{
  templeName: "Lima Perú",
  location: "Lima, Perú",
  dedicated: "1986, January, 10",
  area: 9600,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
},



];

// Display Function
function displayTemples(templesList) {
  const container = document.getElementById("temple-cards");
  container.innerHTML = "";

  templesList.forEach((temple) => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img loading="lazy" src="${temple.imageUrl}" alt="${temple.templeName}">
    `;

    container.appendChild(card);
  });
}

// Filter Function
function filterTemples(filter) {
  let filteredTemples;

  switch (filter) {
    case "old":
      filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case "new":
      filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case "large":
      filteredTemples = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filteredTemples = temples.filter(t => t.area < 10000);
      break;
    case "home":
    default:
      filteredTemples = temples;
      break;
  }

  displayTemples(filteredTemples);
}

// Initial Render
window.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples);
});
