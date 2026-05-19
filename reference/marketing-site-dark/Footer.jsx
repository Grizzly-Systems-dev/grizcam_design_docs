/* global React */

function MktFooter() {
  const cols = [
    ['Product', ['GrizCam Mk II', 'Operator portal', 'Spec sheet', 'Roadmap']],
    ['Deployments', ['Ranchland', 'Public lands', 'Critical infrastructure', 'Case studies']],
    ['Company', ['About', 'Field journal', 'Careers', 'Press']],
    ['Operators', ['Sign in', 'Documentation', 'Field support', 'Status']],
  ];
  return (
    <footer style={{ padding: '64px 48px 36px', borderTop: '1px solid var(--line)', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 48 }}>
          <div>
            <img src="../../assets/stacked-primary.svg" alt="Grizzly Systems" style={{ height: 56 }} />
            <div style={{ font: 'var(--type-mono-sm)', color: 'var(--fg-accent)', letterSpacing: '0.06em', marginTop: 18 }}>
              45.4534° N &nbsp; 110.5481° W
            </div>
            <div style={{ font: 'var(--type-mono-sm)', color: 'var(--fg2)', letterSpacing: '0.04em', marginTop: 4 }}>
              Paradise Valley, Montana
            </div>
          </div>
          {cols.map(([title, items]) => (
            <div key={title}>
              <div style={{ font: 'var(--type-eyebrow)', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--fg-accent)', marginBottom: 14 }}>{title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(i => (
                  <a key={i} href="#" style={{ font: 'var(--type-body)', color: 'var(--fg1)', textDecoration: 'none' }}>{i}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 56, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
          <span style={{ font: 'var(--type-mono-sm)', color: 'var(--fg2)', letterSpacing: '0.06em' }}>© 2026 Grizzly Systems · All rights reserved</span>
          <span style={{ font: 'var(--type-mono-sm)', color: 'var(--fg2)', letterSpacing: '0.06em' }}>Privacy &nbsp;·&nbsp; Terms &nbsp;·&nbsp; Security</span>
        </div>
      </div>
    </footer>
  );
}

window.MktFooter = MktFooter;
