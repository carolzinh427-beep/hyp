import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroScene } from './components/HeroScene'
import { ManifestoScene } from './components/ManifestoScene'
import { ArtistsScene } from './components/ArtistsScene'
import { EventsScene } from './components/EventsScene'
import { CtaScene } from './components/CtaScene'
import { getGeneralWhatsAppUrl } from './config/agency'

export function App() {
  const [showFloatingActions, setShowFloatingActions] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingActions(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-[#f5f5f5] selection:bg-[#d4ff00] selection:text-black overflow-x-hidden font-sans">
      <Navbar />

      <main id="main-content">
        <HeroScene />
        <ManifestoScene />
        <ArtistsScene />
        <EventsScene />
        <CtaScene />
      </main>

      {/* Floating Action WhatsApp Button */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          showFloatingActions ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3.5 bg-[#d4ff00] hover:bg-[#c2ea00] text-black font-bold text-xs tracking-wider uppercase transition-colors"
          aria-label="Falar no WhatsApp"
        >
          <span>WHATSAPP: (61) 98669-0558</span>
          <span>→</span>
        </a>
      </div>
    </div>
  )
}

export default App
