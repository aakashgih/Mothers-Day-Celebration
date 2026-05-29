import { useState } from 'react'
import { questions } from '../data/trivia'

const LETTERS = ['A', 'B', 'C', 'D']

function scoreMessage(score, total) {
  const pct = score / total
  if (pct === 1) return "Perfect score! You know Mom like a book! 🎉"
  if (pct >= 0.8) return "Amazing! You really know your mom! 💖"
  if (pct >= 0.6) return "Great effort! Mom is full of surprises! 🌸"
  return "Keep learning — every day with Mom is a gift! 🌷"
}

export default function Trivia({ onBack }) {
  const [phase, setPhase] = useState('start') // 'start' | 'question' | 'reveal' | 'results'
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)

  const question = questions[currentIndex]
  const isLast = currentIndex === questions.length - 1

  function startGame() {
    setCurrentIndex(0)
    setScore(0)
    setSelected(null)
    setPhase('question')
  }

  function selectAnswer(i) {
    if (phase !== 'question') return
    setSelected(i)
    if (i === question.correct) setScore((s) => s + 1)
    setPhase('reveal')
  }

  function next() {
    if (isLast) {
      setPhase('results')
    } else {
      setCurrentIndex((i) => i + 1)
      setSelected(null)
      setPhase('question')
    }
  }

  function optionClass(i) {
    if (phase !== 'reveal') return 'option-btn'
    if (i === question.correct) return 'option-btn option-btn--correct'
    if (i === selected) return 'option-btn option-btn--wrong'
    return 'option-btn'
  }

  return (
    <main className="trivia fade-in">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <div className="trivia__content">
        {phase === 'start' && (
          <div className="trivia__start">
            <span style={{ fontSize: '4rem', display: 'block', marginBottom: 16 }}>🧠</span>
            <h2>Mom Trivia</h2>
            <p>
              {questions.length} questions about the special women in our lives.<br />
              See who knows Mom best!
            </p>
            <button className="btn-primary" onClick={startGame}>Start Game →</button>
          </div>
        )}

        {(phase === 'question' || phase === 'reveal') && (
          <div className="trivia__question-wrap">
            <div className="trivia__progress">
              <span>Question {currentIndex + 1} of {questions.length}</span>
              <div className="progress-bar">
                <div
                  className="progress-bar__fill"
                  style={{ width: `${((currentIndex + (phase === 'reveal' ? 1 : 0)) / questions.length) * 100}%` }}
                />
              </div>
              <span>Score: {score}</span>
            </div>

            <p className="trivia__q">{question.question}</p>

            <div className="trivia__options">
              {question.options.map((opt, i) => (
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
                <p style={{ fontSize: 'var(--font-md)', marginBottom: 24, color: selected === question.correct ? '#2E7D32' : '#C62828', fontWeight: 700 }}>
                  {selected === question.correct ? '✅ Correct!' : `❌ The answer was: ${question.options[question.correct]}`}
                </p>
                <button className="btn-primary" onClick={next}>
                  {isLast ? 'See Results →' : 'Next Question →'}
                </button>
              </div>
            )}
          </div>
        )}

        {phase === 'results' && (
          <div className="trivia__results">
            <span className="trophy">🏆</span>
            <h2>Game Over!</h2>
            <div className="trivia__score">{score} / {questions.length}</div>
            <p className="trivia__score-msg">{scoreMessage(score, questions.length)}</p>
            <div className="btn-row">
              <button className="btn-primary" onClick={startGame}>Play Again</button>
              <button className="btn-secondary" onClick={onBack}>Back Home</button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
