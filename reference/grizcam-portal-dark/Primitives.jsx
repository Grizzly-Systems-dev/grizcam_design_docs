/* global React */
const { useState } = React;

// ============================================================================
// Atomic primitives — every screen pulls from this file.
// ============================================================================

function Btn({ variant = 'primary', children, onClick, leadingIcon, ...rest }) {
  const cls = `grz-btn grz-btn--${variant}`;
  return (
    <button className={cls} onClick={onClick} {...rest}>
      {leadingIcon ? <Icon name={leadingIcon} size={14} /> : null}
      {children}
    </button>
  );
}

function Eyebrow({ index, children, accent = true }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
      {index ? (
        <span style={{ font: 'var(--type-mono-sm)', color: accent ? 'var(--fg-accent)' : 'var(--fg2)', letterSpacing: '0.18em' }}>
          {index} /
        </span>
      ) : null}
      <span className="grz-eyebrow">{children}</span>
    </div>
  );
}

function StatusDot({ kind = 'operational', pulse }) {
  const bg = {
    operational: 'var(--accent)',
    alerting: 'var(--accent)',
    standby: 'var(--color-status-standby)',
    offline: 'var(--fg2)',
  }[kind];
  return (
    <span
      className={`grz-status-dot ${pulse ? 'grz-status-dot--pulse' : ''}`}
      style={{ background: bg, animation: pulse ? 'grzPulse 1.4s ease-in-out infinite' : 'none' }}
    />
  );
}

function StatusLabel({ kind, children }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      font: 'var(--type-mono-sm)', letterSpacing: '0.12em',
      textTransform: 'uppercase', color: 'var(--fg2)',
    }}>
      <StatusDot kind={kind} pulse={kind === 'alerting'} />
      {children}
    </span>
  );
}

function Badge({ variant = 'default', children }) {
  const cls = variant === 'default' ? 'grz-badge' : `grz-badge grz-badge--${variant}`;
  return <span className={cls}>{children}</span>;
}

function Field({ label, mono, value, helper, onChange }) {
  return (
    <div className="grz-field">
      <label className="grz-label">{label}</label>
      <input
        className={`grz-input ${mono ? 'grz-input--mono' : ''}`}
        defaultValue={value}
        onChange={onChange}
      />
      {helper ? <span className="grz-helper">{helper}</span> : null}
    </div>
  );
}

function Segmented({ options, value, onChange }) {
  return (
    <div className="grz-segmented">
      {options.map(o => (
        <div
          key={o}
          className="grz-segmented__option"
          aria-selected={value === o}
          onClick={() => onChange && onChange(o)}
        >{o}</div>
      ))}
    </div>
  );
}

function Card({ alert, children, style }) {
  return (
    <div className={`grz-card ${alert ? 'grz-card--alert' : ''}`} style={style}>
      {children}
    </div>
  );
}

// Inline SVG icon set. Tiny — covers what the kit needs.
function Icon({ name, size = 18, color = 'currentColor' }) {
  const paths = {
    'map-pin': <><path d="M12 22s-7-7.58-7-13a7 7 0 1 1 14 0c0 5.42-7 13-7 13z"/><circle cx="12" cy="9" r="2.5"/></>,
    'list': <><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="3.5" cy="6" r="1"/><circle cx="3.5" cy="12" r="1"/><circle cx="3.5" cy="18" r="1"/></>,
    'camera': <><path d="M3 8h3l2-2.5h8L18 8h3v12H3z"/><circle cx="12" cy="13" r="3.5"/></>,
    'bell': <><path d="M6 8a6 6 0 1 1 12 0c0 6 2 7 2 7H4s2-1 2-7"/><path d="M10 21a2 2 0 0 0 4 0"/></>,
    'settings': <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></>,
    'search': <><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
    'arrow-right': <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    'arrow-left': <><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 19"/></>,
    'play': <><polygon points="6 4 20 12 6 20 6 4" fill="currentColor"/></>,
    'volume': <><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19 5a8 8 0 0 1 0 14"/><path d="M16 8a4 4 0 0 1 0 8"/></>,
    'download': <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></>,
    'truck': <><rect x="1" y="6" width="14" height="11"/><polygon points="15 9 21 9 23 13 23 17 15 17 15 9"/><circle cx="6" cy="18.5" r="2"/><circle cx="18" cy="18.5" r="2"/></>,
    'user': <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    'crosshair': <><circle cx="12" cy="12" r="9"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/></>,
    'plus': <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    'check': <><polyline points="20 6 9 17 4 12"/></>,
    'x': <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    'battery': <><rect x="2" y="7" width="18" height="10" rx="1"/><line x1="22" y1="11" x2="22" y2="13"/><rect x="4" y="9" width="11" height="6" fill="currentColor" stroke="none"/></>,
    'signal': <><line x1="3" y1="20" x2="3" y2="20"/><line x1="8" y1="20" x2="8" y2="16"/><line x1="13" y1="20" x2="13" y2="12"/><line x1="18" y1="20" x2="18" y2="8"/></>,
    'sun': <><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.9" y1="4.9" x2="6.9" y2="6.9"/><line x1="17.1" y1="17.1" x2="19.1" y2="19.1"/><line x1="4.9" y1="19.1" x2="6.9" y2="17.1"/><line x1="17.1" y1="6.9" x2="19.1" y2="4.9"/></>,
    'wind': <><path d="M9 4a2 2 0 1 1 2 4H2"/><path d="M16 8a3 3 0 1 1 3 5H2"/><path d="M12 17a2 2 0 1 0 2 4H2"/></>,
    'thermometer': <><path d="M14 14.76V3a2 2 0 0 0-4 0v11.76a4 4 0 1 0 4 0z"/></>,
  };
  if (!paths[name]) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
         style={{ flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' }}>
      {paths[name]}
    </svg>
  );
}

Object.assign(window, { Btn, Eyebrow, StatusDot, StatusLabel, Badge, Field, Segmented, Card, Icon });
