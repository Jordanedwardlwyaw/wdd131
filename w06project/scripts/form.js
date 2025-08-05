const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "fc-2050", name: "Power Laces" },
  { id: "fs-1987", name: "Hoverboard" },
  { id: "ac-2000", name: "Arc Reactor" },
  { id: "jj-1969", name: "Jedi Lightsaber" },
  { id: "wr-2022", name: "Web-shooters" }
];

const productSelect = document.getElementById("productName");

function populateProductList() {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

function saveFormData() {
  const selectedProduct = productSelect.value;
  if (!selectedProduct) {
    alert("Please select a product before submitting your review.");
    return false; // prevent submission if no product selected
  }

  // Save selected product to localStorage
  localStorage.setItem("selectedProduct", selectedProduct);

  // Show confirmation message with template literal
  alert(`Thank you for reviewing the ${productSelect.options[productSelect.selectedIndex].text}!`);

  return true; // allow form submission or further processing
}

document.addEventListener("DOMContentLoaded", () => {
  populateProductList();

  // Load saved product from localStorage if available
  const savedProduct = localStorage.getItem("selectedProduct");
  if (savedProduct) {
    productSelect.value = savedProduct;
  }

  // Add form submit event listener
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    if (!saveFormData()) {
      event.preventDefault(); // prevent form submission if validation fails
    }
  });

  // Set footer year and last modified date dynamically
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
