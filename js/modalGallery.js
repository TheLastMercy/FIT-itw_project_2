// Modal Gallery
document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<div class="modal-content">
                                <img src="${img.src}" alt="${img.alt}" />
                            </div>`;
        document.body.appendChild(modal);
        modal.addEventListener('click', () => modal.remove());
    });
});

document.querySelectorAll('.ability-image img').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<div class="modal-content">
                                <img src="${img.src}" alt="${img.alt}" />
                            </div>`;
        document.body.appendChild(modal);
        modal.addEventListener('click', () => modal.remove());
    });
});

document.querySelectorAll('.bio-card img').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<div class="modal-content">
                                <img src="${img.src}" alt="${img.alt}" />
                            </div>`;
        document.body.appendChild(modal);
        modal.addEventListener('click', () => modal.remove());
    });
});

document.querySelector('.hero-image img').addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `<div class="modal-content">
                            <img src="${document.querySelector('.hero-image img').src}" alt="${document.querySelector('.hero-image img').alt}" />
                        </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', () => modal.remove());
});