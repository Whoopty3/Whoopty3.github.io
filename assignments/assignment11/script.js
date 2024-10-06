// Bird Class Definition
class Bird {
    constructor(name, size, lifespan, food, habitat, fact, image) {
        this.name = name;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.fact = fact;
        this.image = image;
    }

    // Method to return HTML section for a bird
    getSection() {
        return `
            <div class="bird-card" data-index="${birds.indexOf(this)}">
                <h3>${this.name}</h3>
                <img src="images/${this.image}" alt="${this.name}">
            </div>
        `;
    }

    // Method to return the expanded details in modal
    getExpandedSection() {
        return `
            <strong>Size:</strong> ${this.size}<br>
            <strong>Lifespan:</strong> ${this.lifespan}<br>
            <strong>Food:</strong> ${this.food}<br>
            <strong>Habitat:</strong> ${this.habitat}<br>
            <strong>Interesting Fact:</strong> ${this.fact}
        `;
    }
}

// Array of Bird Objects
const birds = [
    new Bird('Hummingbird', '2.5 inches', '3-5 years', 'Nectar (Sugar water)', 'Trees', "They're nicknamed 'Hummers'", 'hummingbird.jpeg'),
    new Bird('Blue Jay', '9-12 inches', '7 years', 'Insects, seeds', 'Forests', "Known for their intelligence and complex social behavior.", 'bluejay.jpg'),
    new Bird('Cardinal', '8-9 inches', '3-5 years', 'Seeds, insects', 'Woodlands', 'Males are known for their bright red color.', 'cardinal.jpg'),
    new Bird('Robin', '5-6 inches', '2 years', 'Insects, berries', 'Gardens, woods', 'Often considered a symbol of spring.', 'robin.jpg')
];

// Insert bird cards into the DOM
const birdContainer = document.getElementById('bird-container');
birds.forEach(bird => {
    birdContainer.innerHTML += bird.getSection();
});

// Modal and Interaction Logic
const birdModal = document.getElementById('birdModal');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalDetails = document.getElementById('modal-details');
const closeModal = document.getElementById('close-modal');

// Event delegation to handle clicks on bird cards
birdContainer.addEventListener('click', function (event) {
    const card = event.target.closest('.bird-card');
    if (card) {
        const index = card.getAttribute('data-index');
        const bird = birds[index];

        // Update modal content
        modalTitle.textContent = bird.name;
        modalImg.src = `images/${bird.image}`;
        modalDetails.innerHTML = bird.getExpandedSection();

        // Show modal
        birdModal.style.display = 'block';
    }
});

// Close modal functionality
closeModal.addEventListener('click', function () {
    birdModal.style.display = 'none';
});

// Responsive Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
    const navLinks = document.querySelectorAll('.navbar a:not(.icon)');
    navLinks.forEach(link => link.style.display = link.style.display === 'block' ? 'none' : 'block');
});
