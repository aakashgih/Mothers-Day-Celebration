import { events } from '../data/itinerary'

export default function Itinerary({ onNavigate }) {

  return (
    <main className="home fade-in">
      <div className="home__hero">
        <span className="home__flowers">🌸 🌷 🌹</span>
        <h1 className="home__title">Happy Mother's Day</h1>
        <p className="home__subtitle">Celebrating the incredible women who make life beautiful</p>
      </div>

      <div className="timeline">
        {events.map((event, i) => (
          <div
            key={i}
            className={`timeline-event${event.type !== 'event' ? ' timeline-event--clickable' : ''}`}
            onClick={() => event.type !== 'event' && onNavigate(event.type)}
            role={event.type !== 'event' ? 'button' : undefined}
            tabIndex={event.type !== 'event' ? 0 : undefined}
            onKeyDown={(e) => e.key === 'Enter' && event.type !== 'event' && onNavigate(event.type)}
          >
            <div className="timeline-time">{event.time}</div>
            <div className="timeline-dot" />
            <div className="timeline-body">
              <span className="timeline-icon">{event.icon}</span>
              <div className="timeline-text">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
              {event.type !== 'event' && (
                <span className="timeline-cta">Tap to open →</span>
              )}
            </div>
          </div>
        ))}
      </div>

    </main>
  )
}
