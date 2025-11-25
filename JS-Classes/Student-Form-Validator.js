// Q2: Student Form Validator (Forms + RegExp)
// Validate Name (alphabets only), Email (valid format), Phone (10 digits), Password (1 uppercase, 1 number, 1 special char)
// Show red border + error message if invalid, green if valid.
// Assuming HTML form with ids: name, email, phone, password, and error spans with ids: nameError, emailError, phoneError, passwordError

// Validation functions
function validateName(name) {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(name);
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePhone(phone) {
    const regex = /^\d{10}$/;
    return regex.test(phone);
}

function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

// Function to show validation result
function showValidation(input, isValid, errorElement, message) {
    if (isValid) {
        input.style.borderColor = 'green';
        errorElement.textContent = '';
    } else {
        input.style.borderColor = 'red';
        errorElement.textContent = message;
    }
}

// Event listeners (assuming form elements exist)
document.getElementById('name').addEventListener('blur', function() {
    const isValid = validateName(this.value);
    showValidation(this, isValid, document.getElementById('nameError'), 'Name must contain only alphabets.');
});

document.getElementById('email').addEventListener('blur', function() {
    const isValid = validateEmail(this.value);
    showValidation(this, isValid, document.getElementById('emailError'), 'Invalid email format.');
});

document.getElementById('phone').addEventListener('blur', function() {
    const isValid = validatePhone(this.value);
    showValidation(this, isValid, document.getElementById('phoneError'), 'Phone must be exactly 10 digits.');
});

document.getElementById('password').addEventListener('blur', function() {
    const isValid = validatePassword(this.value);
    showValidation(this, isValid, document.getElementById('passwordError'), 'Password must have at least 8 characters, 1 uppercase, 1 number, 1 special character.');
});
