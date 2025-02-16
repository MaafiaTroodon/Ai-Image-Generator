// JavaScript Code for Regular Expression Validation

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    const firstNameRegex = /^[A-Za-z]+(\s[A-Za-z]+)?$/;
    const lastNameRegex = /^[A-Za-z]+(['-][A-Za-z]+)*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{12,}$/;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        let valid = true;

        if (!firstNameRegex.test(firstNameInput.value)) {
            alert("Invalid first name. Only letters and an optional middle name are allowed.");
            valid = false;
        }

        if (!lastNameRegex.test(lastNameInput.value)) {
            alert("Invalid last name. Only letters, apostrophes, and hyphens are allowed.");
            valid = false;
        }

        if (!emailRegex.test(emailInput.value)) {
            alert("Invalid email format.");
            valid = false;
        }

        if (!passwordRegex.test(passwordInput.value)) {
            alert("Invalid password. It must be at least 12 characters long and include uppercase, lowercase, a number, and a special character.");
            valid = false;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            alert("Passwords do not match.");
            valid = false;
        }

        if (valid) {
            alert("Registration successful!");
        }
    });
});
