// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load Instagram embeds
    if (window.instgrm) {
        window.instgrm.Embeds.process();
    }
});

// Helper function to load Instagram embed script
function loadInstagramEmbed() {
    if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
        const script = document.createElement('script');
        script.async = true;
        script.src = '//www.instagram.com/embed.js';
        script.onload = () => {
            const event = new Event('instagram-embed:loaded');
            document.dispatchEvent(event);
        };
        document.body.appendChild(script);
    }
}

// Load Instagram embed script when the page is fully loaded
if (document.readyState === 'complete') {
    loadInstagramEmbed();
} else {
    window.addEventListener('load', loadInstagramEmbed);
}
