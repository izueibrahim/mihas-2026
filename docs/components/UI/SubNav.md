# SubNav Component

## Overview
`SubNav.jsx` renders a horizontal, scrollable sticky "pill" menu used to toggle between inner sub-views. For example, in the "About" view, it toggles between "Overview", "Venue", "Getting There", and "Organisers".

## Features
- Implements sticky positioning to remain accessible as users scroll down long sub-pages.
- Uses dynamic mapping to structure its `items`.
- Enforces strict tracking, specific sizes, and bold uppercase text globally across pills.

## Props
- `items` (Array of Objects): An array of tab objects containing `{ id: string, label: string }`.
- `activeItem` (String): The `id` corresponding to the currently selected tab, utilized to apply the active orange pill style.
- `onSelect` (Function): The handler function dispatched when a tab is clicked, updating the global `subView` state.
