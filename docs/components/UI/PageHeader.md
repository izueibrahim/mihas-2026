# PageHeader Component

## Overview
`PageHeader.jsx` is a modular hero-banner component utilized at the top of virtually every sub-view (About, Visitor, Exhibitor, etc.) to establish visual context.

## Design
It creates a tall, beautifully styled dark-mode block (`bg-slate-900`) with subtle gradients, abstract background shapes, and typography.

## Props
- `title` (String): The primary `<h1>` text for the page.
- `subtitle` (String, Optional): A secondary contextual sentence rendered below the title.
- `breadcrumb` (String, Optional): Renders a small, orange categorical tag above the title (e.g., "MIHAS EXCELLENCE").
