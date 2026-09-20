# 🇸🇦 Vision Saudi | Premium KSA Enterprise, Investment & Market-Entry Platform

> **One Kingdom. One Vision. One Ecosystem.**
> Vision Saudi is a state-of-the-art corporate gateway designed for international enterprises, institutional investors, and global founders expanding into the Kingdom of Saudi Arabia.

---

## 🌟 Executive Summary

**Vision Saudi** connects global business leaders with Saudi Arabia's Vision 2030 ecosystem. Beyond basic commercial registration (CR) and MISA licensing, Vision Saudi provides an end-to-end operational growth engine — spanning corporate governance, GRO services, local technology infrastructure, ZATCA Phase 2 compliance, premium commercial real estate, and Saudi Premium Residency assistance.

---

## ✨ Key Features & Capabilities

- 🏙️ **Dynamic City Animated Headlines**: Real-time rotating headline showcase featuring all major Saudi Arabian commercial & economic hubs (*Riyadh, Jeddah, Dammam, Makkah, Madinah, Khobar, Dhahran, NEOM, Tabuk, AlUla, Abha*).
- ☀️🌙 **Dual-Pill Light & Dark Mode**: Seamless visual transition between an **Obsidian Dark Luxury** palette (`#0A0D0C`) with glowing neon emerald accents (`#10E784`) and a **Pristine White / Slate-50** light theme (`#F8FAFC`).
- 🏢 **Interactive Commercial Real Estate Hub**: Filterable showcase for Grade-A office towers, luxury residential compounds, industrial logistics parks, and retail spaces with full property detail modals & inquiry forms.
- 🤝 **Strategic Technology Partnership**: Dedicated SLNEE track record integration highlighting SR 100M+ delivered contract value and 16+ years of KSA enterprise software implementations.
- 📜 **Full Service Suite**:
  - *Business Setup & Market Entry* (MISA licensing, 100% foreign ownership, ISIC 4 compliance).
  - *Corporate Services & GRO* (Qiwa, Muqeem, GOSI, HR & WPS payroll systems).
  - *Technology & Digital Infrastructure* (ZATCA Phase 2 e-invoicing, CST-certified cloud hosting, SAP/Oracle/Odoo middleware).
  - *Premium Residency & Investor Visas* (SPPR, real estate investor residency, executive visas).
- 📝 **Lead Capture & Booking Engine**: Interactive popup modal forms for consultation bookings, downloadable investor guides, and custom corporate inquiries.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server & Client Components)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or 20.x+
- npm / yarn / pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<YOUR_GITHUB_USERNAME>/vision-saudi.git
   cd vision-saudi
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🌐 Deploying to Vercel

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of Vision Saudi platform"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/vision-saudi.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Log in to [Vercel](https://vercel.com).
   - Click **Add New** → **Project**.
   - Import the `vision-saudi` repository.
   - Framework Preset will automatically detect **Next.js**.
   - Click **Deploy**.

---

## 🌍 Arabic and RTL

The site serves English today. Arabic is wired end to end and switched off, so
turning it on is configuration plus copy, not a rewrite.

**What already exists**

| Piece | Where |
|---|---|
| Locale list, direction, path helper | `lib/i18n.ts` |
| Message catalogues | `messages/en.json`, `messages/ar.json` |
| Translator with per-key English fallback | `lib/messages.ts` |
| `lang` / `dir` on `<html>`, hreflang for served locales | `app/layout.tsx` |
| Arabic typeface (IBM Plex Sans Arabic), loaded only for RTL | `app/layout.tsx`, `app/globals.css` |
| Direction-agnostic layout | every component uses logical utilities (`ms-`, `pe-`, `start-`, `text-start`) rather than `ml-`, `pr-`, `left-`, `text-left` |

**Checking coverage**

```bash
npm run i18n:status
```

Prints how much of each locale is translated and which keys are missing.
Untranslated keys fall back to English at runtime, per key — so Arabic can go
live half-finished and read correctly, rather than showing raw keys.

**Turning Arabic on**

1. Fill `messages/ar.json`. Keys left empty stay English.
2. Add an `app/[locale]` segment (or `app/ar`) that passes the locale to
   `translator()` and to `dirOf()` in the layout.
3. Set `NEXT_PUBLIC_LOCALES="en,ar"`. That is what adds `ar` to hreflang and
   lets `localePath()` produce `/ar/...` links.

Page copy lives in `data/` as plain strings, with icons named rather than
imported, so those files can be translated without touching a component.

---

## 📄 License

Internal Enterprise & Advisory Platform — All Rights Reserved © Vision Saudi.
