# Muhammad Fikri Akbar - Professional Portfolio

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![Responsive](https://img.shields.io/badge/Responsive-Yes-blue)
![License](https://img.shields.io/badge/License-MIT-green)

A professional, enterprise-grade portfolio website for Muhammad Fikri Akbar - Senior .NET Developer with 9+ years of experience in Banking Systems, System Integration, and DevOps.

## ?? Live Demo

Visit the live portfolio: [https://fikrisoftware.github.io](https://fikrisoftware.github.io)

## ? Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with enterprise-grade aesthetics
- **Smooth Animations** - Subtle animations and transitions for better user experience
- **Performance Optimized** - Fast loading times and optimized assets
- **SEO Friendly** - Proper meta tags and semantic HTML structure
- **Accessibility** - WCAG compliant with keyboard navigation support
- **Cross-Browser Compatible** - Works on all modern browsers

## ?? Design Highlights

### Color Palette (Modern Blue Theme)
- **Primary**: Deep Navy (#1E3A5F) - Professional and trustworthy
- **Secondary**: Slate Blue (#2C3E50) - Modern and sophisticated
- **Accent**: Teal Blue (#4A90A4) - Eye-catching highlights
- **Accent Light**: Sky Blue (#5BA3BB) - Soft accents
- **Background**: Light Blue Gray (#F0F4F8) - Clean and readable
- **Dark Background**: Deep Blue (#1A2332) - Hero gradient base

### Design Features
- **Profile Photo**: Circular profile image with gradient border and hover effects
- **Gradient Background**: Modern blue gradient in hero section
- **Decorative Elements**: Subtle geometric shapes for depth
- **Smooth Animations**: Profile photo hover effects and fade-in transitions
- **Shadow Effects**: Layered shadows for professional depth

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700
- Professional and readable across all devices

## ?? Project Structure

```
fikrisoftware.github.io/
?
??? index.html              # Main HTML file
??? css/
?   ??? style.css          # Main stylesheet
??? js/
?   ??? script.js          # JavaScript functionality
??? assets/
?   ??? CV_Muhammad_Fikri_Akbar.pdf  # Downloadable CV (add your CV here)
??? README.md              # This file
```

## ?? Sections

1. **Hero Section** - Introduction and call-to-action buttons
2. **About Me** - Professional summary and key strengths
3. **Skills & Expertise** - Technical skills organized by category
4. **Professional Experience** - Timeline of work history
5. **Featured Projects** - Showcase of key projects
6. **Education & Achievements** - Academic background and accomplishments
7. **Contact** - Contact information and availability

## ??? Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome 6.4.0** - Icons
- **Google Fonts (Inter)** - Typography

## ?? Responsive Breakpoints

- **Desktop**: > 992px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## ?? Key Features Explained

### Mobile Navigation
- Hamburger menu for mobile devices
- Smooth open/close animations
- Auto-close on link click

### Scroll Effects
- Active navigation link highlighting
- Navbar shadow on scroll
- Back-to-top button appears after scrolling

### Animations
- Fade-in animations using Intersection Observer
- Hover effects on cards and buttons
- 3D tilt effect on project cards

### Performance
- Lazy loading support
- Optimized CSS and JavaScript
- Fast page load times

## ?? Setup & Deployment

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/fikrisoftware/fikrisoftware.github.io.git
cd fikrisoftware.github.io
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using VS Code Live Server extension
# Right-click on index.html and select "Open with Live Server"
```

3. Visit `http://localhost:8000` in your browser

### GitHub Pages Deployment

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

2. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to Pages section
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click Save

3. Your site will be live at: `https://fikrisoftware.github.io`

## ?? Customization Guide

### Update Personal Information

1. **Contact Information** (index.html):
   - Update email address in Contact section
   - Update LinkedIn URL
   - Update GitHub URL

2. **Profile Photo** (Required for best appearance):
   - Add your professional photo to `assets/` folder
   - Name it `profile.jpg` or `profile.png`
   - Recommended size: 400x400px to 800x800px (square)
   - See `PROFILE_PHOTO_GUIDE.md` for detailed instructions
   - If no photo is provided, a stylish placeholder with initials will appear

3. **CV File**:
   - Add your CV PDF to `assets/` folder
   - Name it `CV_Muhammad_Fikri_Akbar.pdf` or update the link in HTML

### Update Content

- **Projects**: Modify the project cards in the Projects section
- **Experience**: Update the timeline items in Experience section
- **Skills**: Add or remove skill tags in Skills section
- **Education**: Update education details

### Update Colors

Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #1E3A5F;      /* Deep Navy */
    --secondary-color: #2C3E50;     /* Slate Blue */
    --accent-color: #4A90A4;        /* Teal Blue */
    --accent-light: #5BA3BB;        /* Sky Blue */
    --background-color: #F0F4F8;    /* Light Blue Gray */
    --background-dark: #1A2332;     /* Deep Blue */
}
```

## ?? SEO Optimization

The portfolio includes:
- Proper meta tags (description, keywords, author)
- Semantic HTML structure
- Alt text for images (when added)
- Fast loading times
- Mobile-friendly design

### Add Google Analytics (Optional)

Add before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## ?? Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## ????? About the Developer

**Muhammad Fikri Akbar**
- Senior .NET Developer
- 9+ Years Experience
- Banking & Enterprise Systems Specialist
- Currently at Bank Sahabat Sampoerna

## ?? Contact

- **Email**: fikrisoftware@gmail.com
- **LinkedIn**: [mfa-muhammadfikriakbar](https://www.linkedin.com/in/mfa-muhammadfikriakbar/)
- **GitHub**: [fikrisoftware](https://github.com/fikrisoftware)
- **Location**: Indonesia

## ?? Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from modern portfolio designs

---

**Last Updated**: December 2025

? If you like this portfolio template, please give it a star!
