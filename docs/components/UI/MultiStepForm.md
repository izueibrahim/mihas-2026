# MultiStepForm Component

## Overview
`MultiStepForm.jsx` is a complex, modular overlay that acts as the primary lead-capture/registration funnel. It handles step-by-step sequential data collection for various goals such as becoming an exhibitor, registering as a visitor, or applying for media accreditation.

## Key Behaviors
- **Modal View**: Triggers as a full-screen fixed overlay covering the main application. It uses a portal-like absolute positioning.
- **Dynamic Steps**: Renders varied sets of inputs strictly based on the current step iteration (`1`, `2`, `3`).
- **Progress Tracking**: Includes visual tracking bubbles displaying form progress at the top of the interface.
- **Type Handling**: Contains conditional logic that slightly alters the form verbiage or paths depending on the `formType` (e.g. asking company size for exhibitors vs ticket type for visitors).

## Props
- `isOpen` (Boolean): Whether the modal is actively visible.
- `onClose` (Function): Reverts the global state `isFormOpen` to false to demount the form.
- `formType` (String): Indicates context (`'exhibitor'`, `'visitor'`, `'media'`). Used for specific text replacements.
