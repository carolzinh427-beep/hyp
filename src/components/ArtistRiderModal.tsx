import type { Artist } from '../data/artists'
import { getArtistWhatsAppUrl } from '../config/agency'

interface ArtistRiderModalProps {
  artist: Artist | null
  onClose: () => void
}

export const ArtistRiderModal: React.FC<ArtistRiderModalProps> = ({ artist, onClose }) => {
  if (!artist) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90">
      <div className="relative w-full max-w-2xl bg-[#0d0d0d] border border-[#2a2a2a] p-6 sm:p-10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 px-3 py-1 text-xs font-semibold text-[#888888] hover:text-white border border-[#222222] transition-colors"
          aria-label="Fechar"
        >
          FECHAR ✕
        </button>

        {/* Modal Header */}
        <div className="border-b border-[#222222] pb-6 mb-6">
          <span className="text-xs font-semibold tracking-wider text-[#d4ff00] uppercase block mb-1">
            Ficha Técnica & Rider
          </span>
          <h3 className="font-editorial-headline font-black text-3xl sm:text-4xl text-white">
            {artist.name}
          </h3>
          <p className="text-xs text-[#888888] mt-1">{artist.genre} • {artist.subGenre}</p>
        </div>

        {/* Rider Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="border border-[#1f1f1f] bg-[#141414] p-4">
            <span className="text-[10px] uppercase tracking-wider text-[#777777] block mb-1">
              Formato de Palco
            </span>
            <p className="text-sm font-medium text-white">{artist.rider.format}</p>
          </div>

          <div className="border border-[#1f1f1f] bg-[#141414] p-4">
            <span className="text-[10px] uppercase tracking-wider text-[#777777] block mb-1">
              Duração
            </span>
            <p className="text-sm font-medium text-white">{artist.rider.duration}</p>
          </div>

          <div className="border border-[#1f1f1f] bg-[#141414] p-4">
            <span className="text-[10px] uppercase tracking-wider text-[#777777] block mb-1">
              Equipe Técnica
            </span>
            <p className="text-sm font-medium text-white">{artist.rider.crewCount} pessoas</p>
          </div>

          <div className="border border-[#1f1f1f] bg-[#141414] p-4">
            <span className="text-[10px] uppercase tracking-wider text-[#777777] block mb-1">
              Dimensões de Palco
            </span>
            <p className="text-sm font-medium text-white">{artist.rider.stageFootprint}</p>
          </div>
        </div>

        {/* Event types */}
        <div className="mb-8">
          <span className="text-xs tracking-wider text-[#777777] uppercase block mb-3">
            Adequado para:
          </span>
          <div className="flex flex-wrap gap-2">
            {artist.eventTypes.map((type) => (
              <span
                key={type}
                className="px-3 py-1 bg-[#1a1a1a] border border-[#2a2a2a] text-xs text-white"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#222222]">
          <a
            href={getArtistWhatsAppUrl(artist.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-4 bg-[#d4ff00] hover:bg-[#c2ea00] text-black font-bold text-xs tracking-widest uppercase transition-colors"
          >
            SOLICITAR DISPONIBILIDADE NO WHATSAPP →
          </a>
        </div>
      </div>
    </div>
  )
}
