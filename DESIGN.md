---
name: Kevin Sánchez Portfolio
description: Professional developer portfolio shaped as a cinematic nighttime workstation.
colors:
  signal-orange: "#ff5a16"
  signal-orange-light: "#ff8a42"
  coal: "#07090a"
  panel: "#0d1112"
  paper: "#f1eee8"
  ink-soft: "#a9a39b"
typography:
  display:
    fontFamily: "Azeret Mono, Consolas, monospace"
    fontSize: "clamp(2rem, 4.2vw, 4rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.94rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Azeret Mono, Consolas, monospace"
    fontSize: "0.68rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.13em"
rounded:
  control: "0.45rem"
  panel: "0.72rem"
  stage: "0.85rem"
spacing:
  compact: "0.5rem"
  base: "1rem"
  section: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1rem"
  card-console:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.paper}"
    rounded: "{rounded.panel}"
    padding: "1.2rem"
---

# Design System: Kevin Sánchez Portfolio

## Overview

**Creative North Star: "The Night Shift Workbench"**

The portfolio feels like entering a working software studio after dark: precise, cinematic and visibly used. Photography establishes the environment, while console-like panels organize professional evidence without turning the page into a game interface.

**Key Characteristics:**

- Near-black surfaces with one burnt-orange signal color.
- Dense but readable editorial composition.
- Real photography paired with diagrammatic UI fragments.
- Motion that resembles panels powering on as they enter view and dimming when they leave.

## Colors

The palette is restrained and warm, using orange only for active state, emphasis and directional cues.

**The Signal Rule.** Orange identifies interaction, status or a meaningful phrase; it does not fill large reading surfaces.

## Typography

**Display Font:** Azeret Mono with Consolas fallback  
**Body Font:** Manrope with system fallback  
**Label/Mono Font:** Azeret Mono

Display type carries the engineering voice in short headlines and data. Manrope handles longer Spanish copy with a softer, highly legible rhythm.

## Layout

The desktop page uses a 1260px maximum canvas with compact section bands separated by fine rules. Internal compositions vary: panoramic hero, three-part profile grid, split project index, journey columns and tool strip. At 820px and below, these collapse into single-column reading order; at 620px the hero becomes a vertical portrait card.

## Elevation & Depth

Depth comes from photography, tonal layering and broad ambient shadows. Cards remain mostly flat and use one quiet border; orange glow is reserved for status points, portrait framing and focus.

## Shapes

Panels use compact corners between 0.55rem and 0.85rem. Pills are restricted to status, technology tags and the desktop navigation. Portrait imagery uses a circular frame because it represents identity rather than content.

## Components

### Buttons

Primary actions use signal orange and light text. Secondary actions use transparent charcoal with an orange or neutral border. Keyboard focus always receives a 2px orange outline.

### Cards / Containers

Console cards use the panel surface, a neutral 1px border and compact padding. Their scroll entrance alternates vertical, lateral and scaled reveals; cards return to their resting state outside the viewport. Reduced-motion users receive the final state immediately.

### Navigation

Desktop navigation is a compact centered pill with a shared orange active indicator. Mobile replaces it with an explicit menu control and stacked links.

### Hero Stage

The hero is a cinematic workstation photograph with a dark lower exposure ramp. The circular portrait, availability status and factual profile card sit over the desk rather than inside a generic marketing column.

### Technology Streams

Technology pills run in three continuous horizontal streams with alternating directions. They pause on hover or keyboard focus and become manually scrollable when reduced motion is requested.

### GitHub Activity

The activity panel uses live public profile data and a remote contribution chart. It must fall back to a direct GitHub link rather than displaying invented metrics.

### Cursor Control

Fine-pointer devices use a fluorescent orange cursor with dot, ring and system modes. The fixed selector remains reachable by keyboard; touch devices retain their native pointer behavior.

## Do's and Don'ts

### Do:

- **Do** use orange to identify actions, active navigation and verified status.
- **Do** alternate dense evidence panels with quieter typographic regions.
- **Do** keep animation transform-based, viewport-aware and compatible with reduced motion.
- **Do** present employer projects with functional descriptions instead of internal names.

### Don't:

- **Don't** invent GitHub activity, testimonials or performance metrics.
- **Don't** introduce rainbow neon, glassmorphism or gaming UI decoration.
- **Don't** use large orange fills behind long text.
- **Don't** reuse the reference image containing fictitious portfolio content.
