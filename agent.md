PROJECT ENHANCEMENT PROMPT — KELVANN GROUP OF COMPANIES

You are working inside an EXISTING Next.js/React website repository for:

KELVANN GROUP OF COMPANIES

IMPORTANT:
This is an enhancement and integration task, NOT a rebuild.

The existing repository already contains a working corporate website with an established UI/UX, layout structure, components, styling, navigation, footer, pages, and assets.

Your responsibility is to carefully inspect the existing project first and then ENHANCE what already exists.

DO NOT unnecessarily restructure the project.
DO NOT replace the existing architecture.
DO NOT rebuild the entire website from scratch.
DO NOT delete working components simply because you would structure them differently.
DO NOT replace the existing logo.
DO NOT replace the existing visual identity.

The goal is to evolve the current website into a more polished, premium, scalable corporate group website while preserving the existing UI/UX foundation.

==================================================
1. EXISTING WEBSITE UI/UX — PRESERVE THIS FOUNDATION
==================================================

The current website already follows a corporate structure similar to the supplied reference screenshot.

The existing visual hierarchy includes:

- White corporate navigation/header
- Kelvann Group logo
- Main navigation
- Large full-width hero section
- Corporate/world/business imagery
- Strong headline and CTA
- Subsidiary/company section
- Corporate message/leadership section
- News/updates section
- Footer with contact information, quick links, and social links

This overall hierarchy should remain recognizable.

Think:

CURRENT WEBSITE
        ↓
ENHANCE
        ↓
MORE PREMIUM
        ↓
MORE INTERACTIVE
        ↓
MORE SCALABLE
        ↓
MORE FUTURE-READY

Do not replace the website with a completely different design language.

The final result should feel like a significantly improved version of the existing website, not a completely unrelated redesign.

==================================================
2. BRAND IDENTITY — THE EXISTING KELVANN LOGO IS THE SOURCE OF TRUTH
==================================================

The existing Kelvann Group logo in the repository is the official logo.

KEEP IT.

Do not redesign it.
Do not generate a replacement logo.
Do not alter its proportions.
Do not recolor it arbitrarily.
Do not substitute it with a new logo.
Do not create another brand identity.

Build the website's visual system around the existing logo.

Primary visual direction:

- Bright cyan / Kelvann blue
- Deep corporate navy
- White
- Very light blue
- Dark navy typography
- Subtle gray-blue surfaces

The interface should feel:

- Corporate
- Premium
- Modern
- Established
- Technology-aware
- International
- Trustworthy
- Forward-looking

Avoid making it look like a generic template or generic Nigerian business website.

==================================================
3. FUGA-T REFERENCE — STRUCTURAL INSPIRATION ONLY
==================================================

Use the previously supplied FUGA-T Group website as a STRUCTURAL REFERENCE.

FUGA-T reference:

https://www.fuga-t.org/#

IMPORTANT:

DO NOT copy:

- Their exact layout
- Their text
- Their images
- Their branding
- Their colors
- Their company descriptions
- Their animations
- Their source code
- Their content

Instead, study the underlying corporate storytelling model:

PARENT GROUP
      ↓
BUSINESS AREAS / SUBSIDIARIES
      ↓
INDIVIDUAL COMPANY INFORMATION
      ↓
GROUP STORY / CORPORATE MESSAGE
      ↓
NEWS / PROJECTS / UPDATES
      ↓
CONTACT

Use this information architecture as inspiration while keeping Kelvann's existing UI/UX and identity.

==================================================
4. CORE KELVANN WEBSITE HIERARCHY
==================================================

The website should communicate this hierarchy clearly:

KELVANN GROUP OF COMPANIES
        ↓
OUR COMPANIES
        ↓
KELVANN KRYSTAL LIMITED
        ↓
FUTURE SUBSIDIARIES

Kelvann Group is the parent organization.

At the moment, there is ONLY ONE REAL SUBSIDIARY:

KELVANN KRYSTAL LIMITED

There will be additional companies in the future.

Therefore, design the architecture so new subsidiaries can easily be added later.

Do NOT invent real subsidiary names.

Do NOT pretend that future companies currently exist.

Use clearly labeled future placeholders such as:

COMING SOON

when necessary.

==================================================
5. HOMEPAGE — ENHANCE THE EXISTING STRUCTURE
==================================================

Keep the existing homepage structure, but improve its storytelling and visual quality.

Recommended storytelling:

1. HERO
2. GROUP INTRODUCTION
3. OUR COMPANIES
4. KELVANN KRYSTAL FEATURE
5. GROUP / FUTURE VISION
6. CORPORATE MESSAGE / ABOUT
7. NEWS / UPDATES
8. CONTACT CTA
9. FOOTER

