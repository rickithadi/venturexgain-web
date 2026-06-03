import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const year = new Date().getFullYear()

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setDone(true)
  }

  return (
    <footer style={{ background: 'var(--bg-dark)', color: 'rgba(246,239,227,0.5)' }}>
      {/* Email signup strip */}
      <div style={{ borderBottom: '1px solid rgba(246,239,227,0.08)', padding: '40px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>
              Join the Hive
            </p>
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(246,239,227,0.6)', margin: 0 }}>
              Get our &ldquo;Before You Travel&rdquo; logistics guide — free.
            </p>
          </div>
          {done ? (
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--gold-light)', flexShrink: 0 }}>
              You&rsquo;re in — check your inbox.
            </p>
          ) : (
            <form onSubmit={handleSignup} style={{ display: 'flex', flexShrink: 0 }}>
              <input
                type="email"
                placeholder="your@email.com"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  background: 'rgba(246,239,227,0.07)', border: '1px solid rgba(246,239,227,0.15)',
                  borderRight: 'none', padding: '11px 14px', fontFamily: 'var(--sans)', fontSize: '11px',
                  color: 'rgba(246,239,227,0.8)', outline: 'none', letterSpacing: '0.05em', width: '200px',
                }}
                onFocus={e => (e.target.style.borderColor = 'rgba(184,125,58,0.6)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(246,239,227,0.15)')}
              />
              <button
                type="submit"
                style={{
                  background: 'var(--gold)', border: '1px solid var(--gold)', color: 'var(--bg-dark)',
                  padding: '11px 16px', fontFamily: 'var(--sans)', fontSize: '9px',
                  letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '6px',
                }}
              >
                Sign Up <ArrowRight size={10} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Gold rule */}
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(184,125,58,0.3), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-16" style={{ padding: '64px 24px' }}>
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>
              Venture &amp; Gain
            </p>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(246,239,227,0.3)', marginBottom: '20px' }}>
              Luxury Travel &bull; New York
            </p>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontStyle: 'italic', lineHeight: 1.7, color: 'rgba(246,239,227,0.45)', maxWidth: '360px' }}>
              Crafting bespoke luxury getaways for sophisticated &amp; conscious travelers worldwide.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(246,239,227,0.25)', marginBottom: '18px' }}>
              Navigate
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(246,239,227,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(246,239,227,0.45)')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(246,239,227,0.25)', marginBottom: '18px' }}>
              Connect
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'hello@venturexgain.com', href: 'mailto:hello@venturexgain.com' },
                { label: '@venturexgain', href: 'https://instagram.com/venturexgain' },
                { label: 'Avantika on LinkedIn', href: 'https://linkedin.com/in/avantika-krishna' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.05em', color: 'rgba(246,239,227,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(246,239,227,0.45)')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{ borderTop: '1px solid rgba(246,239,227,0.08)', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}
        >
          <p style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(246,239,227,0.22)' }}>
            &copy; {year} Venture &amp; Gain Travel. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service'].map((l) => (
              <a
                key={l} href="#"
                style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(246,239,227,0.22)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(246,239,227,0.22)')}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
