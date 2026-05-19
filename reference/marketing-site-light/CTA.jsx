/* global React */

function MktCTA() {
  return (
    <section style={{ padding: '120px 48px', background: '#1a1812', color: '#f9f7f0' }} data-theme="dark">
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'left' }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'baseline', marginBottom: 24 }}>
          <span style={{ font: 'var(--type-mono-sm)', color: 'var(--accent)', letterSpacing: '0.18em' }}>05 /</span>
          <span style={{ font: 'var(--type-eyebrow)', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#e8e2d2' }}>Get deployed</span>
        </div>
        <h2 style={{ font: '500 64px/68px var(--font-display)', letterSpacing: '-0.02em', margin: 0, color: '#f9f7f0' }}>
          20 acres or 2,000,000.<br/>The deployment is the same.
        </h2>
        <p style={{ font: 'var(--type-lead)', color: '#e8e2d2', maxWidth: 640, marginTop: 24 }}>
          Field deployments begin with a coverage walk-through. We size the array, ship the hardware, and walk operators through the portal — typically inside three weeks.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 36, alignItems: 'center' }}>
          <button className="grz-btn grz-btn--primary">Request access</button>
          <button className="grz-btn" style={{ background: 'transparent', color: '#f9f7f0', border: '1px solid #f9f7f0' }}>Talk to deployment</button>
        </div>
      </div>
    </section>
  );
}

window.MktCTA = MktCTA;
