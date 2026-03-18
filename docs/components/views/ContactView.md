# ContactView Component

## Overview
`ContactView.jsx` acts as the primary support and networking access point. It contains two functional sub-views to separate direct user inquiries from the more expansive MATRADE international network.

## Sub-Views
- **contact-us**: Displays the main "Contact Us" form (styled statically for presentation) including first name, last name, email, subject, and message fields. It presents a clear submit button.
- **matrade-network**: A styled grid containing interactive, glassmorphic cards describing the broader network of international trade offices. Includes geographical highlights to establish the global capability of MATRADE.

## UI Decisions
Buttons for action (Submit message, Find Nearest Office) are strictly aligned using central justification constraints and follow the global all-caps tracking policy setup in CSS.

## Props
- `subView` (String): Controls which sub-view to render.
- `setSubView` (Function): Allows the internal `SubNav` to shift the active view state.
