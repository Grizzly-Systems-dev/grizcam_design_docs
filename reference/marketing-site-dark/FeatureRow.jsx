/* global React */

function MktFeatureRow() {
  const items = [
    {
      idx: '01',
      eyebrow: 'Detection',
      h: 'Multi-sensor AI. No false alarms.',
      p: 'Vision, directional audio, and environmental signals fuse on-device. Wind, branches, and shadows are filtered before anything reaches the operator console.',
    },
    {
      idx: '02',
      eyebrow: 'Connectivity',
      h: 'Cell, satellite, mesh.',
      p: 'GrizCam falls through three radios automatically. Recordings are signed and queued locally when no link is available, transmitted in priority order when one returns.',
    },
    {
      idx: '03',
      eyebrow: 'Power',
      h: 'Solar, with seven days reserve.',
      p: 'A 30 W solar panel and 480 Wh battery sustain continuous operation through a week of overcast. Field-replaceable. No service visit required.',
    },
  ];
  return (
    <section style={{ padding: '88px 48px', maxWidth: 1280, margin: '0 auto', borderTop: '1px solid var(--line)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 56 }}>
        {items.map(it => (
          <div key={it.idx}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'baseline', marginBottom: 18 }}>
              <span style={{ font: 'var(--type-mono-sm)', color: 'var(--fg-accent)', letterSpacing: '0.18em' }}>{it.idx} /</span>
              <span style={{ font: 'var(--type-eyebrow)', letterSpacing: '0.22em', textTransform: 'uppercase' }}>{it.eyebrow}</span>
            </div>
            <h3 style={{ font: '500 28px/34px var(--font-display)', letterSpacing: '-0.02em', margin: 0 }}>{it.h}</h3>
            <p style={{ font: 'var(--type-body)', color: 'var(--fg2)', marginTop: 14 }}>{it.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

window.MktFeatureRow = MktFeatureRow;
