/* global React, Btn, Icon, StatusLabel */
const { useState: useShellState } = React;

function Sidebar({ active, onNav }) {
  const items = [
    { id: 'map', label: 'Map', icon: 'map-pin' },
    { id: 'events', label: 'Events', icon: 'list' },
    { id: 'cameras', label: 'Cameras', icon: 'camera' },
    { id: 'alerts', label: 'Alerts', icon: 'bell' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];
  return (
    <aside style={{
      width: 240, borderRight: '1px solid var(--line)',
      background: 'var(--bg)', display: 'flex', flexDirection: 'column',
      padding: '20px 14px', gap: 4, flexShrink: 0,
    }}>
      <div style={{ padding: '0 8px 18px', borderBottom: '1px solid var(--line)', marginBottom: 14 }}>
        <img src="../../assets/stacked-black.svg" alt="Grizzly Systems" style={{ height: 36 }} />
      </div>
      {items.map(it => (
        <button key={it.id} onClick={() => onNav(it.id)} style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '9px 12px', border: 'none', cursor: 'pointer',
          background: active === it.id ? 'var(--bg-inset)' : 'transparent',
          color: active === it.id ? 'var(--fg1)' : 'var(--fg2)',
          font: 'var(--type-eyebrow)', letterSpacing: '0.18em',
          textTransform: 'uppercase', borderRadius: 6, textAlign: 'left',
          fontWeight: active === it.id ? 500 : 400,
        }}>
          <Icon name={it.icon} size={16} />
          {it.label}
        </button>
      ))}
      <div style={{ marginTop: 'auto', padding: '14px 8px 0', borderTop: '1px solid var(--line)' }}>
        <div style={{ font: 'var(--type-mono-sm)', color: 'var(--fg2)', letterSpacing: '0.12em', marginBottom: 4 }}>DEPLOYMENT</div>
        <div style={{ font: 'var(--type-mono)', color: 'var(--fg1)', letterSpacing: '0.02em' }}>Paradise Valley · MT</div>
        <div style={{ font: 'var(--type-mono-sm)', color: 'var(--fg-accent)', letterSpacing: '0.04em', marginTop: 2 }}>45.4534° N · 110.5481° W</div>
      </div>
    </aside>
  );
}

function TopBar({ title, subtitle }) {
  return (
    <div style={{
      height: 64, borderBottom: '1px solid var(--line)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 28px', flexShrink: 0,
    }}>
      <div>
        <div style={{ font: 'var(--type-eyebrow)', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--fg2)' }}>
          {subtitle}
        </div>
        <div style={{ font: '500 22px/28px var(--font-display)', letterSpacing: '-0.02em', color: 'var(--fg1)' }}>
          {title}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <StatusLabel kind="alerting">2 active alerts</StatusLabel>
        <div style={{ width: 1, height: 28, background: 'var(--line)' }} />
        <StatusLabel kind="operational">12 cameras up</StatusLabel>
        <div style={{ width: 1, height: 28, background: 'var(--line)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: 'var(--bg-inset)', border: '1px solid var(--line)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            font: 'var(--type-mono-sm)', letterSpacing: '0.04em',
          }}>RC</div>
          <span style={{ font: 'var(--type-eyebrow)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>R. Castellanos</span>
        </div>
      </div>
    </div>
  );
}

function Shell({ active, onNav, title, subtitle, children }) {
  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--bg)' }}>
      <Sidebar active={active} onNav={onNav} />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <TopBar title={title} subtitle={subtitle} />
        <div style={{ flex: 1, overflow: 'auto' }}>{children}</div>
      </main>
    </div>
  );
}

Object.assign(window, { Shell });
