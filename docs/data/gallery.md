# Gallery Data (`gallery.js`)

## Overview
Houses the static media references from previous events (MIHAS 2024 / 2025). Used to build the highlight reels without establishing a backend media server.

## Exports
- `galleryImages`: Array containing mock IDs and alt text for static `aspect-[4/5]` grid images rendered in CSS.
- `galleryVideos`: Array containing mock IDs, video titles ("Opening Ceremony Recap"), and duration strings for the gallery UI simulation.

## Component Integration
Consumed by `MediaView.jsx` across the distinct media interaction grids.
