# Grizzly Systems Design System

> **Rugged. Technical. Precise.** Built for the field, applied at every touchpoint.
> N 45.4° / W 110.5° — Paradise Valley, MT

---

## What is Grizzly Systems?

**Grizzly Systems** delivers intelligent, off-grid surveillance — whether the customer cares about 20 acres or 2,000,000. The flagship product, **GrizCam**, is a multi-sensor AI camera that detects and records **only meaningful activity** — vehicles, people, gunshots — while ignoring the wind-and-shadow false alarms that plague conventional motion cameras.

It combines **360° video, directional audio, and environmental sensors** into real-time alerts and forensic-grade evidence — from places with **no power and no cell coverage**, which is over 80% of the Earth's terrestrial surface.

**Customer surfaces:**
- **Private ranchland** — landowners protecting livestock, equipment, fence lines.
- **Public parks & wildland** — agencies tracking wildlife, poaching, fire ignition.
- **Critical infrastructure** — pipelines, substations, remote installations.

The product wedge: *command-center intelligence, in the middle of nowhere.*

---

## Sources used to build this system

This system was built from materials supplied by the user. The reader of this README may not have access to the originals — they are listed here for archival reference.

| Source | What it contained | Status |
|---|---|---|
| `uploads/grizzly-systems-theme.css` | Master design tokens — colors, type, spacing, components (buttons, cards, fields, badges, callouts), light + dark themes | Imported as `grizzly-systems-theme.css` at the project root |
| `uploads/icon-*.svg` (3 variants) | Mark — black / primary (goldenrod) / white | In `assets/` |
| `uploads/stacked-*.svg` (3 variants) | Stacked logo with wordmark — black / primary / white | In `assets/` |

**No codebase, Figma file, or marketing screenshots were provided.** Where decisions weren't documented in the theme file, this README extrapolates from the brand voice in the company description and the visual fingerprint of the supplied tokens. Those inferred sections are flagged.

---

## Index

| File | Purpose |
|---|---|
| `README.md` | This file. Brand, content, visual + iconography guidance. |
| `SKILL.md` | Agent-skill manifest — load this to design *as* Grizzly Systems. |
| `grizzly-systems-theme.css` | Master tokens (verbose semantic names). The source of truth. |
| `colors_and_type.css` | Short-alias roles (`--fg1`, `--type-h1`) + webfont @font-face. Import this in every artifact. |
| `assets/` | Logos (icon + stacked, in 3 colorways). |
| `preview/` | Cards rendered in the Design System tab. |
| `ui_kits/grizcam-portal/` | Hi-fi recreation of the GrizCam web portal — the live monitoring product. |
| `ui_kits/marketing-site/` | The grizzlysystems.com marketing site. |

---

## Content fundamentals

The voice is **field-radio terse**. Sentences are short. Adjectives are earned. The product is the protagonist — never the customer's emotion. Compare:

- ✅ *"Detects vehicles, people, gunshots. Ignores wind."*
- ❌ *"You'll feel safer knowing your land is protected by AI."*

### Principles

1. **Capability over benefit.** State what it does, not how it makes someone feel. *"Forensic-grade evidence from places with no power or cell coverage"* — not *"peace of mind for what matters most."*
2. **Specific over general.** Use measurements and coordinates. *"20 acres or 2,000,000."* *"N 45.4° / W 110.5°."* *"Over 80% of the Earth's terrestrial surface."* Vagueness reads as marketing fluff and undermines the technical credibility.
3. **Contrast is the rhetorical device.** *"Unlike motion cameras that trigger on wind or shadows…"* The brand defines itself by what it isn't. Use this pattern in headlines and feature copy.
4. **Lower-case telemetry, capital-letter labels.** Body copy is mixed case. UI labels and section indicators are `UPPERCASE TRACKED`. Mono numerals (`38.6121° N`, `EVT-0042`, `12:04:33 MT`) are always exact.

### Voice & casing

| Element | Style | Example |
|---|---|---|
| Headlines | Sentence case, terse | "Built for the field." |
| Section eyebrows | UPPERCASE, tracked +0.22em | `01 / FIELD HARDWARE` |
| Buttons | Title Case, short | `Request Access`, `Open Portal` |
| Body copy | Sentence case, full sentences, no exclamation | "GrizCam runs on solar with seven days of battery reserve." |
| System notifications | Mono, 24h time, MT timezone | `12:04:33 MT — Vehicle detected, Camera 04` |
| Coordinates | Always degrees + decimal, never DMS | `45.4534° N, 110.5481° W` |

### Pronouns

