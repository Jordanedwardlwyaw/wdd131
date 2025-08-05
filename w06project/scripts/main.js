// Scripture data array with objects
const scriptures = [
  {
    reference: "John 3:16",
    text: "For God so loved the world, that he gave his only begotten Son..."
  },
  {
    reference: "Proverbs 3:5-6",
    text: "Trust in the Lord with all thine heart; and lean not unto thine own understanding..."
  },
  {
    reference: "Mosiah 2:17",
    text: "When ye are in the service of your fellow beings ye are only in the service of your God."
  },
  {
    reference: "2 Nephi 2:25",
    text: "Adam fell that men might be; and men are, that they might have joy."
  }
];

// Load name from localStorage (if any)
const savedName = localStorage.getItem("username");
if (savedName) {
  document.getElementById("scriptureDisplay").textContent = `Welcome back, ${savedName}! Click the button to get today's scripture.`;
}

// Generate random scripture
function generateScripture() {
  const index = Math.floor(Math.random() * scriptures.length);
  const scripture = scriptures[index];
  document.getElementById("scriptureDisplay").innerHTML = `
    <strong>${scripture.reference}</strong><br>${scripture.text}
  `;
}

// Save name from form
document.getElementById("nameForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("userName").value;
  localStorage.setItem("username", name);
  alert(`Name saved! Welcome, ${name}.`);
});

// Attach event listener
document.getElementById("generateBtn").addEventListener("click", generateScripture);
