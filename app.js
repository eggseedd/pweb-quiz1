document.addEventListener("DOMContentLoaded", function() {
    // Initialize the map and set its view to Balikpapan, Indonesia
    var map = L.map('map').setView([-1.2654, 116.8312], 13);
  
    // Add the OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    // Add a marker at Balikpapan
    L.marker([-1.2654, 116.8312]).addTo(map)
      .bindPopup('Balikpapan, Indonesia')
      .openPopup();
  });
