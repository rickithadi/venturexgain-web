import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    quote: "Thanks to Avantika's global connections, detail-oriented approach, and crisis management skills, I made the most of my limited time on a multi-country East Africa safari. Avantika handled everything and her safari recommendations were excellent and off-the-beaten path. I got COVID, but Avantika made it easy to navigate doctors, regulations, and trip changes. Thanks to her, I had an incredible first safari around East Africa despite the medical issues.",
    author: 'Ava Jaeggi',
    trip: 'Rwanda & Kenya',
  },
  {
    quote: "Avantika takes all the research, guesswork, & stress out of traveling. My loved ones and I will not travel abroad without using Avantika's services! She made me feel so comfortable relinquishing control of my honeymoon and bachelorette. My best friend and I were so impressed that we've both already had Avantika plan our next trips!",
    author: 'Abby Miracle',
    trip: 'Mexico & the Caribbean',
  },
  {
    quote: 'Avantika went above and beyond to make my family feel extra special on the two safaris I\'ve booked with her so far. I will definitely use her again for future trips and will 100% recommend you to work with her if you are looking for the best vacation.',
    author: 'Natacha Leopold',
    trip: 'Kenya',
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
          className="mb-16"
          style={{ borderBottom: '1px solid var(--border)', paddingBottom: '24px' }}
        >
          <p style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>
            Guest Experiences
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4vw, 3.4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--fg)', margin: 0 }}>
            Stories from Our Travelers
          </h2>
        </motion.div>

        {/* Three editorial quotes — stacked on mobile, grid on md+ */}
        <div className="grid md:grid-cols-3" style={{ borderTop: '1px solid var(--border)' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
              style={{
                padding: '40px 32px 36px',
                borderBottom: '1px solid var(--border)',
                borderRight: 0,
                display: 'flex',
                flexDirection: 'column' as const,
              }}
              className={i < 2 ? 'md:border-r md:border-r-[var(--border)]' : ''}
            >
              <span style={{ fontFamily: 'var(--serif)', fontSize: '4rem', fontWeight: 300, lineHeight: 0.8, color: 'var(--gold)', opacity: 0.25, display: 'block', marginBottom: '16px' }}>
                &ldquo;
              </span>
              <blockquote style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontStyle: 'italic', lineHeight: 1.78, color: 'var(--fg-2)', margin: 0, flex: 1 }}>
                {t.quote}
              </blockquote>
              <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg)', marginBottom: '4px' }}>
                  {t.author}
                </p>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', margin: 0 }}>
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
