// script.js - Basic Interactivity with JavaScript

// Smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover Effects
const hoverElements = document.querySelectorAll('.hover-effect');
hoverElements.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('hovered');
    });
    element.addEventListener('mouseout', () => {
        element.classList.remove('hovered');
    });
});

// Form Handling with Honeypot Spam Protection
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const honeypot = document.querySelector('#honeypot');

    if (honeypot.value) {
        // If honeypot is filled, it's a bot
        return;
    }

    // Handle form submission here, for example using fetch
    const formData = new FormData(form);
    fetch(form.action, {
        method: 'POST',
        body: formData,
    }).then(response => {
        if (response.ok) {
            // success feedback
            console.log('Form submitted successfully!');
        }
    }).catch(error => {
        console.error('Error submitting form:', error);
    });
});

// Micro-interactions
const microInteractions = document.querySelectorAll('.micro-interaction');
microInteractions.forEach(interaction => {
    interaction.addEventListener('click', () => {
        interaction.classList.add('active');
        setTimeout(() => {
            interaction.classList.remove('active');
        }, 300);
    });
});