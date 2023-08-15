const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}

document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.querySelector("#login form");
  
  loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const username = document.querySelector("#username").value;
      const password = document.querySelector("#password").value;
      
      // Simulate a simple login process (Replace with actual authentication logic)
      if (username === "admin" && password === "password") {
          alert("Login successful!");
          // Redirect to a different page or perform other actions
      } else {
          alert("Invalid credentials. Please try again.");
      }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const proceedButton = document.querySelector("#subtotal button");
  const successMessage = document.querySelector("#success-message");
  const continueButton = document.querySelector("#continue-button");

  proceedButton.addEventListener("click", function() {
      // Simulate a successful payment and show the success message
      successMessage.style.display = "block";
  });

  continueButton.addEventListener("click", function() {
      // Redirect to index.html when Continue button is clicked
      window.location.href = "index.html";
  });
});


