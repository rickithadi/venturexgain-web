const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-dark)', color: 'rgba(246,239,227,0.5)' }}>
      {/* Gold rule */}
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(184,125,58,0.5), transparent)' }} />

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
