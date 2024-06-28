document.addEventListener("DOMContentLoaded", function() {
    const typedText = document.getElementById("typed-text");
    const words = ["Developer", "Engineer", "Coder"];
    let wordIndex = 0;
    let charIndex = 0;
    let typingSpeed = 150;
    let deletingSpeed = 100;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typedText.textContent = currentWord.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        } else {
            typedText.textContent = currentWord.substring(0, charIndex++);
            if (charIndex > currentWord.length) {
                isDeleting = true;
            }
        }
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }

    type();
});