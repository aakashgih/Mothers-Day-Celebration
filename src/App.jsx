import { useState } from 'react'
import Itinerary from './components/Itinerary'
import Trivia from './components/Trivia'
import VideoMontage from './components/VideoMontage'

export default function App() {
  const [view, setView] = useState('itinerary')

  return (
    <div className="app">
      {view === 'itinerary' && <Itinerary onNavigate={setView} />}
      {view === 'trivia' && <Trivia onBack={() => setView('itinerary')} />}
      {view === 'video' && <VideoMontage onBack={() => setView('itinerary')} />}
    </div>
  )
}
