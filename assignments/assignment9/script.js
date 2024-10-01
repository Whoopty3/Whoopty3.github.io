// Select DOM elements
const drawBtn = document.getElementById('drawBtn');
const errorElem = document.getElementById('error');
const canvas = document.getElementById('starCanvas');
const starsInput = document.getElementById('starsInput');

// Add event listener for drawing stars
drawBtn.addEventListener('click', () => {
  const starCount = parseInt(starsInput.value);
  
  if (isNaN(starCount) || starCount <= 0) {
    showError();
    clearCanvas();
  } else {
    hideError();
    drawStars(starCount);
  }
});

// Function to show the error message
const showError = () => {
  errorElem.classList.remove('hidden');
};

// Function to hide the error message
const hideError = () => {
  errorElem.classList.add('hidden');
};

// Function to clear the canvas
const clearCanvas = () => {
  canvas.innerHTML = '';
};

// Function to draw stars
const drawStars = (count) => {
  clearCanvas();

  for (let i = 1; i <= count; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 90}%`;
    star.style.top = `${Math.random() * 90}%`;

    // Add click event for each star
    star.addEventListener('click', () => {
      alert(`Star number ${i}`);
    });

    canvas.appendChild(star);
  }
};
