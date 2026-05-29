import { useState } from 'react'
import { families } from '../data/trivia'

function FamilyQuiz({ family, onBack }) {
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(false)
  const total = family.questions.length

  function next() {
    if (index < total - 1) {
      setIndex(i => i + 1)
    } else {
      setDone(true)
    }
  }

  if (done) {
    return (
      <div className="trivia__results">
        <span className="trophy">🎉</span>
        <h2>{family.name}</h2>
        <p className="trivia__score-msg" style={{ marginBottom: 48 }}>
          That's all the questions! Hope you had fun.
        </p>
        <button className="btn-secondary" onClick={onBack}>← Back to Families</button>
      </div>
    )
  }

  return (
    <div className="trivia__question-wrap">
      <div className="trivia__progress">
        <span>{family.emoji} {family.name}</span>
        <div className="progress-bar">
          <div
            className="progress-bar__fill"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
        <span>Question {index + 1} of {total}</span>
      </div>

      <p className="trivia__q">{family.questions[index]}</p>

      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <button className="btn-primary" onClick={next}>
          {index < total - 1 ? 'Next Question →' : 'Finish →'}
        </button>
      </div>
    </div>
  )
}

export default function Trivia({ onBack }) {
  const [activeFamily, setActiveFamily] = useState(null)

  return (
    <main className="trivia fade-in">
      <button className="back-btn" onClick={activeFamily ? () => setActiveFamily(null) : onBack}>
        ← {activeFamily ? 'Back to Families' : 'Back to Itinerary'}
      </button>

      <div className="trivia__content">
        {!activeFamily && (
          <>
            <div className="section-header">
              <h1>🧠 Mom Trivia</h1>
              <p>Choose a family to begin</p>
            </div>
            <div className="family-cards">
              {families.map((fam) => (
                <button
                  key={fam.id}
                  className="nav-card"
                  onClick={() => setActiveFamily(fam)}
                >
                  <span className="nav-card__icon">{fam.emoji}</span>
                  <h2 className="nav-card__title">{fam.name}</h2>
                  <p className="nav-card__desc">{fam.questions.length} questions</p>
                  <span className="nav-card__cta">Start →</span>
                </button>
              ))}
            </div>
          </>
        )}

        {activeFamily && (
          <FamilyQuiz
            family={activeFamily}
            onBack={() => setActiveFamily(null)}
          />
        )}
      </div>
    </main>
  )
}
