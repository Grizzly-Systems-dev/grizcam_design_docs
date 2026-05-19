/* global React */

function MktHeader() {
  const links = ['Product', 'Deployments', 'Spec sheet', 'About', 'Operators'];
  return (
    <header style={{
      position: 'sticky', top: 0, height: 64, zIndex: 10,
      background: 'rgba(249,247,240,0.92)', borderBottom: '1px solid var(--line)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px',
    }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <img src="../../assets/stacked-black.svg" alt="Grizzly Systems" style={{ height: 30 }} />
      </a>
      <nav style={{ display: 'flex', gap: 32 }}>
        {links.map(l => (
          <a key={l} href="#" style={{
            font: 'var(--type-eyebrow)', letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--fg1)', textDecoration: 'none',
          }}>{l}</a>
        ))}
      </nav>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <a href="#" style={{
          font: 'var(--type-eyebrow)', letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'var(--fg2)', textDecoration: 'none',
        }}>Sign in</a>
        <button className="grz-btn grz-btn--primary">Request access</button>
      </div>
    </header>
  );
}

window.MktHeader = MktHeader;
