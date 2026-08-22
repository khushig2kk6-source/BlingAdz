# BlingAdz - Digital Performance Marketing Agency Website

> **Growth That Shines. Performance That Delivers.**  
> *A Brand of UPIADS* • Production Domain: `https://blingadz.com`

---

## 🌟 Overview

**BlingAdz** is a high-conversion, luxury Black & Gold digital marketing agency website engineered for high-intent user acquisition, affiliate marketing, CPI scaling, and transparent performance tracking. Backed by **UPIADS** ad-tech infrastructure, the website blends creative agency polish (inspired by pinkmedia.in) with high-performance marketing standards.

---

## 🛠️ Tech Stack & Purpose

| Area | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React.js (React 18) | Component-driven UI architecture |
| **Build Tool** | Vite | Ultra-fast HMR and optimized production bundling |
| **Styling** | Tailwind CSS + CSS3 | Obsidian & Gold luxury theme with custom glow utilities |
| **Animations** | GSAP & Framer Motion | Fluid micro-interactions, section entrances, and timeline reveals |
| **Smooth Scrolling** | Lenis | Butter-smooth 60fps scrolling momentum |
| **3D / WebGL** | Three.js | Interactive 3D golden particle constellation hero canvas |
| **Icons** | Lucide React | Clean, scalable vector icon library |
| **Sliders** | Swiper.js | Interactive industry vertical & portfolio carousel |
| **Forms & Validation**| React Hook Form + Zod | Type-safe form validation with instant user feedback & confetti |
| **Backend & API** | Node.js + Express | `/api/contact` inquiry processing & Resend email integration |
| **SEO & Structured Data** | JSON-LD Schema + OpenGraph | Google Search Console & Knowledge Graph optimization |
| **Hosting Target** | Google Cloud / Firebase / Vercel | Production hosting for `blingadz.com` |

---

## 🚀 Quick Start Guide

### 1. Start Development Server
```bash
cd "C:\Users\kHUSHI GARG\.gemini\antigravity\scratch\blingadz"
npm run dev
```
Open your browser at `http://localhost:3000`.

### 2. Build for Production
```bash
npm run build
```
Generates an optimized static bundle in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to `blingadz.com` (Google Hosting / Firebase)

### Option A: Firebase Hosting (Google Cloud)
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Authenticate: `firebase login`
3. Initialize hosting: `firebase init hosting` (set public directory to `dist`)
4. Deploy: `firebase deploy`
5. Connect your custom domain `blingadz.com` in the Firebase Console:
   - Add `A` and `TXT` records to your DNS provider.

### Option B: Vercel / Cloudflare
- Connect the Git repository to Vercel/Cloudflare Pages.
- Build command: `npm run build`
- Output directory: `dist`
- Add custom domain: `blingadz.com`

---

## 📞 Direct Channels & Contact

- 📍 **Operating Headquarters**: Ghaziabad, Uttar Pradesh, India
- ✉️ **Sales & Partnerships**: [sales@blingadz.com](mailto:sales@blingadz.com)
- 📞 **Phone**: [+91 9911821217](tel:+919911821217)
- 🔗 **LinkedIn**: [linkedin.com/company/blingadz](https://www.linkedin.com/company/blingadz/)
- 📸 **Instagram**: [instagram.com/blingadz](https://www.instagram.com/blingadz/)

---

## 🎨 Swapping the Official Logo Asset
When you have the official logo image ready:
1. Place your logo image file (e.g. `logo.png` or `logo.svg`) in `public/` or `src/assets/`.
2. Open [`src/components/Logo.jsx`](src/components/Logo.jsx).
3. Replace or wrap the SVG emblem with `<img src="/your-logo.png" alt="BlingAdz" className="h-10 w-auto" />`.