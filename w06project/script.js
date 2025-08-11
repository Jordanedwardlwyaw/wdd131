let temples = [];

async function loadTemples() {
  const response = await fetch("temples.json");
  temples = await response.json();
  populateFilterOptions();
  displayTemples(temples);
}

function populateFilterOptions() {
  const countries = [...new Set(temples.map(t => t.country))];
  const filterSelect = document.getElementById("filter");
  countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    filterSelect.appendChild(option);
  });
}

function displayTemples(data) {
  const container = document.getElementById("templeContainer");
  container.innerHTML = "";
  data.forEach(t => {
    container.innerHTML += `
      <div class="card">
        <img src="${t.imageUrl}" alt="${t.name}" loading="lazy" />
        <h3>${t.name}</h3>
        <p>${t.location}</p>
        <p>Dedicated: ${t.dedicated}</p>
      </div>
    `;
  });
}

document.getElementById("filter").addEventListener("change", (e) => {
  const value = e.target.value;
  if (value === "All") {
    displayTemples(temples);
  } else {
    displayTemples(temples.filter(t => t.country === value));
  }
});

loadTemples();
