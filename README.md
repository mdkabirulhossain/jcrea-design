# Jcrea — Product Designer Portfolio (Pillar 1 UI Challenge)

[![Next.js](https://img.shields.io/badge/Next.js-16.3.1-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel Status](https://img.shields.io/badge/Deployment-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://jcrea-design.vercel.app/)

> **Technical Assessment Submission — React Frontend Engineer (Pillar 1: Design Test)**  
> A pixel-accurate, fully responsive Next.js App Router implementation of the Figma portfolio interface for Jenny (Product Designer).

---

## 🔗 Live Links

- 🌐 **Live Demo**: [https://jcrea-design.vercel.app/](https://jcrea-design.vercel.app/)
- 💻 **GitHub Repository**: [https://github.com/mdkabirulhossain/jcrea-design](https://github.com/mdkabirulhossain/jcrea-design)

---

## 🎯 Overview & Objectives

This project fulfills **Pillar 1 (Design Implementation Test — 50%)** React Frontend Engineer Technical Assessment. The primary goal is to convert the provided Figma design into a production-grade, pixel-accurate, and accessible Next.js interface with strict TypeScript adherence and modular Tailwind CSS styling.

### Key Highlights
- **100% Pixel-Accurate Figma Conversion**: Matches Figma colors, exact typography, spacing, hierarchy, and decorative graphic assets.
- **Fully Responsive Architecture**: Seamlessly adapts from mobile viewports (375px) to tablet and ultra-wide desktop screens (1440px+).
- **Sub-Route Experience**: Interactive "Under Development" modal integrated across all secondary sub-routes (`/about`, `/service`, `/resume`, `/project`, `/contact`) and 404 pages with a responsive "Back to Home" action.

---

## 🛠️ Tech Stack & Dependencies

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16.3.1](https://nextjs.org/) | App Router architecture with Server and Client Components |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict mode type safety (`.ts` / `.tsx` standard) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Theme variables, utility-first custom design tokens |
| **Icons** | [Lucide React](https://lucide.react.dev/) + SVG Assets | Modern UI iconography paired with exported Figma SVGs |
| **Fonts** | Next.js Google Fonts | Urbanist & Geist font loading optimization |
| **Package Manager** | `pnpm` / `npm` | Fast, deterministic dependency management |
| **Deployment** | [Vercel](https://vercel.com/) | Continuous integration & global edge delivery |

---

## ✨ Features & Component Breakdown

### 1. Navigation System (`Navbar`, `MobileNavbar`, `MobileMenuPanel`)
- **Desktop Header**: Pill-shaped floating dark container (`bg-brand-dark`) featuring centered brand logo with split navigation links and active route highlighting (`bg-brand-orange`).
- **Mobile Header**: Compact navigation header with an expandable drawer menu (`MobileMenuPanel`), supporting smooth touch navigation and backdrop blur.

### 2. Hero Section (`Hero.tsx`)
- **Typography & Badges**: Custom "Hello!" sparkle badge, bold gradient headline, and responsive font scaling.
- **Floating Testimonials & Stats**: Floating rating card ("10 Years Experience" with star rating icons) and client review text card.
- **Portrait & CSS Arch**: Custom CSS rounded background arch (`rounded-t-[999px]`) framing the high-resolution designer portrait with drop shadows.

### 3. Services Section (`ServicesSection.tsx`, `ServiceCard.tsx`)
- **Multi-layer Background**: Dark wavy texture paired with floating 3D orange gradient shape overlays (`mix-blend-screen`).
- **Horizontal Scroll / Grid**: Automatically transitions from a horizontal touch scroll view on mobile/tablet to a structured 3-column grid on desktop.
- **Service Cards**: Dynamic cards featuring title, icon badge, preview image, arrow action button, and subtle hover micro-interactions.

### 4. Under Development Modal (`UnderDevelopmentModal.tsx`)
- **Interactive Overlay**: Reusable component rendered on all sub-routes (`/about`, `/service`, `/resume`, `/project`, `/contact`) and 404 catch-all (`app/not-found.tsx`).
- **Design System Alignment**: Styled with dark card containers, orange ambient background glows, top sparkle badges, and a prominent "Back to Home" navigation button.
- **Header Clearance**: Calculated vertical padding (`pt-34 sm:pt-36 lg:pt-50`) ensuring zero layout overlap with the fixed top navigation bar.

---

## 🎨 Design System & Custom Tokens

Configured via Tailwind CSS v4 `@theme` directives in `app/globals.css`:

```css
@theme {
  /* Brand Colors */
  --color-brand-orange: #FD853A;
  --color-brand-dark: #171717;

  /* Fonts */
  --font-sans: var(--font-geist-sans), 'Outfit', 'Inter', sans-serif;
  --font-urbanist: var(--font-urbanist), sans-serif;
  --font-lufga: 'Lufga', var(--font-urbanist), sans-serif;

  /* Custom Radii & Animations */
  --radius-full: 9999px;
  --animate-float: float 3s ease-in-out infinite;
}
```

---

## 📁 Project Structure

```bash
jcrea-design/
├── app/
│   ├── (main)/
│   │   ├── (home)/
│   │   │   ├── _components/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── ServiceCard.tsx
│   │   │   │   └── ServicesSection.tsx
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── project/
│   │   │   └── page.tsx
│   │   ├── resume/
│   │   │   └── page.tsx
│   │   └── service/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── not-found.tsx
├── assets/
│   ├── icons/
│   │   ├── logo-jc-dekstop.svg
│   │   ├── logo-jc-mobile.svg
│   │   └── home/
│   └── images/
│       └── home/
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── MobileMenuPanel.tsx
│   │   ├── MobileNavbar.tsx
│   │   └── Navbar.tsx
│   └── ui/
│       └── UnderDevelopmentModal.tsx
├── public/
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **Package Manager**: `pnpm` (recommended) or `npm` / `yarn`

### 1. Clone the Repository
```bash
git clone https://github.com/mdkabirulhossain/jcrea-design.git
cd jcrea-design
```

### 2. Install Dependencies
```bash
pnpm install
# or
npm install
```

### 3. Run Development Server
```bash
pnpm dev
# or
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
To verify TypeScript compilation and static page generation:
```bash
pnpm build
# or
npm run build
```

