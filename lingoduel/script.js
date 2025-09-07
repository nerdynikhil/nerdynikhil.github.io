// LingoDuel Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initScrollAnimations();
    initSmoothScrolling();
    initFloatingCTA();
    initNavbarScroll();
    initVideoAutoplay();
});

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);


    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(function(card, index) {
        card.classList.add('fade-in-up', `stagger-${(index % 6) + 1}`);
        observer.observe(card);
    });

    // Observe recognition cards
    const recognitionCards = document.querySelectorAll('.recognition-card');
    recognitionCards.forEach(function(card, index) {
        card.classList.add('fade-in-up', `stagger-${(index % 2) + 1}`);
        observer.observe(card);
    });
    
    // Observe tech category cards
    const techCategories = document.querySelectorAll('.tech-category');
    techCategories.forEach(function(category, index) {
        category.classList.add('fade-in-up', `stagger-${(index % 4) + 1}`);
        observer.observe(category);
    });

    // Observe section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(function(header) {
        header.classList.add('fade-in-up');
        observer.observe(header);
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}


// Floating CTA button functionality
function initFloatingCTA() {
    const floatingCTA = document.querySelector('.floating-cta');
    const heroSection = document.querySelector('.hero');
    const ctaSection = document.querySelector('.cta');
    
    function toggleFloatingCTA() {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const ctaTop = ctaSection.offsetTop;
        const scrollPosition = window.pageYOffset;
        
        // Show floating CTA when past hero but before main CTA
        if (scrollPosition > heroBottom && scrollPosition < ctaTop - 200) {
            floatingCTA.style.opacity = '1';
            floatingCTA.style.transform = 'translateY(0)';
        } else {
            floatingCTA.style.opacity = '0';
            floatingCTA.style.transform = 'translateY(20px)';
        }
    }
    
    window.addEventListener('scroll', throttle(toggleFloatingCTA, 100));
    
    // Initialize floating CTA styles
    floatingCTA.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    floatingCTA.style.opacity = '0';
    floatingCTA.style.transform = 'translateY(20px)';
}


// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.nav');
    
    function handleNavbarScroll() {
        const scrolled = window.pageYOffset > 50;
        
        if (scrolled) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
    
    window.addEventListener('scroll', throttle(handleNavbarScroll, 100));
}

// Utility function for throttling scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Show notification function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 24px;
        background: #3B82F6;
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}


// Add easter egg - Konami code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    konamiCode = konamiCode.slice(-konamiSequence.length);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    // Add fun animation to all feature cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'bounce 0.6s ease';
            setTimeout(() => {
                card.style.animation = '';
            }, 600);
        }, index * 100);
    });
    
    showNotification('🎉 LingoDuel secret unlocked! You\'re ready to be a language master!');
}

// Add CSS animation for bounce effect
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 20%, 60%, 100% { transform: translateY(0); }
        40% { transform: translateY(-20px); }
        80% { transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);

// Performance optimization - Lazy load images
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src; // Trigger load
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
initLazyLoading();

// Video autoplay functionality
function initVideoAutoplay() {
    const videoSection = document.querySelector('.video-showcase');
    const iframe = document.getElementById('youtube-video');
    
    if (!videoSection || !iframe) return;
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Video is visible, ensure it's playing
                const currentSrc = iframe.src;
                if (!currentSrc.includes('autoplay=1')) {
                    iframe.src = currentSrc.includes('?') 
                        ? currentSrc + '&autoplay=1&mute=1'
                        : currentSrc + '?autoplay=1&mute=1';
                }
                
                // Try to trigger play via postMessage (for browsers that support it)
                try {
                    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                } catch (e) {
                    console.log('Could not send play command to iframe');
                }
            }
        });
    }, {
        threshold: 0.5
    });
    
    observer.observe(videoSection);
    
    // Fallback: reload iframe with autoplay after a short delay
    setTimeout(function() {
        const originalSrc = iframe.src;
        iframe.src = '';
        setTimeout(function() {
            iframe.src = originalSrc;
        }, 100);
    }, 1000);
}

// Handle iframe load event
document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('youtube-video');
    if (iframe) {
        iframe.addEventListener('load', function() {
            console.log('YouTube iframe loaded');
            // Additional autoplay attempt
            setTimeout(function() {
                try {
                    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                } catch (e) {
                    console.log('Autoplay attempt failed');
                }
            }, 1000);
        });
    }
});