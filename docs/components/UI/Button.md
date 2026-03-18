# Button Component

## Overview
`Button.jsx` is a highly reusable, generalized button wrapper used universally across the application to enforce design consistency. It maps tightly to the custom styling defined in `globals.css` (via `.font-button`).

## Usage
```jsx
<Button variant="outline" size="lg" onClick={handleClick}>
  Click Me
</Button>
```

## Props
- `children` (Node): The content of the button.
- `variant` (String, Optional): Controls the background/border styling. Default is `'primary'` (Solid Orange). Other option includes `'outline'` (transparent background with border), `'ghost'` (transparent background with text).
- `size` (String, Optional): Controls padding and dimensions. Options: `'sm'`, `'md'` (default), `'lg'`.
- `className` (String, Optional): An injection point for overriding or extending default Tailwind utility classes dynamically.
- `...props`: Any standard HTML `<button>` attributes (e.g., `disabled`, `type`, `onClick`).

## Behavior
Includes built-in hover effects, scaling transforms, and focus visible states for accessibility.
