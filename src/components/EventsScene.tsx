import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EVENT_EXPERIENCES } from '../data/events'
import { getGeneralWhatsAppUrl } from '../config/agency'

gsap.registerPlugin(ScrollTrigger)

export const EventsScene: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.children
      if (!items || items.length === 0) return

      gsap.fromTo(
        items,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="eventos"
      ref={containerRef}
      className="relative w-full bg-black text-white py-16 sm:py-24 px-6 sm:px-10 border-t border-[#1c1c1c]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1c1c1c] pb-6 mb-8">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-[#666666] uppercase block mb-2">
              Contextos de Atuação
            </span>
            <h2 className="font-editorial-headline font-black text-3xl sm:text-5xl tracking-tight text-white">
              EVENTOS & FORMATOS
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#888888] leading-relaxed">
            Formatos artísticos estruturados com rider técnico e cronograma para garantir o mais alto nível de entrega.
          </p>
        </div>

        {/* Compact 4-Card Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {EVENT_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#0a0a0a] border border-[#1f1f1f] flex flex-col p-5 hover:border-[#333333] transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden mb-4 border border-[#1c1c1c] bg-[#111111]">
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <span className="text-[10px] font-semibold text-[#d4ff00] uppercase tracking-wider mb-1">
                {exp.number} • {exp.subtitle.split('•')[0].trim()}
              </span>

              <h3 className="font-editorial-headline font-bold text-xl text-white mb-2">
                {exp.title}
              </h3>

              <p className="text-xs text-[#888888] leading-relaxed mb-4 line-clamp-3">
                {exp.description}
              </p>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#d4ff00] uppercase tracking-wider transition-colors pt-2 border-t border-[#1a1a1a]"
              >
                <span>CONSULTAR DATA</span>
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
