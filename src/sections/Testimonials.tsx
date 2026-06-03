import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    quote: "Thanks to Avantika's global connections and meticulous attention to detail, I had an incredible first safari around East Africa. Every camp, every transfer, every moment exceeded my expectations.",
    author: 'Ava Jaeggi',
    trip: 'East Africa Safari',
    index: '01',
  },
  {
    quote: "Avantika takes all the research, guesswork, and stress out of traveling. She crafted a perfectly paced itinerary for us and thought of details I never would have. I'll never plan a trip without her again.",
    author: 'Abby Miracle',
    trip: 'Custom European Journey',
    index: '02',
  },
  {
    quote: 'Avantika went above and beyond to make my family feel extra special during our trip. Her warm professionalism and genuine care made the entire experience unforgettable from start to finish.',
    author: 'Natacha Leopold',
    trip: 'Family Luxury Escape',
    index: '03',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="testimonials" ref={ref} style={{ background: 'var(--bg)', paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-end justify-between"
          style={{ borderBottom: '1px solid var(--border)', paddingBottom: '24px' }}
        >
          <div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>
              Guest Experiences
            </p>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(2rem, 4vw, 3.4rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: 'var(--fg)',
                margin: 0,
              }}
            >
              Stories from Our Travelers
            </h2>
          </div>
        </motion.div>

        {/* Three editorial quotes */}
        <div className="grid md:grid-cols-3 gap-0" style={{ borderTop: '1px solid var(--border)' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
              style={{
                padding: '40px 36px 36px',
                borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                display: 'flex',
                flexDirection: 'column' as const,
                gap: '0',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--serif)', fontSize: '4.5rem', fontWeight: 300, lineHeight: 0.8,
                  color: 'var(--gold)', opacity: 0.3, display: 'block', marginBottom: '16px',
                }}
              >
                &ldquo;
              </span>
              <blockquote
                style={{
                  fontFamily: 'var(--serif)', fontSize: '1.05rem', fontStyle: 'italic',
                  lineHeight: 1.75, color: 'var(--fg-2)', margin: 0, flex: 1,
                }}
              >
                {t.quote}
              </blockquote>
              <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg)', marginBottom: '4px' }}>
                  {t.author}
                </p>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                  {t.trip}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
