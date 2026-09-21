// Initialize Lucide icons
lucide.createIcons();

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Hero Carousel Logic
let currentHeroIndex = 0;
const heroCarousel = document.getElementById('hero-carousel');
const totalHeroSlides = heroCarousel ? heroCarousel.children.length : 3;

function updateHeroCarousel() {
    if (heroCarousel) {
        heroCarousel.style.transform = `translateX(-${currentHeroIndex * 100}%)`;
    }
}

function nextHeroSlide() {
    currentHeroIndex = (currentHeroIndex + 1) % totalHeroSlides;
    updateHeroCarousel();
}

function prevHeroSlide() {
    currentHeroIndex = (currentHeroIndex - 1 + totalHeroSlides) % totalHeroSlides;
    updateHeroCarousel();
}

// Auto advance hero carousel every 5 seconds
setInterval(nextHeroSlide, 5000);

// Lightbox Functions
function openLightbox(src, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('flex');
    lightbox.classList.add('hidden');
}

// Form Submit Handler
function handleFormSubmit(event) {
    event.preventDefault();
    const successBox = document.getElementById('form-success');
    successBox.classList.remove('hidden');
    document.getElementById('quote-form').reset();
    setTimeout(() => {
        successBox.classList.add('hidden');
    }, 6000);
}