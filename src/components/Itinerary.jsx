import { events } from '../data/itinerary'

export default function Itinerary({ onBack }) {
  return (
    <main className="itinerary fade-in">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <div className="section-header" style={{ marginTop: '36px' }}>
        <h1>📅 Today's Itinerary</h1>
        <p>Everything planned for this special day</p>
      </div>

      <div className="timeline">
        {events.map((event, i) => (
          <div className="timeline-event" key={i}>
            <div className="timeline-time">{event.time}</div>
            <div className="timeline-dot" />
            <div className="timeline-body">
              <span className="timeline-icon">{event.icon}</span>
              <div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
