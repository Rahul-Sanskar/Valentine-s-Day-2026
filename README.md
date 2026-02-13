# Valentine's Blossoming Flower 💖🌸

A beautifully designed interactive webpage to surprise your loved one! This project creates a romantic digital experience with the question: **"Will You Be My Valentine?"** featuring engaging animations and fun interactions.

## ✨ Features
- Heartwarming Valentine's Day invitation with animated responses
- Fun and interactive Yes/No button behavior
- Beautiful floral animation with glowing effects
- Surprise blossom animation when the answer is **Yes**
- Pleading animations if **No** is selected
- Fully responsive design

## 🖼️ Preview
| Screenshot | Description |
|------------|------------|
| ![Will You Be My Valentine?](ss1.png) | Initial prompt asking the user to be the valentine |
| ![If No is Clicked](ss2.png) | Fun interaction with pleading animations |
| ![If Yes is Clicked](ss3.png) | Romantic response with flower blooming |

## 🚀 How to Run Locally

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. That's it! No build process or dependencies required

## 🎨 Customization Guide

### Modify Messages
- **Main question:** Edit line 46 in `index.html`
  ```html
  <h1 class="headerText" id="wedate">Will You Be My Valentine, Babe? 🥺</h1>
  ```

- **Success message:** Edit line 138 in `main2.js`
  ```javascript
  wedate.innerText = "We are each other's valentine now. I love you cutie. ❤️😘";
  ```

- **Floral surprise text:** Edit line 8 in `index1.html`
  ```html
  <h1 style="color: rgb(162, 247, 219); margin-top: 3%;">A little floral surprise for you 🌸💐🌸 </h1>
  ```

### Change Background Image
Replace `image.jpeg` with your desired background image (keep the same filename)

### Customize Colors and Styles
- Edit `style1.css` for the flower animation page
- Edit `style2.css` for the main Valentine page

### Add Background Music (Optional)
1. Create a `resources` folder
2. Add `happy.mp3` and `sad.mp3` files
3. Update audio source paths in `index.html` (lines 83 and 103)
4. Remove `display: none;` from the audio elements

## 📦 Deployment

### Deploy to GitHub Pages
1. Create a new repository on GitHub named `valentines-project`
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Rahul-Sanskar/valentines-project.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select `main` branch as source
5. Your site will be live at `https://rahul-sanskar.github.io/valentines-project/`

### Deploy to Netlify (Easiest)
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your project folder to Netlify
3. Your site will be live instantly with a custom URL

### Deploy to Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in your project directory
4. Follow the prompts to deploy

## 🎯 How It Works

### Main Page (index.html)
- Displays the Valentine's question with two buttons: "Yes" and "No"
- Hover effects change the main GIF animation
- Clicking "No" shows a pleading modal with sad cat GIFs
- Clicking "Yes" (after 3+ "No" clicks) opens the flower page in a new tab

### Flower Page (index1.html)
- Beautiful CSS-only flower blooming animation
- Animated grass and leaves with glowing light effects
- Runs automatically on page load

### JavaScript Logic (main2.js)
- Tracks "No" button clicks (requires 3+ clicks before "Yes" works)
- Randomizes sad cat GIFs and pleading messages
- Changes main image based on button hover states
- Opens flower page in new tab when "Yes" is clicked

## 🔧 Project Credits
This project is a creative combination of:
- [CSS Blossoming Flowers at Magical Night](https://codepen.io/mdusmanansari/pen/BamepLe) by Md Usman Ansari
- [Will you be my valentine](https://codepen.io/Sleeping-Bot/pen/VwREBdg) by Sleeping-Bot

## 🆘 Troubleshooting

**GIFs not loading?**
- Check your internet connection (GIFs are hosted externally)
- Wait a few seconds for resources to load

**Flower page not opening?**
- Make sure you clicked "No" at least 3 times first
- Check browser console for errors (press F12)

**Page not updating after changes?**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Hard refresh the page

## 📝 License
Free to use and modify for personal projects.

---
💖 Made with love by [Rahul Sanskar](https://github.com/Rahul-Sanskar)
