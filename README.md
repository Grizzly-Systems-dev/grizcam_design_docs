# Handoff: Grizzly Systems Design System

## Overview

This package contains the design system and two product-surface UI kits for **Grizzly Systems / GrizCam** — an off-grid AI surveillance product that detects vehicles, people, and gunshots from places with no power and no cell coverage.

The system covers two surfaces:

1. **GrizCam Operator Portal** — the web app operators use to monitor cameras and review detection events. Views: map, events feed, event detail (forensic), camera grid.
2. **Grizzly Systems marketing site** — grizzlysystems.com. Sections: header, hero, three-up feature row, hardware spec sheet, CTA band, footer.

Both surfaces ship in **light-default** and **dark-forward** variants.

## About the design files

The HTML/JSX files in `reference/` are **design references** — small React + Babel prototypes that demonstrate the intended look, composition, and behavior. They are **not production code to copy directly.**

Your task is to **recreate these designs in your target codebase's existing environment** (React, Next.js, Vue, SwiftUI, etc.) using your established patterns, component library, and routing. If no environment exists yet, choose the framework most appropriate for the project and implement there.

The `tokens/` folder, by contrast, **is** production-ready — port those CSS files (or translate them to your token system) verbatim.

## Fidelity

**Hi-fi.** Final colors, typography, spacing, and motion are pinned. Recreate the UI with pixel-faithful intent — but using your codebase's component conventions for accessibility, state management, and routing rather than the prototype's loader pattern.

The product photography, hardware imagery, and final iconography were **not supplied** with the brand. Placeholder treatments are flagged below — replace with real assets when available.

## Screens / Views

### A. Marketing site

#### A1. Header (`reference/marketing-site-*/Header.jsx`)
- **Layout**: Sticky top, 64px tall, full-width, 48px horizontal padding. Three-zone flex: logo left · primary nav center · CTA cluster right.
- **Logo**: `assets/stacked-black.svg` in light, `assets/stacked-primary.svg` in dark. 30px tall.
- **Nav links**: 5 items (Product, Deployments, Spec sheet, About, Operators). 32px gap. Eyebrow type — Inter Tight, 11px, +0.22em tracking, uppercase.
- **CTA**: "Sign in" text link + primary "Request access" button.
- **Background**: `rgba(249,247,240,0.92)` light, `rgba(26,24,18,0.92)` dark, with `backdrop-filter: blur(8px)` in dark. 1px bottom border.

#### A2. Hero (`reference/marketing-site-*/Hero.jsx`)
- **Layout**: 80px top padding, 48px sides, max-width 1280px centered. Eyebrow + h1 + lead + button row, then a 460px-tall placeholder media block.
- **H1**: Inter Tight, 88px / 92px line-height, weight 500, tracking -0.03em. Two-line copy: *"Command-center intelligence, in the middle of nowhere."*
- **Lead paragraph**: Source Serif Pro, 18px / 30px, taupe, max-width 640px.
- **Buttons**: Primary `Request access` + text-style `Read the spec sheet`.
- **Media block**: 8px radius, dark surface, with HUD-style overlays (mono telemetry corners, goldenrod bounding box, "● LIVE" indicator). **Replace with real photography when available.**

#### A3. Feature row (`reference/marketing-site-*/FeatureRow.jsx`)
- **Layout**: 88px vertical padding, three-column grid, 56px gap. Each cell: eyebrow indicator + h3 (28px / 34px Inter Tight, -0.02em) + body paragraph.
- **Content**: `01 / DETECTION`, `02 / CONNECTIVITY`, `03 / POWER`. Copy in the JSX.

#### A4. Spec sheet (`reference/marketing-site-*/SpecSheet.jsx`)
- **Layout**: 88px padding, two-column 1:1 grid with 64px gap. Left: 4:5-aspect engineering drawing block. Right: spec table — 10 rows, two-column (mono uppercase label · serif value), 1px row dividers.
- **Section background**: `--bg-inset` in light (bone), `--grz-pitch-black` in dark. The drawing surface stays light in both themes for contrast.

#### A5. CTA band (`reference/marketing-site-*/CTA.jsx`)
- **Layout**: 120px vertical padding, max-width 1100px centered.
- **In light kit**: dark band — pitch-black background, floral-white type. Drama through inversion.
- **In dark kit**: light band — floral-white background, pitch-black type. Same inversion, opposite direction.
- **H2**: 64px / 68px Inter Tight, two-line.

#### A6. Footer (`reference/marketing-site-*/Footer.jsx`)
- **Layout**: 64px top / 36px bottom padding, max-width 1280, 5-column grid (logo column 2fr, four sitemap columns 1fr each), 48px gap.
- **Logo column**: 56px stacked logo + coordinates `45.4534° N · 110.5481° W` in goldenrod mono + city in taupe mono.
- **Sitemap columns**: each has a goldenrod eyebrow header + 4 link items.
- **Bottom rule**: 1px top border, 24px padding, copyright + Privacy/Terms/Security links in mono-sm.

