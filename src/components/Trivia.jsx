import { useState } from 'react'
import { families } from '../data/trivia'

const LETTERS = ['A', 'B', 'C', 'D']

function scoreMessage(score, total) {
  const pct = score / total
  if (pct === 1) return 'Perfect score! You know Mom inside and out! 🎉'
  if (pct >= 0.67) return 'Great job! Mom would be proud! 💖'
  return 'Keep learning — every day with Mom is a gift! 🌷'
}

function FamilyQuiz({ family, onBack }) {
  const [phase, setPhase] = useState('question') // 'question' | 'reveal' | 'results'
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)

  const q = family.questions[index]
  const isLast = index === family.questions.length - 1

  function selectAnswer(i) {
    if (phase !== 'question') return
    setSelected(i)
    if (i === q.correct) setScore((s) => s + 1)
    setPhase('reveal')
  }

  function next() {
    if (isLast) {
      setPhase('results')
    } else {
      setIndex((i) => i + 1)
      setSelected(null)
      setPhase('question')
    }
  }

  function optionClass(i) {
    if (phase !== 'reveal') return 'option-btn'
    if (i === q.correct) return 'option-btn option-btn--correct'
    if (i === selected) return 'option-btn option-btn--wrong'
    return 'option-btn'
  }

  if (phase === 'results') {
    return (
      <div className="trivia__results">
        <span className="trophy">🏆</span>
        <h2>{family.name}</h2>
        <div className="trivia__score">{score} / {family.questions.length}</div>
        <p className="trivia__score-msg">{scoreMessage(score, family.questions.length)}</p>
        <div className="btn-row">
          <button className="btn-secondary" onClick={onBack}>← Back to Families</button>
        </div>
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
            style={{ width: `${((index + (phase === 'reveal' ? 1 : 0)) / family.questions.length) * 100}%` }}
          />
        </div>
        <span>{index + 1} / {family.questions.length}</span>
      </div>

      <p className="trivia__q">{q.question}</p>

      <div className="trivia__options">
        {q.options.map((opt, i) => (
          <button
            key={i}
            className={optionClass(i)}
            onClick={() => selectAnswer(i)}
            disabled={phase === 'reveal'}
          >
            <span className="option-letter">{LETTERS[i]}</span>
            {opt}
          </button>
        ))}
      </div>

      {phase === 'reveal' && (
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <p style={{ fontSize: 'var(--font-md)', marginBottom: 24, color: selected === q.correct ? '#2E7D32' : '#C62828', fontWeight: 700 }}>
            {selected === q.correct ? '✅ Correct!' : `❌ The answer was: ${q.options[q.correct]}`}
          </p>
          <button className="btn-primary" onClick={next}>
            {isLast ? 'See Results →' : 'Next Question →'}
          </button>
        </div>
      )}
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
