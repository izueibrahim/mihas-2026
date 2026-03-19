# ContactView Component

## Overview
`ContactView.jsx` acts as the primary support and networking access point. It contains two functional sub-views to separate direct user inquiries from the more expansive MATRADE international network.

## Sub-Views
- **secretariat**: Displays the main "Contact Us" form and the MIHAS Secretariat contact details (address, telephone, email).
- **matrade-network**: Features a dynamic side-by-side layout displaying MATRADE's global offices. It utilizes a sticky sidebar for selecting geographic regions and a detail grid to display specific office addresses, phone numbers, and emails.

## State Management
- `activeNetworkRegion` (Number): Used within the `matrade-network` sub-view to track which region is currently selected in the sidebar, dynamically updating the displayed office grid.

## Props
- `subView` (String): Controls which sub-view to render.
- `setSubView` (Function): Allows the internal `SubNav` to shift the active view state.
