import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ManifestoPhrase {
  tag: string
  line1: string
  line2: string
  accent: string
  sub: string
}

const PHRASES: ManifestoPhrase[] = [
  {
    tag: 'FILOSOFIA 01',
    line1: 'O PALCO NÃO É SÓ UM LUGAR.',
    line2: 'É ONDE A ENERGIA SE TRANSFORMA.',
    accent: 'ENERGIA SE TRANSFORMA.',
    sub: 'Conexão artística real que envolve cada pessoa no evento.',
  },
  {
    tag: 'FILOSOFIA 02',
    line1: 'NÃO ENTREGAMOS APENAS UM SHOW.',
    line2: 'CRIAMOS O PONTO ALTO DA NOITE.',
    accent: 'O PONTO ALTO DA NOITE.',
    sub: 'Curadoria estratégica com artistas preparados para marcar época.',
  },
  {
    tag: 'FILOSOFIA 03',
    line1: 'CURADORIA DE ALTO IMPACTO.',
    line2: 'QUANDO O SOM COMEÇA, TODO MUNDO ESTÁ LÁ.',
    accent: 'TODO MUNDO ESTÁ LÁ.',
    sub: 'Rider técnico impecável e excelência executiva do início ao fim.',
  },
]

export const ManifestoScene: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const pinTargetRef = useRef<HTMLDivElement>(null)
  const slide1Ref = useRef<HTMLDivElement>(null)
  const slide2Ref = useRef<HTMLDivElement>(null)
  const slide3Ref = useRef<HTMLDivElement>(null)
  const [currentStep, setCurrentStep] = useState(1)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const s1 = slide1Ref.current
      const s2 = slide2Ref.current
      const s3 = slide3Ref.current

      if (!s1 || !s2 || !s3 || !pinTargetRef.current) return

      gsap.set(s1, { opacity: 1, rotateX: 0, y: 0, transformOrigin: '50% 50% -80px' })
      gsap.set(s2, { opacity: 0, rotateX: -70, y: 80, transformOrigin: '50% 50% -80px' })
      gsap.set(s3, { opacity: 0, rotateX: -70, y: 80, transformOrigin: '50% 50% -80px' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinTargetRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress
            if (p < 0.38) {
              setCurrentStep(1)
            } else if (p < 0.72) {
              setCurrentStep(2)
            } else {
              setCurrentStep(3)
            }
          },
        },
      })

      // Phase 1: Slide 1 flips out, Slide 2 flips in
      tl.to(
        s1,
        {
          opacity: 0,
          rotateX: 70,
          y: -80,
          ease: 'power2.inOut',
          duration: 1,
        },
        0.2
      )
      tl.to(
        s2,
        {
          opacity: 1,
          rotateX: 0,
          y: 0,
          ease: 'power2.inOut',
          duration: 1,
        },
        0.3
      )

      tl.to({}, { duration: 0.4 })

      // Phase 2: Slide 2 flips out, Slide 3 flips in
      tl.to(
        s2,
        {
          opacity: 0,
          rotateX: 70,
          y: -80,
          ease: 'power2.inOut',
          duration: 1,
        },
        1.6
      )
      tl.to(
        s3,
        {
          opacity: 1,
          rotateX: 0,
          y: 0,
          ease: 'power2.inOut',
          duration: 1,
        },
        1.7
      )

      tl.to({}, { duration: 0.4 })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="manifesto"
      ref={containerRef}
      className="relative w-full bg-black text-white"
    >
      <div
        ref={pinTargetRef}
        className="w-full h-screen flex flex-col justify-between py-12 px-4 sm:px-8 relative overflow-hidden"
      >
        {/* Top Header & Indicator */}
        <div className="max-w-4xl mx-auto w-full flex items-center justify-between border-b border-[#1c1c1c] pb-4 px-2">
          <span className="font-cinzel text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#666666] uppercase">
            Manifesto • Filosofia
          </span>
          <div className="flex items-center gap-2 text-xs tracking-widest font-mono text-[#888888]">
            <span className={currentStep === 1 ? 'text-[#d4ff00] font-bold' : 'text-[#444444]'}>01</span>
            <span className="text-[#333333]">/</span>
            <span className={currentStep === 2 ? 'text-[#d4ff00] font-bold' : 'text-[#444444]'}>02</span>
            <span className="text-[#333333]">/</span>
            <span className={currentStep === 3 ? 'text-[#d4ff00] font-bold' : 'text-[#444444]'}>03</span>
          </div>
        </div>

        {/* 3D Flipping Stage with Aurora Brutalist Font */}
        <div
          className="relative max-w-4xl mx-auto w-full my-auto h-[320px] sm:h-[360px] flex items-center justify-center px-2"
          style={{ perspective: '1100px', transformStyle: 'preserve-3d' }}
        >
          {/* Slide 1 */}
          <div
            ref={slide1Ref}
            className="absolute inset-0 flex flex-col items-center justify-center text-center select-none px-2"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <span className="font-cinzel text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#d4ff00] uppercase mb-4">
              {PHRASES[0].tag}
            </span>
            <h2 className="font-aurora font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-white max-w-3xl">
              {PHRASES[0].line1} <br />
              <span className="text-[#d4ff00]">{PHRASES[0].accent}</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-[#888888] max-w-md">
              {PHRASES[0].sub}
            </p>
          </div>

          {/* Slide 2 */}
          <div
            ref={slide2Ref}
            className="absolute inset-0 flex flex-col items-center justify-center text-center select-none px-2"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <span className="font-cinzel text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#d4ff00] uppercase mb-4">
              {PHRASES[1].tag}
            </span>
            <h2 className="font-aurora font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-white max-w-3xl">
              {PHRASES[1].line1} <br />
              <span className="text-[#d4ff00]">{PHRASES[1].accent}</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-[#888888] max-w-md">
              {PHRASES[1].sub}
            </p>
          </div>

          {/* Slide 3 */}
          <div
            ref={slide3Ref}
            className="absolute inset-0 flex flex-col items-center justify-center text-center select-none px-2"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <span className="font-cinzel text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#d4ff00] uppercase mb-4">
              {PHRASES[2].tag}
            </span>
            <h2 className="font-aurora font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-white max-w-3xl">
              {PHRASES[2].line1} <br />
              <span className="text-[#d4ff00]">{PHRASES[2].accent}</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-[#888888] max-w-md">
              {PHRASES[2].sub}
            </p>
          </div>
        </div>

        {/* Bottom Status / Guidance */}
        <div className="max-w-4xl mx-auto w-full flex items-center justify-between border-t border-[#1c1c1c] pt-4 text-[10px] sm:text-xs text-[#666666] px-2">
          <span>Role para continuar</span>
          <span className="text-[#d4ff00]">Artistas a seguir ↓</span>
        </div>
      </div>
    </section>
  )
}
