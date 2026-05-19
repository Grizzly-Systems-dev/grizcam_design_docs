/* global React, Card, Eyebrow, Icon, Badge, StatusLabel */

const CAMERAS = [
  { id: 'CAM-01', label: 'NW Pasture',       status: 'operational', battery: 92, signal: 'LTE -78',  uptime: '142 d' },
  { id: 'CAM-02', label: 'Creek Crossing',   status: 'operational', battery: 88, signal: 'LTE -82',  uptime: '142 d' },
  { id: 'CAM-03', label: 'Ridgeline North',  status: 'operational', battery: 76, signal: 'SAT',      uptime: '98 d'  },
  { id: 'CAM-04', label: 'South Gate',       status: 'alerting',     battery: 87, signal: 'LTE -89',  uptime: '142 d' },
  { id: 'CAM-05', label: 'East Tank',        status: 'operational', battery: 81, signal: 'LTE -75',  uptime: '142 d' },
  { id: 'CAM-06', label: 'River Bend',       status: 'standby',     battery: 14, signal: 'SAT',      uptime: '5 d'   },
  { id: 'CAM-07', label: 'Forest Edge',      status: 'operational', battery: 95, signal: 'LTE -71',  uptime: '142 d' },
  { id: 'CAM-08', label: 'Old Fence Line',   status: 'alerting',     battery: 68, signal: 'LTE -86',  uptime: '142 d' },
  { id: 'CAM-09', label: 'High Meadow',      status: 'operational', battery: 90, signal: 'SAT',      uptime: '67 d'  },
];

function CameraGrid() {
  return (
    <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Eyebrow index="A">Field Hardware</Eyebrow>
        <span style={{ font: 'var(--type-mono-sm)', color: 'var(--fg2)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          12 deployed · 9 shown
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        {CAMERAS.map(c => (
          <Card key={c.id} alert={c.status === 'alerting'}>
            <div className="grz-card__header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="grz-eyebrow" style={{ letterSpacing: '0.18em' }}>{c.id}</div>
              <StatusLabel kind={c.status}>{c.status}</StatusLabel>
            </div>
            <div style={{ aspectRatio: '16/9', background: '#1a1812', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 8, left: 10, font: 'var(--type-mono-sm)', color: c.status === 'alerting' ? 'var(--accent)' : '#e8e2d2', letterSpacing: '0.06em' }}>
                {c.status === 'alerting' ? '● LIVE' : '○ IDLE'}
              </div>
              <div style={{ position: 'absolute', bottom: 8, left: 10, font: 'var(--type-mono-sm)', color: '#e8e2d2', letterSpacing: '0.06em' }}>
                {c.id}
              </div>
            </div>
            <div className="grz-card__body" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ font: 'var(--type-eyebrow)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>{c.label}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', font: 'var(--type-mono-sm)', color: 'var(--fg2)', letterSpacing: '0.04em' }}>
                <span><Icon name="battery" size={12} color="var(--fg2)" />&nbsp; {c.battery}%</span>
                <span><Icon name="signal" size={12} color="var(--fg2)" />&nbsp; {c.signal}</span>
                <span>{c.uptime}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

window.CameraGrid = CameraGrid;
