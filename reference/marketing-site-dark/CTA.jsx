/* global React */

function MktCTA() {
  return (
    <section style={{ padding: '120px 48px', background: 'var(--grz-floral-white)', color: 'var(--grz-pitch-black)' }} data-theme="light">
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'left' }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'baseline', marginBottom: 24 }}>
          <span style={{ font: 'var(--type-mono-sm)', color: 'var(--grz-goldenrod)', letterSpacing: '0.18em' }}>05 /</span>
          <span style={{ font: 'var(--type-eyebrow)', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--grz-taupe)' }}>Get deployed</span>
        </div>
        <h2 style={{ font: '500 64px/68px var(--font-display)', letterSpacing: '-0.02em', margin: 0, color: 'var(--grz-pitch-black)' }}>
          20 acres or 2,000,000.<br/>The deployment is the same.
        </h2>
        <p style={{ font: 'var(--type-lead)', color: 'var(--grz-taupe)', maxWidth: 640, marginTop: 24 }}>
          Field deployments begin with a coverage walk-through. We size the array, ship the hardware, and walk operators through the portal — typically inside three weeks.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 36, alignItems: 'center' }}>
          <button className="grz-btn grz-btn--primary">Request access</button>
          <button className="grz-btn" style={{ background: 'transparent', color: 'var(--grz-pitch-black)', border: '1px solid var(--grz-pitch-black)' }}>Talk to deployment</button>
        </div>
      </div>
    </section>
  );
}

window.MktCTA = MktCTA;
