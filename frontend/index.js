// Homepage.......
document.querySelectorAll('.btn-i').forEach(button => {
    button.addEventListener('click', () => {
        // Get the user's coin balance from the HTML element
        let userCoins = parseInt(document.getElementById('user-coins').textContent.trim());

        if (userCoins === 0) {
            // Show the popup
            document.getElementById('popup').classList.remove('hidden');
        } else {
            // Proceed with the investment process
            // Your investment logic here
        }

    });
});
// Event listener to close the popup when the close button is clicked
document.getElementById('popup-close').addEventListener('click', () => {
    document.getElementById('popup').classList.add('hidden');
});

// loading of bottom footer navigation

// Load the navbar from the external HTML file
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
    });

// loading of bottom footer navigation

// button active class
// Check if there's an active button saved in localStorage and set it on page load
window.onload = function () {
    const activeButton = localStorage.getItem('activeButton');
    if (activeButton) {
        const button = document.querySelector(`button[data-page="${activeButton}"]`);
        if (button) {
            button.classList.add('active'); // Set the active class
        }
    }
};

// Function to set the active button
function setActive(button) {
    // Get all buttons
    const buttons = document.querySelectorAll('.micron-icon');

    // Remove the active class from all buttons except the one clicked
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Add the active class to the clicked button
    button.classList.add('active');

    // Save the active button's page name to localStorage
    const pageName = button.getAttribute('data-page');
    localStorage.setItem('activeButton', pageName);
}



// end here.....


// // login...
// // Toggle Password Visibility
// function togglePasswordVisibility(fieldId, iconId) {
//     const passwordField = document.getElementById(fieldId);
//     const eyeIcon = document.getElementById(iconId);
//     if (passwordField.type === 'password') {
//         passwordField.type = 'text';
//         eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
//     } else {
//         passwordField.type = 'password';
//         eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
//     }
// }

// // Function to display the popup
// function showPopup(message, isSuccess) {
//     const popup = document.getElementById('popupMessage');
//     popup.textContent = message;
//     popup.classList.remove('success', 'error'); // Reset the classes

//     // Add appropriate class based on success or error
//     if (isSuccess) {
//         popup.classList.add('success');
//     } else {
//         popup.classList.add('error');
//     }

//     // Show the popup
//     popup.style.display = 'block';

//     // Hide the popup after 3 seconds
//     setTimeout(() => {
//         popup.style.display = 'none';
//     }, 3000);
// }

// // Validate Login Form
// function validateLogin(event) {
//     event.preventDefault(); // Prevent form submission
//     const phone = document.getElementById('phone').value;
//     const password = document.getElementById('password').value;
//     const agreeTerms = document.getElementById('agreeTerms').checked;
//     const loginButton = document.getElementById('btn-sg');
//     // const errorMsg = document.getElementById('errorMsg');

//     // Phone validation: check if it's numeric and between 6 and 15 digits
//     const phonePattern = /^[0-9]{6,15}$/;
//     if (!phonePattern.test(phone)) {
//         showPopup('Please enter a valid phone number.', false);
//         return;
//     }

//     // Password validation: ensure it's not empty
//     if (password.trim() === '') {
//         showPopup('Please enter your password.', false);
//         return;
//     }

//     if (!agreeTerms) {
//         showPopup('You must agree to the terms and privacy policy.', false);
//         return;
//     }
//     if (!agreeTerms) {
//         showPopup('You must agree to the terms and privacy policy.', false);
//         return;
//     }

//     // If all validations pass, show success popup
//     showPopup('Login successful!', true);

//     // Proceed with form submission or API call
// }
// // login ends....



// recharge ends....

// rechargeRecord

// Get all "Unconfirmed" buttons
const unconfirmedButtons = document.querySelectorAll('.unconfirmed-btn');

unconfirmedButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
        // Show the corresponding file upload container
        const fileUploadContainer = this.nextElementSibling;
        fileUploadContainer.style.display = 'block';
    });
});

// Get all submit buttons
const submitButtons = document.querySelectorAll('.submit-btn');

submitButtons.forEach((submitButton) => {
    submitButton.addEventListener('click', function () {
        const fileInput = this.previousElementSibling; // The file input element
        const messageContainer = this.parentElement.nextElementSibling; // Message container

        if (fileInput.files.length === 0) {
            // Show error message if no file is selected
            messageContainer.textContent = 'File must be added';
            messageContainer.className = 'message error';
            messageContainer.style.display = 'block';
        } else {
            // Show success message if file is uploaded
            messageContainer.textContent = 'Upload Successful';
            messageContainer.className = 'message success';
            messageContainer.style.display = 'block';
        }
    });
});

//    rechargeRecord
