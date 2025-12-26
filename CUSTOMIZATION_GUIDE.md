# ?? Panduan Customization Portfolio

Panduan lengkap untuk mengcustomize portfolio website Anda.

## ?? Quick Start Checklist

Sebelum deploy, pastikan Anda sudah update:

- [ ] Email address di Contact section
- [ ] LinkedIn URL
- [ ] GitHub URL
- [ ] Upload CV file ke folder `assets/`
- [ ] Review semua konten project
- [ ] Update tahun di footer (otomatis)
- [ ] Test di mobile device

---

## 1?? Update Informasi Kontak

### File: `index.html`

#### Email
Cari dan ganti:
```html
<!-- Bagian Contact Section -->
<p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
```

Ganti dengan email Anda:
```html
<p><a href="mailto:fikri.akbar@example.com">fikri.akbar@example.com</a></p>
```

#### LinkedIn
Cari dan ganti di 2 tempat:
1. Hero Section (baris ~58)
2. Contact Section (baris ~474)

```html
<a href="https://linkedin.com/in/yourprofile" target="_blank">
```

Ganti dengan:
```html
<a href="https://linkedin.com/in/muhammad-fikri-akbar" target="_blank">
```

#### GitHub
Cari di Contact Section:
```html
<a href="https://github.com/fikrisoftware" target="_blank">github.com/fikrisoftware</a>
```

Pastikan URL sudah benar atau update sesuai username GitHub Anda.

---

## 2?? Upload CV

### Langkah:
1. Export CV Anda ke format PDF
2. Rename file menjadi: `CV_Muhammad_Fikri_Akbar.pdf`
3. Upload ke folder `assets/`
4. Link sudah otomatis terhubung di HTML

### Jika menggunakan nama file berbeda:
Edit di `index.html`, cari:
```html
<a href="assets/CV_Muhammad_Fikri_Akbar.pdf" download class="btn btn-outline">
```

Ganti dengan nama file Anda:
```html
<a href="assets/CV_YourName.pdf" download class="btn btn-outline">
```

---

## 3?? Update Konten Projects

### Menambah Project Baru

Di `index.html`, copy-paste template project card:

```html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-rocket"></i> <!-- Ganti icon -->
    </div>
    <h3 class="project-title">Nama Project Anda</h3>
    <span class="project-category">Kategori Project</span>
    <p class="project-description">
        Deskripsi singkat project Anda. Jelaskan problem yang diselesaikan
        dan impact yang dihasilkan.
    </p>
    <div class="project-tech">
        <span>Tech 1</span>
        <span>Tech 2</span>
        <span>Tech 3</span>
    </div>
    <div class="project-highlights">
        <div class="highlight-item">
            <i class="fas fa-check"></i> Highlight 1
        </div>
        <div class="highlight-item">
            <i class="fas fa-check"></i> Highlight 2
        </div>
        <div class="highlight-item">
            <i class="fas fa-check"></i> Highlight 3
        </div>
    </div>
</div>
```

### Icon Font Awesome yang Cocok untuk Project:
- `fa-code` - General coding project
- `fa-mobile-alt` - Mobile app
- `fa-database` - Database project
- `fa-cloud` - Cloud/DevOps
- `fa-lock` - Security
- `fa-chart-line` - Analytics/Dashboard
- `fa-shopping-cart` - E-commerce
- `fa-users` - Social/Collaboration
- `fa-cog` - System/Tools
- `fa-file-invoice` - Financial/Banking

Lihat icon lengkap: https://fontawesome.com/icons

---

## 4?? Update Experience

### Menambah Experience Baru

Di `index.html`, copy template timeline-item:

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="timeline-header">
            <h3 class="timeline-title">Job Title</h3>
            <span class="timeline-period">Month Year - Present</span>
        </div>
        <h4 class="timeline-company">
            <i class="fas fa-building"></i> Company Name
        </h4>
        <ul class="timeline-list">
            <li>Tanggung jawab 1</li>
            <li>Tanggung jawab 2</li>
            <li>Tanggung jawab 3</li>
        </ul>
        <div class="tech-used">
            <span>Tech 1</span>
            <span>Tech 2</span>
            <span>Tech 3</span>
        </div>
    </div>
</div>
```

### Tips Menulis Experience:
- Gunakan action verbs: Developed, Implemented, Designed, Led
- Fokus pada hasil dan impact, bukan hanya tugas
- Gunakan angka jika memungkinkan (e.g., "Reduced deployment time by 70%")
- Highlight teknologi yang relevan

---

## 5?? Update Skills

### Menambah Skill Category Baru

Di `index.html`, copy template skill-category:

```html
<div class="skill-category">
    <h3 class="category-title">
        <i class="fas fa-icon-name"></i> Category Name
    </h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
        <span class="skill-tag">Skill 3</span>
    </div>