### B. Operator portal

#### B1. Shell (`reference/grizcam-portal-*/Shell.jsx`)
- **Layout**: Full-viewport flex row. 240px fixed left sidebar · main pane (top bar + scroll area).
- **Sidebar**: 20px/14px padding. Top: stacked logo (36px). Middle: 5 nav buttons (Map, Events, Cameras, Alerts, Settings) each 9px/12px padding, 12px gap, with leading 16px icon + eyebrow label. Active state = `--bg-inset` background, `--fg1` text. Bottom: deployment block — eyebrow header + city/state in mono + coords in goldenrod mono.
- **Top bar**: 64px, 1px bottom border, 28px horizontal padding. Left: subtitle eyebrow + 22px/28px page title. Right: status cluster (`2 active alerts` · `12 cameras up`) with vertical 1px dividers, then user avatar (32px circle) + name in eyebrow type.

#### B2. Map view (`reference/grizcam-portal-*/MapView.jsx`)
- **Layout**: Two-column grid `1fr 360px`, full height. Left: map plane. Right: selected-camera detail rail.
- **Map plane**: Topographic line decoration (SVG paths) + 80px crosshair grid (CSS background). Top-left coords readout, top-right Map/Satellite/Topo segmented, bottom-right "UPDATED HH:MM:SS MT".
- **Pins**: 8 pin buttons positioned by % of plane. Each pin = small mono ID label + a 22×28 SVG pin with the dot color encoding status (`operational` → fg1, `alerting` → goldenrod, `standby` → fg2). Selected pin gets a goldenrod 2px stroke.
- **Right rail**: Eyebrow + camera title. 16:9 video frame (with goldenrod border when alerting). Telemetry card — 2-column grid of 6 stat cells, each with a 16px icon and a label/value stack. Action buttons: primary "Open event" + secondary "Pull clip".

#### B3. Events view (`reference/grizcam-portal-*/EventsView.jsx`)
- **Layout**: 24px/28px padding. Filter row (segmented control + count + Export CSV button). Then table.
- **Table**: 1px-bordered card, 8px radius, `--bg-raised`. Header row in `--bg-inset` (mono, +0.12em, uppercase, taupe text, 12px/18px padding). Body rows: grid `110px 110px 1fr 130px 100px 90px 60px`, 14px/18px padding, 1px row divider. Active rows have a 3px goldenrod left border (replacing the transparent default).
- **Row content**: mono ID · mono time · label/cam stack · subject ID in goldenrod mono · distance · status badge · arrow icon.

#### B4. Event detail (`reference/grizcam-portal-*/EventDetail.jsx`)
- **Layout**: 24px/28px padding, max-width 1280, centered. Back button. Title row (eyebrow + 32px/38px h1 + lead + action buttons). Two-column 1fr/320px grid for video + sidebar.
- **Video frame**: Pitch-black, 16:9, 1px border. Top-left "● 12:04:33 MT · CAM-04" mono in goldenrod. Top-right "360° · 2160p · 30fps" mono in bone. Center play icon. **Bounding box** at 38%/42% with 24%/32% size, 1.5px goldenrod stroke; subject ID label sits above.
- **Frames timeline**: Below the video, 8-column grid of 16:9 frame thumbnails, 6px gap. The 4th has a 1.5px goldenrod border.
- **Sidebar cards**: Detection (6 KV rows), Conditions (5 rows), Chain of custody (paragraph with mono device-key reference).

#### B5. Camera grid (`reference/grizcam-portal-*/CameraGrid.jsx`)
- **Layout**: 24px/28px padding, header row + 3-column grid of camera cards, 14px gap.
- **Card**: Standard `grz-card` (alert variant when status is alerting). Header: camera ID eyebrow + status label. Body: 16:9 dark video frame with mono "● LIVE" or "○ IDLE" indicator. Footer: location label + 3-up mono row with battery / signal / uptime icons.

## Interactions & Behavior

### Hover / press / focus — universal
- **Hover**: `opacity: 0.9`. No color shift.
- **Press**: `transform: translateY(1px)`.
- **Focus**: `outline: 2px solid var(--accent)` with `outline-offset: 2px`. **Never remove this outline.**
- **Disabled**: `opacity: 0.4`, `cursor: not-allowed`.

### Motion
- **Duration**: 120ms only. No 200ms. No 300ms.
- **Easing**: `ease`. No cubic-beziers, no springs, no bounces.
- **Properties**: `opacity` and `transform` only. **Never animate color** — goldenrod is too saturated to fade through.
- **Alert pulse**: `box-shadow: 0 0 0 3px → 7px` of `--accent-glow`, 1.4s ease-in-out infinite.
- **Reduced motion**: Disabled entirely via `@media (prefers-reduced-motion: reduce)` block in the theme CSS — already handled by the imported tokens.

