# DirectoryView Component

## Overview
`DirectoryView.jsx` provides a full-page PDF viewer for the MIHAS e-Directory document, allowing users to browse, view fullscreen, and download.

## Features
- **PDF Viewer**: Embeds `src/directory.pdf` via an `iframe` in a scrollable container that fills the available viewport height.
- **Fullscreen**: Opens the PDF in a new browser tab via `window.open()`.
- **Download**: Triggers a direct file download of `MIHAS_Directory.pdf` using a dynamically created anchor element.
- **Exhibitor CTA**: Bottom section with "Are you an Exhibitor?" prompt and standardized buttons for "Book My Space" (orange) and "Login" (outline).

## Props
- `onOpenForm` (Function): Opens the multi-step exhibitor registration form.

## Design Note
The PDF viewer uses `w-full` and `h-[70vh] md:h-[80vh]` for responsive sizing with a clean `rounded-2xl` border.
