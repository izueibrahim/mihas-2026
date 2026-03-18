# Sponsors Data (`sponsors.js`)

## Overview
This file statically maps the tiered sponsorship packages purchased by partners to support MIHAS 2026.

## Structure
- Exports a constant `sponsorsData` object.
- Keyed by `premium`, `strategic`, and `media`.
- Each key holds an array of tier objects containing:
  - `tier` (String): The sub-categorization (e.g., "DIAMOND SPONSOR").
  - `names` (Array of Strings): The exact brand strings to be displayed.

## Component Integration
Consumed heavily by the `SponsorShowcase.jsx` UI component to conditionally render grids of active partners.
