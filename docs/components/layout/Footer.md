# Footer Component

## Overview
`Footer.jsx` is the global site footer appearing below every view. All typography is unified to `text-sm` for consistency.

## Sections
- **Brand & Mission**: MIHAS logo (inverted) with a brief italic description.
- **Quick Navigation**: Links styled with `font-nav` to match the header menu font. Includes hover arrow animation.
- **Contact Info**: Address, email (`enquiry@mihas.com.my`), and phone (`+603 6211 9973`) with orange icon accents.
- **Stay Informed**: Newsletter email input with rounded dark background and orange submit arrow.
- **Social Connect**: Icon row (Facebook, Twitter, Instagram, LinkedIn, YouTube) with hover-to-orange transitions.
- **Copyright & Legal**: `© 2026 MIHAS Malaysia. All rights reserved.` with Terms, Privacy, and Cookies links.

## Props
- `navigate` (Function): Global navigation handler enabling quick-link routing.

## Dependencies
- Renders `GlobalOrganisersBar` above the footer content.
