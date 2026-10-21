// =======================================================================
// HYPE ENTERTAINMENT — CONTEXTOS DE ATUAÇÃO E EXPERIÊNCIAS (CENA 04)
// =======================================================================
// Apenas as 4 categorias confirmadas pelo responsável:
// 1. Eventos Corporativos
// 2. Festivais
// 3. Eventos Privados
// 4. Festas e Celebrações
// =======================================================================

export interface EventExperience {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  details: string[]
  image: string
  aspectRatio: string
}

export const EVENT_EXPERIENCES: EventExperience[] = [
  {
    id: 'exp-corporate',
    number: '01',
    title: 'EVENTOS CORPORATIVOS',
    subtitle: 'CONVENÇÕES • LANÇAMENTOS • PREMIAÇÕES',
    description:
      'Artistas que elevam convenções e celebrações corporativas de encontros protocolares a marcos inesquecíveis da cultura da empresa. Curadoria de repertório refinada, rigor técnico e pontualidade executiva.',
    details: [
      'Alinhamento com a mensagem da marca',
      'Rider técnico com conformidade de segurança',
      'Formatos flexíveis para plenárias ou pós-evento',
    ],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'aspect-[16/10]',
  },
  {
    id: 'exp-festivals',
    number: '02',
    title: 'FESTIVAIS',
    subtitle: 'GRANDES PALCOS • ARENAS • CIRCUITOS DE MÚSICA',
    description:
      'Atrações preparadas para comandar multidões. Nossos artistas dominam a dinâmica de festivais com presenças de palco avassaladoras, som de precisão cirúrgica e sinergia imediata com o público.',
    details: [
      'Adequação de lineup e horário estratégico',
      'Equipe de produção e stage management dedicada',
      'Visual cênico projetado para telões monumentais',
    ],
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'aspect-[4/3]',
  },
  {
    id: 'exp-private',
    number: '03',
    title: 'EVENTOS PRIVADOS',
    subtitle: 'CASAMENTOS EXCLUSIVOS • ANIVERSÁRIOS MEMORÁVEIS',
    description:
      'A exclusividade de ter uma atração digna de festival em um ambiente íntimo e personalizado. Tratamento artístico sob medida para celebrar momentos únicos com distinção e requinte.',
    details: [
      'Sensibilidade para o perfil dos anfitriões',
      'Adaptação acústica para espaços nobres',
      'Discrição absoluta e atendimento VIP',
    ],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'aspect-[16/11]',
  },
  {
    id: 'exp-celebrations',
    number: '04',
    title: 'FESTAS E CELEBRAÇÕES',
    subtitle: 'ROOFTOPS • SUNSETS • CLUBES E GALAS',
    description:
      'Da euforia solar de um sunset à intensidade magnética de uma pista de gala. Apresentações que conduzem a curva de energia do evento até o ápice, mantendo a vibração no nível máximo.',
    details: [
      'Curadoria de transição de pista e ritmo',
      'Performances imersivas e interação com o ambiente',
      'Formatos compactos ou expansivos sob demanda',
    ],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'aspect-[5/4]',
  },
]
