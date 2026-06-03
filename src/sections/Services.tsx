import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, Plus, Minus } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Signature Service',
    sub: 'Full Bespoke Planning',
    description:
      'Your vacation is designed entirely around your preferences — from accommodation style to dining philosophy, transport to unique local experiences. Includes our VIP Day option for urgent requests that need immediate, concierge-level attention.',
    details: ['Custom A–Z Itinerary', 'Preferred Partner Perks & Upgrades', 'VIP Day Option for Urgent Requests', 'Ongoing Concierge Throughout Your Trip'],
  },
  {
    number: '02',
    title: 'Trip Consult',
    sub: 'Expert Guidance',
    description:
      'Already have a trip in mind? We review your existing plans, optimize your itinerary, advise on the best seasons and routes, and provide visa guidance — so every decision is made with insider knowledge.',
    details: ['Itinerary Review & Optimization', 'Season & Route Advice', 'Visa Guidance', 'Local Expert Recommendations'],
  },
  {
    number: '03',
    title: 'À La Carte & Concierge',
    sub: 'Flexible Services',
    description:
      'Choose exactly what you need: hotel-only bookings with preferred partner benefits, full itinerary creation, restaurant reservations, private transfers, or ongoing concierge support throughout your journey.',
    details: ['Hotel-Only Bookings', 'Full Itinerary Creation', 'Restaurant & Experience Reservations', 'On-Trip Concierge Support'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section
      id="services"
      ref={ref}
      style={{ background: 'var(--bg-2)', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_auto] items-end gap-8 mb-16" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '28px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>
              What We Offer
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
              Journeys Crafted with Intention
            </h2>
          </motion.div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--fg-2)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px',
              whiteSpace: 'nowrap' as const, transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-2)')}
          >
            Get Started <ArrowRight size={12} />
          </motion.a>
        </div>

        {/* Service list */}
        <div>
          {services.map((svc, i) => {
            const isOpen = expanded === i
            return (
              <motion.div
                key={svc.number}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.7 }}
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  style={{
                    width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                    padding: '28px 0', textAlign: 'left' as const,
                    display: 'grid', gridTemplateColumns: '60px 1fr 1fr auto',
                    alignItems: 'center', gap: '24px',
                  }}
                  className="group"
                >
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'var(--gold)', fontWeight: 300 }}>
                    {svc.number}
                  </span>
                  <div>
                    <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 300, color: 'var(--fg)', margin: 0, lineHeight: 1.2 }}>
                      {svc.title}
                    </p>
                  </div>
                  <p
                    className="hidden md:block"
                    style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg-2)', margin: 0 }}
                  >
                    {svc.sub}
                  </p>
                  <div style={{ color: 'var(--fg-2)', flexShrink: 0, transition: 'color 0.2s' }}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Expanded content */}
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div
                    className="grid md:grid-cols-[1fr_1fr] gap-10"
                    style={{ paddingBottom: '32px', paddingLeft: '84px' }}
                  >
                    <p style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--fg-2)', margin: 0 }}>
                      {svc.description}
                    </p>
                    <div>
                      <p style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>
                        What&rsquo;s Included
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px' }}>
                        {svc.details.map((d) => (
                          <li
                            key={d}
                            style={{
                              fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.05em',
                              color: 'var(--fg-2)', padding: '6px 0', borderBottom: '1px solid var(--border)',
                              display: 'flex', alignItems: 'center', gap: '10px',
                            }}
                          >
                            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                            {d}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#contact"
                        style={{
                          fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase',
                          color: 'var(--fg)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
                          borderBottom: '1px solid var(--border)', paddingBottom: '2px',
                        }}
                      >
                        Inquire About This Service <ArrowRight size={11} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
