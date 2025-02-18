function validateForm(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return false;
    }
    showAfterRegistrationButton(event);
    return true;
}

function showAfterRegistrationButton(event) {
    event.preventDefault();
    document.getElementById('confirmationMessage').classList.remove('hidden');
    document.getElementById('afterRegistrationButton').classList.remove('hidden');
    showNotificationBar();
}

function redirectToAfterRegistration() {
    window.location.href = 'After registration.html';
}

function showNotificationBar() {
    const notificationBar = document.getElementById('notificationBar');
    notificationBar.classList.remove('hidden');
    notificationBar.classList.add('show');
    setTimeout(() => {
        notificationBar.classList.remove('show');
        notificationBar.classList.add('hidden');
    }, 3000); // Hide after 3 seconds
}