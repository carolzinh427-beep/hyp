import { AGENCY_CONFIG, getGeneralWhatsAppUrl } from '../config/agency'

export const CtaScene: React.FC = () => {
  return (
    <footer
      id="contato"
      className="relative w-full bg-black text-white pt-24 sm:pt-36 pb-16 px-6 sm:px-10 border-t border-[#1c1c1c]"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <span className="text-xs font-semibold tracking-[0.25em] text-[#666666] uppercase mb-6">
          Atendimento Direto
        </span>

        <h2 className="font-editorial-headline font-black text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.95] text-white mb-8">
          SEU EVENTO. <br />
          SUA HISTÓRIA. <br />
          SUA HYPE.
        </h2>

        <p className="text-base sm:text-xl text-[#888888] max-w-lg mb-12">
          Entre em contato direto com nossa equipe para consultar datas e orçamentos.
        </p>

        {/* WhatsApp Direct Action Button */}
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-10 sm:px-14 py-5 sm:py-6 bg-[#d4ff00] hover:bg-[#c2ea00] text-black font-editorial-headline font-bold text-sm sm:text-base tracking-widest uppercase transition-colors"
        >
          <span>FALAR NO WHATSAPP: (61) 98669-0558</span>
          <span>→</span>
        </a>

        {/* Agency Info */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-[#1c1c1c] mt-24 pt-12 pb-12 text-xs text-[#888888]">
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold uppercase tracking-wider">WHATSAPP & CONTATO</span>
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

          <div className="flex flex-col gap-2">
            <span className="text-white font-bold uppercase tracking-wider">LOCALIZAÇÃO</span>
            <span>{AGENCY_CONFIG.location}</span>
            <span>{AGENCY_CONFIG.operatingHours}</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-white font-bold uppercase tracking-wider">HYPE ENTERTAINMENT</span>
            <span>Curadoria artística, booking e produção executiva para eventos em todo o Brasil.</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full border-t border-[#1c1c1c] pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#555555]">
          <span>© {new Date().getFullYear()} {AGENCY_CONFIG.legalName}</span>
          <span>Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
