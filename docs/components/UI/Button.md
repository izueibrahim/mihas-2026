# Button Component

## Overview
`Button.jsx` is the universal button wrapper enforcing design consistency across all views. It uses `clsx` and `tailwind-merge` for class composition.

## Base Style
All buttons inherit: `px-8 py-4 rounded-xl font-button text-sm transition-all inline-flex items-center justify-center gap-2`

## Usage
```jsx
<Button variant="outline" onClick={handleClick}>
  Click Me
</Button>
```

## Props
- `children` (Node): The content of the button.
- `variant` (String, Optional): Controls styling. Options:
  - `'primary'` (default) — Solid orange (`bg-orange-600`)
  - `'secondary'` — Solid dark (`bg-slate-900`)
  - `'outline'` — Bordered with white background
  - `'ghost'` — Transparent with hover highlight
- `className` (String, Optional): Extend or override default Tailwind classes.
- `...props`: Any standard HTML `<button>` attributes (e.g., `disabled`, `type`, `onClick`).

## Design Note
All ad-hoc padding/font overrides have been removed from individual views. Buttons should rely on the base style for consistent sizing across desktop and mobile.
