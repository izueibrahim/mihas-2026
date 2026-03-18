# Card Component

## Overview
`Card.jsx` is a simple layout primitive used to group related content inside a stylish, elevated container. By centralizing the card logic, UI updates (e.g., changing border radii, drop shadows, background colors) can be made in one place and reflected everywhere.

## Usage
```jsx
<Card className="hover:shadow-2xl">
  <h3>Card Details</h3>
  <p>Content goes here.</p>
</Card>
```

## Props
- `children` (Node): The content housed inside the container.
- `className` (String, Optional): Additional classes appended to the base styling. The base applies white backgrounds, standard padding, a soft border, `rounded-3xl`, and basic drop shadows.
