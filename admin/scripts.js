// admin/scripts.js

// Modal Management
const modal = document.getElementById('adminModal');
const openModal = () => {
    modal.style.display = 'block';
};

const closeModal = () => {
    modal.style.display = 'none';
};

// API Calls
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
    }
};

// Event Handlers
document.getElementById('openModalBtn').addEventListener('click', openModal);
modal.querySelector('.close').addEventListener('click', closeModal);

// Example of an API call
fetchData('https://api.example.com/admin/data').then(data => {
    console.log(data);
});