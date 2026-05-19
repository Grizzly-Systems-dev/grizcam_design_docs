/* global React */

function MktHero() {
  return (
    <section style={{ padding: '80px 48px 48px', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: 14, alignItems: 'baseline', marginBottom: 24 }}>
        <span style={{ font: 'var(--type-mono-sm)', color: 'var(--fg-accent)', letterSpacing: '0.18em' }}>00 /</span>
        <span style={{ font: 'var(--type-eyebrow)', letterSpacing: '0.22em', textTransform: 'uppercase' }}>Off-grid surveillance · N 45.4° / W 110.5°</span>
      </div>
      <h1 style={{
        font: '500 88px/92px var(--font-display)',
        letterSpacing: '-0.03em', maxWidth: 1100, margin: 0,
      }}>
        Command-center intelligence,<br/>in the middle of nowhere.
      </h1>
      <p style={{ font: 'var(--type-lead)', color: 'var(--fg2)', maxWidth: 640, marginTop: 28 }}>
        GrizCam detects vehicles, people, and gunshots from places with no power and no cell coverage. Forensic-grade evidence — not motion-trigger noise.
      </p>
      <div style={{ display: 'flex', gap: 12, marginTop: 32, alignItems: 'center' }}>
        <button className="grz-btn grz-btn--primary">Request access</button>
        <button className="grz-btn grz-btn--text">Read the spec sheet</button>
      </div>

      {/* Hero "image" — placeholder block since no photography supplied */}
      <div style={{
        marginTop: 56, height: 460, borderRadius: 8, background: '#1a1812',
        border: '1px solid var(--line)', position: 'relative', overflow: 'hidden',
      }}>
        {/* Topographic line decoration */}
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.18 }}>
          {[...Array(22)].map((_, i) => (
            <path key={i} d={`M0,${30 + i * 22} Q ${300 + i*40},${-20 + i*16} ${700 + i*30},${50 + i * 22} T 1400,${50 + i*22}`}
                  stroke="#e8e2d2" strokeWidth="1" fill="none" />
          ))}
        </svg>
        {/* HUD overlay */}
        <div style={{ position: 'absolute', top: 24, left: 28, font: 'var(--type-mono-sm)', color: 'var(--accent)', letterSpacing: '0.06em' }}>● LIVE · CAM-04 · SOUTH GATE</div>
        <div style={{ position: 'absolute', top: 24, right: 28, font: 'var(--type-mono-sm)', color: '#e8e2d2', letterSpacing: '0.06em' }}>360°  ·  2160p  ·  30 fps</div>
        <div style={{ position: 'absolute', bottom: 24, left: 28, font: 'var(--type-mono-sm)', color: '#e8e2d2', letterSpacing: '0.06em' }}>
          45.4534° N · 110.5481° W &nbsp;·&nbsp; 12:04:33 MT &nbsp;·&nbsp; SAT LINK
        </div>
        {/* Bounding box */}
        <div style={{ position: 'absolute', left: '42%', top: '38%', width: '18%', height: '34%',
          border: '1.5px solid var(--accent)', borderRadius: 2,
        }}>
          <div style={{ position: 'absolute', top: -22, left: -1, font: 'var(--type-mono-sm)', color: '#1a1812', background: 'var(--accent)', padding: '2px 6px', letterSpacing: '0.06em' }}>VEHICLE · 0.94</div>
        </div>
      </div>
    </section>
  );
}

window.MktHero = MktHero;
