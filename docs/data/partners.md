# Partners Data (`partners.js`)

## Overview
Contains the affiliate promotional codes, pricing agreements, and detailed MATRADE network geographic data.

## Arrays Exported
1. `airlinePartners`: Contains flight provider details, exact Promo Codes (e.g., `MHMIHAS25`), sales periods, and discount valuations.
2. `ehailingPartners`: Contains ride-share promotional details (`Grab`, `AirAsia Ride`), with specific discount thresholds and coupon limits.
3. `hotelPartners`: Lists official accommodation partners (MITEC-adjacent hotels) and standard booking codes.
4. `matradeNetwork`: A complex array of geographic regions. Each region contains an `offices` array mapping specific properties details (city, address, tel, email) for MATRADE's global presence.

## Component Integration
- `AboutView.jsx` renders the promotional cards for airlines, ehailing, and hotels.
- `ContactView.jsx` renders the `matradeNetwork` data in a dynamic sub-view.
