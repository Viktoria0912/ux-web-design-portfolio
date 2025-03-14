// Image animation for the About section
document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('.about-image-container');
    
    if (imageContainer) {
        const images = imageContainer.querySelectorAll('.personal-image');
        
        // Set initial state for images
        images.forEach((img, index) => {
            img.style.opacity = '0';
            img.style.transform = 'scale(0.7)';
            img.style.position = 'absolute';
            img.style.top = '0';
            img.style.left = '0';
            img.style.zIndex = images.length - index;
            img.style.transition = 'all 0.5s ease-in-out';
            img.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            img.style.borderRadius = '10px';
        });
        
        // Animation function
        const animateImages = () => {
            images.forEach((img, index) => {
                setTimeout(() => {
                    img.style.opacity = '1';
                    img.style.transform = `scale(1) translate(${index * 20}px, ${index * 20}px)`;
                }, 300 * index);
            });
        };
        
        // Run animation when about section is in view
        const aboutSection = document.getElementById('about');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateImages();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(aboutSection);
    }
});