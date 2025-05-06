// Sharingan hamburger menu
const menuToggle = document.querySelector('.sharingan-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', (e) => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (window.innerWidth > 768) return;
    
    if (!e.target.closest('.navbar') && navLinks?.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle?.classList.remove('active');
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            menuToggle?.classList.remove('active');
        }
    });
});