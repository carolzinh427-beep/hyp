import { useState, useRef, useEffect, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ARTISTS_DATA } from '../data/artists'
import type { Artist } from '../data/artists'
import { getArtistWhatsAppUrl } from '../config/agency'
import { ArtistRiderModal } from './ArtistRiderModal'
import { WhatsAppIcon } from './WhatsAppIcon'
import { AccordionGallery } from './AccordionGallery'

gsap.registerPlugin(ScrollTrigger)

export const ArtistsScene: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('TODOS')
  const [activeModalArtist, setActiveModalArtist] = useState<Artist | null>(null)
  const [activeArtistIndex, setActiveArtistIndex] = useState<number>(0)

  const categories = [
    'TODOS',
    'Festivais',
    'Corporativo',
    'Privados',
    'Festas',
  ]

  const filteredArtists = useMemo(() => {
    return ARTISTS_DATA.filter((artist) => {
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
  }, [selectedCategory])

  const galleryItems = useMemo(() => {
    return filteredArtists.map((artist) => ({
      image: artist.images.hero,
      label: artist.name,
      sub: `${artist.genre}`,
      alt: artist.name,
      link: '#',
    }))
  }, [filteredArtists])

  const currentArtist = filteredArtists[activeArtistIndex] || filteredArtists[0]

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
    }, containerRef)

    return () => ctx.revert()
  }, [])

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

        {/* Horizontal Accordion Gallery from React Bits */}
        <div className="w-full mb-8">
          <AccordionGallery
            items={galleryItems}
            defaultIndex={0}
            expandRatio={0.5}
            trigger="hover"
            orientation="horizontal"
            accentColor="#d4ff00"
            overlayColor="#000000"
            textColor="#ffffff"
            height={480}
            gap={12}
            radius={20}
            tilt={6}
            parallax={0.4}
            grayscale={true}
            onActiveChange={(idx) => setActiveArtistIndex(idx)}
          />
        </div>

        {/* Selected Artist Details & Booking Actions */}
        {currentArtist && (
          <div className="bg-[#0c0c0c] border border-white/10 rounded-2xl p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300 hover:border-white/20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 flex-wrap mb-2">
                <span className="font-night text-xs font-bold text-[#d4ff00] uppercase tracking-wider px-3 py-1 bg-white/5 rounded-full border border-[#d4ff00]/30">
                  {currentArtist.genre}
                </span>
                <span className="text-xs text-[#888888] font-medium">
                  {currentArtist.rider.duration} • {currentArtist.rider.crewCount} integrantes
                </span>
              </div>

              <h3 className="font-night font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-2">
                {currentArtist.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#aaaaaa] leading-relaxed">
                {currentArtist.tagline}
              </p>
            </div>

            {/* Action Buttons: WhatsApp and Rider (Rounded Full) */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href={getArtistWhatsAppUrl(currentArtist.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#d4ff00] hover:bg-[#c2ea00] text-black font-night font-bold text-xs tracking-wider uppercase transition-all rounded-full shadow-[0_0_20px_rgba(212,255,0,0.25)] hover:shadow-[0_0_30px_rgba(212,255,0,0.4)] active:scale-95"
                title={`Contratar ${currentArtist.name} via WhatsApp`}
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>CONTRATAR ARTISTA</span>
              </a>

              <button
                onClick={() => setActiveModalArtist(currentArtist)}
                className="px-5 py-3.5 border border-white/20 hover:border-white text-white font-night font-bold text-xs tracking-wider uppercase transition-all rounded-full hover:bg-white/5 active:scale-95"
                title="Ver rider técnico detalhado"
              >
                VER RIDER
              </button>
            </div>
          </div>
        )}
      </div>

      <ArtistRiderModal
        artist={activeModalArtist}
        onClose={() => setActiveModalArtist(null)}
      />
    </section>
  )
}