- **"The system"** or **"GrizCam"** — never anthropomorphized.
- **"Operators"** for users of the portal. **"Landowners"** or **"agencies"** in marketing. Never *"users."*
- **"You"** is rare — used in onboarding and direct CTAs only. **"We"** is rarer still — only in the About page and contractual language.

### Forbidden

- ❌ **Emoji.** Not in copy, not in UI, not in support docs. The brand's emotional register is *technical sobriety*; emoji break it instantly.
- ❌ **Exclamation points.** Even in success states. ("Camera deployed." not "Camera deployed!")
- ❌ **Marketing intensifiers** — *seamless, revolutionary, cutting-edge, AI-powered, peace of mind, game-changing.*
- ❌ **Casual contractions in body copy** — write *"does not"* and *"will not"* in formal materials. Contractions *are* allowed in conversational support copy.
- ❌ **Hedging language** — *"may"*, *"can sometimes"*, *"in most cases."* The product is deterministic; the copy reflects that.

---

## Visual foundations

The visual language reads as **field-instrument industrial**: the look of a sealed weatherproof enclosure with a single goldenrod indicator LED. Warm neutrals, no decoration that isn't structural, the goldenrod accent rationed.

### Color

The whole system is **five colors**. There are no secondary palettes, no chart-color extensions, no error red.

| Token | Hex | Role |
|---|---|---|
| Pitch Black | `#1a1812` | Primary ink, dark surfaces. Warm — never #000. |
| Taupe | `#454039` | Secondary text, raised dark surface, structural lines. |
| Bone | `#e8e2d2` | Inset surfaces, segmented controls, dividers in light. |
| Floral White | `#f9f7f0` | Primary light surface. The page color. |
| Goldenrod | `#d99e30` | The accent. **Used once per view.** Status, focus, alerts, the single primary CTA. |

**The 60 / 30 / 8 / 2 ratio** governs every layout: 60% surface, 30% ink, 8% secondary, 2% accent. Goldenrod that appears more than once in a screen reads as marketing collateral and breaks the rule.

**Status semantics** are unusual: *operational*, *alert*, and *standby* are all goldenrod or taupe. There is no green/red duality. The system says *"something is happening here"* via tone, not via color hue. This is intentional — the product is deployed in environments where colorblind operators and washed-out daylight LCDs are the norm.

### Typography

Three families, three jobs.

- **Inter Tight** (display + UI). Headlines, buttons, eyebrows, labels. Medium weight (500) is the default; regular (400) is rare. Tracked **-0.02em** at display sizes for that compressed engineering-spec feel.
- **Source Serif Pro** (long-form body). Marketing prose, blog posts, documentation. The serif is the "human" register — used wherever a person is being addressed in full sentences.
- **JetBrains Mono** (telemetry). Coordinates, timestamps, part numbers, IDs, section indicators. Tracked **+0.02em** for column alignment.

**Eyebrow labels** (`01 / FIELD HARDWARE`) pair a mono numeric prefix with a tracked-uppercase Inter Tight tail. This is the recurring structural motif of the system.

### Spacing & layout

- **4px base scale** — `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64`. Never use values off the scale.
- **Borders are first-class structure.** Shadows are absent from the system. Elevation comes from a 1px border on a surface that is barely lighter than the page. In dark mode, elevation comes from taupe rising on pitch-black.
- **Fixed elements** — the global header is fixed at 64px. Side nav in the portal is fixed at 240px. Otherwise the system avoids stickiness.
- **Layout grid** — 12 column, 64px gutters at desktop; collapses to 4 column, 16px gutters on mobile.

### Backgrounds & imagery

- **No gradients.** None. Marketing pages may use one full-bleed photograph above the fold; everything below is flat color.
- **Photography** is **cool, slightly desaturated, never warm-graded.** High-altitude landscapes, equipment in situ at dawn or dusk, gloved hands operating hardware. The goldenrod logo against a cold landscape is the recurring visual hook.
- **No hand-drawn illustrations. No 3D renders. No isometric icons.** When something can't be photographed, it is wireframe-diagrammed in pitch black ink on floral white — the look of a manufacturer's engineering drawing.
- **Repeating patterns and textures are absent.** The brand is *not* the camo / outdoors-gear visual register; the product is laboratory-grade.

### Borders, radii, shadows

- **Radius scale**: `4 / 6 / 8 / 12 / 9999 (pill)`. Buttons + inputs are 6px. Cards are 8px. Pills are reserved for status and filter chips.
- **Border widths**: 1px is the default everywhere. 1.5px appears only on focused inputs (where it replaces 1px without shifting layout — padding compensates). 3px is used as a structural left edge on callouts and as a divider on goldenrod-accented sections.
- **Shadows are not used.** The only "glow" is `--accent-glow` (`rgba(217, 158, 48, 0.18)`) as the box-shadow of focus rings and the active-alert pulse.

