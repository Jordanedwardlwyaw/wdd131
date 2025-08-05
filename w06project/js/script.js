let temples = [];

const gallery = document.getElementById('gallery');
const countryFilter = document.getElementById('country-filter');

async function loadTemples() {
  try {
    const response = await fetch('data/temples.json');
    temples = await response.json();
    displayTemples(temples);
  } catch (error) {
    gallery.innerHTML = '<p>Failed to load temples data.</p>';
  }
}

function displayTemples(templeList) {
  gallery.innerHTML = '';
  if (templeList.length === 0) {
    gallery.innerHTML = '<p>No temples found.</p>';
    return;
  }
  templeList.forEach(temple => {
    const card = document.createElement('div');
    card.className = 'temple-card';
    card.innerHTML = `
      <img src="${temple.image}" alt="${temple.name}" loading="lazy" />
      <div class="temple-info">
        <div class="temple-name">${temple.name}</div>
        <div class="temple-location">${temple.location}</div>
      </div>
    `;
    gallery.appendChild(card);
  });
}

countryFilter.addEventListener('change', () => {
  const selected = countryFilter.value;
  if (selected === 'all') {
    displayTemples(temples);
  } else {
    const filtered = temples.filter(t => t.country === selected);
    displayTemples(filtered);
  }
});

loadTemples();
