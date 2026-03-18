# MediaView Component

## Overview
`MediaView.jsx` clusters press, news, blogging, and multimedia data together.

## Sub-Views
- **registration**: Builds a dynamic form designed purely for media accreditation tracking.
- **news**: Maps structured components using the local `newsData` JSON. Displays temporal information cleanly based on timestamps.
- **blog**: Renders `blogs` array implementing hover transition effects overlaying large images to display articles.
- **gallery**: Further divides state via `galleryType` ('photos' vs 'videos').
    - If `photos`, renders purely `galleryImages` objects with direct download-link UI overlays.
    - If `videos`, implements embedded layout simulations rendering `galleryVideos` with static length trackers.

## Hooks
Uses a local state hook (`const [galleryType, setGalleryType]`) to build secondary navigation tabs cleanly without breaking the global URL routing state handled by the parent page component.
