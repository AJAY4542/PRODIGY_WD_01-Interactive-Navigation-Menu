// JavaScript to handle scroll-based navbar background change
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');  // Add scrolled class when scrolling past 50px
    } else {
        navbar.classList.remove('scrolled');  // Remove scrolled class when at top
    }
});

// Optional: Hover effects are handled in CSS, so no JS is needed for hover
