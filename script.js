// Function to scroll to the top of the page with smooth animation
function scrollToTop() {
  // Scroll to the top of the page with smooth animation
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Ensure the page scrolls to the top with smooth animation when it is loaded or refreshed
window.addEventListener('load', function() {
  // Give the page some time to load, then scroll to the top
  setTimeout(() => {
    scrollToTop();
  },10);  // Delay a little bit to ensure the page is fully loaded
});

// Add event listeners to navigation links if they exist
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

if (link1) {
  link1.addEventListener('click', () => {
    scrollToElement('.features'); // Scroll to the "Features" section
  });
}

if (link2) {
  link2.addEventListener('click', () => {
    scrollToElement('.pricing'); // Scroll to the "Pricing" section
  });
}

if (link3) {
  link3.addEventListener('click', () => {
    scrollToElement('footer'); // Scroll to the "About" section (footer)
  });
}

// Function to scroll to a specific element
function scrollToElement(elementSelector) {
  const element = document.querySelector(elementSelector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Handle login form submission and localStorage (if present)
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting

      // Get values from the form
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      // Check if name and email are provided
      if (name && email) {
          // Store the data in localStorage
          localStorage.setItem("userName", name);
          localStorage.setItem("userEmail", email);

          // Provide feedback to the user
          alert("Account created successfully!");

          // Optionally, you can redirect to a "success" page or home page
          window.location.href = "index.html"; // Redirect to homepage (optional)
      } else {
          alert("Please fill in all fields before submitting.");
      }
  });
}
setTimeout(() => {
  scrollToTop();
}, 10);  // Adding a small delay (100ms)
