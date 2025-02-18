document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const form = document.getElementById('registrationForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    container.addEventListener('mouseenter', () => {
        container.style.boxShadow = '0 0 20px rgba(0, 123, 255, 0.7)'; // Vibrant blue shadow
    });

    container.addEventListener('mouseleave', () => {
        container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission
        confirmationMessage.classList.remove('hidden');
    });
});