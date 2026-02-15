# LeadEngine AU - Premium Lead Generation Website

A premium single-page business website for an Australian service-based company specializing in high-quality lead generation.

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- React Three Fiber + Drei

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Navbar.tsx          # Sticky navigation with mobile menu
│   ├── Hero.tsx            # Hero section with CTAs
│   ├── Hero3D.tsx          # 3D scene component (React Three Fiber)
│   ├── Services.tsx        # Services grid
│   ├── Packages.tsx        # Pricing packages (3-tier)
│   ├── Results.tsx         # Results/metrics section
│   ├── Process.tsx          # Process steps
│   ├── Locations.tsx        # Service locations
│   ├── FAQ.tsx             # FAQ accordion
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer with links
└── ...
```

## Features

- **Premium Design**: Clean, minimal aesthetic inspired by giolabs.lu and Apple
- **3D Hero Scene**: Lightweight Three.js scene with metallic orb (optimized for mobile)
- **Smooth Animations**: Framer Motion for scroll reveals and micro-interactions
- **Fully Responsive**: Mobile-first design with adaptive 3D rendering
- **Accessibility**: ARIA labels, keyboard navigation, proper semantic HTML
- **Scroll Navigation**: Smooth scroll-to-section with active link highlighting
- **Color Scheme**: Yellow accent (rgb(255 199 0)), Black, White
- **Typography**: Inter font with large headings and premium spacing

## Design Notes

- Yellow is used sparingly as an accent color (buttons, highlights)
- Black/white background with subtle gradients
- Noise texture overlay for premium feel
- Glassmorphism effects used minimally
- Large typography with generous whitespace
- Subtle motion and micro-interactions throughout

## Performance

- 3D scene is optimized for mobile (reduced quality, no environment on mobile)
- Dynamic imports for 3D components
- Lazy loading and code splitting
- Optimized animations with Framer Motion