The exact existing section structure should be preserved where practical.

Do not force this structure if equivalent sections already exist in the repository.

Instead, map the existing components to this hierarchy and enhance them.

==================================================
6. HERO SECTION
==================================================

Preserve the existing hero section's position and general composition.

Enhance it with:

- Strong corporate typography
- Better visual hierarchy
- More refined spacing
- Subtle animation
- Premium background treatment
- Smooth entrance animation
- Better responsive behavior
- Strong CTA interaction

The hero should communicate:

KELVANN GROUP OF COMPANIES

A growing corporate group building businesses and creating value across multiple sectors.

Do not invent statistics, achievements, global operations, subsidiaries, or claims that have not been provided.

The hero should feel ambitious without making unsupported claims.

Potential messaging direction:

"BUILDING THE FUTURE OF INDUSTRY"

or similar language may be used if it fits the existing design.

Do not overwrite existing meaningful content unnecessarily.

==================================================
7. OUR COMPANIES — THIS IS THE MOST IMPORTANT ENHANCEMENT
==================================================

The current website already has a subsidiary/company section.

Preserve its location and purpose, but transform it into a much more sophisticated company showcase.

This section should become one of the signature interactions of the website.

Instead of a basic static grid whenever practical, implement a HORIZONTAL COMPANY CAROUSEL / HORIZONTAL STORYTELLING EXPERIENCE.

Desired behavior:

As the user scrolls vertically:

VERTICAL SCROLL
       ↓
HORIZONTAL COMPANY MOVEMENT
       ↓
COMPANY 01
       →
COMPANY 02
       →
COMPANY 03
       →
COMPANY 04

Use GSAP + ScrollTrigger if GSAP is already present or can be integrated cleanly.

The experience should feel cinematic and premium.

Possible desktop behavior:

- Section becomes pinned
- Horizontal track moves as the user scrolls
- Large company cards/panels move from left to right
- Each company has its own visual
- Company information appears progressively
- Subtle scale/opacity transitions
- Active company receives stronger visual emphasis

Do NOT make the animation excessive.

The experience must remain usable.

==================================================
8. COMPANY DATA ARCHITECTURE
==================================================

Do not hard-code every company directly into the UI if the project architecture allows a clean data-driven approach.

Create or enhance an existing company data structure.

For example:

companies = [
    {
        name: "Kelvann Krystal Limited",
        slug: "kelvann-krystal",
        status: "active",
        description: "...",
        image: "...",
    },
    {
        name: "Future Company",
        status: "coming-soon",
    }
]

However:

DO NOT invent fake company names.

For future companies, use neutral placeholders such as:

"Coming Soon"

or a generic placeholder object without pretending a company exists.

The goal is that adding a new company later should require changing company data rather than rebuilding the carousel.

==================================================
9. KELVANN KRYSTAL LIMITED
==================================================

Kelvann Krystal Limited is currently the ONLY confirmed subsidiary.

It should receive special treatment.

The homepage should provide a clear route into the company.

For example:

/companies/kelvann-krystal

If the repository already has an equivalent routing structure, use the existing structure rather than introducing unnecessary changes.

The company section should allow users to understand:

KELVANN GROUP
        ↓
KELVANN KRYSTAL LIMITED

The page should feel like a subsidiary within a larger corporate ecosystem rather than an unrelated standalone company.

Do not invent services, achievements, statistics, projects, or operational claims for Kelvann Krystal unless those details already exist in the repository or have been explicitly provided.

==================================================
10. FUTURE SUBSIDIARIES
==================================================

The architecture must anticipate expansion.

Future company cards can appear as:

COMING SOON

They should visually communicate:

"The Kelvann Group is growing."

But they must not imply that the companies already exist.

Possible treatment:

- Muted image treatment
- Abstract corporate imagery
- "Coming Soon" badge
- Disabled/subtle CTA
- Elegant placeholder design

Do not use fake company names.

==================================================
11. COMPANY CARD DESIGN
==================================================

Improve the existing subsidiary cards without destroying the current visual language.

Possible card structure:

[IMAGE]

STATUS
ACTIVE

KELVANN KRYSTAL LIMITED

Short company description.

EXPLORE COMPANY →

Hover behavior:

- Image subtly scales
- Overlay gently appears
- Cyan accent becomes more prominent
- Arrow moves slightly
- Card elevation increases subtly
- Typography transitions smoothly

For future companies:

COMING SOON

No misleading "Learn More" link if there is no page.

==================================================
12. GROUP INTRODUCTION
==================================================

Enhance the existing introduction section.

The message should establish:

Kelvann Group is the parent organization.

The group is designed to operate across multiple business areas through subsidiaries.

The company structure is growing.

