// Simple hover animation for profile image
document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.querySelector('.personal-image');
    
    if (profileImage) {
        profileImage.addEventListener('mouseenter', () => {
            profileImage.style.transform = 'scale(1.05)';
            profileImage.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
        });
        
        profileImage.addEventListener('mouseleave', () => {
            profileImage.style.transform = 'scale(1)';
            profileImage.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
        });
    }
});