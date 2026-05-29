import { youtubeUrl } from '../data/video'

function toEmbedUrl(url) {
  if (!url) return null
  // Handle youtu.be short links
  const short = url.match(/youtu\.be\/([^?&]+)/)
  if (short) return `https://www.youtube.com/embed/${short[1]}?autoplay=1`
  // Handle full watch links
  const full = url.match(/[?&]v=([^&]+)/)
  if (full) return `https://www.youtube.com/embed/${full[1]}?autoplay=1`
  // Already an embed URL
  if (url.includes('/embed/')) return url
  return url
}

export default function VideoMontage({ onBack }) {
  const embedUrl = toEmbedUrl(youtubeUrl)

  return (
    <main className="video-montage fade-in">
      <button className="back-btn" onClick={onBack}>← Back to Itinerary</button>

      <div className="section-header" style={{ marginTop: '36px' }}>
        <h1>🎬 A Message From the Family</h1>
        <p>A special video made with love, just for Mom</p>
      </div>

      <div className="video-montage__player">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title="Mother's Day Video Montage"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="video-placeholder">
            <span className="video-placeholder__icon">🎥</span>
            <h3>Video Coming Soon</h3>
            <p>
              Set <code>youtubeUrl</code> in <code>src/data/video.js</code> to your YouTube link
              and it will play here automatically.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
