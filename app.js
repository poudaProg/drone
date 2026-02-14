// Menu burger functionality
const menuBurger = document.getElementById('menu-burger');
const menu = document.getElementById('menu');

// Toggle menu on burger click
menuBurger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close menu when clicking on a link
const menuLinks = menu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('nav')) {
        menu.classList.remove('active');
    }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
