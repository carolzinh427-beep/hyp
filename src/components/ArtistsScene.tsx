import { useState, useRef } from 'react'
import { ARTISTS_DATA } from '../data/artists'
import type { Artist } from '../data/artists'
import { getArtistWhatsAppUrl } from '../config/agency'
import { ArtistRiderModal } from './ArtistRiderModal'

export const ArtistsScene: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('TODOS')
  const [activeModalArtist, setActiveModalArtist] = useState<Artist | null>(null)

  const categories = [
    'TODOS',
    'Festivais de Música',
    'Eventos Corporativos',
    'Eventos Privados',
    'Festas',
  ]

  const filteredArtists = ARTISTS_DATA.filter((artist) => {
    if (selectedCategory === 'TODOS') return true
    if (selectedCategory === 'Eventos Corporativos') {
      return artist.eventTypes.some((t) => t.toLowerCase().includes('corporativo'))
    }
    if (selectedCategory === 'Festivais de Música') {
      return artist.eventTypes.some((t) => t.toLowerCase().includes('festival'))
    }
    if (selectedCategory === 'Eventos Privados') {
      return artist.eventTypes.some((t) => t.toLowerCase().includes('privado') || t.toLowerCase().includes('casamento'))
    }
    if (selectedCategory === 'Festas') {
      return artist.eventTypes.some((t) => t.toLowerCase().includes('festa') || t.toLowerCase().includes('aberturas'))
    }
    return true
  })

  return (
    <section
      id="artistas"
      ref={containerRef}
      className="relative w-full bg-black text-white py-24 sm:py-36 px-6 sm:px-10 border-t border-[#1c1c1c]"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 sm:mb-20">
        <span className="text-xs font-semibold tracking-[0.25em] text-[#666666] uppercase mb-4 block">
          Casting
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1c1c1c] pb-8">
          <h2 className="font-editorial-headline font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white">
            ARTISTAS HYPE
          </h2>
          <p className="max-w-md text-sm text-[#888888] leading-relaxed">
            Curadoria artística para produções de alto calibre. Artistas com presença de palco confirmada e repertório de impacto.
          </p>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs tracking-wider uppercase transition-colors whitespace-nowrap ${
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

      {/* Artists List */}
      <div className="max-w-7xl mx-auto flex flex-col gap-20 sm:gap-28">
        {filteredArtists.map((artist, idx) => {
          const isEven = idx % 2 === 0
          return (
            <article
              key={artist.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center border-b border-[#1c1c1c] pb-16 sm:pb-24"
            >
              {/* Image Frame — Flat Solid Border, No Gradients */}
              <div
                className={`lg:col-span-7 overflow-hidden bg-[#0d0d0d] border border-[#222222] ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={artist.images.hero}
                    alt={artist.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 border-t border-[#1c1c1c] bg-[#0d0d0d] divide-x divide-[#1c1c1c] py-3 px-4 text-xs">
                  {artist.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <span className="block text-[#666666] text-[10px] uppercase">{m.label}</span>
                      <span className="text-white font-medium">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Information */}
              <div
                className={`lg:col-span-5 flex flex-col justify-center ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <span className="text-xs font-semibold text-[#d4ff00] tracking-wider uppercase mb-2">
                  {artist.genre} • {artist.subGenre}
                </span>

                <h3 className="font-editorial-headline font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
                  {artist.name}
                </h3>

                <p className="text-sm sm:text-base text-[#999999] leading-relaxed mb-6 font-normal">
                  {artist.description}
                </p>

                {/* Event suitability tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {artist.eventTypes.map((type) => (
                    <span
                      key={type}
                      className="px-3 py-1 bg-[#111111] border border-[#222222] text-xs text-[#cccccc]"
                    >
                      {type}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={getArtistWhatsAppUrl(artist.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#d4ff00] hover:bg-[#c2ea00] text-black font-bold text-xs tracking-wider uppercase transition-colors"
                  >
                    <span>CONTRATAR NO WHATSAPP</span>
                    <span>→</span>
                  </a>

                  <button
                    onClick={() => setActiveModalArtist(artist)}
                    className="inline-flex items-center justify-center px-6 py-4 border border-[#333333] hover:border-white text-white font-medium text-xs tracking-wider uppercase transition-colors"
                  >
                    RIDER TÉCNICO
                  </button>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* Rider Modal */}
      <ArtistRiderModal
        artist={activeModalArtist}
        onClose={() => setActiveModalArtist(null)}
      />
    </section>
  )
}
