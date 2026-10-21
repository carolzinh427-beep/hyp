// =======================================================================
// HYPE ENTERTAINMENT — ROSTER DE ARTISTAS (ESTRUTURA MODULAR)
// =======================================================================
// [CONTEÚDO DEMONSTRATIVO IDENTIFICADO]
// Esta estrutura foi concebida para que artistas possam ser adicionados,
// removidos ou editados sem a necessidade de alterar componentes visuais.
// Cada artista possui fotos de alta resolução, especificações de rider,
// categorias de eventos permitidas e link direto de WhatsApp pré-formatado.
// =======================================================================

export interface ArtistRider {
  format: string
  duration: string
  crewCount: number
  soundCheckTime: string
  stageFootprint: string
}

export interface Artist {
  id: string
  slug: string
  name: string
  tagline: string
  genre: string
  subGenre: string
  catalogNumber: string
  description: string
  editorialQuote: string
  eventTypes: string[]
  metrics: {
    label: string
    value: string
  }[]
  images: {
    hero: string
    detail: string
    poster: string
  }
  videoUrl?: string
  rider: ArtistRider
  featuredTrack?: {
    title: string
    duration: string
  }
}

export const ARTISTS_DATA: Artist[] = [
  {
    id: 'art-01',
    slug: 'kronos-live',
    name: 'KRONOS LIVE',
    tagline: 'A convergência entre sintetizadores modulares e percussão orgânica ao vivo.',
    genre: 'Electronic Live Act',
    subGenre: 'Melodic Techno / Hybrid Live',
    catalogNumber: 'HYPE-01',
    description:
      'Uma experiência eletrônica cinematográfica executada 100% ao vivo. Sem playback genérico: sintetizadores analógicos, drum machines pulsantes e intervenções rítmicas com impacto visual absoluto em palco.',
    editorialQuote: '“Uma tempestade sonora meticulosamente orquestrada para palcos de grande porte.”',
    eventTypes: [
      'Festivais de Música',
      'Eventos Corporativos de Inovação',
      'Grandes Festas Noturnas',
    ],
    metrics: [
      { label: 'Formato', value: 'Live 100% Analógico' },
      { label: 'Duração', value: '75 a 90 min' },
      { label: 'Equipe', value: '4 integrantes' },
    ],
    images: {
      hero: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1920&q=85',
      detail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85',
      poster: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=85',
    },
    rider: {
      format: 'Live Act (Sintetizadores, Samplers & Bateria Híbrida)',
      duration: '75 a 90 minutos',
      crewCount: 4,
      soundCheckTime: '90 minutos',
      stageFootprint: 'Mínimo 6m x 4m com riser central',
    },
    featuredTrack: {
      title: 'Neon Horizon (Live Edit)',
      duration: '06:42',
    },
  },
  {
    id: 'art-02',
    slug: 'aurora-v',
    name: 'AURORA V',
    tagline: 'Voz visceral, arranjos de metais e sofisticação pop contemporânea.',
    genre: 'Neo-Soul & Pop Deluxe',
    subGenre: 'R&B / Contemporary Brazilian Soul',
    catalogNumber: 'HYPE-02',
    description:
      'Presença cênica magnética com repertório envolvente que transita entre o soul elegante, grooves de R&B e sucessos reinterpretados com identidade artística autoral. O auge da elegância e energia.',
    editorialQuote: '“Potência vocal inquestionável com o refinamento estético que eventos exclusivos exigem.”',
    eventTypes: [
      'Galas e Premiações Corporativas',
      'Casamentos e Eventos Privados de Alto Padrão',
      'Festivais Culturais',
    ],
    metrics: [
      { label: 'Formato', value: 'Banda Completa + Metais' },
      { label: 'Duração', value: '90 min' },
      { label: 'Equipe', value: '8 integrantes' },
    ],
    images: {
      hero: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1920&q=85',
      detail: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=85',
      poster: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85',
    },
    rider: {
      format: 'Vocal Lead + Banda (Guitarras, Baixo, Teclados, Bateria & 2 Metais)',
      duration: '90 minutos',
      crewCount: 8,
      soundCheckTime: '120 minutos',
      stageFootprint: 'Mínimo 8m x 5m',
    },
    featuredTrack: {
      title: 'Veludo Negro (Live at Studio)',
      duration: '04:18',
    },
  },
  {
    id: 'art-03',
    slug: 'valentina-cruz',
    name: 'VALENTINA CRUZ',
    tagline: 'Guitarras cortantes, atitude explosiva e hinos que eletrizam multidões.',
    genre: 'High Voltage Indie Rock',
    subGenre: 'Alternative Rock / Post-Punk Revival',
    catalogNumber: 'HYPE-03',
    description:
      'Show de alta intensidade feito para transformar a plateia em uma só voz. Uma apresentação catártica, com guitarras expressivas, refrões memoráveis e uma entrega cênica arrebatadora.',
    editorialQuote: '“Pura eletricidade de palco: não existe público parado quando ela assume o microfone.”',
    eventTypes: [
      'Festivais e Arenas',
      'Convenções Corporativas e Festas de Encerramento',
      'Grandes Comemorações Privadas',
    ],
    metrics: [
      { label: 'Formato', value: 'Power Trio Rock + Vocal' },
      { label: 'Duração', value: '90 min' },
      { label: 'Equipe', value: '5 integrantes' },
    ],
    images: {
      hero: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1920&q=85',
      detail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=85',
      poster: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=85',
    },
    rider: {
      format: 'Guitarra Solo, Baixo, Bateria & Vocal Lead',
      duration: '90 minutos',
      crewCount: 5,
      soundCheckTime: '90 minutos',
      stageFootprint: 'Mínimo 7m x 4m',
    },
    featuredTrack: {
      title: 'Distortion & Grace',
      duration: '03:52',
    },
  },
  {
    id: 'art-04',
    slug: 'alma-latina-brass',
    name: 'ALMA LATINA BRASS',
    tagline: 'Coletivo de metais pesados, percussão afro-brasileira e groove irresistível.',
    genre: 'Afro-Latin Brass & Funk',
    subGenre: 'Brass Band / Global Groove',
    catalogNumber: 'HYPE-04',
    description:
      'Uma explosão de trompetes, trombones, sousafone e tambores que une o calor caribenho, funk vintage e ritmos brasileiros contemporâneos. Capacidade ímpar de criar euforia coletiva instantânea.',
    editorialQuote: '“A definição de celebração imersiva: a música preenche cada centímetro do espaço.”',
    eventTypes: [
      'Aberturas de Festivais',
      'Festas e Celebrações VIP',
      'Eventos Corporativos de Grande Porte',
    ],
    metrics: [
      { label: 'Formato', value: 'Coletivo de 9 Músicos' },
      { label: 'Duração', value: '80 a 100 min' },
      { label: 'Equipe', value: '10 integrantes' },
    ],
    images: {
      hero: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1920&q=85',
      detail: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=85',
      poster: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&w=1200&q=85',
    },
    rider: {
      format: 'Seção de Metais (4), Percussão (2), Bateria, Baixo e Guitarras',
      duration: '80 a 100 minutos',
      crewCount: 10,
      soundCheckTime: '120 minutos',
      stageFootprint: 'Mínimo 9m x 6m',
    },
    featuredTrack: {
      title: 'Fuego de Samba (Live in Rio)',
      duration: '05:14',
    },
  },
]
