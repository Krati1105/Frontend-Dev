// Q7: Login Form Validation using RegExp
// Validate Username (at least 5 chars), Password (at least 8 chars, 1 upper, 1 lower, 1 number, 1 special).
// Show success or specific error messages.

function validateUsername(username) {
    return username.length >= 5;
}

function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

// Assuming form with ids: username, password, and a div id="message"
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let message = '';

    if (!validateUsername(username)) {
        message += 'Username must be at least 5 characters. ';
    }
    if (!validatePassword(password)) {
        message += 'Password must be at least 8 characters with 1 uppercase, 1 lowercase, 1 number, 1 special character. ';
    }

    if (message === '') {
        message = 'Login successful!';
    }

    document.getElementById('message').textContent = message;
});
