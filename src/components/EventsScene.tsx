import { EVENT_EXPERIENCES } from '../data/events'
import { getGeneralWhatsAppUrl } from '../config/agency'

export const EventsScene: React.FC = () => {
  return (
    <section
      id="eventos"
      className="relative w-full bg-black text-white py-24 sm:py-36 px-6 sm:px-10 border-t border-[#1c1c1c]"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 sm:mb-24">
        <span className="text-xs font-semibold tracking-[0.25em] text-[#666666] uppercase mb-4 block">
          Experiências
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1c1c1c] pb-8">
          <h2 className="font-editorial-headline font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white">
            EVENTOS & FORMATOS
          </h2>
          <p className="max-w-md text-sm text-[#888888] leading-relaxed">
            Formatos artísticos estruturados com rider técnico e cronograma para garantir o mais alto nível de entrega.
          </p>
        </div>
      </div>

      {/* Grid of the 4 Formats */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {EVENT_EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-col bg-[#0d0d0d] border border-[#222222] p-8 sm:p-10"
          >
            <div className="aspect-[16/10] overflow-hidden mb-6 border border-[#1c1c1c]">
              <img
                src={exp.image}
                alt={exp.title}
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <span className="text-xs font-semibold text-[#d4ff00] tracking-wider uppercase mb-2">
              {exp.subtitle}
            </span>

            <h3 className="font-editorial-headline font-bold text-2xl sm:text-3xl text-white mb-4">
              {exp.title}
            </h3>

            <p className="text-sm text-[#888888] leading-relaxed mb-6">
              {exp.description}
            </p>

            <ul className="space-y-2 mb-8 text-xs text-[#cccccc]">
              {exp.details.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#d4ff00] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-white hover:text-[#d4ff00] transition-colors"
            >
              <span>CONSULTAR DISPONIBILIDADE</span>
              <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
