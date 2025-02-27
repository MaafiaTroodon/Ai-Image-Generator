/**
 * registration.js
 *
 * Handles registration form logic:
 *  - Validates email, username, password inputs
 *  - Displays error messages and success/failure feedback
 *  - If valid, inserts new user into our in-memory Map
 *
 * Demonstrates arrow functions, destructuring, try/catch error handling, etc.
 */


console.log("Users:", userCredentials);

const registrationForm = document.getElementById("registrationForm");

const isEmailValid = (email) => {
  // Basic email check w/ TLD of 2-8 characters
  const emailRegex = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,8}$/;
  return emailRegex.test(email);
};

const isUsernameValid = (username) => {
  // Must not begin with digit, no spaces or special chars:
  //  ^[A-Za-z][A-Za-z0-9_]*$  (for example)
  // This example disallows special characters except underscore.
  const usernameRegex = /^[A-Za-z][A-Za-z0-9_]*$/;
  return usernameRegex.test(username);
};

const isPasswordValid = (password) => {
  // At least ONE digit, ONE uppercase, ONE lowercase, ONE special char, 12+ length
  // Example regex:
  const passRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{12,}$/;
  return passRegex.test(password);
};

// Helper arrow function to display an error
const displayError = (inputId, errorId, message) => {
  const inputEl = document.getElementById(inputId);
  const errorEl = document.getElementById(errorId);
  errorEl.textContent = message;
  if (message) {
    inputEl.classList.add("error-border");
  } else {
    inputEl.classList.remove("error-border");
  }
};

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Destructure the form fields
  const {
    regEmail: { value: email },
    regUsername: { value: username },
    regPassword: { value: password },
    regConfirmPassword: { value: confirmPassword },
  } = registrationForm.elements;

  // Reset any old errors
  displayError("regEmail", "emailError", "");
  displayError("regUsername", "usernameError", "");
  displayError("regPassword", "passwordError", "");
  displayError("regConfirmPassword", "confirmPasswordError", "");

  let formIsValid = true;

  try {
    // Validate email
    if (!isEmailValid(email)) {
      displayError("regEmail", "emailError", "Invalid email format.");
      formIsValid = false;
    } else if (registeredEmails.has(email)) {
      displayError("regEmail", "emailError", "Email is already registered.");
      formIsValid = false;
    }

    // Validate username
    if (!isUsernameValid(username)) {
      displayError("regUsername", "usernameError", 
        "Username must start with a letter and contain no spaces/special chars.");
      formIsValid = false;
    } else if (userCredentials.has(username)) {
      displayError("regUsername", "usernameError", "Username is already taken.");
      formIsValid = false;
    }

    // Validate password
    if (!isPasswordValid(password)) {
      displayError("regPassword", "passwordError", 
        "Password must be ≥12 chars & include uppercase, lowercase, digit, special char.");
      formIsValid = false;
    }

    // Confirm Password
    if (password !== confirmPassword) {
      displayError("regConfirmPassword", "confirmPasswordError", "Passwords do not match.");
      formIsValid = false;
    }

    if (formIsValid) {
        // Load existing users from localStorage
        let users = JSON.parse(localStorage.getItem("userCredentials")) || {};
    
        // Add new user to the stored object
        users[username] = password;
    
        // Save back to localStorage
        localStorage.setItem("userCredentials", JSON.stringify(users));
    
        // Provide success message
        document.getElementById("registrationFeedback").textContent = "Registration successful!";
        document.getElementById("registrationFeedback").classList.add("success-message");
    
        console.log("New user added:", username);
    
        // Clear fields
        registrationForm.reset();
    }
    
  } catch (error) {
    // In case of unexpected errors
    console.error("An error occurred during registration:", error);
    alert("Oops! Something went wrong. Please try again.");
  }
});
