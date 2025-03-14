// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
}

// Add active class to nav links based on scroll position
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a');

    function highlightNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Here you would typically send the form data to a backend
        // For now, we'll just simulate success
        const formElements = contactForm.elements;
        const formData = {};
        
        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i];
            if (element.type !== 'submit') {
                formData[element.id] = element.value;
            }
        }
        
        console.log('Form data:', formData);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}