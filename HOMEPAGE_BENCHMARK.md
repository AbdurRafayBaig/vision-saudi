# HOMEPAGE BENCHMARK — AATIQ ALTHURAYA DESIGN MASTER

> **Benchmark Status:** Ground Truth / Design Master  
> Every internal page must be raised to the exact quality, art direction, typography, spacing, imagery, and UX standards documented below.

---

## 01 — TYPOGRAPHY RULES

1. **Display Font Family:** `Playfair Display` (`var(--font-display)`) used for all primary headlines (H1, H2, hero statements, major numbers).
2. **Body & Utility Font Family:** `Inter` (`var(--font-sans)`) used for all subheadings, body text, badges, navigation, buttons, and form labels.
3. **Hero H1 Scale:** `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight`. Always use crisp text hierarchy with custom break lines on desktop.
4. **Section H2 Scale:** `text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight`.
5. **Body Copy Scale:** `text-lg md:text-xl font-light leading-relaxed text-[#4A4F48]` (light background) or `text-[#D8CCB8]` (dark background).
6. **Eyebrow / Sub-label Treatment:** `text-[#2D7A5F] text-sm font-medium tracking-wide mb-4` on light sections, `text-[#D8CCB8] text-sm font-medium tracking-wide mb-5` on dark sections. NO raw neon or harsh uppercase monospace tags.

---

## 02 — COLOR RULES

1. **Light Canvas:** `--cream` (`#FAF9F5`) and `--warm-ivory` (`#F4F0E7`). Never pure `#FFFFFF` page backgrounds.
2. **Dark Canvas:** `--charcoal` (`#1C1F1D`), `--obsidian` (`#101312`), and `--deep-forest` (`#1A3C2E`).
3. **Brand Accent:** `--saudi-green` (`#2D7A5F`) for active states, eyebrows, links, primary CTA buttons, and key focus rings. Hover state: `#3A9474`.
4. **Warm Neutrals:** `--sand` (`#D8CCB8`), `--stone` (`#B9B3A8`), `--text-subtle` (`#7A7A72`).
5. **Border Tokens:** Light section borders use `border-[#1C1F1D]/8` (or `/10`); dark section borders use `border-white/10`.
6. **Rhythm:** Strictly alternate between dark and light sections (Dark Hero → Light Opportunity → Dark Ecosystem → Light Real Estate → Dark Experience → Light Why Aatiq → Dark Final CTA).

---

## 03 — SPACING RULES

1. **Container Standard:** `max-w-[1280px] mx-auto px-6 lg:px-8`.
2. **Section Vertical Padding:** `py-[var(--space-section-lg)]` (80px to 160px fluid) or `py-[var(--space-section)]` (60px to 128px fluid).
3. **Internal Element Gaps:** Grid gaps `gap-8 lg:gap-12` or `gap-12 lg:gap-20`.
4. **Headline to Copy Margin:** `mb-6` to `mb-8`. Sub-label to headline `mb-4`.

---

## 04 — GRID RULES

