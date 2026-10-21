import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AGENCY_CONFIG, getGeneralWhatsAppUrl } from '../config/agency'
import { WhatsAppIcon } from './WhatsAppIcon'

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

  const scrollToArtists = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('artistas')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      id="contato"
      ref={containerRef}
      className="relative w-full bg-black text-white pt-16 sm:pt-24 pb-12 px-4 sm:px-8 border-t border-[#1c1c1c] text-center"
    >
      <div ref={contentRef} className="max-w-4xl mx-auto flex flex-col items-center text-center px-2">
        <span className="font-night text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#d4ff00] uppercase mb-4">
          Atendimento & Curadoria
        </span>

        <h2 className="font-night font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-white mb-6">
          SEU EVENTO. <br />
          SUA HISTÓRIA. <br />
          <span className="font-party text-4xl sm:text-6xl md:text-7xl text-[#d4ff00] font-normal normal-case inline-block mt-2">
            sua hype.
          </span>
        </h2>

        <p className="text-xs sm:text-base text-[#888888] max-w-md mb-8">
          Escolha os artistas que combinam com o perfil do seu evento e garanta a data oficial com nosso time.
        </p>

        {/* Action Buttons: Escolher Artista + WhatsApp Icon Only (Rounded Full) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-16">
          <a
            href="#artistas"
            onClick={scrollToArtists}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#d4ff00] hover:bg-[#c2ea00] text-black font-night font-bold text-xs sm:text-sm tracking-widest uppercase transition-all rounded-full shadow-[0_0_25px_rgba(212,255,0,0.25)] hover:shadow-[0_0_35px_rgba(212,255,0,0.4)] active:scale-95"
          >
            <span>ESCOLHER ARTISTA PARA MEU EVENTO</span>
            <span>↓</span>
          </a>

          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/20 hover:border-[#d4ff00] text-white hover:text-[#d4ff00] font-night font-bold text-xs tracking-wider uppercase transition-all rounded-full bg-black/40 backdrop-blur-md active:scale-95"
            title="Falar no WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>FALAR NO WHATSAPP</span>
          </a>
        </div>

        {/* Agency Information Bar */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-t border-[#1c1c1c] pt-10 pb-8 text-xs text-[#888888]">
          <div className="flex flex-col items-center gap-1.5">
            <span className="font-night text-white font-bold uppercase tracking-wider">CANAL DIRETO</span>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white hover:text-[#d4ff00] transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#d4ff00]" />
              <span>Atendimento via WhatsApp</span>
            </a>
            <a
              href={`mailto:${AGENCY_CONFIG.email}`}
              className="hover:text-white transition-colors"
            >
              {AGENCY_CONFIG.email}
            </a>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <span className="font-night text-white font-bold uppercase tracking-wider">COBERTURA</span>
            <span>{AGENCY_CONFIG.location}</span>
            <span>{AGENCY_CONFIG.operatingHours}</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <span className="font-night text-white font-bold uppercase tracking-wider">HYPE ENTERTAINMENT</span>
            <span>Curadoria e agenciamento de atrações artísticas para eventos em todo o país.</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full border-t border-[#1c1c1c] pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-[10px] sm:text-[11px] text-[#555555]">
          <span>© {new Date().getFullYear()} {AGENCY_CONFIG.legalName} • Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
