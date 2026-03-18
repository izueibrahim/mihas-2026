# Navigation Data (`navigation.js`)

## Overview
The central routing dictionary for MIHAS 2026. This prevents hard-coding sub-navigation pills directly into the view components, allowing unified updates.

## Exports
- `mainNavigation`: Top-level header array. Maps URL strings to human-readable names.
- Sub-Navigation Arrays corresponding to exact Views (`aboutTabs`, `visitorTabs`, `exhibitorTabs`, `programmeTabs`, `mediaTabs`, `contactTabs`, `inspTabs`). 
- Each tab consists of a `label` and a strict string `id` to sync state with React hooks.

## Component Integration
Required by `Header.jsx`, `Footer.jsx`, and passed as props dynamically into the `SubNav.jsx` implementation.
