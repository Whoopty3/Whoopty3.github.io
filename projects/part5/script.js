// Function to show the selected section and hide the others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide each section
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';

    // If Player Profiles section is selected, load player data
    if (sectionId === 'player-profiles') {
        loadPlayerProfiles();
    }
}

// Automatically show the home section when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});

// Function to toggle the hamburger menu for mobile navigation
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
}

// Function to fetch and display player profiles dynamically
function loadPlayerProfiles() {
    fetch('data.json') // Adjust this path if your file is in a different location
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load data.json');
            }
            return response.json();
        })
        .then(players => {
            const tableBody = document.querySelector('#player-profiles tbody');
            tableBody.innerHTML = ''; // Clear any existing data

            // Loop through the players and create table rows for each player
            players.forEach(player => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${player.name}</td>
                    <td>${player.ppg}</td>
                    <td>${player.apg}</td>
                    <td>${player.rpg}</td>
                    <td>${player.fg_percentage}</td>
                    <td>${player.three_point_percentage}</td>
                `;
                tableBody.appendChild(row); // Append the row to the table body
            });
        })
        .catch(error => {
            console.error('Error fetching player profiles:', error);
            alert('Failed to load player profiles. Please check the data.json file.');
        });
}
