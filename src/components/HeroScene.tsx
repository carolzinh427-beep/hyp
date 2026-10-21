import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AGENCY_CONFIG, getGeneralWhatsAppUrl } from '../config/agency'

gsap.registerPlugin(ScrollTrigger)

export const HeroScene: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.1 }
      )

      // Parallax on scroll
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          yPercent: 15,
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
      className="relative w-full min-h-[90vh] sm:min-h-screen flex items-center bg-black pt-24 pb-16 px-6 sm:px-10 overflow-hidden"
    >
      {/* Video with flat dark tint */}
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

      {/* Hero Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-start justify-center"
      >
        <span className="text-xs font-semibold tracking-[0.25em] text-[#d4ff00] uppercase mb-4">
          Hype Entertainment • Agenciamento Artístico
        </span>

        <h1 className="font-editorial-headline font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-white leading-[0.92] mb-6">
          O PALCO É <br />
          SÓ O COMEÇO.
        </h1>

        <p className="text-base sm:text-lg text-[#999999] max-w-xl font-normal leading-relaxed mb-8">
          {AGENCY_CONFIG.subTagline}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#d4ff00] hover:bg-[#c2ea00] text-black font-bold text-xs tracking-wider uppercase transition-colors"
          >
            <span>FALAR NO WHATSAPP</span>
            <span>→</span>
          </a>

          <a
            href="#artistas"
            onClick={scrollToArtists}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#333333] hover:border-white text-white font-medium text-xs tracking-wider uppercase transition-colors"
          >
            <span>VER ARTISTAS</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
