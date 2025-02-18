function validateForm(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return false;
    }
    showNotificationBar();
    return false; // Prevent form submission to handle redirection manually
}

function showNotificationBar() {
    const notificationBar = document.getElementById('notificationBar');
    notificationBar.classList.remove('hidden');
    notificationBar.classList.add('show');
    setTimeout(() => {
        notificationBar.classList.remove('show');
        notificationBar.classList.add('hidden');
        redirectToAfterRegistration();
    }, 3000); // Show notification for 3 seconds before redirecting
}

function redirectToAfterRegistration() {
    window.location.href = 'After registration.html';
}