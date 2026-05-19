/* global React */

function MktSpecSheet() {
  const rows = [
    ['Optics',         '360° panoramic, 12 MP per quadrant, IR-cut filter'],
    ['Audio',          '4-mic directional array, 50 Hz – 16 kHz'],
    ['Environmental',  'Temp / humidity / barometric / accelerometer'],
    ['Detection',      'On-device NPU · 14 TOPS · vehicle / person / gunshot'],
    ['Storage',        '512 GB encrypted SSD · ~120 days at standard activity'],
    ['Connectivity',   'LTE Cat-12 · Iridium SBD · 900 MHz mesh'],
    ['Power',          '30 W panel · 480 Wh LiFePO₄ · 7-day reserve'],
    ['Enclosure',      '6061-T6 · IP67 · −40°C to +70°C operating range'],
    ['Mount',          'Tree strap · pole bracket · ground stake'],
    ['Mass',           '4.2 kg head · 3.8 kg power module'],
  ];
  return (
    <section style={{ padding: '88px 48px', background: 'var(--grz-pitch-black)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'baseline', marginBottom: 18 }}>
          <span style={{ font: 'var(--type-mono-sm)', color: 'var(--fg-accent)', letterSpacing: '0.18em' }}>04 /</span>
          <span style={{ font: 'var(--type-eyebrow)', letterSpacing: '0.22em', textTransform: 'uppercase' }}>GrizCam · Hardware</span>
        </div>
        <h2 style={{ font: '500 48px/52px var(--font-display)', letterSpacing: '-0.02em', margin: 0, maxWidth: 700 }}>
          Built to outlast the deployment.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginTop: 56 }}>
          <div style={{ position: 'relative', aspectRatio: '4/5', background: 'var(--grz-floral-white)', border: '1px solid var(--grz-taupe)', borderRadius: 8, overflow: 'hidden' }}>
            {/* Engineering-drawing placeholder */}
            <svg width="100%" height="100%" viewBox="0 0 400 500">
              <g stroke="var(--grz-pitch-black)" strokeWidth="1" fill="none">
                <rect x="120" y="80" width="160" height="180" rx="4" />
                <rect x="140" y="100" width="120" height="120" rx="2" />
                <circle cx="200" cy="160" r="36" />
                <circle cx="200" cy="160" r="24" />
                <circle cx="200" cy="160" r="6" fill="var(--accent)" stroke="none" />
                <line x1="100" y1="280" x2="300" y2="280" />
                <rect x="160" y="290" width="80" height="20" />
                <rect x="80" y="320" width="240" height="120" rx="4" />
                <line x1="200" y1="20" x2="200" y2="80" strokeDasharray="4 4" />
                <line x1="200" y1="260" x2="200" y2="320" strokeDasharray="4 4" />
                <line x1="200" y1="440" x2="200" y2="480" strokeDasharray="4 4" />
              </g>
              <g fill="var(--grz-taupe)" style={{ font: '10px var(--font-mono)' }}>
                <text x="20" y="50">A</text>
                <text x="20" y="170">B</text>
                <text x="20" y="380">C</text>
              </g>
            </svg>
            <div style={{ position: 'absolute', bottom: 14, left: 14, font: 'var(--type-mono-sm)', color: 'var(--grz-goldenrod)', letterSpacing: '0.06em' }}>
              GRIZCAM · MK II · DWG-0042
            </div>
          </div>
          <div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
              {rows.map(([k, v], i) => (
                <tr key={k} style={{ borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--line)' }}>
                  <td style={{ padding: '14px 0', font: 'var(--type-mono-sm)', color: 'var(--fg-accent)', letterSpacing: '0.12em', textTransform: 'uppercase', width: 160, verticalAlign: 'top' }}>{k}</td>
                  <td style={{ padding: '14px 0', font: 'var(--type-body)', color: 'var(--fg1)' }}>{v}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

window.MktSpecSheet = MktSpecSheet;
