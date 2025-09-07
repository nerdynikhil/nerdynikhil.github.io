// LingoDuel Landing Page JavaScript - ChatterCards Style

document.addEventListener('DOMContentLoaded', function() {
    // Animated title words
    const words = document.querySelectorAll('.word');
    words.forEach((word, index) => {
        setTimeout(() => {
            word.classList.add('visible');
        }, index * 200 + 500);
    });

    // Hero image animation
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        setTimeout(() => {
            heroImage.classList.add('visible');
        }, 1500);
    }

    // Recognition badges animation
    const badges = document.querySelectorAll('.badge');
    badges.forEach((badge, index) => {
        setTimeout(() => {
            badge.classList.add('visible');
        }, 2000 + index * 200);
    });

    // Download button animation
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        setTimeout(() => {
            downloadBtn.classList.add('visible');
        }, 2500);
    }

    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Special handling for features and tech logos
                if (entry.target.classList.contains('features-section')) {
                    const features = entry.target.querySelectorAll('.feature');
                    features.forEach((feature, index) => {
                        setTimeout(() => {
                            feature.classList.add('visible');
                        }, index * 100);
                    });
                }
                
                if (entry.target.classList.contains('tech-section')) {
                    const techLogos = entry.target.querySelectorAll('.tech-logo');
                    techLogos.forEach((logo, index) => {
                        setTimeout(() => {
                            logo.classList.add('visible');
                        }, index * 50);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    const sections = document.querySelectorAll('.video-section, .features-section, .tech-section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Video autoplay when visible
    const videoSection = document.querySelector('.video-section');
    const iframe = document.getElementById('youtube-video');
    
    if (videoSection && iframe) {
        const videoObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Video is visible, try to ensure it's playing
                    setTimeout(() => {
                        try {
                            iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                        } catch (e) {
                            console.log('Video autoplay attempt');
                        }
                    }, 500);
                }
            });
        }, { threshold: 0.5 });
        
        videoObserver.observe(videoSection);
    }

    // Simple smooth scroll for any anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Tech logo hover effects (add title tooltips)
    const techLogos = document.querySelectorAll('.tech-logo');
    techLogos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            const title = this.getAttribute('title');
            if (title) {
                console.log(`Technology: ${title}`);
            }
        });
    });
});