Avoid unsupported claims.

Possible conceptual direction:

"ONE GROUP. A GROWING VISION."

Use large typography, clean composition, subtle motion, and strong whitespace.

==================================================
13. GROUP FUTURE / EXPANSION SECTION
==================================================

Introduce or enhance a section communicating the future expansion of Kelvann Group.

Visual concept:

KELVANN GROUP
      │
      ├── KELVANN KRYSTAL
      │
      ├── COMING SOON
      │
      ├── COMING SOON
      │
      └── FUTURE BUSINESSES

This does NOT need to literally be a tree diagram.

It can instead be represented through:

- Connected cards
- Animated lines
- Horizontal progression
- Corporate ecosystem visualization
- Minimal network graphics

Keep it elegant.

Avoid excessive futuristic effects.

==================================================
14. CHAIRMAN / CORPORATE MESSAGE
==================================================

If the existing project contains a Chairman's Message section:

KEEP IT.

Enhance:

- Typography
- Spacing
- Image treatment
- Quote styling
- Responsive layout
- Entrance animation

Do not invent a chairman's name, biography, quotation, credentials, or achievements.

Use existing project content where available.

If existing content is placeholder content, do not fabricate new facts.

==================================================
15. NEWS / UPDATES
==================================================

If the current repository contains a Latest News & Updates section:

KEEP THE SECTION.

Improve:

- Card design
- Image presentation
- Typography
- Hover states
- Category badges
- Responsive behavior
- Scroll animation

Do not fabricate real news events.

Existing placeholder content may remain clearly identifiable as placeholder content until real content is supplied.

==================================================
16. NAVIGATION
==================================================

Preserve the existing navigation structure and improve it rather than replacing it.

The navigation should communicate:

KELVANN GROUP
- Home
- About Us
- Our Companies
- Careers
- Contact

If practical, "Our Companies" can become an expandable navigation item containing:

- Kelvann Krystal Limited
- Coming Soon

Do not make the navigation unnecessarily complicated.

Desktop:

- Clean corporate navbar
- Existing logo
- Clear active state
- Smooth hover transitions

Mobile:

- Elegant mobile menu
- Smooth open/close animation
- Accessible controls
- Proper keyboard/focus behavior

==================================================
17. ANIMATION SYSTEM
==================================================

Use animation to improve storytelling, not to demonstrate animation skills.

Preferred technologies:

- GSAP
- ScrollTrigger
- CSS transitions
- Next.js/React animation patterns already used by the repository

Potential animation areas:

HERO:
- Text entrance
- CTA entrance
- Background movement

GROUP INTRO:
- Scroll reveal
- Text movement

COMPANIES:
- Horizontal scrolling
- Card reveal
- Image scaling
- Active company transitions

GROUP FUTURE:
- Connected line animation
- Progressive reveal

NEWS:
- Subtle card reveal

NAVIGATION:
- Smooth mobile menu
- Active states

Do not create animation overload.

==================================================
18. RESPONSIVE DESIGN
==================================================

The existing website must remain fully responsive.

Desktop:
- Full horizontal company storytelling
- Large imagery
- Strong corporate composition

Tablet:
- Reduce spacing and scale
- Preserve hierarchy
- Adjust carousel behavior

Mobile:
- Prioritize readability
- Allow natural touch/swipe interaction
- Do not force an uncomfortable pinned horizontal-scroll experience
- Company cards should remain easy to browse
- Navigation should be mobile-friendly
- Buttons should remain touch-friendly

If a desktop animation damages mobile usability, use a different mobile implementation.

==================================================
19. PERFORMANCE
==================================================

Do not sacrifice performance for visual effects.

Use:

- Next.js Image where appropriate
- Lazy loading where appropriate
- Optimized image sizes
- Efficient GSAP usage
- Cleanup ScrollTrigger instances
- Avoid unnecessary React re-renders
- Avoid excessive client components
- Keep server components where appropriate
- Avoid loading huge libraries for simple effects

Animations should remain smooth on mid-range hardware.

==================================================
20. ACCESSIBILITY
==================================================

Maintain or improve:

- Semantic HTML
- Keyboard navigation
- Focus states
- Accessible buttons
- Accessible links
- Meaningful alt text
- Sufficient contrast
- Reduced-motion support

Respect:

prefers-reduced-motion

When reduced motion is enabled, disable or simplify cinematic scroll effects.

==================================================
21. CODEBASE RULE
==================================================

BEFORE MODIFYING ANYTHING:

1. Inspect the repository.
2. Understand the existing architecture.
3. Identify the existing pages.
4. Identify reusable components.
5. Identify styling system.
6. Identify animation libraries already installed.
7. Identify image/assets already available.
8. Identify routing structure.
9. Identify existing data structures.
10. Identify what can be enhanced rather than replaced.

