# SponsorShowcase Component

## Overview
`SponsorShowcase.jsx` is a dedicated sub-component that displays an interactive filtering block of event sponsorships. It is frequently utilized in the `HomeView` and globally rendered across other sections where sponsor credibility is necessitated.

## Interactivity
- Includes a horizontal pill-based layout ("PREMIUM SPONSORS", "STRATEGIC PARTNERS", "MEDIA, LOGISTICS").
- Updates the displayed logos or company name blocks securely sourced from `sponsorsData`.
- Includes animated fade-in classes so state shifts do not look jarring.

## Data Requirement
Relies directly on `../../data/sponsors.js` structure mapping out items inside `tier` and `names` objects.
