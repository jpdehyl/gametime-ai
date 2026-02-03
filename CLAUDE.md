# CLAUDE.md - GameTime.ai Marketing Website

## Project Overview

**GameTime.ai** is a marketing/landing page website for Lead Intel, an AI-powered sales intelligence platform by GroundGame.

**Vision:** "The AI layer to your humans that makes us work better."

**Target Audience:** Enterprises and BPOs looking for AI-powered sales solutions.

**Primary CTA:** Request meetings/demos

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Vercel

## Brand Guidelines

### Color Palette

Based on GroundGame branding:

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#1e3a5f` | Headers, CTAs, primary elements |
| Secondary | `#f97316` | Accent buttons, highlights, energy |
| Accent | `#0d9488` | Success states, highlights |
| Background | `#ffffff` | Page background |
| Foreground | `#0f172a` | Body text |
| Muted | `#f1f5f9` | Subtle backgrounds |

### Typography

- **Headings:** Geist Sans (bold)
- **Body:** Geist Sans (regular)
- **Mono:** Geist Mono (code snippets)

### Design Principles

1. **Clean & Professional** - Enterprise-ready appearance
2. **Performance-Focused** - Fast loading, optimized images
3. **Mobile-First** - Responsive across all devices
4. **Accessible** - WCAG 2.1 AA compliant

## Project Structure

```
gametime-ai/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Homepage
│   │   ├── globals.css     # Global styles & CSS variables
│   │   └── [pages]/        # Additional pages
│   ├── components/
│   │   ├── ui/             # Reusable UI components
│   │   ├── sections/       # Page sections (Hero, Features, etc.)
│   │   └── layout/         # Header, Footer, Navigation
│   └── lib/
│       └── utils.ts        # Utility functions (cn helper)
├── public/
│   ├── images/             # Static images
│   └── videos/             # Video assets
└── package.json
```

## Pages to Build

1. **Homepage** (`/`)
   - Hero with video background
   - Logo bar (client trust signals)
   - Problem → Solution section
   - Features grid
   - How it works
   - ROI metrics
   - Testimonials
   - CTA section

2. **Features** (`/features`)
   - AI Research deep dive
   - Live Coaching
   - Analytics & Reporting
   - CRM Integration

3. **Solutions** (`/solutions`)
   - For BPOs
   - For Enterprises
   - For Sales Teams

4. **About** (`/about`)
   - GroundGame story
   - Team
   - Mission

5. **Contact** (`/contact`)
   - Demo request form
   - Meeting scheduler embed

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Deployment

Connected to Vercel for automatic deployments:
- Push to `main` → Production deploy
- Push to other branches → Preview deploys

## Key Dependencies

- `framer-motion` - Animations and transitions
- `lucide-react` - Icon library
- `clsx` + `tailwind-merge` - Class name utilities

## Notes

- Keep components small and focused
- Use CSS variables for theming
- Optimize all images (WebP, proper sizing)
- Ensure all CTAs are trackable
- Test on mobile devices regularly
