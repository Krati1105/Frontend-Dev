// Q5: Movie Ticket Booking (Objects + RegExp)
// Validate Name (alphabets only), Email (proper format), Seats (1 to 10 only).
// After validation, store in object { name, email, seats } and display ticket details.

function validateName(name) {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(name);
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateSeats(seats) {
    const num = parseInt(seats);
    return num >= 1 && num <= 10;
}

// Assuming form with ids: name, email, seats, and a div id="ticketDetails"
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const seats = document.getElementById('seats').value;

    if (!validateName(name)) {
        alert('Name must contain only alphabets.');
        return;
    }
    if (!validateEmail(email)) {
        alert('Invalid email format.');
        return;
    }
    if (!validateSeats(seats)) {
        alert('Seats must be between 1 and 10.');
        return;
    }

    // Store booking info
    const booking = { name, email, seats: parseInt(seats) };

    // Display ticket details
    document.getElementById('ticketDetails').innerHTML = `
        <h3>Ticket Details</h3>
        <p>Name: ${booking.name}</p>
        <p>Email: ${booking.email}</p>
        <p>Seats: ${booking.seats}</p>
    `;
});
