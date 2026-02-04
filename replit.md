# GameTime.ai Marketing Website

## Overview

GameTime.ai is a marketing/landing page website for Lead Intel, an AI-powered sales intelligence platform by GroundGame. The site targets enterprises and BPOs looking for AI-powered sales solutions, with the primary goal of driving demo/meeting requests.

**Vision:** "The AI layer to your humans that makes us work better."

This is a static marketing site built with Next.js App Router, featuring animated sections, a Mondrian-inspired design system, and responsive layouts optimized for conversion.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js 16 with App Router**: Chosen for server-side rendering, optimized performance, and modern React patterns
- **TypeScript**: Full type safety across the codebase
- **Path aliases**: `@/*` maps to `./src/*` for clean imports

### Styling Approach
- **Tailwind CSS 4**: Utility-first CSS with CSS variables for theming
- **Mondrian Design System**: Bold, geometric aesthetic using primary colors (red #FF0000, yellow #FFDE00, blue #0000FF) with thick black borders (6px grid lines)
- **CSS Variables**: Custom properties defined in `globals.css` for consistent theming
- **No rounded corners**: Sharp, geometric shapes matching the Mondrian aesthetic

### Animation
- **Framer Motion**: Used throughout for scroll-triggered animations, hover effects, and micro-interactions
- **Motion components**: Custom animated buttons and section reveals
- **Animated counters**: Numbers animate on scroll in the Metrics section
- **Prefers-reduced-motion**: Respects user accessibility preferences

### Component Architecture
- **UI Components** (`src/components/ui/`): Reusable primitives (Button, Container, SectionHeading)
- **Layout Components** (`src/components/layout/`): Header and Footer with responsive navigation
- **Section Components** (`src/components/sections/`): Page sections (Hero, Features, HowItWorks, Metrics, Testimonials, CTA)
- **Utility Functions** (`src/lib/utils.ts`): `cn()` helper using clsx and tailwind-merge for conditional class merging

### Page Structure
Single-page marketing site with sections:
1. Header (fixed, scroll shadow effect, mobile responsive menu)
2. Hero (bento-grid layout with interactive metric cards, live status indicator)
3. Features (8-card bento grid with varying sizes and Mondrian colors)
4. How It Works (3-step process with expandable details and progress bars)
5. Metrics (asymmetric Mondrian grid with animated number counters)
6. Testimonials (quote cards with metric bars and social proof)
7. CTA (bold conversion section with trust signals)
8. Footer (color-coded link columns with branding)

### Design Tokens
| Token | Value | Usage |
|-------|-------|-------|
| Primary | #0000FF | CTAs, headers, interactive elements |
| Secondary | #FF0000 | Accent buttons, highlights |
| Accent | #FFDE00 | Success states, attention |
| Background | #FFFFFF | Page background |
| Foreground | #000000 | Body text, borders |
| Grid lines | 6px black | Section dividers, card borders |

## External Dependencies

### Core Dependencies
- **next** (16.1.6): React meta-framework
- **react/react-dom** (19.2.3): UI library
- **framer-motion** (12.31.0): Animation library
- **lucide-react** (0.563.0): Icon library
- **clsx** + **tailwind-merge**: Class name utilities

### Development Dependencies
- **tailwindcss** (v4): CSS framework
- **@tailwindcss/postcss**: PostCSS integration
- **typescript** (v5): Type checking
- **eslint** + **eslint-config-next**: Linting

### Deployment
- **Vercel**: Target deployment platform (configured in next.config.ts with allowed dev origins for Replit)

### Typography
- **Geist Sans**: Primary font for headings and body
- **Geist Mono**: Monospace font for code snippets