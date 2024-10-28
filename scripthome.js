// Example JS for potential interactivity (optional)
// Placeholder for future interactivity (e.g., animations, button clicks, etc.)
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', function () {
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseout', function () {
            button.style.transform = 'scale(1)';
        });
    });
});
