/**
 * login.js
 *
 * Handles login form:
 *  - Validates if username/password exist in userCredentials Map
 *  - Displays error messages and success feedback
 */

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Destructure again
  const {
    loginUsername: { value: username },
    loginPassword: { value: password },
  } = loginForm.elements;

  // Clear old error messages
  document.getElementById("loginUserError").textContent = "";
  document.getElementById("loginPassError").textContent = "";

  try {
    const feedbackEl = document.getElementById("loginFeedback");
    feedbackEl.textContent = "";

    // Check if username exists
    if (!userCredentials.has(username)) {
      document.getElementById("loginUserError").textContent = "Username not found.";
      return;
    }

    // Check password
    const storedPass = userCredentials.get(username);
    if (storedPass !== password) {
      document.getElementById("loginPassError").textContent = "Incorrect password.";
      return;
    }

     // If login is successful
     document.getElementById("loginFeedback").textContent = "Login successful!";
     document.getElementById("loginFeedback").classList.add("success-message");
 
     console.log("User logged in:", username);

    // Optionally clear form or redirect
    loginForm.reset();
  } catch (error) {
    console.error("An error occurred during login:", error);
    alert("Something went wrong while logging in. Please try again.");
  }
});
