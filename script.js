var userData = [];

        // JavaScript to toggle between forms
        function showLoginForm() {
            document.getElementById("login-form").style.display = "block";
            document.getElementById("registration-form").style.display = "none";
            document.getElementById("forgot-password-form").style.display = "none";
            clearInputFields();
        }

        function showRegistrationForm() {
            document.getElementById("login-form").style.display = "none";
            document.getElementById("registration-form").style.display = "block";
            document.getElementById("forgot-password-form").style.display = "none";
            clearInputFields();
        }

        function showForgotPasswordForm() {
            document.getElementById("login-form").style.display = "none";
            document.getElementById("registration-form").style.display = "none";
            document.getElementById("forgot-password-form").style.display = "block";
            clearInputFields();
        }

        // JavaScript to check login details
        function checkLogin() {
            var loginEmail = document.getElementById("login-email").value;
            var loginPassword = document.getElementById("login-password").value;

            for (var i = 0; i < userData.length; i++) {
                if (userData[i].email === loginEmail && userData[i].password === loginPassword) {
                    window.location.href = "welcome.html"; // Redirect to the welcome page
                    return false; // Prevent form submission
                }
            }

            alert("Invalid login credentials. Please register or try again.");
            return false; // Prevent form submission
        }

        // JavaScript to register a new user
        function registerUser() {
            var registerEmail = document.getElementById("register-email").value;
            var registerPassword = document.getElementById("register-password").value;

            // Check if the email already exists
            for (var i = 0; i < userData.length; i++) {
                if (userData[i].email === registerEmail) {
                    alert("Email already registered. Please use another email.");
                    return false; // Prevent registration
                }
            }

            // If email is unique, add the user to the data
            userData.push({ email: registerEmail, password: registerPassword });
            alert("Registration successful!");
            showLoginForm(); // Switch to the login form after registration
            clearInputFields();
            return false; // Prevent form submission
        }

        // JavaScript to reset password
        function resetPassword() {
            var resetEmail = document.getElementById("reset-email").value;
            var newPassword = document.getElementById("new-password").value;

            for (var i = 0; i < userData.length; i++) {
                if (userData[i].email === resetEmail) {
                    userData[i].password = newPassword;
                    alert("Password reset successful!");
                    showLoginForm(); // Switch to the login form after resetting password
                    clearInputFields();
                    return false; // Prevent form submission
                }
            }

            alert("Email not found. Please enter a registered email.");
            return false; // Prevent form submission
        }

        // JavaScript to clear input fields
        function clearInputFields() {
            document.getElementById("login-email").value = "";
            document.getElementById("login-password").value = "";
            document.getElementById("register-email").value = "";
            document.getElementById("register-password").value = "";
            document.getElementById("reset-email").value = "";
            document.getElementById("new-password").value = "";
        }