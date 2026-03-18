# Global CSS (globals.css)

## Overview
The `globals.css` file contains the base styles, Tailwind directives, and core theme configurations for the entire application. It establishes the global typography, utility classes, and custom animations used throughout the MIHAS project.

## Key Features
- **Tailwind Setup**: Imports the core Tailwind base, components, and utilities layers.
- **Custom Fonts**: Loads Google Fonts (Outfit for headings, Inter for body text) using the generic CSS `@import`.
- **Theme Variables**: Defines the base HTML typography (`font-family: 'Inter', sans-serif`).
- **Semantic Utility Classes**: Creates standardized classes to ensure UI consistency:
    - `.font-h1`, `.font-h2`, `.font-h3`, `.font-h4`: For heading hierarchy (using `Outfit` font, uppercase, strict line-heights).
    - `.font-body`, `.font-body-lg`, `.font-body-sm`: Standard reading text classes.
    - `.font-label`: For small UI elements, metadata, and tags (uppercase, bold).
    - `.font-button`: Unified button typography (bold).
    - `.font-nav`: Fixed navigation styling logic.
- **Animations**: Includes a custom infinite scroll `.animate-scroll` utilized in the sponsor ticker components.
