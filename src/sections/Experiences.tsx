import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const examples = [
  {
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80&auto=format',
    label: 'Cycling through private vineyards',
    location: 'Burgundy, France',
  },
  {
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80&auto=format',
    label: 'Horseback riding at sunrise across private estates',
    location: 'Andalusia, Spain',
  },
  {
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80&auto=format',
    label: 'Walking safari with a master tracker',
    location: 'Laikipia, Kenya',
  },
  {
    image: 'https://images.unsplash.com/photo-1544963986-8b7f9571ccb5?w=600&q=80&auto=format',
    label: 'Private river canoe with a resident naturalist',
    location: 'Napo, Ecuador',
  },
]

export default function Experiences() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} style={{ background: 'var(--bg-2)', paddingTop: '80px', paddingBottom: '80px', overflow: 'hidden' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
          style={{ borderBottom: '1px solid var(--border)', paddingBottom: '20px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}
        >
          <div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>
              The Kind of Trip We Build
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--fg)', margin: 0 }}>
              Finely tailored to you — experiences not available to the public
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--fg-2)', maxWidth: '340px', textAlign: 'right' as const, flexShrink: 0 }}>
            Every detail chosen because it matches your particular interests — not a package, not a template.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {examples.map((ex, i) => (
            <motion.div
              key={ex.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ aspectRatio: i % 2 === 0 ? '3/4' : '3/5', overflow: 'hidden' }}>
                <img
                  src={ex.image}
                  alt={ex.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
                  loading="lazy"
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,20,16,0.7) 0%, transparent 50%)' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '14px', left: '14px', right: '14px' }}>
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '0.9rem', color: 'rgba(246,239,227,0.92)', lineHeight: 1.4, margin: 0 }}>
                  {ex.label}
                </p>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '4px' }}>
                  {ex.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
