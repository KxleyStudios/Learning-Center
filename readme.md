# GitHub Pages Series Website

A fun, animated website for tracking series progress with newsletter updates and social media links!

## 🎨 Features

- **Animated Progress Bar**: Shows series completion with a bouncing pink ball
- **Character Animation**: Bouncing Pibby character above the status bar
- **Expandable Social Menu**: Top-right corner button with YouTube, Twitter, and Discord links
- **Newsletter Section**: Fully customizable content area
- **White Background**: Clean, bright design
- **Responsive Design**: Works on all devices
- **Easy Configuration**: Simple JavaScript config for updates

## 📁 File Structure

```
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality and configuration
├── logo.png            # Your series logo (place in root directory)
├── pibby.png           # Character image (place in root directory)
├── newsletter.png      # Newsletter featured image (place in root directory)
└── README.md           # This file
```

## 🎯 Quick Setup

1. **Upload your images**:
   - `logo.png` - Your series logo
   - `pibby.png` - The bouncing character
   - `newsletter.png` - Newsletter featured image

2. **Edit the configuration** in `script.js`:
   ```javascript
   const CONFIG = {
       progress: {
           percentage: 45,              // 0-100
           status: "Yep it n here",    // Status text
           showPercentage: true        // Show percentage?
       },
       newsletter: {
           title: "Your Title Here",
           postingDate: "July 29, 2025",
           text: "Your newsletter content...",
           writerName: "Writer Name"
       },
       socialLinks: {
           youtube: "https://youtube.com/@yourchannel",
           twitter: "https://twitter.com/yourhandle", 
           discord: "https://discord.gg/yourserver"
       }
   };
   ```

## 🔧 Easy Updates

### Update Progress Bar
```javascript
// In browser console or script
setProgress(75, "Almost there!");
```

### Update Newsletter
```javascript
updateNewsletterContent(
    "New Title",
    "August 1, 2025", 
    "New content text...",
    "New Writer"
);
```

## 🎨 Color Palette Used

- **White**: Background
- **Light Blue**: `#87CEEB` (Header background)
- **Pink/Magenta**: `#FF69B4` (Progress ball, titles, YouTube button)
- **Light Green**: `#90EE90` (Progress bar, Twitter button)
- **Light Yellow**: `#FFFF99` (Date badge, Discord button)
- **Black**: `#333` (Borders and text)

## 🚀 GitHub Pages Deployment

1. Create a new repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Your site will be available at: `https://yourusername.github.io/repositoryname`

## ✨ Interactive Features

- **Expandable Menu**: Top-right hamburger button reveals social links
- **Bouncing Character**: Click Pibby for extra bounce!
- **Progress Ball**: Click for a fun bounce effect
- **Newsletter Hover**: Slight tilt and scale on hover
- **Smooth Animations**: CSS keyframe animations throughout
- **Social Links**: Direct links to YouTube, Twitter, and Discord

## 🎭 Customization Tips

- All animations use solid colors (no gradients as requested)
- Character sits above the status bar as shown in your sketch
- Progress bar uses pink ball with white outline
- Easy-to-edit configuration at the top of `script.js`
- Responsive design works on mobile and desktop

## 📱 Browser Support

Works on all modern browsers including:
- Chrome/Edge
- Firefox  
- Safari
- Mobile browsers

Enjoy your animated series tracking website! 🎉