</div>
```

### Menambah/Menghapus Skill Tag:

Tambahkan:
```html
<span class="skill-tag">New Skill</span>
```

Hapus: Hapus baris `<span class="skill-tag">Old Skill</span>`

---

## 6?? Ganti Warna Theme

### File: `css/style.css`

Edit CSS variables di bagian atas:

```css
:root {
    --primary-color: #0B2C4D;      /* Navy Blue - Warna utama */
    --secondary-color: #2E3A46;     /* Steel Gray - Warna sekunder */
    --accent-color: #00B4D8;        /* Cyan - Warna highlight */
    --background-color: #F7F9FB;    /* Off-white - Background */
}
```

### Contoh Alternative Color Schemes:

#### Green Professional:
```css
:root {
    --primary-color: #1a472a;
    --secondary-color: #2d3e3f;
    --accent-color: #10b981;
    --background-color: #f7faf8;
}
```

#### Purple Modern:
```css
:root {
    --primary-color: #4c1d95;
    --secondary-color: #374151;
    --accent-color: #8b5cf6;
    --background-color: #faf5ff;
}
```

#### Red Corporate:
```css
:root {
    --primary-color: #7f1d1d;
    --secondary-color: #374151;
    --accent-color: #ef4444;
    --background-color: #fef2f2;
}
```

---

## 7?? Tambah Foto Profile (Optional)

### Langkah:
1. Siapkan foto profile (400x400px atau 500x500px, format JPG/PNG)
2. Upload ke folder `assets/` dengan nama `profile.jpg`
3. Tambahkan kode di section About

### Kode HTML untuk menambah foto:

Di `index.html`, tambahkan setelah `<div class="about-content">`:

```html
<div class="about-content">
    <!-- Tambahkan div photo ini -->
    <div class="about-photo">
        <img src="assets/profile.jpg" alt="Muhammad Fikri Akbar">
    </div>
    
    <div class="about-text">
        <!-- existing content -->
    </div>
    
    <div class="about-stats">
        <!-- existing content -->
    </div>
</div>
```

### Tambahkan CSS di `css/style.css`:

```css
.about-content {
    display: grid;
    grid-template-columns: 300px 1fr 250px; /* Ubah ini */
    gap: 3rem;
}

.about-photo {
    text-align: center;
}

.about-photo img {
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
    box-shadow: var(--shadow-lg);
}

/* Responsive */
@media (max-width: 992px) {
    .about-content {
        grid-template-columns: 1fr;
    }
    
    .about-photo img {
        max-width: 250px;
    }
}
```

---

## 8?? Tambah Favicon

### Langkah:
1. Generate favicon dari gambar/logo Anda di https://realfavicongenerator.net/
2. Download hasil generate
3. Upload file favicon ke folder `assets/`
4. Tambahkan kode di `<head>` section

### Kode untuk Favicon:

Di `index.html`, tambahkan sebelum `</head>`:

```html
<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="assets/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png">
```

---

## 9?? Tambah Google Analytics (Optional)

### Langkah:
1. Buat account di https://analytics.google.com/
2. Dapatkan Measurement ID (format: G-XXXXXXXXXX)
3. Tambahkan kode tracking

### Kode Google Analytics:

Di `index.html`, tambahkan sebelum `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); // Ganti dengan ID Anda
</script>
```

---

## ?? Update Meta Tags untuk SEO

### File: `index.html`

Update meta tags di `<head>`:

```html
<meta name="description" content="Muhammad Fikri Akbar - Senior .NET Developer with 9+ years experience in Banking Systems, System Integration, and DevOps">
<meta name="keywords" content=".NET Developer, System Engineer, Banking Systems, ASP.NET, C#, DevOps, Azure, SQL Server">
<meta name="author" content="Muhammad Fikri Akbar">

<!-- Open Graph for Social Media -->
<meta property="og:title" content="Muhammad Fikri Akbar | Senior .NET Developer">
<meta property="og:description" content="9+ years experience in Banking Systems, System Integration, and DevOps">
<meta property="og:image" content="https://fikrisoftware.github.io/assets/og-image.jpg">
<meta property="og:url" content="https://fikrisoftware.github.io">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Muhammad Fikri Akbar | Senior .NET Developer">
<meta name="twitter:description" content="9+ years experience in Banking Systems">
<meta name="twitter:image" content="https://fikrisoftware.github.io/assets/og-image.jpg">
```

Note: Buat image `og-image.jpg` (1200x630px) untuk preview di social media.

---

## 1??1?? Testing Responsive

### Test di Browser:
1. Buka Developer Tools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Test di berbagai ukuran:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - iPad Pro (1024px)
   - Desktop (1920px)

### Test di Device Fisik:
1. Deploy ke GitHub Pages
2. Buka di smartphone Anda
3. Test semua interaksi:
   - Navigation menu
   - Scroll behavior
   - Button clicks
   - Form inputs

---

## 1??2?? Optimization Tips

### Image Optimization:
- Compress images: https://tinypng.com/
- Use WebP format untuk browser modern
- Lazy load images untuk performance

### Performance:
- Minify CSS dan JavaScript
- Enable Gzip compression
- Use CDN untuk libraries

### SEO:
- Submit sitemap ke Google Search Console
- Add structured data (Schema.org)
- Ensure fast loading time (<3s)

---

## ?? Troubleshooting

### CSS tidak muncul:
- Check path file: `css/style.css`
- Clear browser cache
- Check Console untuk error

### JavaScript tidak jalan:
- Check path file: `js/script.js`
- Open Console (F12) untuk lihat error
- Pastikan script tag di akhir `</body>`

### Font tidak muncul:
- Check koneksi internet
- Check Google Fonts link
- Try reload dengan Ctrl+Shift+R

### Layout rusak di mobile:
- Check viewport meta tag
- Check responsive breakpoints di CSS
- Test dengan Chrome DevTools

---

## ?? Need Help?

Jika ada pertanyaan atau butuh bantuan:
1. Check dokumentasi di README.md
2. Google untuk masalah spesifik
3. Ask on StackOverflow
4. Contact: fikrisoftware@gmail.com

---

## ? Pre-Deployment Checklist

Sebelum push ke GitHub:

- [ ] All personal info updated
- [ ] CV file uploaded
- [ ] All links tested
- [ ] Responsive tested
- [ ] No console errors
- [ ] SEO meta tags updated
- [ ] Favicon added
- [ ] Analytics added (optional)
- [ ] Cross-browser tested
- [ ] Mobile tested

---

**Happy Coding! ??**
