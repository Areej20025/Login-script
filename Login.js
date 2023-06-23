// JavaScript source code
function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    datetimeElement.innerHTML = formattedDate + ' ' + formattedTime;
}
setInterval(updateDateTime, 1000);
// Get the login button and input elements
const loginButton = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Add click event listener to login button
loginButton.addEventListener('click', () => {
    // Check if username input contains letters only
    const lettersOnly = /^[a-zA-Z]+$/;
    if (!usernameInput.value) {
        alert('Please enter a username.');
    } else if (!lettersOnly.test(usernameInput.value)) {
        alert('Username should contain letters only.');
    }

    // Check if password input contains letters and numbers
    const lettersAndNumbers = /^[a-zA-Z0-9]+$/;
    if (!passwordInput.value) {
        alert('Please enter a password.');
    } else if (!lettersAndNumbers.test(passwordInput.value)) {
        alert('Password should contain letters and numbers.');
    }

    // If inputs are valid, redirect to second page and display the formatted date
    if (usernameInput.value && lettersOnly.test(usernameInput.value) && passwordInput.value && lettersAndNumbers.test(passwordInput.value)) {
        window.location.href = "second_page.html";

    }
});