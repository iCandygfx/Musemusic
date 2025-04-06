document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for nav height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Set data-glitch attribute on the "Book Your Session" button
    const bookSessionButton = document.querySelector('.cta-button');
    if (bookSessionButton) {
        bookSessionButton.setAttribute('data-glitch', 'Book Your Session');
    }
});