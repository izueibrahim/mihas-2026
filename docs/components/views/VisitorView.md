# VisitorView Component

## Overview
`VisitorView.jsx` is the dedicated landing environment optimized for driving attendee registration. It handles routing and specialized tabbed content tailored exclusively for visitors (trade buyers, public consumers).

## Sub-Views
- **overview**: Connects the user with base-level conversion. Uses the `visitorProfileData` to map out exactly who typically visits, improving targeting.
- **why-visit**: Outlines detailed advantages (sourcing products, expanding networks) mapping from the `whyVisitData`. Incorporates clear calls to action.
- **how-to-register**: Breaks down the visitor journey step-by-step using timeline UI elements powered by the `registrationStepsData`.
- **faq**: Integrates an expandable accordion list (`ExpandableCard`) pulling heavily nested objects from `visitorFaqData`.

## Data Connectivity
This component acts rapidly as a state wrapper mapping external static assets (`data/visitor.js` and `data/faq.js`) into pre-styled structural tailwind objects securely.
