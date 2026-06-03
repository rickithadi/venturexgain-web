import { motion } from 'framer-motion'
import type { TargetAndTransition } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || ''

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [form, setForm] = useState({ name: '', email: '', destination: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Travel Inquiry from ${form.name}`)
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nDestination: ${form.destination}\n\n${form.message}`)
      window.location.href = `mailto:hello@venturexgain.com?subject=${subject}&body=${body}`
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: '1px solid var(--border)', outline: 'none',
    padding: '12px 0', fontFamily: 'var(--sans)', fontSize: '12px',
    letterSpacing: '0.05em', color: 'var(--fg)',
    transition: 'border-color 0.25s',
  }

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    animate: (inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }) as TargetAndTransition,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  })

  return (
    <section id="contact" ref={ref} style={{ background: 'var(--bg-2)', paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-20 items-start">
          {/* Left */}
          <div>
            <motion.p
              {...fadeIn(0)}
              style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}
            >
              Get In Touch
            </motion.p>
            <motion.h2
              {...fadeIn(0.1)}
              style={{
                fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4vw, 3.4rem)',
                fontWeight: 300, lineHeight: 1.1, color: 'var(--fg)', marginBottom: '24px', marginTop: 0,
              }}
            >
              Let&rsquo;s Plan Your Next Adventure
            </motion.h2>
            <motion.p
              {...fadeIn(0.15)}
              style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--fg-2)', marginBottom: '48px' }}
            >
              Ready to experience travel the way it was meant to be? Reach out and
              let&rsquo;s start crafting your perfect journey. We typically respond
              within 24 hours.
            </motion.p>

            {/* Contact details */}
            <motion.div {...fadeIn(0.2)} className="flex flex-col gap-5">
              {[
                { label: 'Email', value: 'hello@venturexgain.com', href: 'mailto:hello@venturexgain.com' },
                { label: 'Instagram', value: '@venturexgain', href: 'https://instagram.com/venturexgain' },
                { label: 'LinkedIn', value: 'Avantika Krishna', href: 'https://linkedin.com/in/avantika-krishna' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ paddingBottom: '16px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'baseline', gap: '24px' }}
                >
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-2)', width: '80px', flexShrink: 0 }}>
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ fontFamily: 'var(--sans)', fontSize: '12px', color: 'var(--fg)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg)')}
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Form */}
          <motion.div {...fadeIn(0.2)}>
            {status === 'sent' ? (
              <div
                style={{
                  borderTop: '2px solid var(--gold)', paddingTop: '40px',
                  display: 'flex', flexDirection: 'column' as const, gap: '12px',
                }}
              >
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', fontWeight: 300, color: 'var(--fg)', margin: 0 }}>
                  Inquiry Received
                </h3>
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--fg-2)' }}>
                  Thank you, {form.name}. We&rsquo;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', display: 'flex', flexDirection: 'column' as const, gap: '24px' }}>
                {status === 'error' && (
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '11px', color: '#b84a3a', borderLeft: '2px solid #b84a3a', paddingLeft: '12px' }}>
                    Something went wrong. Please email us directly at hello@venturexgain.com
                  </p>
                )}
                <div>
                  <input
                    type="text" name="name" placeholder="Full Name" required
                    value={form.name} onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderBottomColor = 'var(--fg)')}
                    onBlur={e => (e.target.style.borderBottomColor = 'var(--border)')}
                  />
                </div>
                <div>
                  <input
                    type="email" name="email" placeholder="Email Address" required
                    value={form.email} onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderBottomColor = 'var(--fg)')}
                    onBlur={e => (e.target.style.borderBottomColor = 'var(--border)')}
                  />
                </div>
                <div>
                  <input
                    type="text" name="destination" placeholder="Dream Destination (optional)"
                    value={form.destination} onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderBottomColor = 'var(--fg)')}
                    onBlur={e => (e.target.style.borderBottomColor = 'var(--border)')}
                  />
                </div>
                <div>
                  <textarea
                    name="message" placeholder="Tell us about your dream trip..." rows={4}
                    value={form.message} onChange={handleChange}
                    style={{ ...inputStyle, resize: 'none' as const, lineHeight: 1.6 }}
                    onFocus={e => (e.target.style.borderBottomColor = 'var(--fg)')}
                    onBlur={e => (e.target.style.borderBottomColor = 'var(--border)')}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
                    background: 'var(--fg)', color: 'var(--bg)', border: 'none', padding: '16px 32px',
                    cursor: status === 'sending' ? 'wait' : 'pointer',
                    opacity: status === 'sending' ? 0.7 : 1,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    transition: 'opacity 0.2s',
                    width: '100%',
                  }}
                  onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.opacity = '0.8' }}
                  onMouseLeave={e => { if (status !== 'sending') e.currentTarget.style.opacity = '1' }}
                >
                  {status === 'sending' ? 'Sending…' : 'Submit Request'}
                  {status !== 'sending' && <ArrowRight size={12} />}
                </button>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.1em', color: 'var(--fg-2)', textAlign: 'center' as const }}>
                  We respond within 24 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
