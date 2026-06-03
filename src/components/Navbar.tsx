import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(246,239,227,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(176,156,128,0.2)' : '1px solid transparent',
        padding: scrolled ? '12px 0' : '24px 0',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between">
        <a href="#home" style={{ textDecoration: 'none' }}>
          <div style={{ fontFamily: 'var(--sans)', letterSpacing: '0.22em', fontSize: '11px', textTransform: 'uppercase', color: 'var(--fg)', fontWeight: 400, lineHeight: 1.4 }}>
            Venture &amp; Gain
            <br />
            <span style={{ color: 'var(--gold)', letterSpacing: '0.15em', fontSize: '9px' }}>Luxury Travel</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-2)', textDecoration: 'none', transition: 'color 0.25s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-2)')}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
              border: '1px solid var(--fg)', color: 'var(--fg)', padding: '9px 20px', textDecoration: 'none',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--fg)'; e.currentTarget.style.color = 'var(--bg)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--fg)' }}
          >
            Plan My Trip
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: 'var(--fg)', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-2)', textDecoration: 'none' }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
                  border: '1px solid var(--fg)', color: 'var(--fg)', padding: '12px 20px', textDecoration: 'none', textAlign: 'center' as const,
                }}
              >
                Plan My Trip
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
