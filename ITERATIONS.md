# Venture & Gain — Redesign Iterations

## Iteration 1 — Initial Build
**Commit:** bad437a  
**Branch:** main  
**Vercel Preview:** https://venturexgain-7jn6feq9j-hadi-rickits-projects.vercel.app  
**Critique Score:** 22/40  

**What was built:**
- Full React + Vite + Tailwind + Framer Motion scaffold
- 10 sections: Hero, Marquee, About, Stats, Services, Process, Testimonials, CTA, Contact, Footer
- SEO meta tags, Google Fonts (Cormorant Garamond + Jost)
- Dark navy + gold palette, full-bleed hero photo overlay

**Critique verdict:** FAIL — AI-generated aesthetic. Hits every AI luxury template tell: navy+gold, Unsplash hero overlay, marquee, stat cards, alternating dark panels, duplicate CTA, slider testimonials.

---

## Iteration 2 — Full Editorial Redesign
**Commit:** 931e007  
**Branch:** main  
**Critique Score:** 30/40  

**Improvements from Iteration 1:**
- New palette: warm ivory (#f6efe3) + deep charcoal (#1c1410) + earthy amber (#b87d3a)
- Hero redesigned: text-dominant editorial layout, no full-bleed photo overlay
- Sections reduced: 10 → 5 (Hero, About, Services, Testimonials, Contact)
- Services: expandable accordion numbered list — replaced 3 dark alternating panels
- Testimonials: 3 editorial blockquotes in grid — replaced dot-nav slider
- Removed: Marquee, Stats row, Process, duplicate CTA section
- Contact: Formspree async integration (no more mailto)
- Anti-pattern verdict changed to PASS

**Remaining issues identified:**
- [P1] Services expanded content breaks on mobile (paddingLeft: 84px hardcoded)
- [P1] Hover on h3 inside Link — not keyboard accessible
- [P2] Hero image still generic Unsplash
- [P2] No focus styles throughout
- [P3] Blog section header thin relative to section weight
- Missing content parity with venturexgain.com

---

## Iteration 3 — Blog + Content Parity + Accessibility Fixes
**Commit:** 22a1bd9  
**Branch:** main  
**Vercel Preview:** https://venturexgain-qtbebir7j-hadi-rickits-projects.vercel.app  
**Critique Score:** 33/40  

**Improvements from Iteration 2:**
- Blog section added with 4 articles matching real venturexgain.com topics:
  - EU/ETIAS entry requirements for Americans
  - Ecuador beyond the Galápagos
  - 6 epic road trips in Southern Africa
  - Planning your first bespoke luxury trip
- Full blog index page (/journal) and individual post pages (/journal/:slug)
- React Router added with SPA rewrite in vercel.json
- "Our Story" + "What We Value" sections added to About (matching original site structure)
- Full verbatim testimonial quotes restored (Ava/Abby/Natacha with trip destinations)
- "7 continents" + "pack your bags" copy added to Hero
- "Book a Call" button added to Hero → tidycal.com/venturexgain
- FAQ link in navbar → venturexgain.com/faq-2
- Virtuoso Travel Advisor credential added to About
- Email capture section ("Join the Hive") with logistics guide offer
- Fixed: Services mobile padding (paddingLeft: 84px → responsive)
- Fixed: Focus styles added globally (outline: 2px solid var(--gold))
- Fixed: a:hover h3 CSS rule (removes onMouseEnter on non-interactive elements)
- Fixed: Testimonials mobile border logic (md:border-r via className)
- Fixed: ChevronDown icon replaces raw Unicode arrow in Hero

**Critique score target:** 34+/40

---

## Iteration 4 — Experience Showcase + Rhythm Fixes + Services Copy
**Commit:** (current)  
**Branch:** main  
**Vercel Preview:** https://venturexgain-cv2ct8fip-hadi-rickits-projects.vercel.app  
**Critique Score:** TBD  

**Improvements from Iteration 3:**
- Added Experiences section: visual grid of bespoke experience examples (cycling vineyards, horseback riding, safari walking, canoe naturalist)
- Signature Service description updated: now leads with specific examples (private vineyard cycling, estate horseback riding, unlisted experts)
- Email capture moved from standalone section into Footer as a slim strip — removes 3rd consecutive dark section
- Fixed: About "What We Value" grid — removed double-padding (inline style + className conflict)
- Fixed: BlogPost CTA uses navigate() + scrollIntoView instead of unreliable /#contact Link
- Fixed: unused EmailCapture import removed
- Vercel preview URLs added to all iterations in ITERATIONS.md

**Critique Score:** 35/40

---

## Iteration 5 — Hero Image + /rebuild Skill + Offset Border Removal
**Commit:** (current)
**Branch:** main
**Vercel Preview:** TBD

**Changes:**
- Hero editorial photo replaced with less stock-looking travel image
- Removed offset-border anti-pattern from hero photo
- `/rebuild` skill created at `~/.claude/skills/rebuild/` (workflow automation, not site code)

**Critique score target:** 37+/40
