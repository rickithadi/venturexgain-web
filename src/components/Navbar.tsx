import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0d1117]/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#home" className="flex flex-col leading-none">
          <span
            className="text-[#c9a84c] font-light tracking-[0.25em] uppercase text-xs"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Venture &amp; Gain
          </span>
          <span
            className="text-white font-light tracking-[0.1em] uppercase text-xs mt-0.5"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Luxury Travel
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-[#c9a84c] transition-colors duration-300 text-xs tracking-[0.18em] uppercase"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0d1117] transition-all duration-300 px-5 py-2 text-xs tracking-[0.18em] uppercase"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Plan My Trip
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d1117] border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/70 hover:text-[#c9a84c] transition-colors text-sm tracking-[0.18em] uppercase"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 border border-[#c9a84c] text-[#c9a84c] text-center py-3 text-xs tracking-[0.18em] uppercase"
                style={{ fontFamily: "'Jost', sans-serif" }}
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
