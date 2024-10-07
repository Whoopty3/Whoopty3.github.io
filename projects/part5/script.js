// Function to show the selected section and hide the others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide each section
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
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
