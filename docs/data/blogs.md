# Blogs Data (`blogs.js`)

## Overview
Simulates a localized Content Management System (CMS) payload representing thought-leadership articles written about the Halal economy.

## Structure
Exports `blogs`, an array of objects possessing:
- `id` (Integer): Unique identifier.
- `title` (String): The headline.
- `excerpt` (String): A short 2-3 sentence overview rendered as body text.
- `date` (String): Publication timestamp.
- `author` (String): The writer.

## Component Integration
Rendered as interactive card elements in the `HomeView` and heavily explored in the `MediaView`'s insight zone.
