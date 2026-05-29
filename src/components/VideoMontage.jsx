import { videoConfig } from '../data/video'

export default function VideoMontage({ onBack }) {
  const { url, type, title } = videoConfig

  return (
    <main className="video-montage fade-in">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <div className="section-header" style={{ marginTop: '36px' }}>
        <h1>🎬 {title}</h1>
        <p>A special message, made with love</p>
      </div>

      <div className="video-montage__player">
        {!url && (
          <div className="video-placeholder">
            <span className="video-placeholder__icon">🎥</span>
            <h3>Video Coming Soon</h3>
            <p>
              The video montage will appear here.<br />
              Set the <code>url</code> in <code>src/data/video.js</code> to display it.
            </p>
          </div>
        )}

        {url && type === 'html5' && (
          <video controls autoPlay={false}>
            <source src={url} />
            Your browser does not support the video tag.
          </video>
        )}

        {url && (type === 'youtube' || type === 'vimeo') && (
          <iframe
            src={url}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </main>
  )
}
