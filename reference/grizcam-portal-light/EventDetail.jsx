/* global React, Btn, Eyebrow, Badge, Icon, Card */

function EventDetail({ id, onBack }) {
  return (
    <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 1280, margin: '0 auto' }}>
      <button onClick={onBack} style={{
        background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
        display: 'inline-flex', alignItems: 'center', gap: 8,
        font: 'var(--type-eyebrow)', letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'var(--fg2)', alignSelf: 'flex-start',
      }}>
        <Icon name="arrow-left" size={14} /> Back to events
      </button>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <Eyebrow index="04">South Gate · CAM-04</Eyebrow>
          <div style={{ font: '500 32px/38px var(--font-display)', letterSpacing: '-0.02em', marginTop: 8 }}>
            {id} · Vehicle detection
          </div>
          <div style={{ font: 'var(--type-lead)', color: 'var(--fg2)', marginTop: 4 }}>
            Pickup-class vehicle, north-bound, 38 m from camera, single occupant.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Btn variant="secondary" leadingIcon="download">Export clip</Btn>
          <Btn variant="primary" leadingIcon="check">Acknowledge</Btn>
        </div>
      </div>

      {/* Video + sidebar */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20 }}>
        <div>
          <div style={{ background: '#1a1812', borderRadius: 8, aspectRatio: '16/9', position: 'relative', overflow: 'hidden', border: '1px solid var(--line)' }}>
            <div style={{ position: 'absolute', top: 14, left: 16, font: 'var(--type-mono-sm)', color: 'var(--accent)', letterSpacing: '0.06em' }}>● 12:04:33 MT · CAM-04</div>
            <div style={{ position: 'absolute', top: 14, right: 16, font: 'var(--type-mono-sm)', color: '#e8e2d2', letterSpacing: '0.06em' }}>360°  ·  2160p  ·  30fps</div>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e8e2d2', opacity: 0.5 }}>
              <Icon name="play" size={64} />
            </div>
            {/* Bounding box */}
            <div style={{ position: 'absolute', left: '38%', top: '42%', width: '24%', height: '32%',
              border: '1.5px solid var(--accent)', borderRadius: 2,
            }}>
              <div style={{ position: 'absolute', top: -22, left: -1, font: 'var(--type-mono-sm)', color: '#1a1812', background: 'var(--accent)', padding: '2px 6px', letterSpacing: '0.06em' }}>VEH-0182 · 0.94</div>
            </div>
            <div style={{ position: 'absolute', bottom: 14, left: 16, right: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
              <Icon name="play" size={20} color="#e8e2d2" />
              <div style={{ flex: 1, height: 2, background: 'rgba(232,226,210,0.3)' }}>
                <div style={{ width: '36%', height: '100%', background: 'var(--accent)' }} />
              </div>
              <Icon name="volume" size={18} color="#e8e2d2" />
              <span style={{ font: 'var(--type-mono-sm)', color: '#e8e2d2', letterSpacing: '0.04em' }}>00:14 / 00:38</span>
            </div>
          </div>

          {/* Frames timeline */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 6, marginTop: 12 }}>
            {Array.from({length:8}).map((_,i)=>(
              <div key={i} style={{
                aspectRatio: '16/9', background: '#1a1812', borderRadius: 4,
                border: i===3 ? '1.5px solid var(--accent)' : '1px solid var(--line)',
                position:'relative',
              }}>
                <div style={{ position:'absolute', bottom:3, right:5, font:'var(--type-mono-sm)', color:'#e8e2d2', fontSize:9, letterSpacing:'0.04em' }}>+{i*4}s</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Card>
            <div className="grz-card__header"><div className="grz-eyebrow">Detection</div></div>
            <div className="grz-card__body">
              <Row k="CONFIDENCE" v="94%" />
              <Row k="CLASS" v="Vehicle · pickup" />
              <Row k="DIRECTION" v="North-bound" />
              <Row k="SPEED" v="14 mph" />
              <Row k="OCCUPANTS" v="1" />
              <Row k="DISTANCE" v="38 m" />
            </div>
          </Card>
          <Card>
            <div className="grz-card__header"><div className="grz-eyebrow">Conditions</div></div>
            <div className="grz-card__body">
              <Row k="LOCATION" v="45.4534° N" />
              <Row k="" v="110.5481° W" />
              <Row k="WIND" v="12 mph NW" />
              <Row k="TEMP" v="−4°C" />
              <Row k="LIGHT" v="Daylight" />
            </div>
          </Card>
          <Card>
            <div className="grz-card__header"><div className="grz-eyebrow">Chain of custody</div></div>
            <div className="grz-card__body">
              <div style={{ font: 'var(--type-caption)', color: 'var(--fg2)' }}>
                Recorded on-device, signed with device key <span style={{ font: 'var(--type-mono-sm)', color: 'var(--fg-accent)', letterSpacing: '0.04em' }}>CAM-04-K2</span>. Hash sealed at capture.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Row({ k, v }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '4px 0' }}>
      <span style={{ font: 'var(--type-mono-sm)', color: 'var(--fg2)', letterSpacing: '0.12em' }}>{k}</span>
      <span style={{ font: 'var(--type-mono)', color: 'var(--fg1)', letterSpacing: '0.02em' }}>{v}</span>
    </div>
  );
}

window.EventDetail = EventDetail;
