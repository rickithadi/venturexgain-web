import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const line: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 lg:px-16 relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'var(--border)' }}
      />

      {/* Location tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute top-28 right-6 lg:right-16 flex flex-col items-end gap-1"
      >
        <span style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--fg-2)' }}>
          Est. 2020
        </span>
        <span style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--fg-2)' }}>
          New York City
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-0 items-end">
          {/* Headline */}
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p
              variants={line}
              style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '28px' }}
            >
              Luxury Travel with Purpose
            </motion.p>

            <div style={{ overflow: 'hidden' }}>
              <motion.h1
                variants={line}
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(3.4rem, 8.5vw, 8.5rem)',
                  fontWeight: 300,
                  lineHeight: 0.92,
                  letterSpacing: '-0.02em',
                  color: 'var(--fg)',
                  margin: 0,
                }}
              >
                Worldly
              </motion.h1>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.h1
                variants={line}
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(3.4rem, 8.5vw, 8.5rem)',
                  fontWeight: 300,
                  lineHeight: 0.92,
                  fontStyle: 'italic',
                  letterSpacing: '-0.02em',
                  color: 'var(--gold)',
                  margin: 0,
                }}
              >
                Wonders,
              </motion.h1>
            </div>
            <div style={{ overflow: 'hidden', marginTop: '8px' }}>
              <motion.h1
                variants={line}
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(3.4rem, 8.5vw, 8.5rem)',
                  fontWeight: 300,
                  lineHeight: 0.92,
                  letterSpacing: '-0.02em',
                  color: 'var(--fg)',
                  margin: 0,
                }}
              >
                Mindfully
              </motion.h1>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.h1
                variants={line}
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(3.4rem, 8.5vw, 8.5rem)',
                  fontWeight: 300,
                  lineHeight: 0.92,
                  letterSpacing: '-0.02em',
                  color: 'var(--fg)',
                  margin: 0,
                }}
              >
                Explored.
              </motion.h1>
            </div>

            <motion.div
              variants={line}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12"
            >
              <a
                href="#contact"
                style={{
                  fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
                  background: 'var(--fg)', color: 'var(--bg)', padding: '14px 32px', textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Plan My Journey
              </a>
              <a
                href="#about"
                style={{
                  fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'var(--fg-2)', textDecoration: 'none', borderBottom: '1px solid var(--border)', paddingBottom: '2px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-2)')}
              >
                Discover More ↓
              </a>
            </motion.div>
          </motion.div>

          {/* Editorial photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            className="hidden lg:block self-end"
          >
            <div style={{ position: 'relative' }}>
              {/* Offset border */}
              <div
                style={{
                  position: 'absolute', top: '-12px', right: '-12px',
                  width: '100%', height: '100%',
                  border: '1px solid var(--gold)',
                  opacity: 0.4,
                  pointerEvents: 'none',
                }}
              />
              <div style={{ aspectRatio: '3/4', overflow: 'hidden', width: '100%' }}>
                <img
                  src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=640&q=85&auto=format"
                  alt="Venture & Gain — curated travel experiences"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                  loading="eager"
                />
              </div>
              {/* Caption */}
              <p
                style={{
                  fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'var(--fg-2)', marginTop: '10px', textAlign: 'right' as const,
                }}
              >
                Bali, Indonesia
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-16 pt-6 flex items-center justify-between"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1rem, 1.6vw, 1.25rem)', fontStyle: 'italic', color: 'var(--fg-2)', maxWidth: '480px', lineHeight: 1.5 }}>
            Stress-free, thoughtful adventures for the sophisticated &amp; conscious traveler.
          </p>
          <div className="hidden sm:flex items-center gap-3">
            <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--fg-2)' }}>
              New York
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
