import { AtSign, ExternalLink, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0d1117] border-t border-white/10">
      {/* Gold top bar */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p
              className="text-[#c9a84c] tracking-[0.25em] uppercase text-xs mb-1"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Venture &amp; Gain
            </p>
            <p
              className="text-white/40 tracking-[0.15em] uppercase text-xs mb-5"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Luxury Travel
            </p>
            <p
              className="text-white/45 leading-relaxed text-sm max-w-xs"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.95rem' }}
            >
              Crafting bespoke luxury getaways for sophisticated &amp; conscious travelers. New York.
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-white/30 text-xs tracking-[0.25em] uppercase mb-5"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
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
                    className="text-white/50 hover:text-[#c9a84c] transition-colors text-xs tracking-[0.1em]"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-white/30 text-xs tracking-[0.25em] uppercase mb-5"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Connect
            </p>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="mailto:hello@venturexgain.com"
                className="text-white/50 hover:text-[#c9a84c] transition-colors text-xs flex items-center gap-2"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                <Mail size={12} />
                hello@venturexgain.com
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/venturexgain"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/15 hover:border-[#c9a84c] hover:text-[#c9a84c] text-white/40 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <AtSign size={13} />
              </a>
              <a
                href="https://linkedin.com/in/avantika-krishna"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/15 hover:border-[#c9a84c] hover:text-[#c9a84c] text-white/40 flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/25 text-xs tracking-[0.1em]"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            &copy; {year} Venture &amp; Gain Travel. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((l) => (
              <a
                key={l}
                href="#"
                className="text-white/25 hover:text-[#c9a84c] text-xs transition-colors"
                style={{ fontFamily: "'Jost', sans-serif" }}
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
