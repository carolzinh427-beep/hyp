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
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? 'bg-black/95 border-b border-[#1c1c1c] py-4' : 'bg-black/80 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 focus:outline-none"
            aria-label="HYPE Entertainment"
          >
            <span className="font-editorial-headline font-black text-xl sm:text-2xl tracking-tighter text-white">
              HYPE
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] text-[#777777] uppercase font-semibold border-l border-[#222222] pl-3">
              ENTERTAINMENT
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs tracking-wider uppercase font-medium text-[#888888] hover:text-white transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Button - Icon Only / Clean Action without phone digits */}
          <div className="hidden sm:flex items-center">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4ff00] hover:bg-[#c2ea00] text-black font-semibold text-xs tracking-wider uppercase transition-colors"
              title="Falar no WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WHATSAPP</span>
            </a>
          </div>

          {/* Mobile Menu Trigger & Quick WhatsApp */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#d4ff00] text-black"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-3 py-1.5 border border-[#222222] text-xs font-semibold uppercase tracking-wider text-white"
              aria-label="Menu"
            >
              {mobileMenuOpen ? 'FECHAR' : 'MENU'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col justify-between p-6 pt-24 sm:hidden">
          <nav className="flex flex-col gap-5">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-editorial-headline font-bold text-2xl text-white hover:text-[#d4ff00] transition-colors border-b border-[#1c1c1c] pb-3"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#1c1c1c]">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3.5 bg-[#d4ff00] text-black font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2"
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