### Cards

A card is a **1px bone border on floral-white surface**, rounded 8px, with internal padding of 16px. The border-bottom of the card header (`.grz-card__header`) is a 1px bone divider — the same line continues into the footer. Cards never have shadows, never have gradients, never have decorative iconography in their corners. Alert cards swap the bone border for a 1px goldenrod border. That is the entire card system.

### Animation

- **Duration**: 120ms. That's it. There is no 200ms, no 300ms.
- **Easing**: `ease`. The system does not use cubic-beziers, springs, or bounces. Motion is functional acknowledgement, not theater.
- **Properties**: `opacity` and `transform` only. Never animate color (the goldenrod is too saturated to fade through).
- **Reduced motion** disables everything via the `@media (prefers-reduced-motion: reduce)` block.

### Hover, press, focus

- **Hover** = `opacity: 0.9`. No color shift.
- **Press** = `transform: translateY(1px)`. The button visibly seats into the surface.
- **Focus** = `outline: 2px solid goldenrod` with a 2px offset. **Never remove this outline.**
- **Disabled** = 0.4 opacity, no pointer cursor.

### Transparency & blur

The system uses transparency in exactly one place: the **goldenrod glow** at 18% alpha for focus rings and active-alert pulses. There is no `backdrop-filter: blur()` anywhere. There are no glassmorphic surfaces. Translucency is associated with consumer software, not with field instruments.

### Dark mode

Dark is **contextual, not the default**. It appears on:
1. The live monitoring map view in the portal (so reflections off the operator's screen don't blow out the camera feed).
2. User opt-in.
3. Marketing moments where the product is shown deployed at night.

In dark, **elevation comes from taupe on pitch-black, not from a deeper black**. The warmth of `#1a1812` is a system property — never compensated for with cooler black.

---

## Iconography

**Custom is rare. We supply our own only for the brand mark.**

### What ships in this system

- **`assets/icon-*.svg`** — the GrizCam mark (a stylized topographic camera bracket). Three colorways: `black`, `primary` (goldenrod), `white`. Used at the smallest scales — favicon, app icon corners, button-leading positions where the wordmark would crowd.
- **`assets/stacked-*.svg`** — the full lockup with wordmark. Three colorways. Used in the global header, marketing hero, login screens, document headers, packing-slip masthead.

### General iconography

The codebase / Figma was not supplied, so the system has **no canonical icon set yet**. The recommended substitution — and what every UI kit in this project uses — is **Lucide Icons via CDN** (`https://unpkg.com/lucide@latest`), in the **default 24px stroke = 1.5px** weight. Lucide's monoline aesthetic matches the brand's industrial-spec restraint.

**🚧 Substitution flagged.** If Grizzly Systems has a custom icon set or a chosen library (e.g. Phosphor Bold, Tabler), please supply the source files (or the package name) so the kit can be regenerated against the real assets.

### Rules for icon usage

- **24px is the canonical UI size.** 16px appears only inline in mono-typed status rows. 32px+ appears only in marketing.
- **Stroke icons only.** No filled icon variants in the product UI. Filled icons are used in marketing as full-color illustrations of the camera hardware (currently absent).
- **Pair icons with mono labels.** A truck icon next to `VEH-0182` is correct. An icon alone, without text, is acceptable only when the meaning is universal (close X, search, settings gear).
- **Color**: icons inherit `currentColor`. They take goldenrod *only* when the label they sit next to is goldenrod (alert / accent context).

### Emoji, unicode, dingbats

- **Emoji**: forbidden. See content fundamentals.
- **Unicode dingbats** (✓, ×, →, ↗): permitted in mono-typed contexts where they parse as glyphs, not symbols. The success checkmark in form validation is a unicode `✓` in mono, goldenrod, never an icon.
- **No icon fonts** (FontAwesome, Material Icons). SVG only.

---

## Caveats & open questions

These are flagged in-line above and collected here.

1. **Webfonts.** No font files were supplied. `colors_and_type.css` loads `Inter Tight`, `Source Serif Pro`, and `JetBrains Mono` via Google Fonts. If Grizzly licenses Source Serif as a static asset (the variable axis differs slightly), please supply.
2. **Icon library.** No icon set was supplied. Lucide is used as a substitute throughout the UI kits. Confirm or supply the canonical set.
3. **Marketing imagery.** No photography or illustrations were supplied. The marketing UI kit uses neutral placeholder blocks where hero photos would sit.
4. **Product screenshots.** No GrizCam portal screenshots, Figma file, or codebase were supplied. The portal UI kit is a *good-faith reconstruction* from the brand description, the theme tokens, and standard surveillance-portal conventions. **It is the section most likely to need correction.**
