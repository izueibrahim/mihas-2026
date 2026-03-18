# App Root (page.jsx)

## Overview
The `page.jsx` file is the central entry point and main layout container for the MIHAS 2026 client-side React application. It handles the dynamic rendering of all major views (Home, About, Exhibitor, Visitor, Programme, etc.) based on the current navigation state.

## Core Responsibilities
- **State Management**: Maintains the active `currentView` (e.g., 'home', 'about') and `subView` (for tabbed navigation within views). Also manages global states like `isMenuOpen`, `isFormOpen`, and `formType`.
- **View Routing**: Acts as an internal router, conditionally rendering the appropriate View component depending on the state. It handles smooth view transitions and sub-view deep linking.
- **Form Modal Integration**: Manages the display of the `MultiStepForm`, allowing users to open registration/contact forms globally from any view.
- **Wrapper Construction**: Wraps all deeply rendered content dynamically between the `Header` and `Footer` components.

## Sub-Components Rendered
- `Header`
- `HomeView`, `AboutView`, `VisitorView`, `ExhibitorView`, `ProgrammeView`, `MediaView`, `DirectoryView`, `ContactView`, `AwardsView`, `InspView`
- `Footer`
- `MultiStepForm`

## Key Functions
- `navigate(view, sub)`: Updates the current view and resets or changes the sub-view selection. It also resets scroll position to top.
- `handleOpenForm(type)`: Triggers the multi-step form overlay to open for a specific user journey (e.g., 'visitor', 'exhibitor').
