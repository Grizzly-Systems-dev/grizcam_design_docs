# GrizCam Operator Portal — UI Kit

The web portal operators use to monitor deployed cameras, review detection events, and pull forensic-grade clips. Hi-fi recreation built from the brand description and theme tokens — **no production codebase or Figma was supplied**, so layout decisions are good-faith reconstructions from surveillance-portal conventions and the documented voice/visual rules.

## Files

| File | Component |
|---|---|
| `index.html` | Click-thru shell hosting the views below |
| `Shell.jsx` | Global header + side nav + main pane |
| `MapView.jsx` | Deployment map (default landing) |
| `EventsView.jsx` | Detection event feed |
| `EventDetail.jsx` | Single-event forensic detail (video + telemetry) |
| `CameraGrid.jsx` | Roster of cameras with status |
| `Primitives.jsx` | Buttons, badges, fields, cards reused everywhere |

## What's faked

- Map tiles are a solid floral-white plane with goldenrod pin glyphs.
- Video frames are dark placeholder blocks with mono telemetry overlay.
- All data is hard-coded mock detections.
