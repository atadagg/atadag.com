// Initialize the map centered on Istanbul
const map = L.map('map').setView([41.0082, 28.9784], 11);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Store markers in a layer group for easy filtering
const markersLayer = L.layerGroup().addTo(map);

// Custom icon for markers
const customIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Modal elements
const modal = document.getElementById('submit-modal');
const addButton = document.getElementById('add-business-btn');
const closeButton = document.getElementsByClassName('close')[0];
const form = document.getElementById('business-form');
let tempMarker = null;

// Function to add markers to the map
function addMarkers(centers) {
    markersLayer.clearLayers();
    
    centers.forEach(center => {
        const marker = L.marker(center.coordinates, { icon: customIcon })
            .bindPopup(`<b>${center.name}</b>`)
            .on('click', () => showBusinessInfo(center));
        
        markersLayer.addLayer(marker);
    });
}

// Function to show business information in the panel
function showBusinessInfo(center) {
    const infoDiv = document.getElementById('business-info');
    infoDiv.innerHTML = `
        <h3>${center.name}</h3>
        <p><strong>Category:</strong> ${center.category}</p>
        <p><strong>Address:</strong> ${center.address}</p>
        <p><strong>District:</strong> ${center.district}</p>
        <p><strong>Hours:</strong> ${center.hours}</p>
        <p><strong>Description:</strong> ${center.description}</p>
        ${center.website ? `<p><strong>Website:</strong> <a href="${center.website}" target="_blank">${center.website}</a></p>` : ''}
    `;
}

// Modal open/close handlers
addButton.onclick = () => {
    modal.style.display = 'block';
    form.reset();
    if (tempMarker) {
        map.removeLayer(tempMarker);
    }
};

closeButton.onclick = () => {
    modal.style.display = 'none';
    if (tempMarker) {
        map.removeLayer(tempMarker);
    }
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        if (tempMarker) {
            map.removeLayer(tempMarker);
        }
    }
};

// Map click handler for location picking
map.on('click', (e) => {
    if (modal.style.display === 'block') {
        const { lat, lng } = e.latlng;
        document.getElementById('coordinates').value = `${lat},${lng}`;
        
        if (tempMarker) {
            map.removeLayer(tempMarker);
        }
        
        tempMarker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
    }
});

// Form submission handler
form.onsubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const coordinates = formData.get('coordinates').split(',').map(Number);
    
    const newBusinessCenter = {
        id: businessCenters.length + 1,
        name: formData.get('name'),
        category: formData.get('category'),
        coordinates: coordinates,
        description: formData.get('description'),
        address: formData.get('address'),
        district: formData.get('district'),
        hours: formData.get('hours'),
        website: formData.get('website') || null,
        specialties: []
    };

    // In a real application, you would send this data to a server
    alert('Thank you for your submission! Your business center will be reviewed and added to the map after verification.');
    console.log('New business center submission:', newBusinessCenter);
    
    modal.style.display = 'none';
    if (tempMarker) {
        map.removeLayer(tempMarker);
    }
};

// Filter markers based on category
document.getElementById('category-filter').addEventListener('change', (e) => {
    const selectedCategory = e.target.value;
    const filteredCenters = selectedCategory === 'all' 
        ? businessCenters 
        : businessCenters.filter(center => center.category === selectedCategory);
    
    addMarkers(filteredCenters);
});

// Initialize map with all markers
addMarkers(businessCenters); 