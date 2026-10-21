import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ARTISTS_DATA } from '../data/artists'
import type { Artist } from '../data/artists'
import { getArtistWhatsAppUrl } from '../config/agency'
import { ArtistRiderModal } from './ArtistRiderModal'
import { WhatsAppIcon } from './WhatsAppIcon'

gsap.registerPlugin(ScrollTrigger)

export const ArtistsScene: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('TODOS')
  const [activeModalArtist, setActiveModalArtist] = useState<Artist | null>(null)

  const categories = [
    'TODOS',
    'Festivais',
    'Corporativo',
    'Privados',
    'Festas',
  ]

  const filteredArtists = ARTISTS_DATA.filter((artist) => {
    if (selectedCategory === 'TODOS') return true
    if (selectedCategory === 'Corporativo') {
      return artist.eventTypes.some((t) => t.toLowerCase().includes('corporativo'))
    }
    if (selectedCategory === 'Festivais') {
      return artist.eventTypes.some((t) => t.toLowerCase().includes('festival'))
    }
    if (selectedCategory === 'Privados') {
      return artist.eventTypes.some((t) => t.toLowerCase().includes('privado') || t.toLowerCase().includes('casamento'))
    }
    if (selectedCategory === 'Festas') {
      return artist.eventTypes.some((t) => t.toLowerCase().includes('festa') || t.toLowerCase().includes('aberturas'))
    }
    return true
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
            },
          }
        )
      }

      const cards = cardsRef.current?.children
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
            },
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [filteredArtists])

  return (
    <section
      id="artistas"
      ref={containerRef}
      className="relative w-full bg-black text-white py-16 sm:py-24 px-4 sm:px-8 border-t border-[#1c1c1c]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Centered Header with Night + Party Dual Fonts */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 px-2">
          <span className="font-night text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#d4ff00] uppercase block mb-2">
            Casting Oficial
          </span>
          <h2 className="font-night font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white mb-2 flex items-center justify-center flex-wrap gap-2">
            <span>ARTISTAS</span>
            <span className="font-party text-[#d4ff00] text-4xl sm:text-6xl lowercase font-normal">
              hype
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#888888] leading-relaxed max-w-lg mx-auto">
            Escolha o artista ideal para o seu evento e consulte a disponibilidade diretamente com nossa equipe.
          </p>

          {/* Centered Category Filters - Rounded Full */}
          <div className="flex items-center justify-center gap-2 flex-wrap pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-night px-4 py-2 text-[10px] sm:text-xs tracking-wider uppercase transition-all rounded-full whitespace-nowrap active:scale-95 ${
                  selectedCategory === cat
                    ? 'bg-[#d4ff00] text-black font-extrabold shadow-[0_0_15px_rgba(212,255,0,0.3)]'
                    : 'bg-[#111111] text-[#999999] hover:text-white border border-[#222222]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 in a row desktop, 2 per line on mobile, safe margins */}
        <div
          ref={cardsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {filteredArtists.map((artist) => (
            <div
              key={artist.id}
              className="group bg-[#0a0a0a] border border-[#1f1f1f] flex flex-col p-3 sm:p-5 rounded-2xl hover:border-white/20 transition-all duration-300"
            >
              {/* Photo Frame with smooth scale transition */}
              <div className="relative aspect-[4/5] sm:aspect-[16/11] overflow-hidden bg-[#111111] mb-3 sm:mb-4 border border-[#1c1c1c] rounded-xl">
                <img
                  src={artist.images.hero}
                  alt={artist.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <span className="font-night absolute top-2 left-2 px-2.5 py-1 bg-black/85 backdrop-blur-sm text-[8px] sm:text-[9px] font-bold text-[#d4ff00] uppercase tracking-wider rounded-full border border-white/10">
                  {artist.genre}
                </span>
              </div>

              {/* Artist Name & Subgenre with Night Font */}
              <div className="text-center mb-2">
                <h3 className="font-night font-extrabold text-base sm:text-xl md:text-2xl text-white tracking-tight truncate group-hover:text-[#d4ff00] transition-colors">
                  {artist.name}
                </h3>
                <span className="text-[10px] sm:text-xs text-[#777777] font-medium block truncate">
                  {artist.subGenre}
                </span>
              </div>

              {/* Specs Pill */}
              <div className="hidden sm:flex items-center justify-center gap-1.5 py-1.5 px-3 bg-[#111111] border border-[#1c1c1c] text-[10px] text-[#aaaaaa] mb-4 text-center rounded-full">
                <span>{artist.rider.duration}</span>
                <span className="text-[#444444]">•</span>
                <span>{artist.rider.crewCount} integrantes</span>
              </div>

              {/* Actions: Rounded Full Buttons */}
              <div className="mt-auto flex flex-col sm:flex-row items-stretch gap-2 pt-2">
                <a
                  href={getArtistWhatsAppUrl(artist.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 sm:py-3 bg-[#d4ff00] hover:bg-[#c2ea00] text-black font-night font-bold text-[9px] sm:text-xs tracking-wider uppercase transition-all rounded-full shadow-[0_0_15px_rgba(212,255,0,0.2)] active:scale-95"
                  title="Contratar este artista via WhatsApp"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>CONTRATAR</span>
                </a>

                <button
                  onClick={() => setActiveModalArtist(artist)}
                  className="font-night px-3.5 py-2.5 sm:py-3 border border-[#2a2a2a] hover:border-white text-white text-[9px] sm:text-xs tracking-wider uppercase transition-all rounded-full hover:bg-white/5 active:scale-95"
                  title="Ver rider técnico"
                >
                  RIDER
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ArtistRiderModal
        artist={activeModalArtist}
        onClose={() => setActiveModalArtist(null)}
      />
    </section>
  )
}
