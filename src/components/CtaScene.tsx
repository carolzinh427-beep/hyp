import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AGENCY_CONFIG, getGeneralWhatsAppUrl } from '../config/agency'

gsap.registerPlugin(ScrollTrigger)

export const CtaScene: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer
      id="contato"
      ref={containerRef}
      className="relative w-full bg-black text-white pt-16 sm:pt-24 pb-12 px-6 sm:px-10 border-t border-[#1c1c1c]"
    >
      <div ref={contentRef} className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <span className="text-xs font-semibold tracking-[0.25em] text-[#666666] uppercase mb-4">
          Atendimento Comercial
        </span>

        <h2 className="font-editorial-headline font-black text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[0.95] text-white mb-6">
          SEU EVENTO. <br />
          SUA HISTÓRIA. <br />
          <span className="text-[#d4ff00]">SUA HYPE.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#888888] max-w-md mb-8">
          Consulte disponibilidade de datas e receba uma proposta personalizada para sua produção.
        </p>

        {/* Big WhatsApp CTA Button */}
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-[#d4ff00] hover:bg-[#c2ea00] text-black font-editorial-headline font-bold text-sm sm:text-base tracking-widest uppercase transition-colors"
        >
          <span>FALAR NO WHATSAPP: (61) 98669-0558</span>
          <span>→</span>
        </a>

        {/* Agency Information Bar */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-t border-[#1c1c1c] mt-16 pt-8 pb-8 text-xs text-[#888888]">
          <div className="flex flex-col gap-1.5">
            <span className="text-white font-bold uppercase tracking-wider">WHATSAPP</span>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#d4ff00] transition-colors"
            >
              {AGENCY_CONFIG.whatsapp.formattedPhone}
            </a>
            <a
              href={`mailto:${AGENCY_CONFIG.email}`}
              className="hover:text-white transition-colors"
            >
              {AGENCY_CONFIG.email}
            </a>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-white font-bold uppercase tracking-wider">ATENDIMENTO</span>
            <span>{AGENCY_CONFIG.location}</span>
            <span>{AGENCY_CONFIG.operatingHours}</span>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-white font-bold uppercase tracking-wider">HYPE ENTERTAINMENT</span>
            <span>Curadoria e agenciamento artístico para eventos de alto padrão em todo o Brasil.</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full border-t border-[#1c1c1c] pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#555555]">
          <span>© {new Date().getFullYear()} {AGENCY_CONFIG.legalName}</span>
          <span>Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
