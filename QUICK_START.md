# ?? Quick Start Guide - Portfolio Muhammad Fikri Akbar

## ? Status: Ready to Deploy!

Semua informasi kontak sudah diupdate:
- ? Email: fikrisoftware@gmail.com
- ? LinkedIn: https://www.linkedin.com/in/mfa-muhammadfikriakbar/
- ? GitHub: https://github.com/fikrisoftware
- ? CV: Sudah dicopy ke folder assets/
- ?? Profile Photo: Perlu upload foto Anda (lihat panduan di bawah)

### ?? Upload Foto Profile (Recommended)

**Langkah Cepat:**
1. Siapkan foto profesional (400x400px, square/persegi)
2. Rename menjadi `profile.jpg`
3. Copy ke folder `assets/`
4. Foto akan muncul otomatis di Hero Section

**Detail Lengkap:** Baca `PROFILE_PHOTO_GUIDE.md`

**Tanpa Foto?** Jangan khawatir! Placeholder dengan inisial "MFA" akan muncul otomatis.

---

## ?? Checklist Sebelum Deploy

- [x] Update email address
- [x] Update LinkedIn URL
- [x] Update GitHub URL
- [x] CV file uploaded ke assets/
- [ ] Upload foto profile ke assets/profile.jpg (recommended)
- [ ] Test website di browser (buka index.html)
- [ ] Test responsive di mobile
- [ ] Push ke GitHub
- [ ] Enable GitHub Pages

---

## ?? Testing Lokal

### Cara 1: Open Langsung di Browser
1. Buka file `index.html` dengan double click
2. Website akan terbuka di browser default Anda

### Cara 2: Menggunakan Live Server (VS Code)
1. Install extension "Live Server" di VS Code
2. Right click pada `index.html`
3. Pilih "Open with Live Server"
4. Website akan terbuka di `http://localhost:5500`

### Cara 3: Menggunakan Python Server
```bash
# Di folder project, jalankan:
python -m http.server 8000

# Buka browser dan akses:
# http://localhost:8000
```

---

## ?? Deploy ke GitHub Pages

### Step 1: Push ke GitHub

Jika belum push, jalankan command berikut:

```bash
# Add all files
git add .

# Commit dengan message
git commit -m "Update portfolio with contact info and CV"

# Push ke GitHub
git push origin main
```

### Step 2: Enable GitHub Pages

1. Buka repository di GitHub: https://github.com/fikrisoftware/fikrisoftware.github.io
2. Click **Settings** (tab di atas)
3. Scroll ke bawah atau click **Pages** di sidebar kiri
4. Di section **Source**:
   - Branch: Pilih `main`
   - Folder: Pilih `/ (root)`
5. Click **Save**
6. Tunggu beberapa menit (biasanya 2-5 menit)
7. Refresh halaman, akan muncul link website Anda:
   - **https://fikrisoftware.github.io**

### Step 3: Verifikasi

1. Buka link: https://fikrisoftware.github.io
2. Test semua section:
   - ? Navigation menu berfungsi
   - ? Smooth scroll bekerja
   - ? Button "Download CV" bisa download
   - ? Link LinkedIn membuka profil Anda
   - ? Email link membuka email client
   - ? GitHub link membuka profile GitHub

3. Test di Mobile:
   - Buka website dari smartphone
   - Test hamburger menu
   - Test semua buttons dan links
   - Scroll semua section

---

## ?? Test Responsive

### Di Browser (Chrome DevTools):

1. Buka website
2. Press **F12** (Developer Tools)
3. Click icon **Toggle Device Toolbar** (atau press Ctrl+Shift+M)
4. Test di berbagai device:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - iPad Pro (1024px)
   - Desktop (1920px)

### Di Device Fisik:

Setelah deploy, buka dari:
- Smartphone Android
- iPhone
- Tablet
- Desktop/Laptop

---

## ?? Update Portfolio (Jika Perlu Edit)

### Update Konten:

