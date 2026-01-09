/*
=================================================================
script.js
Main JavaScript for Gautham Ravisankar's Portfolio
=================================================================
*/

document.addEventListener('DOMContentLoaded', () => {

    let typingFinished = false;

    // 1. Header Scroll Effect
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 2. Typing Animation for Hero Section
    const heroAnimatedText = document.getElementById('hero-animated-text');
    if (heroAnimatedText) {
        const textToType = "Hi! I’m Gautham Ravisankar. I am a Design Engineering student at Imperial College London.";
        let index = 0;

        function type() {
            if (index < textToType.length) {
                heroAnimatedText.innerHTML = textToType.substring(0, index + 1) + '<span class="cursor"></span>';
                index++;
                setTimeout(type, 40);
            } else {
                heroAnimatedText.querySelector('.cursor').style.animation = 'blink 1s infinite';
                typingFinished = true; // Set flag when typing is done

                // After a shorter delay, make the arrow visible
                setTimeout(() => {
                    const arrow = document.querySelector('.hero-arrow');
                    if (arrow) {
                        arrow.classList.add('visible');
                    }
                }, 100); // Reduced delay
            }
        }
        type();
    }

    // 3. Fade-in on Scroll Animation
    const fadeElements = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    fadeElements.forEach(el => observer.observe(el));

    // 4. StreetPulse Project Scroll Animation
    // ... (rest of the script remains the same)

    // 5. UpRisers Project Flipper
    // ...

    // 6. Experience Timeline Expander
    // ...

    // 7. NEW: Hero Arrow fade on scroll
    window.addEventListener('scroll', () => {
        const arrow = document.querySelector('.hero-arrow');
        if (!arrow) return;

        // Fade out arrow quickly on any scroll
        if (window.scrollY > 50) {
            arrow.classList.remove('visible');
        } 
        // Only fade it back in if scrolled to top AND typing is done
        else {
            if (typingFinished) {
                arrow.classList.add('visible');
            }
        }
    });

});
