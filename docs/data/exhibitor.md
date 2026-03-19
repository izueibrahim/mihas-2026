# Exhibitor Data (`exhibitor.js`)

## Overview
Central data repository for the Exhibitor section of MIHAS 2026.

## Exports
- `exhibitorTabs`: Tab definitions for the Exhibitor sub-navigation. Includes:
  - `why-exhibit` — Why Exhibit
  - `who-should-exhibit` — Who Should Exhibit
  - `incentives` — Exhibitor Incentives
- `whyExhibitData`: Array of 6 reasons to exhibit, each with a `title` and `desc` (e.g., "The World's Most Comprehensive Halal Showcase", "Located in the World's #1 Halal Economy").
- `exhibitorCategories`: Array of 14 industry sectors with detailed `items` lists. Sectors include Food & Beverages, Pharmaceuticals, Islamic Finance, Cosmetics, Education, E-Commerce, and more.

## Component Integration
Consumed by `ExhibitorView.jsx` to build the tabbed sub-views and sector grids.
