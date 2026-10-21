import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EVENT_EXPERIENCES } from '../data/events'
import { getGeneralWhatsAppUrl } from '../config/agency'
import { WhatsAppIcon } from './WhatsAppIcon'

gsap.registerPlugin(ScrollTrigger)

export const EventsScene: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
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

      // Grid items staggered reveal with image zoom transition
      const items = gridRef.current?.children
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
            },
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="eventos"
      ref={containerRef}
      className="relative w-full bg-black text-white py-16 sm:py-24 px-4 sm:px-8 border-t border-[#1c1c1c]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Centered Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 px-2">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#d4ff00] uppercase block mb-3">
            Contextos de Atuação
          </span>
          <h2 className="font-editorial-headline font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-white mb-4">
            EVENTOS & FORMATOS
          </h2>
          <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
            Formatos artísticos estruturados com rider técnico e cronograma para garantir o mais alto nível de entrega.
          </p>
        </div>

        {/* 4 Formats Grid: Desktop 4 in a row, Mobile 2 per line */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {EVENT_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="group bg-[#0a0a0a] border border-[#1f1f1f] flex flex-col p-3 sm:p-5 hover:border-[#333333] transition-all duration-300"
            >
              {/* Photo Frame with smooth scale transition */}
              <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden mb-3 sm:mb-4 border border-[#1c1c1c] bg-[#111111]">
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
              </div>

              <span className="text-[9px] sm:text-[10px] font-semibold text-[#d4ff00] uppercase tracking-wider mb-1 block">
                {exp.number} • {exp.subtitle.split('•')[0].trim()}
              </span>

              <h3 className="font-editorial-headline font-bold text-base sm:text-xl text-white mb-2 leading-tight">
                {exp.title}
              </h3>

              <p className="text-[11px] sm:text-xs text-[#888888] leading-relaxed mb-4 line-clamp-3">
                {exp.description}
              </p>

              {/* Action - WhatsApp Icon Only, No Phone Number */}
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-1.5 py-2.5 sm:py-3 bg-[#141414] hover:bg-[#d4ff00] text-white hover:text-black font-semibold text-[10px] sm:text-xs uppercase tracking-wider transition-colors border border-[#222222]"
                title="Consultar formato no WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>CONSULTAR</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
