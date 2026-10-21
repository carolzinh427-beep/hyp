import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getGeneralWhatsAppUrl } from '../config/agency'
import { WhatsAppIcon } from './WhatsAppIcon'

gsap.registerPlugin(ScrollTrigger)

export const HeroScene: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', delay: 0.1 }
      )

      // Scroll-driven animation: smooth fade and scale as user scrolls past hero
      if (titleRef.current && containerRef.current) {
        gsap.to(titleRef.current, {
          scale: 0.92,
          opacity: 0.3,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      // Parallax on video
      if (videoRef.current && containerRef.current) {
        gsap.to(videoRef.current, {
          yPercent: 25,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }
    }, containerRef)

    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }

    return () => ctx.revert()
  }, [])

  const scrollToArtists = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('artistas')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full min-h-[92vh] sm:min-h-screen flex items-center justify-center bg-black pt-28 pb-20 px-4 sm:px-8 overflow-hidden text-center"
    >
      {/* Background Video with Flat Dark Tint */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=2000&q=85"
          className="w-full h-full object-cover object-center filter brightness-40 scale-105"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-crowd-at-a-concert-with-lights-and-smoke-41381-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Hero Content — 100% Centralized */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center justify-center text-center px-2"
      >
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#d4ff00] uppercase mb-4">
          Agenciamento Artístico & Produção
        </span>

        {/* Monumental Centralized Hype Entertainment */}
        <h1
          ref={titleRef}
          className="font-editorial-headline font-black text-4xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white leading-[0.92] mb-6 select-none"
        >
          HYPE <br />
          ENTERTAINMENT
        </h1>

        <p className="font-editorial-headline text-lg sm:text-2xl text-white font-bold tracking-tight mb-3">
          O PALCO É SÓ O COMEÇO.
        </p>

        <p className="text-sm sm:text-base text-[#999999] max-w-xl font-normal leading-relaxed mb-8">
          Curadoria de atrações e shows de alto impacto para festivais, eventos corporativos e celebrações exclusivas.
        </p>

        {/* Main CTA: Escolher Artista Para Meu Evento */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <a
            href="#artistas"
            onClick={scrollToArtists}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#d4ff00] hover:bg-[#c2ea00] text-black font-bold text-xs sm:text-sm tracking-widest uppercase transition-transform active:scale-95"
          >
            <span>ESCOLHER ARTISTA PARA MEU EVENTO</span>
            <span>↓</span>
          </a>

          {/* WhatsApp Direct Action (Icon Only, No Phone Number) */}
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-4 border border-[#333333] hover:border-[#d4ff00] text-white hover:text-[#d4ff00] transition-colors"
            title="Falar no WhatsApp"
            aria-label="Falar no WhatsApp"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
