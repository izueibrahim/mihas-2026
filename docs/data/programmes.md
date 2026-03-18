# Programmes Data (`programmes.js`)

## Overview
Stores the comprehensive chronological itinerary spanning the 4-day MIHAS event.

## Structure
- `programmeSchedule`: Defines the days (Day 1 - Day 4). Contains nested arrays of `events` strictly mapped by `time`, `title`, and `venue`. Highlights unique "networking" or "vip" categories.
- `conferencesData`: Extracts specific high-ticket sub-events (like the MIHAS Knowledge Summit) with deep synopses.
- `speakersData`: Array of profiles for key industry leaders containing names, professional titles, and tag-based areas of expertise.

## Component Integration
Rendered conditionally within `ProgrammeView.jsx`.
