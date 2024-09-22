//Payne Whitlock
// Toggle Menu
const menuToggle = document.getElementById("menuToggle");
const menuItems = document.getElementById("menuItems");

menuToggle.addEventListener("click", function() {
    const isHidden = menuItems.style.display === "none" || menuItems.style.display === "";
    menuItems.style.display = isHidden ? "block" : "none";
    menuToggle.innerHTML = isHidden ? "&#9650;" : "&#9660;"; // Toggle arrow
});

// Exercise Switcher
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('exercise1').style.display = this.href.includes('exercise1') ? 'block' : 'none';
        document.getElementById('exercise2').style.display = this.href.includes('exercise2') ? 'block' : 'none';
    });
});

// Color Slider
const colorSlider = document.getElementById("colorSlider");
const colorMessage = document.getElementById("colorMessage");
const exerciseContainer = document.querySelector('.exercise-container');

colorSlider.addEventListener("input", function () {
    const redValue = colorSlider.value;
    exerciseContainer.style.backgroundColor = `rgb(${redValue}, 0, 0)`;

    if (redValue < 85) {
        colorMessage.textContent = "Light Red";
    } else if (redValue < 170) {
        colorMessage.textContent = "Medium Red";
    } else {
        colorMessage.textContent = "Dark Red";
    }
});

// Picture Chooser
function choosePicture(size) {
    const pictureContainer = document.getElementById("pictureContainer");
    let dimensions = '';

    if (size === 'small') {
        dimensions = '200';
    } else if (size === 'medium') {
        dimensions = '400';
    } else {
        dimensions = '600';
    }

    pictureContainer.innerHTML = `<img src="https://picsum.photos/${dimensions}" alt="${size} picture">`;
}
