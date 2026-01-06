// Q8: Dynamic Object Updater
// Object user = { name: "John", email: "john@mail.com", age: 21 }
// Form to edit values, on submit update object, show updated details using DOM.

let user = { name: "John", email: "john@mail.com", age: 21 };

// Function to display user details
function displayUser() {
    document.getElementById('userDetails').innerHTML = `
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>Age: ${user.age}</p>
    `;
}

// Assuming HTML form with ids: nameInput, emailInput, ageInput, and a div id="userDetails"
document.getElementById('updateForm').addEventListener('submit', function(e) {
    e.preventDefault();
    user.name = document.getElementById('nameInput').value;
    user.email = document.getElementById('emailInput').value;
    user.age = parseInt(document.getElementById('ageInput').value);
    displayUser();
});

// Initial display
// displayUser(); // Uncomment if running in browser
