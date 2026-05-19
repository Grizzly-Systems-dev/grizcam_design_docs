# CLAUDE.md — Grizzly Systems Design Handoff

You are implementing the Grizzly Systems / GrizCam design system in a real codebase. The HTML files in `reference/` are **design specifications, not production source**. Your job is to translate them into the target stack (likely React + a CSS framework, but match whatever exists) while staying pixel-faithful to the documented tokens and patterns.

## What ships in this folder

| Path | Role |
|---|---|
| `CLAUDE.md` | This file. The orientation. |
| `README.md` | Developer-facing handoff doc — fidelity, screens, behavior, tokens. **Read second.** |
| `BRAND.md` | The full design-system narrative — voice, content rules, visual foundations, iconography. **Read first if you're writing copy or making aesthetic decisions.** |
| `tokens/grizzly-systems-theme.css` | The token source of truth. Verbose semantic names. Light + dark themes. |
| `tokens/colors_and_type.css` | Short-alias roles (`--fg1`, `--type-h1`) and webfont @font-face. Imports the theme. |
| `assets/` | Brand mark — icon and stacked variants in three colorways (black / primary / white). |
| `reference/marketing-site-light/` | The grizzlysystems.com marketing site, default light. |
| `reference/marketing-site-dark/` | Same, dark-forward (uses goldenrod logo). |
| `reference/grizcam-portal-light/` | The operator portal — map, events, event detail, camera grid. |
| `reference/grizcam-portal-dark/` | Same, dark-forward. |

## How to read the reference files

Each reference kit is a small React + Babel app. The components are `.jsx` files that share scope through `window`. The folder structure (one component per file, a `Primitives.jsx` for atoms, a `Shell.jsx` for chrome) is a suggested decomposition — **port the components, not the loader pattern**. Babel-in-the-browser is for prototyping only.

Start by opening `reference/<kit>/index.html` to see the composition, then walk into each `.jsx` to read the implementation. The CSS classes used (`grz-btn`, `grz-card`, etc.) are defined in `tokens/grizzly-systems-theme.css`.

## Implementation rules — non-negotiable

1. **Five colors, ever.** The system is `pitch-black` `taupe` `bone` `floral-white` `goldenrod`. Do not introduce error reds, success greens, secondary palettes, or chart colors. Status conveys via tone, not hue.
2. **Goldenrod once per view.** The accent is rationed. If two goldenrod elements appear on a screen, one of them is wrong.
3. **No shadows.** Elevation comes from a 1px border on a slightly different surface. In dark, taupe rises on pitch-black.
4. **No emoji. No exclamation points.** This applies to UI copy, error states, success toasts, everything.
5. **Mono for telemetry only.** Coordinates, timestamps, IDs, part numbers. Body copy is Source Serif Pro. UI labels are Inter Tight.
6. **120ms ease, opacity + transform only.** Never animate color (goldenrod is too saturated to fade through).
7. **Borders are first-class.** 1px default, 1.5px on focused inputs (with padding compensation), 3px on callout left edges. That's the entire border-width vocabulary.

## Theme switching

Light is default. Dark is contextual — apply via `data-theme="dark"` on `<html>` or `<body>`. The token swap propagates automatically. **Do not auto-switch on `prefers-color-scheme`** unless explicitly requested; the brand treats dark as a deliberate context (live monitoring, operator preference, marketing moments), not a system fallback.

## Webfonts

`tokens/colors_and_type.css` loads Inter Tight, Source Serif Pro (Source Serif 4 from Google as the closest available), and JetBrains Mono from Google Fonts. If your codebase has a font-loading strategy, port to that — but **preserve the family / weight / fallback chain exactly**.

## Iconography

The reference kits use a small inline SVG set (Lucide-style, 1.5px stroke, 24px). No canonical icon library was supplied with the brand. **Confirm with the brand owner** before picking a final library. Lucide is the safe default — its monoline aesthetic matches the system.

## Open questions to surface to the brand owner

These were flagged during design and remain unresolved:
- Final icon library choice
- Whether Source Serif Pro (licensed static) should replace the variable Source Serif 4 fallback
- Photography direction — no imagery was supplied; placeholder blocks stand in
- Mobile operator app, hardware installer view, admin/billing surfaces — none designed yet

## Definition of done

A screen is faithfully implemented when:
- All colors map to tokens — no hex literals in components
- Typography uses the declared families, sizes, line heights, and tracking values
- Spacing comes off the 4px scale
- Hover is `opacity: 0.9`, press is `translateY(1px)`, focus is the 2px goldenrod outline at 2px offset
- Light and dark both render correctly without code branches inside components — only the theme attribute changes

When in doubt, prefer the system's restraint. The brand voice is *technical sobriety* — the design follows.
