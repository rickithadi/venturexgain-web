import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import type { TargetAndTransition } from 'framer-motion'

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
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1.5rem, 3.2vw, 2.8rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(246,239,227,0.9)',
              lineHeight: 1.35,
              margin: 0,
              maxWidth: '840px',
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

      <div className="max-w-7xl mx-auto px-6 lg:px-16" style={{ paddingTop: '100px', paddingBottom: '0' }}>
        {/* — OUR STORY — */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-20 items-start" style={{ paddingBottom: '80px', borderBottom: '1px solid var(--border)' }}>
          {/* Text */}
          <div>
            <motion.p
              {...fadeIn(0.05)}
              style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}
            >
              Our Story
            </motion.p>
            <motion.h2
              {...fadeIn(0.1)}
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                fontWeight: 300, lineHeight: 1.1,
                color: 'var(--fg)', marginBottom: '24px', marginTop: 0,
              }}
            >
              Bespoke adventures across{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>the 7 continents</em>
            </motion.h2>
            <motion.p {...fadeIn(0.15)} style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', lineHeight: 1.75, color: 'var(--fg-2)', marginBottom: '18px' }}>
              At Venture &amp; Gain Travel, we are passionate about curating rich, awe-inspiring,
              purposeful journeys for the modern traveler. We are guided by our passion for luxury
              lifestyle, superb service, and responsible, sustainable travel.
            </motion.p>
            <motion.p {...fadeIn(0.2)} style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', lineHeight: 1.75, color: 'var(--fg-2)', marginBottom: '28px' }}>
              We are on a mission to help modern travelers have the coolest, most unique, and
              enriching experiences around the world while leaving it a better place. Founded by
              Avantika Krishna — a repeat expat, arts, history &amp; culinary expert, and national
              park aficionado — Venture &amp; Gain brings rare insider knowledge and genuine
              passion to every journey we design.
            </motion.p>
            <motion.p {...fadeIn(0.25)} style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.65, color: 'var(--fg-2)', borderLeft: '2px solid var(--gold)', paddingLeft: '18px' }}>
              Avantika is a proud{' '}
              <a href="https://www.virtuoso.com/advisors/16620456/avantika-krishna" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'none', borderBottom: '1px solid rgba(184,125,58,0.3)' }}>
                Virtuoso Travel Advisor
              </a>
              {' '}— part of an elite global network of the world's finest travel specialists.
            </motion.p>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={(inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }) as TargetAndTransition}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          >
            <div style={{ position: 'relative' }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=85&auto=format"
                  alt="Luxury travel curated by Venture & Gain"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                />
              </div>
              <div style={{ position: 'absolute', bottom: '-14px', left: '-14px', width: '45%', height: '35%', border: '1px solid var(--gold)', opacity: 0.3, pointerEvents: 'none' }} />
            </div>
          </motion.div>
        </div>

        {/* — WHAT WE VALUE — */}
        <div style={{ paddingTop: '80px', paddingBottom: '100px' }}>
          <motion.p
            {...fadeIn(0.1)}
            style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}
          >
            What We Value
          </motion.p>
          <motion.h2
            {...fadeIn(0.15)}
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
              fontWeight: 300, lineHeight: 1.1,
              color: 'var(--fg)', marginBottom: '32px', marginTop: 0,
              maxWidth: '600px',
            }}
          >
            The principles that guide every journey we plan
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0" style={{ borderTop: '1px solid var(--border)' }}>
            {[
              {
                title: 'Luxury & Superb Service',
                body: 'We have an untamable desire to see the world and experience everything it has to offer. We are trendsetters and tastemakers who appreciate valued-added perks and VIP treatment at the most interesting places around the world.',
              },
              {
                title: 'Responsible Travel',
                body: 'We believe luxury travel has tremendous power to do good in the world. We travel in a way that makes a minimal impact on the places and communities we visit — and makes a positive, lasting impact instead.',
              },
              {
                title: 'Community Impact',
                body: 'From the hotels you visit to the guides you hire and the restaurants where you eat — everything we recommend is chosen to make a sustainable contribution to the destination and local community.',
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeIn(0.1 + i * 0.1)}
                style={{
                  paddingTop: '36px',
                  paddingBottom: '36px',
                  paddingLeft: i === 0 ? '0' : '32px',
                  paddingRight: i === 2 ? '0' : '32px',
                  borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <p style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg)', marginBottom: '12px', fontWeight: 500 }}>
                  {v.title}
                </p>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--fg-2)', margin: 0 }}>
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
