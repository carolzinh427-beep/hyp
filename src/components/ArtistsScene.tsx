import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ARTISTS_DATA } from '../data/artists'
import type { Artist } from '../data/artists'
import { getArtistWhatsAppUrl } from '../config/agency'
import { ArtistRiderModal } from './ArtistRiderModal'

gsap.registerPlugin(ScrollTrigger)

export const ArtistsScene: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
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
      const cards = cardsRef.current?.children
      if (!cards || cards.length === 0) return

      gsap.fromTo(
        cards,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [filteredArtists])

  return (
    <section
      id="artistas"
      ref={containerRef}
      className="relative w-full bg-black text-white py-16 sm:py-24 px-6 sm:px-10 border-t border-[#1c1c1c]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1c1c1c] pb-6 mb-8">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-[#666666] uppercase block mb-2">
              Casting de Artistas
            </span>
            <h2 className="font-editorial-headline font-black text-3xl sm:text-5xl tracking-tight text-white">
              ARTISTAS HYPE
            </h2>
          </div>

          {/* Compact Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#d4ff00] text-black font-semibold'
                    : 'bg-[#111111] text-[#888888] hover:text-white border border-[#222222]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Compact 2-Column Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {filteredArtists.map((artist) => (
            <div
              key={artist.id}
              className="bg-[#0a0a0a] border border-[#1f1f1f] flex flex-col p-5 sm:p-6 hover:border-[#333333] transition-colors"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#111111] mb-5 border border-[#1c1c1c]">
                <img
                  src={artist.images.hero}
                  alt={artist.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/85 text-[10px] font-semibold text-[#d4ff00] uppercase tracking-wider">
                  {artist.genre}
                </span>
              </div>

              {/* Title & Info */}
              <div className="flex items-baseline justify-between gap-2 mb-2">
                <h3 className="font-editorial-headline font-black text-2xl sm:text-3xl text-white">
                  {artist.name}
                </h3>
                <span className="text-xs text-[#777777] font-medium">{artist.subGenre}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#888888] line-clamp-2 leading-relaxed mb-5">
                {artist.description}
              </p>

              {/* Specs Bar */}
              <div className="flex items-center gap-2 py-2.5 px-3 bg-[#111111] border border-[#1c1c1c] text-[11px] text-[#aaaaaa] mb-5">
                <span>{artist.rider.format}</span>
                <span className="text-[#444444]">•</span>
                <span>{artist.rider.duration}</span>
              </div>

              {/* Actions */}
              <div className="mt-auto flex items-center gap-2 pt-2">
                <a
                  href={getArtistWhatsAppUrl(artist.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 bg-[#d4ff00] hover:bg-[#c2ea00] text-black font-bold text-xs tracking-wider uppercase transition-colors"
                >
                  <span>CONTRATAR NO WHATSAPP</span>
                  <span>→</span>
                </a>
                <button
                  onClick={() => setActiveModalArtist(artist)}
                  className="px-4 py-3 border border-[#2a2a2a] hover:border-white text-white text-xs tracking-wider uppercase transition-colors"
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
