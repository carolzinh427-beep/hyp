import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getGeneralWhatsAppUrl } from '../config/agency'
import { WhatsAppIcon } from './WhatsAppIcon'

gsap.registerPlugin(ScrollTrigger)

export const HeroScene: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const titleHypeRef = useRef<HTMLSpanElement>(null)
  const titleEntRef = useRef<HTMLSpanElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 5-Second Choreographed Cinematic Sequence
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Step 1 (0s - 1.2s): HYPE emerges with scale and blur clearing
      tl.fromTo(
        titleHypeRef.current,
        { opacity: 0, scale: 0.88, y: 35, filter: 'blur(8px)' },
        { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', duration: 1.2, delay: 0.2 }
      )

      // Step 2 (0.6s - 2.0s): ENTERTAINMENT expands with letter-spacing tracking
      tl.fromTo(
        titleEntRef.current,
        { opacity: 0, y: 25, letterSpacing: '0.05em' },
        { opacity: 1, y: 0, letterSpacing: '0.22em', duration: 1.4 },
        '-=0.7'
      )

      // Step 3 (1.5s - 2.8s): Subtitles and CTA reveal
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1.1 },
        '-=0.8'
      )

      // Step 4 (2.5s - 4.2s): Radiant volt shimmer pulse (peaks at ~3.5s)
      tl.to(
        titleHypeRef.current,
        {
          textShadow: '0 0 45px rgba(212,255,0,0.55)',
          duration: 0.8,
          yoyo: true,
          repeat: 1,
          ease: 'sine.inOut',
        },
        '+=0.1'
      )

      // Step 5 (4.2s - 5.0s): Settles into crystal-clear stance (total ~5 seconds)
      tl.to(
        [titleHypeRef.current, titleEntRef.current],
        {
          y: '-=3',
          duration: 0.8,
          ease: 'power1.out',
        }
      )

      // Scroll-driven Parallax with ScrollTrigger
      if (videoRef.current && containerRef.current) {
        gsap.to(videoRef.current, {
          yPercent: 20,
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
      className="relative w-full min-h-[92vh] sm:min-h-screen flex items-center justify-center bg-black pt-28 pb-16 px-4 sm:px-8 overflow-hidden text-center"
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
          className="w-full h-full object-cover object-center filter brightness-35 scale-105"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-crowd-at-a-concert-with-lights-and-smoke-41381-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Hero Content — Perfectly Centralized & Safe from Screen Edges */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center justify-center text-center px-2 sm:px-4"
      >
        <span className="font-cinzel text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-[#d4ff00] uppercase mb-4">
          Agenciamento Artístico & Produção
        </span>

        {/* Centralized Monumental Name — Never Overflowing Screen */}
        <div className="w-full max-w-full overflow-hidden text-center select-none mb-5">
          <h1 className="font-aurora font-black tracking-wide uppercase max-w-full break-words">
            <span
              ref={titleHypeRef}
              className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-[#d4ff00] transition-all"
            >
              HYPE
            </span>
            <span
              ref={titleEntRef}
              className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.16em] sm:tracking-[0.24em] text-white font-bold mt-1"
            >
              ENTERTAINMENT
            </span>
          </h1>
        </div>

        {/* Subtitles & Actions */}
        <div ref={subtitleRef} className="flex flex-col items-center max-w-xl mx-auto">
          <p className="font-cinzel text-base sm:text-xl text-white font-bold tracking-wider mb-3">
            O PALCO É SÓ O COMEÇO.
          </p>

          <p className="text-xs sm:text-sm text-[#999999] leading-relaxed mb-8 max-w-md">
            Curadoria de atrações e shows de alto impacto para festivais, eventos corporativos e celebrações exclusivas.
          </p>

          {/* Primary Action: Escolher Artista Para Meu Evento */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <a
              href="#artistas"
              onClick={scrollToArtists}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#d4ff00] hover:bg-[#c2ea00] text-black font-night font-bold text-xs sm:text-sm tracking-widest uppercase transition-all rounded-full active:scale-95 shadow-[0_0_30px_rgba(212,255,0,0.25)] hover:shadow-[0_0_40px_rgba(212,255,0,0.4)]"
            >
              <span>ESCOLHER ARTISTA PARA MEU EVENTO</span>
              <span>↓</span>
            </a>

            {/* WhatsApp Icon Only Button - Rounded Full */}
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-4 border border-white/20 hover:border-[#d4ff00] text-white hover:text-[#d4ff00] transition-all rounded-full bg-black/40 backdrop-blur-md active:scale-95"
              title="Falar no WhatsApp"
              aria-label="Falar no WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
