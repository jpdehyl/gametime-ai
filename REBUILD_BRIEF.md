# GameTime.ai Website Rebuild Brief

## Project
Rebuild the GameTime.ai marketing website. Keep existing Next.js + Tailwind + Framer Motion stack. Complete content and design overhaul.

## Brand
- **Product:** GameTime.ai — AI-powered sales intelligence platform
- **Parent company:** GroundGame (CEO: Marc Snegg)
- **What it does:** Full AI layer for sales teams — pre-call research, real-time coaching, post-call analysis, AE handoff
- **Target buyer:** BPOs and companies wanting to integrate AI into their sales operations
- **Stage:** MVP live, production-ready coming soon
- **Client shown in screenshots:** Hawk Ridge Systems (white-label deployment)

## Design Direction
- **Colors:** Keep Mondrian palette (Red #FF0000, Yellow #FFDE00, Blue #0000FF, Black, White) but use as ACCENTS, not full blocks
- **Inspiration:** factory.ai — dark, minimal, confident, lots of breathing room
- **Theme:** DARK background (matches the product's dark UI)
- **Typography:** Keep Geist Sans/Mono. Bold headlines, clean body.
- **NO fake stats, NO fake testimonials, NO generic SaaS copy**
- **Use real product screenshots** from /public/screenshots/
- Mondrian grid lines as subtle design elements, not overwhelming
- Hover effects: subtle lift + shadow, not the heavy current mondrian-cell hover

## Screenshots Available (in /public/screenshots/)
1. `dashboard-callqueue.jpg` — Smart Call Queue with AI-prioritized leads, fit scores
2. `dashboard-leaderboard.jpg` — SDR Leaderboard, Action Required, AI Insights, Monthly Goals
3. `leads-database.jpg` — Lead Intel Database, 875 leads, Company/Contact/Talk Track tabs, Speed Brief
4. `call-prep.jpg` — Call Prep view, Fit Score 90, BANT, Pain Points, Discovery Questions
5. `call-center.jpg` — Call Center with Zoom Phone, Recent Calls list
6. `call-analysis.jpg` — Call Details modal, Performance Scorecard, Observations, Transcript
7. `ae-pipeline.jpg` — AE Pipeline, TOFU Summary, Company Intel, Pain Signals, Sales Strategy
8. `reports-hub.jpg` — AI Reports Hub, Team Oversight, SDR Performance, Disposition Breakdown
9. `manager-dashboard.jpg` — Manager Dashboard KPIs, Sales Funnel, Activity charts
10. `team-member.jpg` — Individual SDR profile with badges, performance
11. `team-directory.jpg` — Team Directory, 3 Managers, 20 SDRs, 5 AEs
12. `lead-intel-landing.jpg` — Lead Intel splash/landing

## Page Structure (sections in order)

### 1. Header
- Mondrian mark (3 colored squares) + "GameTime.ai" text
- Nav: Platform | Features | About
- CTA: "Request Access" button
- Sticky, dark background, minimal

### 2. Hero
- Headline: "The AI Layer That Makes Sales Teams Unstoppable"
- Sub: "From pre-call research to post-call coaching — GameTime gives every rep an AI copilot that knows your playbook, preps your calls, and coaches in real-time."
- Two CTAs: "Request Access" (primary) + "See the Platform" (secondary, scrolls down)
- Visual: Main product screenshot (dashboard-callqueue.jpg) in a subtle device frame/glow
- Small "A product by GroundGame" badge

### 3. Problem Section
- Headline: "Your Sales Team Has a Preparation Problem"
- Three pain points in a clean grid:
  1. "Reps spend 40% of their time on research instead of selling"
  2. "New hires take 6+ months to ramp to full productivity"
  3. "Managers can't coach every call — critical moments get missed"
- Design: Dark bg, white text, Mondrian color accents on borders/highlights

### 4. Platform Overview (the big showcase)
- Headline: "One Platform. Every Advantage."
- Sub: "GameTime covers the entire sales cycle — from the moment a lead enters your pipeline to the moment it closes."
- Show 4 key stages with screenshots:
  1. **Research** — "AI researches every lead before you pick up the phone" → leads-database.jpg
  2. **Prepare** — "BANT qualification, pain points, and discovery questions — ready in seconds" → call-prep.jpg  
  3. **Execute** — "Call with confidence. AI coaches you through every conversation." → call-center.jpg + call-analysis.jpg
  4. **Handoff** — "Qualified leads flow to AEs with full context and AI-generated strategy" → ae-pipeline.jpg
- Design: Each stage is a card with screenshot, heading, description. Alternating layout (image left/right)

### 5. Features Grid
- Headline: "Built for Sales Teams That Move Fast"
- 6 features in a bento-style grid (Mondrian-inspired but cleaner):
  1. **Smart Call Queue** — AI-prioritized by fit score, urgency, research status (dashboard-callqueue.jpg)
  2. **AI Call Analysis** — Every call scored across 7 dimensions (call-analysis.jpg)
  3. **SDR Leaderboard** — Gamified performance tracking with badges (dashboard-leaderboard.jpg)
  4. **AI Reports Hub** — Team oversight, disposition breakdown, coaching insights (reports-hub.jpg)
  5. **Team Management** — Org structure, performance by rep, manager views (team-directory.jpg)
  6. **Manager Dashboard** — KPIs, funnels, and trends at a glance (manager-dashboard.jpg)

### 6. How It Works
- Headline: "Live in Days, Not Months"
- Three steps:
  1. "Connect" — Integrate with your CRM, dialer, and tools
  2. "Import" — Bring your leads, playbook, and team structure
  3. "Go Live" — AI starts researching, scoring, and coaching immediately
- Clean horizontal layout, numbered steps, Mondrian accent colors

### 7. About / GroundGame
- Headline: "Built by GroundGame"
- Brief about the vision: "We believe AI should work alongside humans, not replace them. GameTime is the AI layer that makes your existing team dramatically more effective."
- Marc Snegg, CEO mention
- "A product by GroundGame" with the Mondrian mark

### 8. CTA Section
- Headline: "Ready to Give Your Team an Unfair Advantage?"
- Sub: "Join the companies already using GameTime to transform their sales operations."
- CTA: "Request Early Access" (big button)
- Secondary: "or email hello@gametime.ai"

### 9. Footer
- Minimal, dark
- GroundGame branding
- Links: Platform, Features, About, Privacy, Terms
- © 2026 GroundGame. All rights reserved.

## Technical Notes
- Keep using Next.js App Router
- Keep Framer Motion for animations (but subtler than current)
- Keep Tailwind CSS
- Keep Geist fonts from layout.tsx
- All screenshots go in `next/image` components with proper alt text
- Make sure all images are properly imported/referenced
- Mobile responsive (factory.ai mobile behavior)

## Files to Modify
1. `src/app/globals.css` — New dark theme + refined Mondrian system
2. `src/app/page.tsx` — New section order
3. `src/app/layout.tsx` — Update metadata (title, description)
4. `src/components/layout/Header.tsx` — Redesign
5. `src/components/layout/Footer.tsx` — Redesign
6. `src/components/sections/Hero.tsx` — Complete rewrite
7. `src/components/sections/Features.tsx` — Complete rewrite (bento grid)
8. `src/components/sections/HowItWorks.tsx` — Complete rewrite
9. `src/components/sections/CTA.tsx` — Complete rewrite
10. NEW: `src/components/sections/Problem.tsx`
11. NEW: `src/components/sections/Platform.tsx`
12. NEW: `src/components/sections/About.tsx`
13. DELETE: `src/components/sections/Metrics.tsx` (redundant)
14. DELETE: `src/components/sections/Testimonials.tsx` (fake)
15. `src/components/ui/Button.tsx` — Update variants for dark theme
16. `public/logo.svg` — Mondrian geometric mark
