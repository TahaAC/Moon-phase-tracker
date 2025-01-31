// script.js

// Example function to fetch moon phase data
async function fetchMoonPhase(date) {
    try {
        // Replace with actual API endpoint and parameters
        const response = await fetch(`https://phasesmoon.com/api?date=${date}`);
        const data = await response.json();

        // Update UI with moon phase data
        document.getElementById('moon-phase-image').src = data.image_url; // Example field
        document.getElementById('moon-phase-description').textContent = data.description; // Example field
    } catch (error) {
        console.error("Error fetching moon phase data:", error);
    }
}

// Function to handle date selection from the calendar
document.querySelector('iframe').onload = function () {
    const iframeDocument = document.querySelector('iframe').contentDocument || document.querySelector('iframe').contentWindow.document;

    // Listen for date selection (you may need to customize this based on the calendar's behavior)
    iframeDocument.addEventListener('click', function (event) {
        const selectedDate = event.target.textContent; // Adjust based on calendar's DOM structure
        if (selectedDate) {
            fetchMoonPhase(selectedDate);
        }
    });
};

// Initial load
fetchMoonPhase(new Date().toISOString().split('T')[0]); // Fetch today's moon phase