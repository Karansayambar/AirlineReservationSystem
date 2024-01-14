document.addEventListener("DOMContentLoaded", function () {
    const registerButton = document.querySelector(".register");
    const form = document.getElementById("form");
    const body = document.querySelector("body");

    registerButton.addEventListener("click", function () {
        form.style.display = "block";
        body.style.backgroundColor = "white";
    });

    const closeButton = document.getElementById("close");
    closeButton.addEventListener("click", function () {
        if (form.style.display === "block") {
            close();
        }
    });

    function close() {
        form.style.display = "none";
        body.style.backgroundColor = "";
    }

    const registrationForm = document.getElementById("registrationForm");
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        validateRegistration();
    });

    function validateRegistration() {
        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (username === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Username, Email, Password are required fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Please enter the correct password");
        } else {
            alert("Registration Successful");
            // registrationForm.submit();
        }
    }
});
