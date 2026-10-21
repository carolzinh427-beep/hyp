import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const ManifestoScene = () => {
  const containerRef = useRef<HTMLElement>(null)
  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)
  const line3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
      })

      tl.fromTo(
        [line1Ref.current, line2Ref.current, line3Ref.current],
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="manifesto"
      ref={containerRef}
      className="relative w-full bg-black text-white py-24 sm:py-36 px-6 sm:px-10 border-t border-[#1c1c1c]"
    >
      <div className="max-w-5xl mx-auto flex flex-col justify-center">
        <span className="text-xs font-semibold tracking-[0.25em] text-[#666666] uppercase mb-8">
          Manifesto
        </span>

        <div className="space-y-4 sm:space-y-6">
          <div
            ref={line1Ref}
            className="font-editorial-headline font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white"
          >
            NÃO É SÓ UM SHOW.
          </div>

          <div
            ref={line2Ref}
            className="font-editorial-headline font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-[#777777]"
          >
            É O QUE ACONTECE QUANDO
          </div>

          <div
            ref={line3Ref}
            className="font-editorial-headline font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white"
          >
            TODO MUNDO ESTÁ LÁ.
          </div>
        </div>

        <p className="mt-12 text-sm sm:text-base text-[#888888] max-w-xl leading-relaxed">
          Atuamos na conexão direta entre produtoras, organizadores de eventos e os artistas mais requisitados da cena musical. Do rider técnico à entrada no palco, entregamos excelência executiva.
        </p>
      </div>
    </section>
  )
}
