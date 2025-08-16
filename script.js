// Typing Effect
const textElement = document.getElementById('typed-text');
const phrases = ["I am Subhranil","Full stack DEV Here", "Welcome to my Portfolio."];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    textElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    textElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = 100;

  if (isDeleting) typingSpeed /= 2;

  if (!isDeleting && charIndex === currentPhrase.length) {
    typingSpeed = 1500; // pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 500; // pause before next
  }

  setTimeout(typeWriter, typingSpeed);
}

document.addEventListener('DOMContentLoaded', typeWriter);

// (Optional) Force instant jump instead of smooth scroll
/*
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1); 
    document.getElementById(targetId).scrollIntoView({ behavior: 'auto' });
  });
});
*/
