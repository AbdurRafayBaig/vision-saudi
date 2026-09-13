# COMPONENT ARCHITECTURE — AATIQ ALTHURAYA

## 01 — Directory Structure

```
/src (or root app directory)
├── app/
│   ├── layout.tsx                     # Global Root Layout (Fonts, Metadata, Provider)
│   ├── page.tsx                       # Homepage (The Master Ecosystem Story)
│   ├── about/page.tsx                 # About Us Page
│   ├── services/
│   │   ├── page.tsx                   # Services Overview
│   │   ├── business-setup/page.tsx    # Business Setup & Market Entry
│   │   ├── corporate-services/page.tsx# Corporate Services Page
│   │   ├── technology-infrastructure/page.tsx # Tech Infrastructure
│   │   ├── real-estate/page.tsx       # Real Estate Advisory Page
│   │   └── premium-residency/page.tsx # Premium Residency Page
│   ├── experience/page.tsx            # Track Record & Case Studies
│   ├── partners/page.tsx              # Partner Ecosystem (Service & Success)
│   ├── insights/page.tsx              # Editorial Insights & Guides
│   ├── contact/page.tsx               # Make The First Move Lead Engine
│   └── (legal)/
│       ├── privacy/page.tsx           # Privacy Policy
│       └── terms/page.tsx             # Terms & Conditions
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                 # Desktop & Mobile Header + Navigation
│   │   ├── Footer.tsx                 # Editorial Brand Footer
│   │   └── PageWrapper.tsx            # Smooth transition & layout wrapper
│   ├── ui/                            # Atomic UI Primitives
│   │   ├── Button.tsx                 # Primary & Secondary CTA Buttons
│   │   ├── SectionMarker.tsx          # Editorial Section Tag (e.g. AATIQ / 01)
│   │   ├── Card.tsx                   # Service & Ecosystem Card Primitives
│   │   ├── Badge.tsx                  # Status & Category Badges
│   │   ├── Modal.tsx                  # Universal Dialog Container
│   │   ├── Accordion.tsx              # Accessible FAQ & Mobile Expandables
│   │   └── FormInput.tsx              # Text, Select, Phone Inputs
│   ├── sections/                      # Section-Level Master Components
│   │   ├── Hero.tsx                   # Homepage Hero
│   │   ├── DirectionPositioning.tsx   # Section 02 (AATIQ / 01)
│   │   ├── FourDirections.tsx         # Section 03 (Four Public Pillars)
│   │   ├── FiveStageJourney.tsx       # Section 04 (Establish -> Grow Timeline)
│   │   ├── EcosystemExplorer.tsx      # Section 05 (Interactive Vector Diagram)
│   │   ├── ExperienceShowcase.tsx     # Section 06 (SLNEE & Track Record)
│   │   ├── TechInfrastructure.tsx     # Section 07 (ERP, SamMail, Digital)
│   │   ├── RealEstateHighlight.tsx    # Section 08 (Architectural Showcase)
│   │   ├── SuccessPartnersSection.tsx # Section 09 (Ecosystem Membership)
│   │   ├── WhyAatiq.tsx               # Section 10 (Comparison & Value)
│   │   └── FinalCTA.tsx               # Section 11 (Closing Lead Engine)
│   ├── forms/
│   │   └── ContactFormModal.tsx       # Multi-Step High-Intent Lead Flow
│   └── motion/
│       ├── FadeIn.tsx                 # Server/Client Motion Wrapper
│       ├── TextReveal.tsx             # Typography Entrance Reveal
│       └── ParallaxContainer.tsx      # Controlled Media Parallax
├── data/
│   ├── services.ts                    # Structured Service Pillars & Capabilities
│   ├── ecosystem.ts                   # Ecosystem Vectors & Interconnections
│   ├── experience.ts                  # SLNEE Attributed Projects & Metrics
│   ├── realestate.ts                  # Property Categories & Investment Models
│   ├── residency.ts                   # Premium Residency Pathways & Criteria
│   ├── faqs.ts                        # Master FAQs grouped by topic
│   └── insights.ts                    # Editorial Market Articles
└── types/
    └── index.ts                       # TypeScript Interfaces & Types
```

---

## 02 — Server vs. Client Component Isolation Strategy

To achieve sub-second LCP and optimal Web Vitals:

- **Server Components (Default):** All static layouts, page routes, data-fetching components, editorial prose, typography containers, and standard grids render purely on the server without client JS bundle overhead.
- **Client Components (`'use client'`):** Restricted strictly to interactive widgets:
  - Navbar (Mobile drawer toggle & scroll state)
  - Interactive Ecosystem Explorer (Vector selection & hover states)
  - 5-Stage Journey Interactive Stepper / Horizontal Scroll
  - Multi-Step Contact Lead Modal & Form validation
  - Motion wrappers (`Framer Motion` / `GSAP` animation handles)

---

## 03 — Data Schema Specifications

### Service Schema (`types/index.ts`)
```typescript
export interface ServicePillar {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  badgeText: string;
  journeyStage: 'ESTABLISH' | 'ACTIVATE' | 'OPERATE' | 'CONNECT' | 'GROW';
  capabilities: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}
```

### Ecosystem Vector Schema
```typescript
export interface EcosystemVector {
  id: string;
  name: 'CORPORATE' | 'FINANCE' | 'TECHNOLOGY' | 'COMMUNICATIONS' | 'REAL ESTATE' | 'PARTNERSHIPS';
  headline: string;
  description: string;
  servicesIncluded: string[];
  partnerIntegration?: string;
}
```

### Project Experience Schema (SLNEE Attributed)
```typescript
export interface ProjectExperience {
  id: string;
  title: string;
  clientCategory: 'Government' | 'Semi-Government' | 'Enterprise' | 'Private Sector';
  deliveryPartner: 'SLNEE' | 'AATIQ' | 'Strategic Partner';
  description: string;
  impactMetrics: string[];
  isVerified: boolean;
}
```