### Theme switching
- Apply `data-theme="dark"` on `<html>` or `<body>`. The token cascade handles the rest.
- Do **not** auto-switch on `prefers-color-scheme` unless explicitly requested.

### Form validation
- Errors display as a goldenrod border on the input + a goldenrod-edged callout below. **Never use red.** Helper text uses `.grz-helper` styling.
- Success uses a unicode `✓` glyph in mono, goldenrod — **not** a check icon.

### Responsive
- Desktop-first. The reference kits assume ≥1280px viewport. **Mobile breakpoints were not designed in this round** — treat as out of scope until specs arrive.

## State management

The reference kits use vanilla `React.useState` for tab switching and selection. Production should use whatever state primitives the codebase has — Redux, Zustand, signals, etc. The relevant state shapes:

- **Portal**: `activeView` (`'map' | 'events' | 'cameras' | 'alerts' | 'settings' | 'detail'`), `selectedEventId`, `selectedCameraId`.
- **Marketing**: stateless except for an optional theme toggle.

Data fetching is mocked — events, cameras, and pins are hard-coded constants. Replace with the real API layer.

## Design tokens

All tokens live in `tokens/grizzly-systems-theme.css` (verbose, source of truth) and `tokens/colors_and_type.css` (short aliases, font @font-face).

### Colors — five primitives

| Name | Hex | HSL |
|---|---|---|
| Pitch Black | `#1a1812` | 45° 18% 9% |
| Taupe | `#454039` | 35° 10% 25% |
| Bone | `#e8e2d2` | 44° 32% 87% |
| Floral White | `#f9f7f0` | 47° 43% 96% |
| Goldenrod | `#d99e30` | 39° 69% 52% |
| Goldenrod glow | `rgba(217, 158, 48, 0.18)` | (alpha) |

**Composition rule**: 60 / 30 / 8 / 2 — surface / ink / secondary / accent.

### Typography

- **Inter Tight** (display + UI). Weights 400, 500. Headlines tracked −0.02em.
- **Source Serif Pro** (body). Weight 400. Long-form prose only.
- **JetBrains Mono** (telemetry). Weight 400. Tracked +0.02em.
- **Eyebrows**: 11px Inter Tight, +0.22em, uppercase.

Type scale (size / line-height): H1 48/52, H2 32/38, H3 22/28, Lead 18/30, Body 16/26, Caption 13/20, Eyebrow 11/16.

### Spacing — 4px base

`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64`. Never use values off the scale.

### Radius

`4` (badges) · `6` (buttons, inputs) · `8` (cards) · `12` (large cards) · `9999` (pills).

### Borders

`1px` (default) · `1.5px` (focused inputs — pad-compensated) · `3px` (callout left edges). **No other widths.**

### Shadows

Not used. The only `box-shadow` in the system is the goldenrod glow on focused/alerting elements.

## Assets

In `assets/`:

| File | Use |
|---|---|
| `icon-black.svg` | Mark on light surfaces, small scale (favicon, button-leading) |
| `icon-primary.svg` | Mark in goldenrod — accent contexts |
| `icon-white.svg` | Mark on dark surfaces |
| `stacked-black.svg` | Full lockup, light-theme header, marketing |
| `stacked-primary.svg` | Full lockup, dark-theme header (the mark+wordmark in goldenrod) |
| `stacked-white.svg` | Full lockup, pure dark surfaces |

**Photography**: not supplied. Hero blocks and event video frames use HUD-style placeholder treatments — replace with real footage / photography when delivered.

**Iconography**: not supplied. Reference kits ship a small inline SVG set, Lucide-style, 1.5px stroke, 24px. Confirm canonical library with the brand owner — Lucide is the recommended default.

## Files in this bundle

```
design_handoff_grizzly_systems/
├── CLAUDE.md                       ← read first if you're Claude Code
├── README.md                       ← this file
├── BRAND.md                        ← full brand narrative & voice rules
├── tokens/
│   ├── grizzly-systems-theme.css   ← token source of truth
│   └── colors_and_type.css         ← aliases + @font-face
├── assets/                         ← logos
│   ├── icon-black.svg, icon-primary.svg, icon-white.svg
│   └── stacked-black.svg, stacked-primary.svg, stacked-white.svg
└── reference/
    ├── marketing-site-light/       ← React+Babel prototype
    ├── marketing-site-dark/
    ├── grizcam-portal-light/
    └── grizcam-portal-dark/
```

## Voice / copy reminder

Field-radio terse. No emoji. No exclamation points. No marketing intensifiers ("seamless," "revolutionary," "AI-powered," "peace of mind"). Specifics over abstractions — use coordinates, model numbers, quantities. "Operators," not "users." See `BRAND.md` for the full content rules and forbidden vocabulary list.
