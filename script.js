// Configuration - Easy to edit!
const CONFIG = {
    // Progress Configuration
    progress: {
        percentage: 45, // Change this to update progress (0-100)
        status: "Yep it n here", // Change status text here
        showPercentage: true // Show percentage in progress text
    },
    
    // Newsletter Configuration
    newsletter: {
        title: "Latest Development Update!",
        postingDate: "July 29, 2025",
        text: `We're excited to share our latest progress on the series! Our team has been working tirelessly to bring you amazing content. We've completed major story developments and character designs. The animation process is moving along smoothly, and we can't wait to show you what we've been creating. 
        
        Stay tuned for more updates as we get closer to release. We appreciate all your patience and support as we work to make this series the best it can be!`,
        writerName: "The Creative Team"
    },
    
    // Social Media Links - Easy to edit!
    socialLinks: {
        youtube: "https://youtube.com/@yourchannel", // Replace with your YouTube channel
        twitter: "https://twitter.com/yourhandle",   // Replace with your Twitter
        discord: "https://discord.gg/yourserver"    // Replace with your Discord invite
    }
};

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateProgressBar();
    updateNewsletter();
    setupSocialLinks();
    setupMenuToggle();
    addInteractiveEffects();
});

// Update progress bar based on configuration
function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progressBall = document.getElementById('progressBall');
    const progressText = document.getElementById('progressText');
    const statusLabel = document.querySelector('.status-label');
    
    const percentage = Math.max(0, Math.min(100, CONFIG.progress.percentage));
    
    // Update status label
    statusLabel.textContent = `Status: "${CONFIG.progress.status}"`;
    
    // Update progress bar width
    progressBar.style.width = percentage + '%';
    
    // Update ball position (accounting for ball width)
    const ballPosition = (percentage / 100) * (progressBar.parentElement.offsetWidth - 34);
    progressBall.style.left = ballPosition + 'px';
    
    // Update progress text
    if (CONFIG.progress.showPercentage) {
        progressText.textContent = `${percentage}% Complete`;
    } else {
        progressText.textContent = 'In Progress...';
    }
    
    // Add completion effects
    if (percentage >= 100) {
        progressText.textContent = '🎉 Complete! 🎉';
    }
}

// Update newsletter content based on configuration
function updateNewsletter() {
    const titleElement = document.getElementById('newsletterTitle');
    const dateElement = document.getElementById('postingDate');
    const textElement = document.getElementById('newsletterText');
    const writerElement = document.getElementById('writerName');
    
    titleElement.textContent = CONFIG.newsletter.title;
    dateElement.textContent = CONFIG.newsletter.postingDate;
    textElement.textContent = CONFIG.newsletter.text;
    writerElement.textContent = CONFIG.newsletter.writerName;
}

// Setup social media links
function setupSocialLinks() {
    document.getElementById('youtubeLink').href = CONFIG.socialLinks.youtube;
    document.getElementById('twitterLink').href = CONFIG.socialLinks.twitter;
    document.getElementById('discordLink').href = CONFIG.socialLinks.discord;
    
    // Make links open in new tab
    document.querySelectorAll('.menu-link').forEach(link => {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
    });
}

// Setup expandable menu toggle
function setupMenuToggle() {
    const menuButton = document.getElementById('menuButton');
    const menuDropdown = document.getElementById('menuDropdown');
    
    menuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        menuButton.classList.toggle('active');
        menuDropdown.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuButton.contains(e.target) && !menuDropdown.contains(e.target)) {
            menuButton.classList.remove('active');
            menuDropdown.classList.remove('active');
        }
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', function() {
            menuButton.classList.remove('active');
            menuDropdown.classList.remove('active');
        });
    });
}

// Add interactive effects (minimal, no animations)
function addInteractiveEffects() {
    // Make progress ball clickable
    const progressBall = document.getElementById('progressBall');
    progressBall.addEventListener('click', function() {
        // Just a simple visual feedback without animation
        this.style.transform = 'translateY(-50%) scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'translateY(-50%)';
        }, 100);
    });
    
    // Add hover effect to newsletter (no animation)
    const newsletter = document.querySelector('.newsletter-container');
    newsletter.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.01)';
    });
    
    newsletter.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Smooth scrolling for any future navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility function to easily update progress from console or other scripts
function setProgress(percentage, status = null) {
    CONFIG.progress.percentage = percentage;
    if (status) {
        CONFIG.progress.status = status;
    }
    updateProgressBar();
}

// Utility function to update newsletter content
function updateNewsletterContent(title, date, text, writer) {
    CONFIG.newsletter.title = title;
    CONFIG.newsletter.postingDate = date;
    CONFIG.newsletter.text = text;
    CONFIG.newsletter.writerName = writer;
    updateNewsletter();
}

// Make functions available globally for easy access
window.setProgress = setProgress;
window.updateNewsletterContent = updateNewsletterContent;