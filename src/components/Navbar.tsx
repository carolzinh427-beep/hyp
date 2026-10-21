import { getGeneralWhatsAppUrl } from '../config/agency'
import { WhatsAppIcon } from './WhatsAppIcon'
import { CardNav } from './CardNav'
import type { CardNavItem } from './CardNav'

export const Navbar = () => {
  const navItems: CardNavItem[] = [
    {
      label: 'Artistas',
      description: 'Casting oficial com atrações de alto impacto ao vivo.',
      links: [
        { label: 'Ver Casting Completo', href: '#artistas' },
        { label: 'Electronic Live Act', href: '#artistas' },
        { label: 'Pop, Soul & Bandas', href: '#artistas' },
      ],
    },
    {
      label: 'Formatos',
      description: 'Experiências musicais com rider e produção estruturada.',
      links: [
        { label: 'Grandes Festivais', href: '#eventos' },
        { label: 'Corporativo & Convenções', href: '#eventos' },
        { label: 'Festas & Celebrações VIP', href: '#eventos' },
      ],
    },
    {
      label: 'Experiência',
      description: 'Curadoria estratégica e direção artística.',
      links: [
        { label: 'Manifesto Hype', href: '#manifesto' },
        { label: 'Consultoria Musical', href: '#artistas' },
      ],
    },
    {
      label: 'Contato',
      description: 'Atendimento direto com nossa equipe executiva.',
      links: [
        { label: 'Canal WhatsApp', href: '#contato' },
        { label: 'Solicitar Orçamento', href: '#contato' },
      ],
    },
  ]

  const LogoElement = (
    <div className="flex items-center gap-2 select-none">
      <span className="font-aurora font-black text-xl sm:text-2xl tracking-wider text-[#d4ff00]">
        HYPE
      </span>
      <span className="font-night text-[9px] sm:text-[10px] tracking-[0.25em] text-[#888888] uppercase font-bold border-l border-white/10 pl-2">
        ENTERTAINMENT
      </span>
    </div>
  )

  const handleSmoothScroll = (
    link: { href?: string },
    _item: any,
    event: React.MouseEvent
  ) => {
    if (link.href && link.href.startsWith('#')) {
      event.preventDefault()
      const targetId = link.href.replace('#', '')
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
      <div className="max-w-4xl mx-auto pointer-events-auto">
        <CardNav
          logo={LogoElement}
          logoAlt="HYPE Entertainment"
          logoHref="#"
          items={navItems}
          surface="glass"
          theme="dark"
          accentColor="#d4ff00"
          cardEffect="rise"
          openOn="click"
          maxWidth={820}
          onLinkClick={handleSmoothScroll}
          cta={{
            label: 'WHATSAPP',
            href: getGeneralWhatsAppUrl(),
            icon: <WhatsAppIcon className="w-4 h-4 mr-1.5" />,
          }}
        />
      </div>
    </header>
  )
}