Then implement the improvements.

IMPORTANT:

Reuse existing components whenever practical.

Do not create duplicate components if an existing component can be enhanced.

Do not rename files or directories without a strong reason.

Do not migrate the project to a different framework.

Do not replace the existing styling system unnecessarily.

Do not introduce unnecessary dependencies.

==================================================
22. CONTENT SAFETY / FACTUAL ACCURACY
==================================================

Never invent:

- Subsidiaries
- Directors
- Executives
- Statistics
- Revenue
- Offices
- Countries of operation
- Partnerships
- Certifications
- Awards
- Projects
- Clients
- Achievements
- Services
- Corporate history

unless the information already exists in the project or is explicitly provided.

If information is missing, use a neutral placeholder.

The website should look complete visually without pretending unsupported facts are real.

==================================================
23. VISUAL DIRECTION
==================================================

The finished website should feel like:

A PREMIUM CORPORATE GROUP WEBSITE

rather than:

A generic company landing page.

Design characteristics:

- Strong editorial typography
- Large visual sections
- Deep navy surfaces
- Cyan accents
- White space
- High-quality imagery
- Subtle borders
- Soft shadows
- Refined transitions
- Cinematic scrolling
- Strong visual hierarchy
- Professional corporate tone

Avoid:

- Excessive gradients
- Excessive glassmorphism
- Random glowing effects
- Overly futuristic UI
- Generic dashboard aesthetics
- Excessive rounded cards
- Template-like layouts
- Unnecessary animations

==================================================
24. IMAGE DIRECTION
==================================================

Use high-quality corporate imagery where appropriate.

Image categories can include:

- Modern architecture
- Business environments
- Technology
- Infrastructure
- Industry
- Logistics
- Real estate
- Finance
- Corporate environments

However:

DO NOT imply that an image represents an actual Kelvann facility, employee, project, or subsidiary unless it genuinely does.

Stock/placeholder imagery should be treated as illustrative.

==================================================
25. FOOTER
==================================================

Preserve the existing footer structure.

Improve:

- Visual hierarchy
- Spacing
- Link organization
- Social icon presentation
- Responsive layout

The footer should reinforce:

KELVANN GROUP OF COMPANIES

with navigation to:

- Home
- About
- Our Companies
- Careers
- Contact

Include only real contact/social information already available in the repository.

Do not invent contact details.

==================================================
26. ROUTING
==================================================

Preserve existing routes.

If the architecture supports it, the company structure should eventually follow:

/companies
/companies/kelvann-krystal

But do not break existing URLs.

If equivalent routes already exist, reuse them.

==================================================
27. FINAL IMPLEMENTATION PHILOSOPHY
==================================================

The key principle is:

ENHANCE, DON'T REPLACE.

The existing website already has the foundation.

Your task is to transform it from:

"GOOD CORPORATE WEBSITE"

into:

"POLISHED, PREMIUM, SCALABLE CORPORATE GROUP WEBSITE"

while retaining its existing identity.

The user should still recognize the original website after the enhancement.

The improvements should feel intentional and integrated.

==================================================
28. FINAL EXPERIENCE
==================================================

The visitor journey should feel like:

KELVANN GROUP
        ↓
UNDERSTAND THE GROUP
        ↓
DISCOVER THE COMPANIES
        ↓
MOVE THROUGH THE COMPANY CAROUSEL
        ↓
EXPLORE KELVANN KRYSTAL
        ↓
UNDERSTAND THE GROUP'S FUTURE
        ↓
READ CORPORATE INFORMATION / UPDATES
        ↓
CONTACT KELVANN

The most important visual relationship is:

KELVANN GROUP
       ↓
OUR COMPANIES
       ↓
KELVANN KRYSTAL LIMITED
       ↓
FUTURE SUBSIDIARIES

==================================================
29. BEFORE YOU FINISH
==================================================

After implementation:

- Verify the existing routes still work.
- Verify the existing logo remains unchanged.
- Verify existing important content has not been accidentally removed.
- Verify the navbar works.
- Verify mobile navigation works.
- Verify the company carousel works.
- Verify GSAP/ScrollTrigger cleanup.
- Verify there are no hydration errors.
- Verify there are no console errors.
- Verify images load correctly.
- Verify responsive behavior.
- Verify reduced-motion behavior.
- Verify no fake company information has been introduced.
- Verify existing project architecture has been preserved.

Do not simply create a visual mockup.

Implement the improvements directly into the existing project.

The final result should be a refined evolution of the current Kelvann Group website, combining its existing UI/UX with the corporate group storytelling and interaction principles inspired by FUGA-T.