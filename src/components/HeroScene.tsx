import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { AGENCY_CONFIG, getGeneralWhatsAppUrl } from '../config/agency'

export const HeroScene: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.2 }
      )
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
      ref={containerRef}
      className="relative w-full min-h-[92vh] sm:min-h-screen flex items-center bg-black pt-28 pb-16 px-6 sm:px-10 overflow-hidden"
    >
      {/* Background Video with Flat Clean Dark Tint — No Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=2000&q=85"
          className="w-full h-full object-cover object-center filter brightness-40"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-crowd-at-a-concert-with-lights-and-smoke-41381-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Solid flat dark overlay to guarantee 100% legibility without gradients */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Main Hero Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-start justify-center"
      >
        <span className="text-xs font-semibold tracking-[0.25em] text-[#d4ff00] uppercase mb-4">
          Hype Entertainment • Agenciamento Artístico
        </span>

        <h1 className="font-editorial-headline font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white leading-[0.92] mb-6">
          O PALCO É <br />
          SÓ O COMEÇO.
        </h1>

        <p className="text-base sm:text-xl text-[#999999] max-w-2xl font-normal leading-relaxed mb-10">
          {AGENCY_CONFIG.subTagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#d4ff00] hover:bg-[#c2ea00] text-black font-bold text-xs tracking-widest uppercase transition-colors"
          >
            <span>FALAR NO WHATSAPP</span>
            <span>→</span>
          </a>

          <a
            href="#artistas"
            onClick={scrollToArtists}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#333333] hover:border-white text-white font-medium text-xs tracking-widest uppercase transition-colors"
          >
            <span>VER ARTISTAS</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
