// Countdown functionality
let count = 3;
const countdownElement = document.getElementById('countdown');
const challengesElement = document.getElementById('challenges');
const finallyElement = document.getElementById('finally');
const congratsElement = document.getElementById('congratulations');
const challengeCards = document.querySelectorAll('.challenge-card');
const techIconsContainer = document.getElementById('tech-icons-container');
const techIcons = ['💻',  '⚡',  '⏱️', '📏', '📐', '🔋', '💡', '🕹️'];

const countdownInterval = setInterval(() => {
    count--;
    countdownElement.textContent = count;

    if (count === 0) {
        clearInterval(countdownInterval);
        countdownElement.style.display = 'none';
        showChallenges();
    }
}, 800);

function showChallenges() {
    challengesElement.style.display = 'block';
    setTimeout(() => {
        challengesElement.style.opacity = '1';

        // Animate challenge cards one by one
        challengeCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });

        // After showing all challenges, transition to finally section
        setTimeout(() => {
            challengesElement.style.opacity = '0';
            setTimeout(() => {
                challengesElement.style.display = 'none';
                showFinally();
            }, 300);
        }, 2500);
    }, 50);
}

function showFinally() {
    finallyElement.style.opacity = '1';
    finallyElement.style.pointerEvents = 'auto';
    finallyElement.querySelector('h1').style.transform = 'scale(1)';

    setTimeout(() => {
        finallyElement.querySelector('h1').style.transform = 'scale(1.2)';
        setTimeout(() => {
            finallyElement.style.opacity = '0';
            finallyElement.style.pointerEvents = 'none';
            setTimeout(() => {
                finallyElement.style.display = 'none';
                showCongratulations();
            }, 1000);
        }, 1500);
    }, 1500);
}

function showCongratulations() {
    congratsElement.style.display = 'block';
    setTimeout(() => {
        congratsElement.style.opacity = '1';
        createConfetti();
        createTechIcons();

        // Continuous effects
        const effectsInterval = setInterval(() => {
            createConfetti();
            createTechIcons();
        }, 300);
    }, 50);
}

function createConfetti() {
    const colors = ['#f5af19', '#f12711', '#4a6bff', '#6d8eff', '#7ed6df', '#a6c1ff'];

    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 12 + 8 + 'px';
        confetti.style.height = Math.random() * 12 + 8 + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';

        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -20 + 'px';
        confetti.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`;

        document.body.appendChild(confetti);

        const animationDuration = Math.random() * 2 + 1;
        const animationDelay = Math.random() * 0.3;

        confetti.style.animation = `fall ${animationDuration}s linear ${animationDelay}s forwards`;

        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(${Math.random() * 360}deg);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);

        setTimeout(() => {
            confetti.remove();
            style.remove();
        }, (animationDuration + animationDelay) * 1000);
    }
}

function createTechIcons() {
    for (let i = 0; i < 5; i++) {
        const icon = document.createElement('div');
        icon.className = 'tech-icon';
        icon.textContent = techIcons[Math.floor(Math.random() * techIcons.length)];
        icon.style.left = Math.random() * 100 + 'vw';
        icon.style.top = -50 + 'px';
        icon.style.animationDuration = Math.random() * 5 + 5 + 's';
        icon.style.animationDelay = Math.random() * 2 + 's';

        techIconsContainer.appendChild(icon);

        setTimeout(() => {
            icon.remove();
        }, 10000);
    }
}