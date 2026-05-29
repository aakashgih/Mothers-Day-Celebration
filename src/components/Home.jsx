export default function Home({ onNavigate }) {
  const cards = [
    {
      id: 'itinerary',
      icon: '📅',
      title: "Today's Itinerary",
      desc: "See the full schedule of today's celebration from start to finish.",
      cta: 'View Schedule',
    },
    {
      id: 'trivia',
      icon: '🧠',
      title: 'Mom Trivia',
      desc: 'How well do you know the amazing women in your life? Find out!',
      cta: 'Play Trivia',
    },
    {
      id: 'video',
      icon: '🎬',
      title: 'Video Montage',
      desc: 'A heartfelt video put together with love, just for Mom.',
      cta: 'Watch Now',
    },
  ]

  return (
    <main className="home">
      <div className="home__hero">
        <span className="home__flowers">🌸 🌷 🌹</span>
        <h1 className="home__title">Happy Mother's Day</h1>
        <p className="home__subtitle">Celebrating the incredible women who make life beautiful</p>
      </div>

      <div className="home__cards">
        {cards.map((card) => (
          <button
            key={card.id}
            className="nav-card"
            onClick={() => onNavigate(card.id)}
            aria-label={`Navigate to ${card.title}`}
          >
            <span className="nav-card__icon">{card.icon}</span>
            <h2 className="nav-card__title">{card.title}</h2>
            <p className="nav-card__desc">{card.desc}</p>
            <span className="nav-card__cta">{card.cta} →</span>
          </button>
        ))}
      </div>
    </main>
  )
}
