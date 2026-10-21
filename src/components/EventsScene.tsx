import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EVENT_EXPERIENCES } from '../data/events'
import { getGeneralWhatsAppUrl } from '../config/agency'
import { WhatsAppIcon } from './WhatsAppIcon'
import { MorphSlider } from './MorphSlider'

gsap.registerPlugin(ScrollTrigger)

export const EventsScene: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const [activeEventIndex, setActiveEventIndex] = useState(0)

  const sliderItems = EVENT_EXPERIENCES.map((exp) => ({
    image: exp.image,
    title: `${exp.number}. ${exp.title}`,
    subtitle: exp.subtitle,
    caption: `${exp.title} — ${exp.subtitle}`,
  }))

  const activeExp = EVENT_EXPERIENCES[activeEventIndex] || EVENT_EXPERIENCES[0]

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
      id="eventos"
      ref={containerRef}
      className="relative w-full bg-black text-white py-16 sm:py-24 px-4 sm:px-8 border-t border-[#1c1c1c]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Centered Header with Night + Party Dual Fonts */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 px-2">
          <span className="font-night text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#d4ff00] uppercase block mb-2">
            Contextos de Atuação
          </span>
          <h2 className="font-night font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white mb-2 flex items-center justify-center flex-wrap gap-2">
            <span>EVENTOS &</span>
            <span className="font-party text-[#d4ff00] text-4xl sm:text-6xl lowercase font-normal">
              formatos
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#888888] leading-relaxed max-w-lg mx-auto">
            Formatos artísticos estruturados com rider técnico e cronograma para garantir o mais alto nível de entrega.
          </p>
        </div>

        {/* MorphSlider from React Bits */}
        <div className="w-full relative h-[360px] sm:h-[480px] md:h-[540px] mb-8">
          <MorphSlider
            items={sliderItems}
            startIndex={0}
            transition="melt"
            intensity={0.55}
            aberration={0.35}
            drift={0.4}
            autoplay
            autoplayDelay={4.5}
            radius={24}
            onIndexChange={(idx) => setActiveEventIndex(idx)}
          />
        </div>

        {/* Dynamic Details Card for Current Format */}
        {activeExp && (
          <div className="bg-[#0c0c0c] border border-white/10 rounded-2xl p-5 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 transition-all duration-300 hover:border-white/20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2.5 flex-wrap mb-2">
                <span className="font-night text-xs font-bold text-[#d4ff00] uppercase tracking-wider px-3 py-1 bg-white/5 rounded-full border border-[#d4ff00]/30">
                  FORMATO {activeExp.number}
                </span>
                <span className="text-xs text-[#888888] font-medium tracking-wider uppercase">
                  {activeExp.subtitle}
                </span>
              </div>

              <h3 className="font-night font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-3">
                {activeExp.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#aaaaaa] leading-relaxed mb-4">
                {activeExp.description}
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {activeExp.details.map((detail, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-[11px] text-[#cccccc] bg-[#141414] border border-white/5 px-3 py-1 rounded-full"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
                    <span>{detail}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA: Rounded Full WhatsApp Button */}
            <div className="w-full lg:w-auto pt-2 lg:pt-0">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#d4ff00] hover:bg-[#c2ea00] text-black font-night font-bold text-xs tracking-wider uppercase transition-all rounded-full shadow-[0_0_20px_rgba(212,255,0,0.25)] hover:shadow-[0_0_30px_rgba(212,255,0,0.4)] active:scale-95 whitespace-nowrap"
                title={`Consultar formato ${activeExp.title} no WhatsApp`}
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>CONSULTAR ESTE FORMATO</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

