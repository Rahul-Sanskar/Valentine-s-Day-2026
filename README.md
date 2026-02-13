# Valentine's Day 2026 💖🌸

An interactive Valentine's Day webpage with beautiful animations and fun interactions to surprise your loved one!

## ✨ Features

- Interactive Yes/No button game with animations
- "No" button runs away from cursor after 5 clicks
- Beautiful flower blooming animation with background music
- Smooth transitions between pages in the same tab
- Fully responsive design
- Background music support

## 🎮 How It Works

1. **Initial Page**: Shows "Will You Be My Valentine?" with Yes/No buttons
2. **Click "No"**: Shows sad cat GIFs with pleading messages (up to 5 times)
3. **5th "No" Click**: Modal opens with "Try to catch the No button!" - the button runs away from your cursor
4. **Click "Yes"**: Success message appears with a SURPRISE button
5. **Click SURPRISE**: Beautiful flower animation page opens with background music

## 🚀 Quick Start

Simply open `index.html` in any modern web browser. No installation or build process required!

## 🎨 Customization

### Change Messages
- **Main question**: Edit line 148 in `index.html`
- **Success message**: Edit line 158 in `main2.js`
- **Flower page text**: Edit line 163 in `index.html`

### Change Background Image
Replace `image.jpg` with your own image (keep the same filename)

### Add Background Music
Place your music file in the root folder with the name:
`Lost Sky, Sara Skinner - Dreams pt. II (feat. Sara Skinner) [NCS Release]-[AudioTrimmer.com].mp3`

Or update the filename in `index.html` line 161

### Customize Colors
- Edit `style2.css` for the main Valentine page colors
- Edit `style1.css` for the flower animation page colors

## 📁 Project Structure

```
├── index.html          # Main page (includes both Valentine question and flower animation)
├── index1.html         # Standalone flower page (optional)
├── main2.js            # Main page JavaScript (button logic, chase behavior)
├── main1.js            # Flower animation JavaScript
├── style2.css          # Main page styles
├── style1.css          # Flower animation styles
├── image.jpg           # Background image for flower page
├── ss1.png, ss2.png, ss3.png  # Screenshots
└── netlify.toml        # Netlify deployment config
```

## 🎯 Key Features Explained

### Chase Mechanic
After 5 "No" clicks, the button moves away from your cursor when you get within 150px, creating a fun chase game inside the modal.

### Single Tab Experience
Everything happens in one tab - no annoying popups or new windows. Smooth transitions between the Valentine question and flower animation.

### Music Integration
Background music plays automatically when the flower animation appears, with proper cleanup of previous audio.

## 🔧 Technical Details

- Pure HTML, CSS, and JavaScript (no frameworks)
- CSS animations for flower blooming effect
- Mouse tracking for button chase behavior
- Responsive design works on desktop and mobile
- External GIF resources from GitHub

## 📄 License

Free to use and modify for personal projects only. Commercial usage  will be liable for providing compensation to the authorr or else the content will be markeed as copyright and will be taken down. 

---
💖 Made with love by [Rahul Sanskar](https://github.com/Rahul-Sanskar)
