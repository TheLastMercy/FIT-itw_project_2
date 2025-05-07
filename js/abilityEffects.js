// Vytvoř nový soubor js/ability-effects.js
document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.ability-trigger');
    
    const effects = {
        sharingan() {
            const effect = document.createElement('div');
            effect.className = 'effect-overlay sharingan-effect';
            effect.innerHTML = '<img src="assets/itachi-mangekyou.png" alt="Sharingan">';
            document.body.appendChild(effect);
            setTimeout(() => effect.remove(), 2000);
        },
        
        tsukuyomi() {
            const effect = document.createElement('div');
            effect.className = 'tsukuyomi-effect';
            document.body.appendChild(effect);
            setTimeout(() => effect.remove(), 2500);
        },
        
        amaterasu() {
            const effect = document.createElement('div');
            effect.className = 'effect-overlay amaterasu-effect';
            document.body.appendChild(effect);
            setTimeout(() => effect.remove(), 3000);
        },
        
        susanoo() {
            const effect = document.createElement('div');
            effect.className = 'effect-overlay susanoo-effect';

            const viewportHeight = window.innerHeight;
            effect.style.top = `${viewportHeight * 0.2}px`;
            effect.style.backgroundSize = 'contain';

            document.body.appendChild(effect);
            setTimeout(() => effect.remove(), 2500);
        }
    };

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const effectType = this.dataset.effect;
            if(effects[effectType]) effects[effectType]();
        });
    });
});