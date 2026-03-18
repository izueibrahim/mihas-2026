# ExhibitorView Component

## Overview
`ExhibitorView.jsx` handles global access to B2B exhibition resources. This view is tailored to heavy data-payloads regarding cluster layout, booth specifications, and booking validation.

## Sub-Views
- **why-exhibit**: Renders data-driven performance metrics for businesses and high-level advantages.
- **clusters**: Maps through the massive `clusterData`, rendering visual sector-cards with tailored color thematics representing various industries (Food, Cosmetics, Fashion, Finance).
- **booth-specs**: Uses CSS grids to compare Standard shell schemes and Bare space implementations with visual checklists.
- **book-space**: Triggers the `onOpenForm` specifically targeted to `exhibitor` state to open the application modal.

## Design Highlights
Implements significant use of `bg-orange-50` highlighted cards and border variants to distinguish "Premium" B2B interactions apart from standard layout interactions.
