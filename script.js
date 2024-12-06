// Data for showtimes based on the selected movie
const showtimesData = {
    1: ['10:00 AM', '2:00 PM', '6:00 PM'],
    2: ['11:00 AM', '3:00 PM', '7:00 PM'],
    3: ['12:00 PM', '4:00 PM', '8:00 PM']
};

// Movie details
const movieDetails = {
    1: 'Avengers: Endgame (Action, Sci-Fi)',
    2: 'Spider-Man: No Way Home (Action, Adventure)',
    3: 'Inception (Sci-Fi, Thriller)'
};

// Movie selection change event
document.getElementById('movie-select').addEventListener('change', function () {
    const movieId = parseInt(this.value);
    
    // Reset showtimes and booking details
    document.getElementById('showtimes').style.display = 'none';
    document.getElementById('ticket-selection').style.display = 'none';
    document.getElementById('booking-details').style.display = 'none';

    if (movieId !== 0) {
        populateShowtimes(movieId);
        document.getElementById('showtimes').style.display = 'block';
        document.getElementById('ticket-selection').style.display = 'block';
    }
});

// Populate showtimes based on selected movie
function populateShowtimes(movieId) {
    const showtimeSelect = document.getElementById('showtime-select');
    showtimeSelect.innerHTML = '<option value="0">--Select Showtime--</option>';

    const times = showtimesData[movieId];
    times.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        showtimeSelect.appendChild(option);
    });
}

// Ticket selection change event
document.getElementById('ticket-count').addEventListener('change', function () {
    if (this.value > 0) {
        updateBookingDetails();
    }
});

// Showtime change event
document.getElementById('showtime-select').addEventListener('change', function () {
    updateBookingDetails();
});

// Update the booking details
function updateBookingDetails() {
    const movieId = parseInt(document.getElementById('movie-select').value);
    const showtime = document.getElementById('showtime-select').value;
    const ticketCount = document.getElementById('ticket-count').value;

    if (movieId && showtime && ticketCount) {
        document.getElementById('movie-details').textContent = `Movie: ${movieDetails[movieId]}`;
        document.getElementById('showtime-details').textContent = `Showtime: ${showtime}`;
        document.getElementById('ticket-details').textContent = `Tickets: ${ticketCount}`;
        document.getElementById('booking-details').style.display = 'block';
    }
}

// Confirm booking
function confirmBooking() {
    alert('Booking Confirmed!');
    // Reset everything for a new booking
    document.getElementById('movie-select').value = 0;
    document.getElementById('showtime-select').innerHTML = '<option value="0">--Select Showtime--</option>';
    document.getElementById('ticket-count').value = 1;
    document.getElementById('showtimes').style.display = 'none';
    document.getElementById('ticket-selection').style.display = 'none';
    document.getElementById('booking-details').style.display = 'none';
}
