import { useState } from 'react'
import Home from './components/Home'
import Itinerary from './components/Itinerary'
import Trivia from './components/Trivia'
import VideoMontage from './components/VideoMontage'

export default function App() {
  const [view, setView] = useState('home')

  const goHome = () => setView('home')

  return (
    <div className="app">
      {view === 'home' && <Home onNavigate={setView} />}
      {view === 'itinerary' && <Itinerary onBack={goHome} />}
      {view === 'trivia' && <Trivia onBack={goHome} />}
      {view === 'video' && <VideoMontage onBack={goHome} />}
    </div>
  )
}
