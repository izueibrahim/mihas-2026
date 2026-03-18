# HomeView Component

## Overview
`HomeView.jsx` is the primary landing page rendered when a user navigates to the root `/` path. It creates the initial impression for the MIHAS 2026 website, combining a powerful hero section, strategic calls-to-action, dynamic sponsor layouts, and blog/news summaries.

## Core Features
1. **Hero Section (Full-Viewport)**: Connects users instantly to value via high-impact messaging ("Gateway to the Global Halal Economy") and provides top-level conversion buttons (Book Space, Register).
2. **Heritage & Impact**: Statistics layout utilizing `statsData` to display historical data.
3. **Tri-CTA Block**: Highly styled grids directing users rapidly to Exhibitor benefits and Showcase films.
4. **Testimonials**: Hard-coded interactive quote block displaying authority in the industry.
5. **Insights & Media Highlight**: Promotes the newest Press Releases and Blog feeds (via `blogs` and `newsData`).
6. **Sponsor Validation**: Injects `SponsorShowcase` at the footer bounds for immediate business proof.

## Props
- `navigate` (Function): Hook provided by the parent application router.
- `onOpenForm` (Function): Method to open the multi-step registration flow.
