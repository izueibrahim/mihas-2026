# Navigation Data (`navigation.js`)

## Overview
Central routing dictionary for MIHAS 2026. Defines all top-level navigation links and their sub-navigation tabs.

## Exports
- `aboutTabs`: Sub-tabs for About MIHAS (Overview, Organisers, The Venue, Getting There, Free Shuttle Services).
- `visitorTabs`: Sub-tabs for Visitor (Why Visit, Who Should Visit, Admission & Opening Hours).
- `mediaTabs`: Sub-tabs for Media (Media Registration, MIHAS In The News, MIHAS Blog, Photo Gallery).
- `contactTabs`: Sub-tabs for Contact (Contact Us, MATRADE Network).
- `navLinks`: Main navigation array containing all top-level links. Links with nested sub-views include:
  - `about` → uses `aboutTabs`
  - `visitor` → uses `visitorTabs`
  - `exhibitor` → inline subs: Why Exhibit, Who Should Exhibit, **Exhibitor Incentives**
  - `media` → uses `mediaTabs`
  - `contact` → uses `contactTabs`

## Component Integration
Consumed by `Header.jsx` (desktop dropdowns + mobile menu), `Footer.jsx` (quick links), and passed as props to `SubNav.jsx` within individual views.
