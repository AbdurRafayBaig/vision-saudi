# DESIGN SYSTEM SPECIFICATION — AATIQ ALTHURAYA

## 01 — Color Palette & Token Architecture

The color system is built around deep, restrained charcoal backgrounds, rich Saudi emerald accenting, muted warm neutrals, and crisp typography contrast.

```css
:root {
  /* Background Tokens */
  --bg-dark-primary: #0A0D12;      /* Deep Obsidian Charcoal (Primary Dark) */
  --bg-dark-secondary: #121721;    /* Rich Charcoal Surface (Secondary Dark) */
  --bg-dark-tertiary: #19202E;     /* Elevated Card Surface Dark */
  
  --bg-light-primary: #F8FAFC;     /* Off-White Sand Canvas (Primary Light) */
  --bg-light-secondary: #F1F4F8;   /* Muted Cream Surface (Secondary Light) */
  --bg-light-tertiary: #E2E8F0;    /* Card Border / Divider Light */

  /* Saudi Emerald Brand Accents */
  --emerald-primary: #0F5A47;      /* Deep Saudi Emerald */
  --emerald-accent: #147A60;       /* Vibrant Saudi Emerald (Hover/Active) */
  --emerald-light: #1EB992;        /* Bright Mint Glow (High Contrast) */
  --emerald-subtle: rgba(15, 90, 71, 0.15); /* Soft Background Tint */

  /* Warm Neutral Accents */
  --sand-gold: #C5A059;            /* Muted Architectural Gold */
  --sand-neutral: #94A3B8;         /* Cool Slate Subtext */

  /* Text Colors */
  --text-dark-contrast: #F8FAFC;   /* Crisp White on Dark */
  --text-dark-muted: #94A3B8;      /* Muted Gray on Dark */
  --text-light-contrast: #0F172A;  /* Deep Charcoal on Light */
  --text-light-muted: #475569;     /* Slate Gray on Light */
  
  /* Borders & Dividers */
  --border-dark: rgba(255, 255, 255, 0.1);
  --border-dark-highlight: rgba(30, 185, 146, 0.3);
  --border-light: rgba(15, 23, 42, 0.1);
}
```

---

## 02 — Typography System

Typography balances high-fashion editorial sophistication with clean corporate legibility.

- **Primary Sans Font:** `Inter` / `Plus Jakarta Sans`
- **Display Serif / Editorial Font:** `Cormorant Garamond` / `Outfit`
- **Arabic Typography Ready:** `Cairo` / `Amiri`

### Fluid Typography Scale (`clamp()` implementation)

```css
/* Display Heading (Hero Headline) */
--font-display: clamp(2.5rem, 5.5vw + 1rem, 5rem); /* 40px to 80px */

/* Section H1 / H2 Title */
--font-h1: clamp(2rem, 3.5vw + 0.8rem, 3.5rem);    /* 32px to 56px */
--font-h2: clamp(1.5rem, 2.5vw + 0.5rem, 2.5rem);  /* 24px to 40px */
--font-h3: clamp(1.25rem, 1.5vw + 0.4rem, 1.75rem);/* 20px to 28px */

/* Body Copy */
--font-body-lead: clamp(1.125rem, 1vw + 0.5rem, 1.35rem); /* 18px to 21.6px */
--font-body: clamp(0.95rem, 0.5vw + 0.75rem, 1.05rem);    /* 15px to 17px */
--font-small: 0.875rem; /* 14px */

/* Eyebrows & Editorial Identifiers */
--font-eyebrow: 0.8125rem; /* 13px Uppercase Tracking Wide (+0.2em) */
```

---

## 03 — Layout & Spacing System

- **Max Container Width:** `1440px` (with `px-4 sm:px-8 lg:px-12` padding)
- **Grid Layouts:** Asymmetric 12-column CSS Grid with `gap-6 lg:gap-12`
- **Section Spacing:** Generous whitespace (`py-16 md:py-24 lg:py-32`)
- **Section Markers:** Editorial markers (`AATIQ / 01`, `AATIQ / 02`, etc.) in top corner of each section.

---

## 04 — Component Design Standards

### Buttons
1. **Primary Button:**
   - Background: Dark Emerald (`--emerald-primary`) with hover transition to Bright Emerald (`--emerald-accent`).
   - Typography: Uppercase tracking-wider font, arrow indicator `→` with smooth x-translation on hover.
2. **Secondary Outline Button:**
   - Border: `1px solid var(--border-dark-highlight)` or `1px solid var(--border-light)`.
   - Backdrop-blur glass effect on dark sections.

### Section Cards
- Clean geometric borders (`rounded-none` or subtle `rounded-sm`/`rounded-md`).
- NO cheap AI-style 24px ultra-rounded cards or glowing neon borders.
- Architectural lines, subtle 1px borders, crisp typography hierarchy.

---

## 05 — Motion & Animation System

- **Timing Function:** `cubic-bezier(0.16, 1, 0.3, 1)` (Custom Editorial Ease Out)
- **Entrance Animation:** Subtle fade-up (20px translate-y) over 0.7s duration.
- **Image Reveal:** Clip-path mask reveal or controlled 1.05x scale hover transition.
- **Scroll Storytelling:** Horizontal timeline / ecosystem progression for desktop with scroll trigger boundaries.
- **Accessibility / Reduced Motion:** `@media (prefers-reduced-motion: reduce)` disables scale transforms, parallax, and mask shifts, keeping all text instantly visible.
