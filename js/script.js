  // Quote Typer Jutsu
  const quotes = [
    "Those who cannot acknowledge themselves will eventually fail.",
    "You and I are flesh and blood. I’m always going to be there for you...",
    "Everyone lives within their own subjective interpretation."
  ];
  
  let quoteIndex = 0;
  const quoteContainer = document.querySelector('#quotes blockquote p');
  
  function typeQuote() {
    const quote = quotes[quoteIndex];
    let i = 0;
    quoteContainer.textContent = '';
    const interval = setInterval(() => {
      quoteContainer.textContent += quote.charAt(i);
      i++;
      if (i === quote.length) clearInterval(interval);
    }, 50);
  }
  
  if (quoteContainer) {
    typeQuote();
    setInterval(() => {
      quoteIndex = (quoteIndex + 1) % quotes.length;
      typeQuote();
    }, 6000);
  }

    // Kurzor s Sharinganem
    document.addEventListener('mousemove', (e) => {
        const sharingan = document.querySelector('.sharingan-cursor');
        sharingan.style.left = `${e.clientX - 20}px`;
        sharingan.style.top = `${e.clientY - 20}px`;
    });

    // Intersection Observer pro animace
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));