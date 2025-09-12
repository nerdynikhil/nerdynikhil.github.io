document.addEventListener('DOMContentLoaded', function() {
    // Word-by-word blur animation
    const words = document.querySelectorAll('.word');
    words.forEach((word, index) => {
        setTimeout(() => {
            word.classList.add('visible');
        }, index * 300 + 500); // 300ms delay between words, 500ms initial delay
    });

    // Fade in subtitle after title
    const subtitle = document.querySelector('.subtitle');
    const centerLogo = document.querySelector('.center-logo');
    const downloadBtn = document.querySelector('.download-btn');
    
    if (subtitle) {
        subtitle.style.opacity = '0';
        subtitle.style.transform = 'translateY(20px)';
        subtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            subtitle.style.opacity = '1';
            subtitle.style.transform = 'translateY(0)';
        }, 2000);
    }
    
    // Center logo appears
    if (centerLogo) {
        setTimeout(() => {
            centerLogo.classList.add('visible');
        }, 2400);
    }
    
    // Download button last
    if (downloadBtn) {
        downloadBtn.style.opacity = '0';
        downloadBtn.style.transform = 'translateY(20px)';
        downloadBtn.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            downloadBtn.style.opacity = '1';
            downloadBtn.style.transform = 'translateY(0)';
        }, 2800);
    }

    // App Store link handling
    const appStoreLink = document.getElementById('app-store-link');
    if (appStoreLink) {
        appStoreLink.addEventListener('click', function(e) {
            e.preventDefault();
            // For now, just show an alert since the app isn't published yet
            alert('Subscriptionly is coming soon to the App Store!');
            
            // Track click if analytics are available
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'App Store',
                    event_label: 'Coming Soon Button'
                });
            }
        });
    }
});

// Update with actual App Store URL when published
function setAppStoreURL(url) {
    const btn = document.getElementById('app-store-link');
    if (btn && url) {
        btn.href = url;
        btn.textContent = 'Download on App Store';
        btn.onclick = null;
    }
}