# App Root (`page.jsx`)

## Overview
The central entry point for the MIHAS 2026 client-side React application. Handles dynamic view rendering, URL hash persistence, and global state management.

## Core Responsibilities
- **State Management**: Maintains `currentView`, `subView`, `isMobileMenuOpen`, `scrolled`, and `formOpen` states.
- **URL Hash Persistence**: Synchronizes `currentView` and `subView` with the URL hash (e.g., `/#directory`, `/#about/history`). Users stay on the same page after refresh or browser back/forward.
- **View Routing**: Conditionally renders the appropriate View component with `AnimatePresence` page transitions (fade + slide).
- **Form Modal Integration**: Manages `MultiStepForm` display for registration/contact flows.

## Sub-Components Rendered
- `Header` (sticky navigation)
- `HomeView`, `AboutView`, `VisitorView`, `ExhibitorView`, `ProgrammeView`, `MediaView`, `DirectoryView`, `ContactView`, `AwardsView`, `InspView`
- `Footer`
- `MultiStepForm` (modal overlay)
- Sticky bottom actions: Sponsor + Book Space floating buttons

## Key Functions
- `navigate(viewId, subId)`: Updates the URL hash, which triggers a `hashchange` listener that syncs the view state. Closes mobile menu and scrolls to top.
- `handleOpenForm(type)`: Opens the multi-step form for a specific user journey ('visitor', 'exhibitor', 'media', 'sponsor').
