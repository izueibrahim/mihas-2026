# AboutView Component

## Overview
`AboutView.jsx` handles the display of organizational information related to MIHAS 2026. It utilizes a powerful sub-navigation pill system (`SubNav.jsx`) to segregate content into manageable logical chunks.

## Sub-Views
- **overview**: High-level paragraphs explaining the history and goals of MIHAS alongside its core organizers.
- **organisers**: Deeper profiles of the host (MITI) and organiser (MATRADE).
- **venue**: Provides exact coordinate mapping, physical address, and capacity details for MITEC.
- **getting-there**: Detailed travel partnership information. Fetches structured mock-data for Airlines (`airlinePartners`), e-hailing platforms (`ehailingPartners`), and Hotels (`hotelPartners`).
- **shuttle**: Maps out complimentary shuttle buses (`shuttleServiceData`) with graphical layout.

## Props
- `subView` (String): The active nested view.
- `setSubView` (Function): Modifies the root sub-view layout.
- `onOpenForm` (Function): Triggers the lead capture modal overlay.
