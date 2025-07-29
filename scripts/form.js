// Product array
const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "fc-2050", name: "Power Laces" },
  { id: "fs-1987", name: "Hoverboard" },
  { id: "ac-2000", name: "Arc Reactor" },
  { id: "jj-1969", name: "Jedi Lightsaber" },
  { id: "wr-2022", name: "Web-shooters" }
];

// Populate select menu
const productSelect = document.getElementById("productName");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});
