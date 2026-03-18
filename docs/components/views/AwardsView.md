# AwardsView Component

## Overview
`AwardsView.jsx` serves as the official presentation zone for the MIHAS Awards series. It details the extensive criteria, prerequisite guidelines, and benefits for exhibitors submitting entry profiles for specific awards.

## UI Implementation
- Uses large block cards to separate primary categories: "Products and Services Excellence Award" and "Innovation and Sustainability Award".
- Provides bulleted requirements with distinct visual hierarchies (e.g., standard pre-requisites vs. Emerging Star sub-requirements).
- Integrates a high-contrast dark-mode section (`bg-slate-900`) strictly to outline "Winners' Benefits" divided conditionally based on whether the entity is Malaysian or Foreign.

## Props
- `onOpenForm` (Function): Intercepts clicks on the "Submit Award Application" action and securely opens the exhibitor iteration of the multi-step module.
