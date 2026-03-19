# ExhibitorView Component

## Overview
`ExhibitorView.jsx` renders the Exhibitor section with tabbed sub-views for companies interested in showcasing at MIHAS 2026.

## Sub-Views
- **why-exhibit**: Performance metrics (80+ Countries, 4,000+ Meetings, RM4.3B Sales), reasons grid, and Book Space / MIHAS Hybrid CTAs.
- **who-should-exhibit**: Exhibitor profile grid mapping through `exhibitorCategories` (14 sectors: Food & Beverages, Pharmaceuticals, Islamic Finance, etc.). Includes a dark CTA block for custom enquiries.
- **incentives**: Premium incentives page featuring:
  - OIC market access description and "Apply Now" CTA
  - Key Benefits checklist (7 items) in a dark card
  - 3 animated benefit cards (OIC Market Access, Brand Amplification, Industry Recognition)
  - Orange "Ready to Exhibit?" CTA block

## Props
- `subView` (String): Active tab state.
- `setSubView` (Function): Tab navigation handler.
- `onOpenForm` (Function): Opens the multi-step exhibitor registration form.

## Data Dependencies
- `exhibitorTabs`, `whyExhibitData`, `exhibitorCategories` from `data/exhibitor.js`
