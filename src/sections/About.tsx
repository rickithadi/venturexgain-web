import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  })

  return (
    <section id="about" ref={ref} style={{ background: 'var(--bg)', paddingTop: '120px', paddingBottom: '120px' }}>
      {/* Manifesto strip */}
      <div
        style={{
          background: 'var(--bg-dark)',
          padding: '40px 40px',
          marginBottom: '100px',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.blockquote
            {...fadeIn()}
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1.6rem, 3.5vw, 3rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(246,239,227,0.9)',
              lineHeight: 1.3,
              margin: 0,
              maxWidth: '880px',
            }}
          >
            &ldquo;Life&rsquo;s too short for mediocre vacations. You deserve
            the trip of a lifetime,{' '}
            <em style={{ color: 'var(--gold-light)', fontStyle: 'normal' }}>every time.</em>&rdquo;
          </motion.blockquote>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-20 items-start">
          {/* Text column */}
          <div>
            <motion.p
              {...fadeIn(0.1)}
              style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '24px' }}
            >
              About Venture &amp; Gain
            </motion.p>

            <motion.h2
              {...fadeIn(0.2)}
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: 'var(--fg)',
                marginBottom: '28px',
                marginTop: 0,
              }}
            >
              Curating rich, awe-inspiring,{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>purposeful journeys</em>{' '}
              for the modern traveler.
            </motion.h2>

            <motion.p
              {...fadeIn(0.3)}
              style={{
                fontFamily: 'var(--serif)', fontSize: '1.15rem', lineHeight: 1.7,
                color: 'var(--fg-2)', marginBottom: '20px',
              }}
            >
              At Venture &amp; Gain Travel, we bridge the gap between your travel dreams
              and a flawlessly executed reality. We believe the best travel experiences
              are deeply personal, impeccably planned, and leave both the traveler and
              the destination better than before.
            </motion.p>

            <motion.p
              {...fadeIn(0.35)}
              style={{
                fontFamily: 'var(--serif)', fontSize: '1.15rem', lineHeight: 1.7,
                color: 'var(--fg-2)', marginBottom: '36px',
              }}
            >
              Founded by Avantika Krishna — a repeat expat, arts, history &amp; culinary
              expert, and national park aficionado — our agency brings rare insider
              knowledge and genuine passion to every journey we design.
            </motion.p>

            <motion.div {...fadeIn(0.4)} className="flex flex-col gap-4">
              {[
                'Expert curation by a seasoned global traveler',
                'Preferred partner relationships for VIP treatment',
                'Sustainable, responsible travel practices',
                'Full A–Z service or consultation-only — your choice',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '9px' }} />
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '12px', letterSpacing: '0.05em', color: 'var(--fg-2)', lineHeight: 1.6 }}>
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          >
            {/* Main image */}
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85&auto=format"
                  alt="Curated luxury travel destination"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                />
              </div>
              {/* Offset accent */}
              <div
                style={{
                  position: 'absolute', bottom: '-16px', left: '-16px',
                  width: '50%', height: '40%',
                  border: '1px solid var(--gold)',
                  opacity: 0.35,
                  pointerEvents: 'none',
                  zIndex: -1,
                }}
              />
            </div>

            {/* Small inset quote */}
            <div
              style={{
                borderLeft: '2px solid var(--gold)',
                paddingLeft: '18px',
                marginTop: '32px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem',
                  color: 'var(--fg-2)', lineHeight: 1.6, margin: 0,
                }}
              >
                &ldquo;We are passionate about helping modern travelers have unique,
                enriching experiences worldwide while leaving destinations better.&rdquo;
              </p>
              <p
                style={{
                  fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: 'var(--gold)', marginTop: '12px',
                }}
              >
                Avantika Krishna, Founder
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
