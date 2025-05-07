document.addEventListener('DOMContentLoaded', () => {
    const quotes = document.querySelectorAll('.quote');
    const dotsContainer = document.querySelector('.quote-dots');
    let currentIndex = 0;

    // Create dots
    quotes.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('quote-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showQuote(index));
        dotsContainer.appendChild(dot);
    });

    // Navigation
    document.querySelector('.quote-next').addEventListener('click', () => {
        showQuote((currentIndex + 1) % quotes.length);
    });

    document.querySelector('.quote-prev').addEventListener('click', () => {
        showQuote((currentIndex - 1 + quotes.length) % quotes.length);
    });

    function showQuote(index) {
        quotes[currentIndex].classList.remove('active');
        dotsContainer.children[currentIndex].classList.remove('active');

        currentIndex = index;

        quotes[currentIndex].classList.add('active');
        dotsContainer.children[currentIndex].classList.add('active');
    }

    // Auto-advance
    setInterval(() => {
        showQuote((currentIndex + 1) % quotes.length);
    }, 8000);
});