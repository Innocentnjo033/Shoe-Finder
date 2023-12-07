
const imageLinks = document.querySelectorAll('.image-link');

imageLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const popupText = link.querySelector('.popup-text');
        popupText.style.visibility = 'visible';
        popupText.style.opacity = '1';
    });

    link.addEventListener('mouseleave', () => {
        const popupText = link.querySelector('.popup-text');
        popupText.style.visibility = 'hidden';
        popupText.style.opacity = '0';
    });
});

