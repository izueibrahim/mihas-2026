# ProgrammeView Component

## Overview
`ProgrammeView.jsx` builds a chronological display for all event-related schedules taking place across the 4-day convention timeframe (e.g., conferences, matching sessions, networking phases).

## Sub-Views
- **schedule**: Displays a robust daily chronological map rendering the `programmeSchedule` array. Employs CSS border mapping (`border-l-4`) to simulate a visual timeline of hourly events.
- **conferences**: Provides individual focused blocks discussing larger-scale thematic summits utilizing the `conferencesData`.
- **speakers**: Maps the `speakersData` directly into profile cards consisting of image placeholders, titles, tags, and biographies.

## Responsive Capabilities
This view implements carefully managed layout padding (`lg:gap-12`) ensuring multi-column lists for scheduled events collapse neatly into mobile-first column layouts seamlessly without horizontal overflow.
