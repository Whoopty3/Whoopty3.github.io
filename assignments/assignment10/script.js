// Image array with titles and descriptions
const images = [
    {
      src: 'images/birthday.jpg', // Party Hat
      title: 'Party Hat',
      description: 'This stick figure is celebrating with a party hat!'
    },
    {
      src: 'images/clown.jpg', // Bow Tie
      title: 'Bow Tie',
      description: 'This stick figure is wearing a bow tie, looking dapper!'
    },
    {
      src: 'images/rain.jpg', // Umbrella
      title: 'Umbrella',
      description: 'It looks like it\'s going to rain, don\'t forget your umbrella!'
    },
    {
      src: 'images/read.jpg', // Paper Holder
      title: 'Paper Holder',
      description: 'This stick figure is holding some important papers.'
    },
    {
      src: 'images/shovel.jpg', // Gardener
      title: 'Gardener',
      description: 'Time for gardening! This stick figure is holding a shovel.'
    },
    {
      src: 'images/work.jpg', // Laptop User
      title: 'Laptop User',
      description: 'This stick figure is working hard on their laptop.'
    }
  ];
  
  // Select elements to update
  const imageGrid = document.getElementById('imageGrid');
  const titleElement = document.getElementById('title');
  const descriptionElement = document.getElementById('description');
  
  // Load images dynamically using arrow functions
  const loadImages = () => {
    images.forEach((image) => {
      const imgElement = document.createElement('img');
      imgElement.src = image.src;
      imgElement.alt = image.title;
  
      // Add click event listener to each image to show title and description
      imgElement.addEventListener('click', () => {
        // Show title and description
        titleElement.innerText = image.title;
        descriptionElement.innerText = image.description;
  
        // Optionally, animate the description popping up (simple fade-in effect)
        descriptionElement.style.opacity = 0;
        setTimeout(() => {
          descriptionElement.style.opacity = 1;
        }, 50); // Delayed to ensure a smooth transition
      });
  
      // Append image to the grid
      imageGrid.appendChild(imgElement);
    });
  };
  
  // Call the loadImages function when the page loads
  window.onload = () => loadImages();
  