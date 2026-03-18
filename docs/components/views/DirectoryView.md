# DirectoryView Component

## Overview
`DirectoryView.jsx` simulates an advanced search registry filtering through mock exhibitor and partner arrays.

## Features
- **Client-Side Search**: Users can explicitly type search terms. A `useEffect` hook triggers a real-time reactive filtering system over `searchQuery`.
- **Category Refinement**: Allows cross-filtering by specific categorical buttons ('Food & Beverage', 'Cosmetics', etc.) managed via matching string states directly against `directoryData[].category`.
- **Zero-State Validation**: Contains empty-state rendering checks "No results found matching your criteria" if filters become too strict.
- **Grid Rendering**: Produces dynamic responsive grids mapping out returned objects into detailed location/booth cards.
