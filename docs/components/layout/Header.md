# Header Component

## Overview
`Header.jsx` provides the sticky top navigation bar. It is fully responsive with desktop dropdowns and a mobile slide-in menu.

## Features
- **Dark Brand Box**: Contains the centered MIHAS 2026 logo in a `bg-slate-900` container with `justify-center` and minimum-width constraints.
- **Desktop Navigation**: Hover-triggered dropdown menus using `font-nav` class for link styling. Supports nested sub-links (About, Visitor, Exhibitor, Media, Contact).
- **Mobile Navigation**: Animated full-height slide-in drawer with balanced typography — main links use `text-base font-bold`, sub-links use `text-sm font-medium text-slate-500`.
- **Active States**: Orange highlight (`text-orange-600`) and background (`bg-orange-50`) for the currently active view.

## Props
- `navLinks` (Array): Navigation structure from `navigation.js`.
- `currentView` (String): The currently active root view.
- `navigate` (Function): Route changing mechanism provided by `page.jsx`.
- `isMobileMenuOpen` (Boolean): Controls mobile menu visibility.
- `setIsMobileMenuOpen` (Function): Toggles the mobile menu.
- `onOpenForm` (Function): Triggers modal overlays (Sponsor, Book Space).
