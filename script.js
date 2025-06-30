// Hero Slider
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[n].classList.add('active');
    dots[n].classList.add('active');
    currentSlide = n;
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}

// Auto advance slides every 5 seconds
setInterval(nextSlide, 5000);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

// Search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value.toLowerCase();
        // Add search logic here
        console.log('Searching for:', searchTerm);
    }
});

// Wishlist functionality
const wishlistButtons = document.querySelectorAll('.nav-item.wishlist');
wishlistButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Add wishlist toggle logic
        button.classList.toggle('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Card hover animations
document.querySelectorAll('.experience-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Book Now buttons
document.querySelectorAll('.book-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Add booking logic
        const experience = button.closest('.experience-card');
        const title = experience.querySelector('h3').textContent;
        console.log('Booking:', title);
        // Show booking modal or redirect to booking page
    });
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-right');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
window.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Initialize animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.experience-card, .wedding-card, .wellness-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
