async function loadIceCreamData() {
    const response = await fetch('https://portiaportia.github.io/json/ice-creams.json');
    const iceCreams = await response.json();
    displayIceCreams(iceCreams);
  }
  
  function displayIceCreams(iceCreams) {
    const gallery = document.getElementById('ice-cream-gallery');
    iceCreams.forEach(iceCream => {
      const item = document.createElement('div');
      item.classList.add('ice-cream-item');
      
      // Add image
      const img = document.createElement('img');
      img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;
      img.alt = iceCream.name;
      item.appendChild(img);
      
      // Add overlay
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      overlay.textContent = iceCream.name;
      item.appendChild(overlay);
      
      gallery.appendChild(item);
    });
  }
  
  loadIceCreamData();
  