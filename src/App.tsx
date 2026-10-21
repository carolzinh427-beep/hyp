import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroScene } from './components/HeroScene'
import { ManifestoScene } from './components/ManifestoScene'
import { ArtistsScene } from './components/ArtistsScene'
import { EventsScene } from './components/EventsScene'
import { CtaScene } from './components/CtaScene'
import { getGeneralWhatsAppUrl } from './config/agency'
import { WhatsAppIcon } from './components/WhatsAppIcon'

export function App() {
  const [showFloatingActions, setShowFloatingActions] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingActions(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-[#f5f5f5] selection:bg-[#d4ff00] selection:text-black overflow-x-hidden font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Exactly 5 Choreographed Sections */}
      <main id="main-content">
        {/* 1. Hero */}
        <HeroScene />

        {/* 2. Manifesto com frases 3D Flip */}
        <ManifestoScene />

        {/* 3. Artistas Hype */}
        <ArtistsScene />

        {/* 4. Eventos e Formatos */}
        <EventsScene />

        {/* 5. Contato Comercial */}
        <CtaScene />
      </main>

      {/* Floating Action WhatsApp Button - Icon Only, No Phone Number */}
      <div
        className={`fixed bottom-5 right-5 z-40 transition-all duration-300 ${
          showFloatingActions ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3.5 bg-[#d4ff00] hover:bg-[#c2ea00] text-black shadow-lg transition-transform hover:scale-105 active:scale-95 border border-black"
          aria-label="Falar no WhatsApp"
          title="Falar no WhatsApp"
        >
          <WhatsAppIcon className="w-6 h-6" />
        </a>
      </div>
    </div>
  )
}

export default App
