import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import type { TargetAndTransition } from 'framer-motion'

const values = [
  { label: 'Luxury & Superb Service', detail: 'VIP treatment and valued-added perks at the most interesting places worldwide.' },
  { label: 'Responsible Travel', detail: 'Minimal impact on places we visit — and a positive, lasting one instead.' },
  { label: 'Community Impact', detail: 'Hotels, guides, and restaurants chosen to make a sustainable contribution to every destination.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: (inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }) as TargetAndTransition,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  })

  return (
    <section id="about" ref={ref} style={{ background: 'var(--bg)' }}>
      {/* Manifesto strip */}
      <div style={{ background: 'var(--bg-dark)', padding: '48px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.blockquote
            {...fadeIn()}
            style={{
              fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 3.2vw, 2.8rem)',
              fontWeight: 300, fontStyle: 'italic', color: 'rgba(246,239,227,0.9)',
              lineHeight: 1.35, margin: 0, maxWidth: '840px',
            }}
          >
            &ldquo;Life&rsquo;s too short for mediocre vacations. You get the trip of your dreams —
            or the one you didn&rsquo;t even think to dream of — with none of the leg-work.{' '}
            <em style={{ color: 'var(--gold-light)', fontStyle: 'normal' }}>
              All you have to do is pack your bags.
            </em>&rdquo;
          </motion.blockquote>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20 items-start">
          {/* Text column — Our Story + What We Value combined */}
          <div>
            <motion.p {...fadeIn(0.05)} style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>
              Our Story
            </motion.p>
            <motion.h2
              {...fadeIn(0.1)}
              style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--fg)', marginBottom: '24px', marginTop: 0 }}
            >
              Bespoke adventures across{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>the 7 continents</em>
            </motion.h2>
            <motion.p {...fadeIn(0.15)} style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', lineHeight: 1.75, color: 'var(--fg-2)', marginBottom: '16px' }}>
              At Venture &amp; Gain Travel, we curate rich, awe-inspiring, purposeful journeys for
              the modern traveler — guided by a passion for luxury lifestyle, superb service, and
              responsible, sustainable travel.
            </motion.p>
            <motion.p {...fadeIn(0.2)} style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', lineHeight: 1.75, color: 'var(--fg-2)', marginBottom: '28px' }}>
              Founded by Avantika Krishna — a repeat expat, arts, history &amp; culinary expert,
              and national park aficionado — Venture &amp; Gain brings rare insider knowledge and
              genuine passion to every journey we design.
            </motion.p>

            {/* What We Value — compact inline */}
            <motion.div {...fadeIn(0.25)} style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', marginBottom: '28px' }}>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
                What We Value
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
                {values.map((v) => (
                  <div key={v.label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '7px' }} />
                    <div>
                      <span style={{ fontFamily: 'var(--sans)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', color: 'var(--fg)' }}>
                        {v.label}
                      </span>
                      <span style={{ fontFamily: 'var(--sans)', fontSize: '11px', color: 'var(--fg-2)', letterSpacing: '0.03em' }}>
                        {' '}— {v.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.p {...fadeIn(0.3)} style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', lineHeight: 1.65, color: 'var(--fg-2)', borderLeft: '2px solid var(--gold)', paddingLeft: '16px' }}>
              Avantika is a proud{' '}
              <a href="https://www.virtuoso.com/advisors/16620456/avantika-krishna" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'none', borderBottom: '1px solid rgba(184,125,58,0.3)' }}>
                Virtuoso Travel Advisor
              </a>
              {' '}— part of an elite global network of the world&apos;s finest travel specialists.
            </motion.p>
          </div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={(inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }) as TargetAndTransition}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          >
            <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=85&auto=format"
                alt="Luxury travel curated by Venture & Gain"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>
            {/* Inline quote below image */}
            <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '18px', marginTop: '28px' }}>
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.65, color: 'var(--fg-2)', margin: '0 0 10px' }}>
                &ldquo;We are passionate about helping modern travelers have the coolest, most unique,
                and enriching experiences around the world while leaving it a better place.&rdquo;
              </p>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', margin: 0 }}>
                Avantika Krishna, Founder
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
