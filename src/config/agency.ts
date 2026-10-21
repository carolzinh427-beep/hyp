// =======================================================================
// HYPE ENTERTAINMENT — CONFIGURAÇÃO CENTRAL DA AGÊNCIA & WHATSAPP
// =======================================================================
// WhatsApp oficial configurado: 5561986690558 (+55 61 98669-0558)
// =======================================================================

export interface AgencyConfig {
  name: string
  legalName: string
  tagline: string
  subTagline: string
  manifesto: {
    line1: string
    line2: string
    line3: string
  }
  whatsapp: {
    phone: string
    formattedPhone: string
  }
  email: string
  location: string
  operatingHours: string
  socials: {
    instagram: string
    spotify: string
    linkedin: string
  }
}

// Número oficial direto
const OFFICIAL_PHONE = '5561986690558'

export const AGENCY_CONFIG: AgencyConfig = {
  name: 'HYPE ENTERTAINMENT',
  legalName: 'Hype Entertainment Agenciamento Artístico Ltda.',
  tagline: 'O PALCO É SÓ O COMEÇO.',
  subTagline: 'Curadoria de artistas e experiências musicais para eventos corporativos, festivais e celebrações exclusivas.',
  manifesto: {
    line1: 'NÃO É SÓ UM SHOW.',
    line2: 'É O QUE ACONTECE QUANDO',
    line3: 'TODO MUNDO ESTÁ LÁ.',
  },
  whatsapp: {
    phone: OFFICIAL_PHONE,
    formattedPhone: '+55 (61) 98669-0558',
  },
  email: 'contato@hypeentertainment.com.br',
  location: 'São Paulo — Brasília | Atendimento Nacional & Internacional',
  operatingHours: 'Atendimento comercial: Segunda a Sexta, 09h às 19h',
  socials: {
    instagram: 'https://instagram.com/hype.entertainment',
    spotify: 'https://open.spotify.com',
    linkedin: 'https://linkedin.com',
  },
}

/**
 * Link WhatsApp para contratação de artista específico
 */
export function getArtistWhatsAppUrl(artistName: string): string {
  const message = [
    `Olá! Gostaria de consultar a contratação de ${artistName} para meu evento.`,
    '',
    'Data do evento: ',
    'Cidade / Local: ',
    'Tipo de evento: ',
    'Público estimado: ',
    '',
    'Aguardo informações de disponibilidade e proposta comercial.',
  ].join('\n')

  return `https://wa.me/${AGENCY_CONFIG.whatsapp.phone}?text=${encodeURIComponent(message)}`
}

/**
 * Link WhatsApp para consulta geral
 */
export function getGeneralWhatsAppUrl(): string {
  const message = [
    'Olá! Gostaria de falar com o time da Hype Entertainment sobre contratação de shows para meu evento.',
    '',
    'Data prevista: ',
    'Cidade / Local: ',
    'Tipo de evento (Corporativo / Festival / Privado): ',
    'Artistas ou estilo de interesse: ',
    '',
    'Aguardo retorno para alinhamento.',
  ].join('\n')

  return `https://wa.me/${AGENCY_CONFIG.whatsapp.phone}?text=${encodeURIComponent(message)}`
}
