import { useState, useEffect } from 'react'
import { getGeneralWhatsAppUrl } from '../config/agency'
import { WhatsAppIcon } from './WhatsAppIcon'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'ARTISTAS', href: '#artistas' },
    { label: 'MANIFESTO', href: '#manifesto' },
    { label: 'EVENTOS', href: '#eventos' },
    { label: 'CONTATO', href: '#contato' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-nav-scrolled py-3.5'
            : 'glass-nav py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo with Aurora Font */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 focus:outline-none"
            aria-label="HYPE Entertainment"
          >
            <span className="font-aurora font-black text-xl sm:text-2xl tracking-wider text-[#d4ff00]">
              HYPE
            </span>
            <span className="font-night text-[9px] sm:text-[11px] tracking-[0.25em] text-[#888888] uppercase font-bold border-l border-white/10 pl-2.5 sm:pl-3">
              ENTERTAINMENT
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-night text-xs tracking-wider uppercase font-semibold text-[#a0a0a0] hover:text-[#d4ff00] transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Button - Rounded Full Pill with WhatsApp Icon */}
          <div className="hidden sm:flex items-center">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#d4ff00] hover:bg-[#c2ea00] text-black font-night font-bold text-xs tracking-wider uppercase transition-all rounded-full hover:shadow-[0_0_20px_rgba(212,255,0,0.3)] active:scale-95"
              title="Falar no WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WHATSAPP</span>
            </a>
          </div>

          {/* Mobile Menu Trigger & Quick WhatsApp (Rounded Full) */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#d4ff00] text-black rounded-full"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="font-night px-4 py-2 border border-white/15 text-xs font-bold uppercase tracking-wider text-white rounded-full bg-black/40 backdrop-blur-md"
              aria-label="Menu"
            >
              {mobileMenuOpen ? 'FECHAR' : 'MENU'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu with Glassmorphism */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 sm:hidden border-b border-white/10">
          <nav className="flex flex-col gap-5">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-night font-bold text-2xl text-white hover:text-[#d4ff00] transition-colors border-b border-white/10 pb-3"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3.5 bg-[#d4ff00] text-black font-night font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 rounded-full"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>FALAR NO WHATSAPP</span>
            </a>
          </div>
        </div>
      )}
    </>
  )
}
