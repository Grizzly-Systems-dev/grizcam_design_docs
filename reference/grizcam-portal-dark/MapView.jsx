/* global React, Btn, Eyebrow, Badge, StatusDot, Icon, Card, Segmented */
const { useState: useMapState } = React;

const PINS = [
  { id: 'CAM-01', x: 18, y: 32, status: 'operational', label: 'NW Pasture' },
  { id: 'CAM-02', x: 28, y: 56, status: 'operational', label: 'Creek Crossing' },
  { id: 'CAM-03', x: 44, y: 22, status: 'operational', label: 'Ridgeline North' },
  { id: 'CAM-04', x: 52, y: 64, status: 'alerting',     label: 'South Gate' },
  { id: 'CAM-05', x: 64, y: 38, status: 'operational', label: 'East Tank' },
  { id: 'CAM-06', x: 72, y: 76, status: 'standby',     label: 'River Bend' },
  { id: 'CAM-07', x: 82, y: 28, status: 'operational', label: 'Forest Edge' },
  { id: 'CAM-08', x: 36, y: 78, status: 'alerting',     label: 'Old Fence Line' },
];

function MapView({ onOpenEvent }) {
  const [selected, setSelected] = useMapState('CAM-04');
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', height: '100%' }}>
      <div style={{ position: 'relative', background: 'var(--bg-inset)', borderRight: '1px solid var(--line)', overflow: 'hidden' }}>
        {/* Topographic-line decoration */}
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.4 }}>
          {[...Array(18)].map((_, i) => (
            <path key={i} d={`M0,${60 + i * 32} Q ${200 + i*40},${20 + i*18} ${500 + i*30},${80 + i * 30} T 1200,${100 + i*30}`}
                  stroke="var(--line)" strokeWidth="1" fill="none" />
          ))}
        </svg>
        {/* Crosshair grid */}
        <div style={{ position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
          backgroundSize: '80px 80px', opacity: 0.3,
        }} />
        {/* Coordinates label */}
        <div style={{ position: 'absolute', top: 16, left: 20, font: 'var(--type-mono-sm)', color: 'var(--fg2)', letterSpacing: '0.06em' }}>
          45.4534° N &nbsp; 110.5481° W &nbsp; · &nbsp; 2,340 ACRES
        </div>
        <div style={{ position: 'absolute', top: 16, right: 20, display: 'flex', gap: 8 }}>
          <Segmented options={['Map', 'Satellite', 'Topo']} value="Topo" onChange={()=>{}} />
        </div>
        {/* Pins */}
        {PINS.map(p => (
          <button key={p.id} onClick={() => setSelected(p.id)} style={{
            position: 'absolute', left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%,-100%)',
            background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <div style={{ font: 'var(--type-mono-sm)', letterSpacing: '0.04em', color: 'var(--fg1)',
                background: 'var(--bg)', padding: '2px 6px', border: '1px solid var(--line)', borderRadius: 3,
                opacity: selected === p.id ? 1 : 0.6 }}>
                {p.id}
              </div>
              <svg width="22" height="28" viewBox="0 0 22 28" fill="none">
                <path d="M11 27 L4 14 A8 8 0 1 1 18 14 Z"
                      fill={p.status === 'alerting' ? 'var(--accent)' : (p.status === 'operational' ? 'var(--fg1)' : 'var(--fg2)')}
                      stroke={selected === p.id ? 'var(--accent)' : 'transparent'}
                      strokeWidth="2" />
                <circle cx="11" cy="11" r="3" fill="var(--bg)" />
              </svg>
            </div>
          </button>
        ))}
        {/* Coords readout */}
        <div style={{ position: 'absolute', bottom: 16, right: 20, font: 'var(--type-mono-sm)', color: 'var(--fg-accent)', letterSpacing: '0.06em' }}>
          UPDATED 12:04:33 MT
        </div>
      </div>
      {/* Right pane — selected camera */}
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16, overflow: 'auto' }}>
        <Eyebrow index="04">South Gate</Eyebrow>
        <div>
          <div style={{ font: '500 22px/28px var(--font-display)', letterSpacing: '-0.02em' }}>{selected} · Active alert</div>
          <div style={{ font: 'var(--type-caption)', color: 'var(--fg2)', marginTop: 4 }}>
            Vehicle detected · 12:04:33 MT · 2 minutes ago
          </div>
        </div>

        {/* Video frame */}
        <div style={{ aspectRatio: '16/9', background: '#1a1812', borderRadius: 8, position: 'relative', overflow: 'hidden', border: '1px solid var(--accent)' }}>
          <div style={{ position: 'absolute', top: 10, left: 12, font: 'var(--type-mono-sm)', color: 'var(--accent)', letterSpacing: '0.06em' }}>
            ● REC · CAM-04
          </div>
          <div style={{ position: 'absolute', bottom: 10, left: 12, font: 'var(--type-mono-sm)', color: 'var(--grz-bone, #e8e2d2)', letterSpacing: '0.06em' }}>
            12:04:33 MT
          </div>
          <div style={{ position: 'absolute', inset: 0, display:'flex',alignItems:'center',justifyContent:'center', color: 'var(--grz-bone, #e8e2d2)', opacity: 0.4 }}>
            <Icon name="play" size={56} />
          </div>
        </div>

        {/* Telemetry */}
        <Card>
          <div className="grz-card__body" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              ['SIGNAL', 'LTE · -89 dBm', 'signal'],
              ['BATTERY', '87%', 'battery'],
              ['SOLAR', '14.2 W', 'sun'],
              ['TEMP', '−4°C', 'thermometer'],
              ['WIND', '12 mph NW', 'wind'],
              ['SUBJECT', 'VEH-0182', 'truck'],
            ].map(([label, value, icon]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Icon name={icon} size={16} color="var(--fg2)" />
                <div>
                  <div className="grz-label">{label}</div>
                  <div style={{ font: 'var(--type-mono)', color: 'var(--fg1)', letterSpacing: '0.02em' }}>{value}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div style={{ display: 'flex', gap: 8 }}>
          <Btn variant="primary" onClick={() => onOpenEvent('EVT-0042')} leadingIcon="arrow-right">Open event</Btn>
          <Btn variant="secondary" leadingIcon="download">Pull clip</Btn>
        </div>
      </div>
    </div>
  );
}

window.MapView = MapView;
