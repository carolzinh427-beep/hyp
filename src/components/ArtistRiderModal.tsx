import type { Artist } from '../data/artists'
import { getArtistWhatsAppUrl } from '../config/agency'
import { WhatsAppIcon } from './WhatsAppIcon'

interface ArtistRiderModalProps {
  artist: Artist | null
  onClose: () => void
}

export const ArtistRiderModal: React.FC<ArtistRiderModalProps> = ({ artist, onClose }) => {
  if (!artist) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#0d0d0d] border border-[#2a2a2a] p-5 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 px-2.5 py-1 text-xs font-semibold text-[#888888] hover:text-white border border-[#222222] transition-colors"
          aria-label="Fechar"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="border-b border-[#222222] pb-4 mb-5 text-center sm:text-left">
          <span className="font-cinzel text-[10px] sm:text-xs font-bold tracking-wider text-[#d4ff00] uppercase block mb-1">
            Ficha Técnica & Rider
          </span>
          <h3 className="font-aurora font-black text-2xl sm:text-3xl text-white">
            {artist.name}
          </h3>
          <p className="text-xs text-[#888888] mt-1">{artist.genre} • {artist.subGenre}</p>
        </div>

        {/* Rider Specs */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="border border-[#1f1f1f] bg-[#141414] p-3 text-center sm:text-left">
            <span className="font-cinzel text-[9px] sm:text-[10px] uppercase tracking-wider text-[#777777] block mb-1">
              Formato de Palco
            </span>
            <p className="text-xs sm:text-sm font-medium text-white">{artist.rider.format}</p>
          </div>

          <div className="border border-[#1f1f1f] bg-[#141414] p-3 text-center sm:text-left">
            <span className="font-cinzel text-[9px] sm:text-[10px] uppercase tracking-wider text-[#777777] block mb-1">
              Duração
            </span>
            <p className="text-xs sm:text-sm font-medium text-white">{artist.rider.duration}</p>
          </div>

          <div className="border border-[#1f1f1f] bg-[#141414] p-3 text-center sm:text-left">
            <span className="font-cinzel text-[9px] sm:text-[10px] uppercase tracking-wider text-[#777777] block mb-1">
              Equipe Técnica
            </span>
            <p className="text-xs sm:text-sm font-medium text-white">{artist.rider.crewCount} integrantes</p>
          </div>

          <div className="border border-[#1f1f1f] bg-[#141414] p-3 text-center sm:text-left">
            <span className="font-cinzel text-[9px] sm:text-[10px] uppercase tracking-wider text-[#777777] block mb-1">
              Dimensões de Palco
            </span>
            <p className="text-xs sm:text-sm font-medium text-white">{artist.rider.stageFootprint}</p>
          </div>
        </div>

        {/* Contexts */}
        <div className="mb-6">
          <span className="font-cinzel text-[10px] sm:text-xs tracking-wider text-[#777777] uppercase block mb-2 text-center sm:text-left">
            Indicado para:
          </span>
          <div className="flex flex-wrap justify-center sm:justify-start gap-1.5">
            {artist.eventTypes.map((type) => (
              <span
                key={type}
                className="px-2.5 py-1 bg-[#1a1a1a] border border-[#2a2a2a] text-[11px] text-white"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Actions - Icon Only, No Phone Number */}
        <div className="pt-4 border-t border-[#222222]">
          <a
            href={getArtistWhatsAppUrl(artist.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#d4ff00] hover:bg-[#c2ea00] text-black font-cinzel font-bold text-xs tracking-widest uppercase transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>SOLICITAR DISPONIBILIDADE NO WHATSAPP</span>
          </a>
        </div>
      </div>
    </div>
  )
}