1. Edit file `index.html`
2. Cari section yang ingin diubah
3. Save file
4. Test di browser
5. Jika OK, push ke GitHub:
   ```bash
   git add .
   git commit -m "Update [apa yang diubah]"
   git push origin main
   ```
6. Wait 2-3 minutes
7. Refresh website Anda

### Update CV:

1. Export CV baru ke PDF
2. Replace file di `assets/CV_Muhammad_Fikri_Akbar.pdf`
3. Push ke GitHub
4. CV otomatis terupdate

---

## ?? Customization (Optional)

Jika ingin customize lebih lanjut, baca:
- **CUSTOMIZATION_GUIDE.md** - Panduan lengkap
- **README.md** - Dokumentasi project

### Quick Customization:

**Ganti Warna Theme:**
Edit `css/style.css` line 3-10:
```css
:root {
    --primary-color: #0B2C4D;    /* Warna utama */
    --accent-color: #00B4D8;     /* Warna highlight */
}
```

**Tambah/Ubah Projects:**
Edit section `<!-- Projects Section -->` di `index.html`

**Update Experience:**
Edit section `<!-- Experience Section -->` di `index.html`

---

## ?? Troubleshooting

### Problem: CSS tidak muncul
**Solution:**
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)
- Check file path: `css/style.css` harus benar

### Problem: JavaScript tidak jalan
**Solution:**
- Check Console (F12) untuk error
- Pastikan `js/script.js` ada
- Clear cache dan reload

### Problem: CV tidak bisa download
**Solution:**
- Check file ada di `assets/CV_Muhammad_Fikri_Akbar.pdf`
- Check permission file (harus readable)
- Try push ulang ke GitHub

### Problem: Website belum muncul di GitHub Pages
**Solution:**
- Tunggu 5-10 menit setelah enable Pages
- Check Settings ? Pages, pastikan status "Your site is live"
- Check branch dan folder sudah benar
- Try push commit baru untuk trigger rebuild

---

## ?? Analytics (Optional)

Jika ingin tracking visitor, tambahkan Google Analytics:

1. Daftar di: https://analytics.google.com
2. Dapatkan Measurement ID (format: G-XXXXXXXXXX)
3. Tambahkan code di `index.html` sebelum `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ?? SEO Tips

Setelah website live:

1. **Submit ke Google Search Console**
   - https://search.google.com/search-console
   - Add property: fikrisoftware.github.io
   - Verify ownership
   - Submit sitemap (jika ada)

2. **Share di Social Media**
   - LinkedIn: Share link portfolio
   - Twitter: Tweet dengan link
   - Facebook: Post di profile

3. **Add to Resume/CV**
   - Tambahkan link portfolio di CV
   - Tambahkan di email signature

---

## ? Final Checklist

Sebelum share portfolio:

- [ ] Website sudah live di https://fikrisoftware.github.io
- [ ] Profile photo uploaded (atau placeholder muncul dengan baik)
- [ ] Semua links berfungsi (LinkedIn, GitHub, Email)
- [ ] CV bisa didownload
- [ ] Responsive di mobile & tablet
- [ ] Tidak ada console error
- [ ] Test semua buttons dan navigation
- [ ] Test smooth scroll
- [ ] Test hamburger menu di mobile
- [ ] Profile photo hover effect works
- [ ] Gradient background terlihat bagus
- [ ] Load time < 3 detik
- [ ] Sudah test di device fisik

---

## ?? Contact Support

Jika ada masalah atau pertanyaan:
- Email: fikrisoftware@gmail.com
- GitHub Issues: https://github.com/fikrisoftware/fikrisoftware.github.io/issues

---

## ?? Selamat!

Portfolio Anda sudah siap! 

**Next Steps:**
1. Deploy ke GitHub Pages
2. Share link ke recruiter/network
3. Update LinkedIn dengan link portfolio
4. Tambahkan di CV

**Your Portfolio Link:**
https://fikrisoftware.github.io

---

**Last Updated:** December 2025
**Status:** ? Ready to Deploy
