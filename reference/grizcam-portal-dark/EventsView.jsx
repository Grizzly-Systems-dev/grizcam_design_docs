/* global React, Eyebrow, Badge, Icon, Btn, Segmented, StatusDot */
const { useState: useEvState } = React;

const EVENTS = [
  { id: 'EVT-0042', cam: 'CAM-04', label: 'South Gate', kind: 'VEHICLE', subject: 'VEH-0182', time: '12:04:33', date: 'Today',     dist: '38 m',  active: true },
  { id: 'EVT-0041', cam: 'CAM-08', label: 'Old Fence Line', kind: 'PERSON', subject: 'PER-0091', time: '11:47:08', date: 'Today',  dist: '14 m',  active: true },
  { id: 'EVT-0040', cam: 'CAM-02', label: 'Creek Crossing', kind: 'VEHICLE', subject: 'VEH-0181', time: '09:12:55', date: 'Today',  dist: '52 m' },
  { id: 'EVT-0039', cam: 'CAM-04', label: 'South Gate', kind: 'VEHICLE', subject: 'VEH-0180', time: '07:33:01', date: 'Today',     dist: '40 m' },
  { id: 'EVT-0038', cam: 'CAM-07', label: 'Forest Edge', kind: 'GUNSHOT', subject: 'AUD-0011', time: '05:18:44', date: 'Today',     dist: '— m' },
  { id: 'EVT-0037', cam: 'CAM-01', label: 'NW Pasture', kind: 'PERSON', subject: 'PER-0090', time: '23:55:12', date: 'Yesterday', dist: '22 m' },
  { id: 'EVT-0036', cam: 'CAM-03', label: 'Ridgeline North', kind: 'VEHICLE', subject: 'VEH-0179', time: '20:04:09', date: 'Yesterday', dist: '88 m' },
  { id: 'EVT-0035', cam: 'CAM-05', label: 'East Tank', kind: 'PERSON', subject: 'PER-0089', time: '18:21:02', date: 'Yesterday', dist: '11 m' },
];

function EventsView({ onOpenEvent }) {
  const [filter, setFilter] = useEvState('All');
  const filtered = filter === 'All' ? EVENTS : EVENTS.filter(e => e.kind === filter.toUpperCase());
  return (
    <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 18 }}>
      {/* Filter row */}
      <div style={{ display: 'flex', gap: 14, alignItems: 'center', justifyContent: 'space-between' }}>
        <Segmented options={['All', 'Vehicle', 'Person', 'Gunshot']} value={filter} onChange={setFilter} />
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <span style={{ font: 'var(--type-mono-sm)', color: 'var(--fg2)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {filtered.length} events · last 48 h
          </span>
          <Btn variant="secondary" leadingIcon="download">Export CSV</Btn>
        </div>
      </div>

      {/* Table-like list */}
      <div style={{ border: '1px solid var(--line)', borderRadius: 8, overflow: 'hidden', background: 'var(--bg-raised)' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '110px 110px 1fr 130px 100px 90px 60px',
          padding: '12px 18px', borderBottom: '1px solid var(--line)',
          font: 'var(--type-mono-sm)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg2)',
          background: 'var(--bg-inset)',
        }}>
          <div>Event</div><div>Time</div><div>Camera</div><div>Subject</div><div>Distance</div><div>Kind</div><div></div>
        </div>
        {filtered.map((e, i) => (
          <button key={e.id} onClick={() => onOpenEvent(e.id)} style={{
            display: 'grid', gridTemplateColumns: '110px 110px 1fr 130px 100px 90px 60px',
            padding: '14px 18px', borderBottom: i === filtered.length - 1 ? 'none' : '1px solid var(--line)',
            background: 'transparent', border: 'none', textAlign: 'left', cursor: 'pointer', width: '100%',
            alignItems: 'center', borderLeft: e.active ? '3px solid var(--accent)' : '3px solid transparent',
          }}>
            <div style={{ font: 'var(--type-mono)', color: 'var(--fg1)', letterSpacing: '0.02em' }}>{e.id}</div>
            <div style={{ font: 'var(--type-mono)', color: 'var(--fg2)', letterSpacing: '0.02em' }}>{e.time}</div>
            <div>
              <div style={{ font: 'var(--type-eyebrow)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>{e.label}</div>
              <div style={{ font: 'var(--type-mono-sm)', color: 'var(--fg2)', letterSpacing: '0.04em', marginTop: 2 }}>{e.cam} · {e.date}</div>
            </div>
            <div style={{ font: 'var(--type-mono)', color: 'var(--fg-accent)', letterSpacing: '0.02em' }}>{e.subject}</div>
            <div style={{ font: 'var(--type-mono)', color: 'var(--fg2)', letterSpacing: '0.02em' }}>{e.dist}</div>
            <div>{e.active ? <Badge variant="alert">{e.kind}</Badge> : <Badge variant="outline">{e.kind}</Badge>}</div>
            <div style={{ color: 'var(--fg2)' }}><Icon name="arrow-right" size={18} /></div>
          </button>
        ))}
      </div>
    </div>
  );
}

window.EventsView = EventsView;
