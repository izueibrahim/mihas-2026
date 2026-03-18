# Header Component

## Overview
`Header.jsx` provides the global top navigation bar for the application. It ensures users can access key sections, sign-in flows, and language toggles consistently across all views. It is fully responsive, offering a detailed drop-down menu on desktop and a sliding hamburger menu on mobile.

## Features
- **Global Organisers Bar**: Includes the `GlobalOrganisersBar` component fixed at the very top.
- **Branding**: Displays the high-resolution MIHAS 2026 Logo.
- **Desktop Navigation**: Features hover-trigger dropdowns for heavily nested sections (like About and Programme) and direct links for unified paths.
- **Mobile Navigation**: Implements an animated, full-screen side-drawer menu (hamburger menu) positioned appropriately for easy thumb access.
- **Interactive States**: Modifies styling visually to indicate current active paths via an orange underline/indicator structure.

## Props
- `currentView` (String): The currently active root view, used to highlight the correct navigation item.
- `navigate` (Function): Route changing mechanism provided by the root `page.jsx`.
- `isMenuOpen` (Boolean): Global state dictating whether the mobile menu is open.
- `setIsMenuOpen` (Function): Method to toggle the mobile menu.
- `onOpenForm` (Function): Global method to trigger modal overlays from the header directly (like "Book Space").
