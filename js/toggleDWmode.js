// Dark Mode Toggle
const darkToggle = document.createElement('button');
darkToggle.innerText = '☾';
darkToggle.className = 'dark-toggle';
document.body.appendChild(darkToggle);

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});