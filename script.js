/*
 document.querySelectorAll(".animazione-fadeIn").forEach(element => {
   element.style.opacity = 1;
});
*/

function changeLanguage(countryCode, languageName) {
    const button = document.getElementById('languageButton');
    button.className = `language-button ${countryCode}`;

    // Close dropdown after language selection
    const selector = document.querySelector('.language-selector');
    selector.classList.remove('dropdown-open');
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

// Language dropdown functionality
function initLanguageDropdown() {
    const languageButton = document.getElementById('languageButton');
    const languageSelector = document.querySelector('.language-selector');

    if (!languageButton || !languageSelector) return;

    // Toggle dropdown on button click
    languageButton.addEventListener('click', function(e) {
        e.stopPropagation();
        languageSelector.classList.toggle('dropdown-open');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!languageSelector.contains(e.target)) {
            languageSelector.classList.remove('dropdown-open');
        }
    });

    // Prevent dropdown from closing when clicking inside it
    const dropdown = languageSelector.querySelector('.language-dropdown');
    if (dropdown) {
        dropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// Initialize counter animation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCounterAnimation();
    initLanguageDropdown();
});
