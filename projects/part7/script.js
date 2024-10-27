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
        showPlayers(); // Correct function name
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

// Fetch player profiles from the data.json file
const getPlayers = async () => {
    const url = 'https://raw.githubusercontent.com/Whoopty3/Whoopty3.github.io/main/projects/part6/data.json'; // Make sure this is the correct path

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch player data');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching player data:', error);
    }
};

// Function to display all players
const showPlayers = async () => {
    const players = await getPlayers();

    // Log the fetched players to the console to verify
    console.log(players); 

    const profilesSection = document.getElementById("player-profiles");
    
    // Check if the element is found
    if (!profilesSection) {
        console.error("Element with ID 'player-profiles-section' not found.");
        return;
    }

    if (players) {
        players.forEach((player) => {
            profilesSection.append(getPlayerSection(player));
        });
    }
};

// Function to generate a section for each player
const getPlayerSection = (player) => {
    const section = document.createElement("section");

    const h3 = document.createElement("h3");
    h3.innerHTML = player.name;
    section.append(h3);

    const ppgP = document.createElement("p");
    ppgP.innerHTML = `Points Per Game (PPG): ${player.ppg}`;
    section.append(ppgP);

    const apgP = document.createElement("p");
    apgP.innerHTML = `Assists Per Game (APG): ${player.apg}`;
    section.append(apgP);

    const rpgP = document.createElement("p");
    rpgP.innerHTML = `Rebounds Per Game (RPG): ${player.rpg}`;
    section.append(rpgP);

    const fgP = document.createElement("p");
    fgP.innerHTML = `Field Goal Percentage: ${player.fg_percentage}`;
    section.append(fgP);

    const threePointP = document.createElement("p");
    threePointP.innerHTML = `3-Point Percentage: ${player.three_point_percentage}`;
    section.append(threePointP);

    return section;
};

// Show all players when the page loads
showPlayers();

// Contact Form Submission Logic (Add this part here)
document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    
    try {
        const response = await fetch('path/to/your/server/endpoint', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            document.getElementById("successMessage").style.display = "block";
            document.getElementById("errorMessage").style.display = "none";
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        document.getElementById("successMessage").style.display = "none";
        document.getElementById("errorMessage").style.display = "block";
    }
});
const sendEmail = async(json) => {
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: json
        });

        return response;
    } catch (error) {
        console.error(error);
        document.getElementById("result").innerHTML = "Sorry, your email couldn't be sent";
    }
};
document.getElementById("contact-form").onsubmit = async(e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);

    
    object.access_key = "10d455ab-caff-42c6-81d0-0af63b3109f5";  

    const json = JSON.stringify(object);
    
    const result = document.getElementById("result");
    result.innerHTML = "Sending...";

    const httpResult = await sendEmail(json);

    if (httpResult && httpResult.status == 200) {
        result.innerHTML = "Email successfully sent";
    } else {
        result.innerHTML = "Sorry, your email was not sent";
    }
};