1. **Primary Grid:** Asymmetric 12-column desktop grid (`grid-cols-12` with `col-span-5` / `col-span-7` or `col-span-6` / `col-span-6`).
2. **Feature Cards Grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`.
3. **Mobile Layout:** Single-column stacked fallback (`grid-cols-1`) with clean vertical hierarchy and generous touch targets.

---

## 05 — IMAGE RULES

1. **Aspect Ratios:** `aspect-[16/10]` for wide service spotlights, `aspect-[4/5]` or `aspect-[3/4]` for portrait editorial split images, `aspect-[21/9]` or `aspect-[16/9]` for cinematic heroes.
2. **Border Radius:** Minimal radius (`rounded-sm` or `rounded-none`). Avoid rounded-2xl or rounded-3xl startup templates.
3. **Overlays:** Dark gradient overlays (`bg-gradient-to-b from-[#101312]/20 via-[#101312]/40 to-[#101312]/90` or `overlay-cinematic`) to guarantee text readability.
4. **Imagery Art Direction:** Premium Saudi architecture, skyline, investment places, high-end hospitality, and authentic professional environments. Never cheap stock vectors or generic blue corporate handshake photos.

---

## 06 — BUTTON RULES

1. **Primary Emerald Button:** `bg-[#2D7A5F] hover:bg-[#3A9474] text-white font-medium py-3.5 px-7 rounded-sm shadow-sm transition-all duration-300 inline-flex items-center gap-2 text-sm tracking-wide`.
2. **Ivory / Outline Button:** `bg-[#FAF9F5] hover:bg-[#F4F0E7] text-[#1C1F1D] border border-[#1C1F1D]/15 font-medium py-3.5 px-7 rounded-sm transition-all duration-300 text-sm tracking-wide`.
3. **Link Buttons:** Inline text link with `text-[#2D7A5F] font-medium inline-flex items-center gap-2 hover:gap-3 transition-all duration-300`.

---

## 07 — NAVIGATION RULES

1. **Header Placement:** Fixed top overlay (`fixed top-0 left-0 right-0 z-40`).
2. **Scroll Transition:** Transparent background at top with white text over cinematic hero; transitions to `bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#1C1F1D]/8 py-3` with `#1C1F1D` text on scroll.
3. **Wordmark / Logo Action:** `AATIQ ALTHURAYA` wordmark linked strictly to `/`. Must remain legible and interactive across all light/dark page top states.
4. **Dropdown Behavior:** Hover intent with 150ms delay timeout, smooth opacity and translation reveal, rounded-lg shadow container.
5. **Mobile Navigation:** Full-screen takeover (`fixed inset-0 z-50 bg-[#FAF9F5]`), clear close button, large display typography links, embedded CTA, and clean overflow scrolling.

---

## 08 — ANIMATION RULES

1. **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (Custom Editorial Ease Out).
2. **Scroll Reveals:** `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true, margin: "-100px" }}`.
3. **Interactive Tabs / Swaps:** Framer Motion `<AnimatePresence mode="wait">` with `duration: 0.4`.
4. **Performance:** Hardware-accelerated transforms only (`opacity`, `transform`). No layout-thrashing property animations.

---

## 09 — SECTION COMPOSITION RULES

1. **Section Header Stack:** Sub-label (`text-[#2D7A5F]`) → Headline (`font-display H2`) → Supporting description (`text-lg`).
2. **Content Pairings:** Narrative text paired directly with large-format photography, interactive feature lists, or process steps.
3. **Visual Depth:** Multi-layered overlays, clean borders, background color switching between dark obsidian/charcoal and light cream/ivory.

---

## 10 — MOBILE RULES

1. **Viewports:** Optimized for 375px, 390px, 414px, 768px, 1024px, 1280px, 1440px, 1920px.
2. **Touch Targets:** Minimum 44px height for interactive elements.
3. **Responsive Images:** Proper Next/Image `sizes` attribute on all components.
4. **Typography:** Fluid scaling down to 32px H1s on mobile without horizontal clipping or overflow.

---

## 11 — CARD RULES

1. **Card Geometry:** Rectangular `rounded-sm` or `rounded-none` with 1px subtle borders (`border-[#1C1F1D]/8` or `border-white/10`).
2. **Hover States:** Subtle border color shift (`hover:border-[#2D7A5F]/40`) and mild image zoom (scale 1.03), never heavy drop shadows or 3D rotations.
3. **Padding:** Internal padding `p-6 sm:p-8 md:p-10`.

---

## 12 — CTA RULES

1. **Final Section CTA:** High-contrast dark obsidian or emerald background (`bg-[#101312]` or `bg-[#1A3C2E]`), large display headline ("Build your position in the Kingdom."), supporting narrative, and dual action buttons (Primary Modal Trigger + Secondary Route Link).
2. **Micro CTAs:** Every content block ends with a clear path forward ("Explore Business Setup →", "Discover Real Estate →").

---

## 13 — VISUAL HIERARCHY RULES

1. **Primary Focal Point:** H1 Headline / Main Image.
2. **Secondary Focus:** Process Stage / Capability Title.
3. **Tertiary Focus:** Body copy and supporting details.
4. **Whitespace:** Generous spacing around text and media ensures zero visual clutter and maximum authority.
