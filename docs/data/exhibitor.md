# Exhibitor Data (`exhibitor.js`)

## Overview
The central repository for information persuading and managing B2B exhibition clients.

## Exports
- `boothTypes`: Array strictly comparing "Standard Shell Scheme" (9sqm) vs "Bare Space". Details inclusions like fascia boards, armlights, and carpets.
- `clusterData`: A massive array visually distinguishing industry sectors (e.g., "Food & Beverage", "Modest Fashion", "Islamic Finance"). Each cluster includes a specific `color` property mapping to Tailwind presets.
- `whyExhibitData`: Statistics mapped to convince businesses of ROI (e.g., "Access 85+ buyer countries").

## Component Integration
Consumed exclusively by `ExhibitorView.jsx` to build out the technical requirement tabs and visual clusters.
