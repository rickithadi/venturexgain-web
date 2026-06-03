import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function EmailCapture() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setDone(true)
  }

  return (
    <section ref={ref} style={{ background: 'var(--bg-dark)', padding: '80px 24px' }}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
            Join the Hive
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 300, lineHeight: 1.15, color: 'rgba(246,239,227,0.9)', marginBottom: '12px', marginTop: 0 }}>
            Get our popular &ldquo;Before You Travel&rdquo; logistics guide
          </h2>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.65, color: 'rgba(246,239,227,0.5)', marginBottom: '36px' }}>
            Know before you go — insider tips, packing essentials, and destination-specific prep from our travel experts.
          </p>

          {done ? (
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--gold-light)' }}>
              You&rsquo;re in. Check your inbox shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', maxWidth: '440px', margin: '0 auto', gap: '0' }}>
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  flex: 1, background: 'rgba(246,239,227,0.08)', border: '1px solid rgba(246,239,227,0.15)',
                  borderRight: 'none', padding: '13px 16px', fontFamily: 'var(--sans)', fontSize: '12px',
                  color: 'rgba(246,239,227,0.85)', outline: 'none', letterSpacing: '0.05em',
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(246,239,227,0.15)')}
              />
              <button
                type="submit"
                style={{
                  background: 'var(--gold)', border: '1px solid var(--gold)', color: 'var(--bg-dark)',
                  padding: '13px 20px', fontFamily: 'var(--sans)', fontSize: '10px',
                  letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '8px', transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Sign Up <ArrowRight size={11} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
