document.addEventListener("DOMContentLoaded", function () {
    // Select input fields
    const inputFields = document.querySelectorAll("#firstName, #lastName, #email");
    const form = document.getElementById("registrationForm");
    const notificationBar = document.getElementById("notification-bar");
    const notificationText = document.getElementById("notification-text");
    const closeButton = document.querySelector(".close");

    // Add focus and blur event listeners
    inputFields.forEach(input => {
        input.addEventListener("focus", function () {
            this.style.backgroundColor = "#d1ecf0"; // Light blue highlight
        });

        input.addEventListener("blur", function () {
            this.style.backgroundColor = ""; // Reset to default
        });
    });

    // Form Submission Handler
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default page reload on form submission

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const hobbies = [...document.querySelectorAll("input[name='hobbies']:checked")]
            .map(hobby => hobby.value)
            .join(", ");

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Error handling and validation
        if (!firstName || !lastName || !email) {
            showAlert("danger", "All fields are required!");
            return;
        }

        if (!emailRegex.test(email)) {
            showAlert("warning", "Invalid email format!");
            return;
        }

        if (!hobbies) {
            showAlert("warning", "Please select at least one hobby.");
            return;
        }

        // Display success notification bar with details
        notificationText.innerHTML = `
            <strong>Registration Successful!</strong><br>
            <strong>First Name:</strong> ${firstName} <br>
            <strong>Last Name:</strong> ${lastName} <br>
            <strong>Email:</strong> ${email} <br>
            <strong>Hobbies:</strong> ${hobbies}
        `;
        notificationBar.style.display = "block";

        // Hide notification after 5 seconds
        setTimeout(() => {
            notificationBar.style.display = "none";
        }, 5000);

        // Reset the form after successful submission
        form.reset();
    });

    // Close button event for notification bar
    closeButton.addEventListener("click", function () {
        notificationBar.style.display = "none";
    });

    function showAlert(type, message) {
        const alertBox = document.createElement("div");
        alertBox.classList.add("alert", `alert-${type}`);
        alertBox.innerHTML = `<strong>${type.toUpperCase()}</strong> - ${message} <button class="close">&times;</button>`;

        document.body.prepend(alertBox);

        // Add event listener for closing the alert
        alertBox.querySelector(".close").addEventListener("click", function () {
            alertBox.remove();
        });

        // Auto-remove the alert after 5 seconds
        setTimeout(() => {
            alertBox.remove();
        }, 5000);
    }
});
