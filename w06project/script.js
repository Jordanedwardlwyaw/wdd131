document.addEventListener("DOMContentLoaded", () => {
  console.log("Kampala Travel Guide loaded");

  const form = document.getElementById("contactForm");
  const messageDisplay = document.getElementById("formMessage");

  // Object to manage form data and validation
  const formManager = {
    submissions: [],

    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email.toLowerCase());
    },

    loadFromStorage() {
      const stored = localStorage.getItem("submissions");
      if (stored) {
        this.submissions = JSON.parse(stored);
      }
    },

    saveToStorage() {
      localStorage.setItem("submissions", JSON.stringify(this.submissions));
    },

    addSubmission(data) {
      this.submissions.push(data);
      this.saveToStorage();
    },

    validateForm(data) {
      if (data.name.length < 2) {
        return "Name must be at least 2 characters.";
      }
      if (!this.validateEmail(data.email)) {
        return "Please enter a valid email address.";
      }
      if (data.message.length < 10) {
        return "Message must be at least 10 characters.";
      }
      return ""; // No errors
    },

    displayMessage(text, success = true) {
      messageDisplay.textContent = text;
      messageDisplay.style.color = success ? "green" : "red";
      messageDisplay.classList.remove("hidden");
    }
  };

  formManager.loadFromStorage();

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Gather form data
      const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim(),
      };

      // Validate data
      const error = formManager.validateForm(formData);
      if (error) {
        formManager.displayMessage(error, false);
        return;
      }

      // Add submission to array and save
      formManager.addSubmission(formData);

      // Show success message using template literal
      formManager.displayMessage(
        `Thank you, ${formData.name}! Your message has been received.`
      );

      form.reset();
    });
  }
});
