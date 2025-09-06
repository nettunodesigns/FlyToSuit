/*
 document.querySelectorAll(".animazione-fadeIn").forEach(element => {
   element.style.opacity = 1;
});
*/

function changeLanguage(countryCode, languageName) {
    const button = document.getElementById('languageButton');
    button.className = `language-button ${countryCode}`;
}

// Counter animation trigger on scroll
function initCounterAnimation() {
    const counter = document.querySelector('.counter');

    if (!counter) return;

    const observerOptions = {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully in view
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation classes when counter comes into view
                const counterNumber = entry.target.querySelector('.counter-number');
                const counterLabel = entry.target.querySelector('.counter-label');

                if (counterNumber) {
                    counterNumber.classList.add('animate');
                }
                if (counterLabel) {
                    counterLabel.classList.add('animate');
                }

                // Stop observing after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(counter);
}

// Initialize counter animation when DOM is loaded
document.addEventListener('DOMContentLoaded', initCounterAnimation);
