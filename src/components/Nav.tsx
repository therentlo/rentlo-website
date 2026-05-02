import { useEffect, useState } from 'react'
import type { LocaleCode } from '../locales'
import { CountrySwitcher } from './CountrySwitcher'
import rentloLogoNav from '../assets/rentlo-logo-nav.png'

interface Props {
  locale: LocaleCode
  onLocaleChange: (code: LocaleCode) => void
}

export function Nav({ locale, onLocaleChange }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 8) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function closeMenu() { setMenuOpen(false) }

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#how', label: 'How it works' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-[border-color,background] duration-300 ${
          scrolled
            ? 'bg-white/88 border-b border-black/[0.06]'
            : 'bg-white/72 border-b border-transparent'
        }`}
        style={{ backdropFilter: 'saturate(180%) blur(20px)', WebkitBackdropFilter: 'saturate(180%) blur(20px)' }}
      >
        <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-between h-16 gap-5">
          {/* Brand */}
          <a href="#" className="flex items-center">
            <img src={rentloLogoNav} alt="Rentlo" height={28} style={{ height: 28, width: 'auto' }} />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex gap-8 text-ink-2 font-medium text-[14px]">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-teal">{l.label}</a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-1.5">
            <CountrySwitcher locale={locale} onChange={onLocaleChange} />
            <a href="https://app.therentlo.com" className="inline-flex items-center gap-1.5 h-10 px-3.5 rounded-full font-medium text-[14.5px] text-ink-2 transition-all hover:text-teal hover:bg-teal-50">
              Log in
            </a>
            <a href="#cta" className="inline-flex items-center h-10 px-[18px] rounded-full font-medium text-[14.5px] bg-navy text-white transition-all hover:bg-black hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,.3)] hover:-translate-y-px">
              Join waitlist
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-navy"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col" style={{ overflowY: 'auto' }}>
          {/* Top row */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-line flex-shrink-0">
            <a href="#" onClick={closeMenu} className="flex items-center">
              <img src={rentloLogoNav} alt="Rentlo" height={24} style={{ height: 24, width: 'auto' }} />
            </a>
            <button onClick={closeMenu} aria-label="Close menu" className="w-10 h-10 flex items-center justify-center text-navy">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-col px-6 py-4 gap-1 flex-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="flex items-center h-12 text-[18px] font-medium text-navy border-b border-line-2 last:border-0 hover:text-teal transition-colors"
              >
                {l.label}
              </a>
            ))}

            {/* Country switcher */}
            <div className="pt-6 pb-2">
              <CountrySwitcher locale={locale} onChange={(c) => { onLocaleChange(c); closeMenu() }} />
            </div>

            {/* Bottom CTAs */}
            <div className="mt-auto pt-6 flex flex-col gap-3">
              <a href="https://app.therentlo.com" className="flex items-center justify-center h-12 rounded-full border border-line text-navy font-medium text-[15px] hover:border-navy transition-colors">
                Log in
              </a>
              <a href="#cta" onClick={closeMenu} className="flex items-center justify-center h-12 rounded-full bg-navy text-white font-medium text-[15px] hover:bg-black transition-colors">
                Join waitlist
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

