# Shuttle Data (`shuttle.js`)

## Overview
Stores the exact routing schedules and logistical pathways for complimentary transport to the MITEC venue.

## Structure
Exports `shuttleServiceData`, an array of route objects:
- `title` (String): Route Name (e.g., "Route A: KL Sentral - MITEC").
- `routes` (Array of Strings): The pickup points involved.
- `special` (Boolean, optional): Flags direct express busses (e.g., "Direct VIP Shuttle").
- `time` (String, optional): Specific temporal constraints.

## Component Integration
Used directly within the `AboutView -> getting-there` tab logic to map responsive shuttle layouts.
