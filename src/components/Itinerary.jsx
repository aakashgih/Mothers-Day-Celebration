import { events } from '../data/itinerary'
import { spotifyPlaylistUrl } from '../data/spotify'

function toSpotifyEmbedUrl(url) {
  if (!url) return null
  // Strip any tracking params, then convert to embed URL
  const clean = url.split('?')[0]
  return clean.replace('open.spotify.com/', 'open.spotify.com/embed/') + '?utm_source=generator'
}

export default function Itinerary({ onNavigate }) {
  const embedUrl = toSpotifyEmbedUrl(spotifyPlaylistUrl)

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

      {embedUrl && (
        <div className="spotify-player">
          <iframe
            src={`${embedUrl}?utm_source=generator&theme=0`}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Celebration Playlist"
          />
        </div>
      )}
    </main>
  )
}
