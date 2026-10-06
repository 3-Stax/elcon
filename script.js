// Initialize Lucide icons
lucide.createIcons();

// Set current year in footer
const currentYearEl = document.getElementById('current-year');
if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
}

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

// Auto advance hero carousel every 5 seconds if present
if (heroCarousel) {
    setInterval(nextHeroSlide, 5000);
}

// Lightbox Functions
function openLightbox(src, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    if (lightbox && lightboxImg) {
        lightboxImg.src = src;
        lightboxCaption.textContent = caption;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('flex');
        lightbox.classList.add('hidden');
    }
}

// Form Submit Handler
function handleFormSubmit(event) {
    event.preventDefault();
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('span');
    const successBox = document.getElementById('form-success');
    
    // 1. Enter Loading State
    submitBtn.disabled = true;
    const originalText = btnText.textContent;
    btnText.textContent = "Sending Request...";
    
    // Simulate secure transmission (Replace with actual fetch/EmailJS/Backend endpoint)
    setTimeout(() => {
        submitBtn.disabled = false;
        btnText.textContent = originalText;
        if (successBox) successBox.classList.remove('hidden');
        document.getElementById('quote-form').reset();
        
        setTimeout(() => {
            if (successBox) successBox.classList.add('hidden');
        }, 6000);
    }, 1200);
}

// Enhanced Mobile Menu Toggle with Smooth Height Animation & Icon Morphing
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

let isMenuOpen = false;

function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        // Expand menu smoothly by setting max-height to its scrollHeight
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
        // Swap icon to X
        mobileMenuBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6 text-gold"></i>';
    } else {
        // Collapse menu
        mobileMenu.style.maxHeight = "0px";
        // Swap icon back to menu
        mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
    }
    // Re-initialize Lucide icons for the newly injected element
    lucide.createIcons();
}

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Close mobile menu automatically when any link inside is clicked
    mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                toggleMobileMenu();
            }
        });
    });
}