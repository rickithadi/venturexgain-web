import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Compass, MessageSquare, Sparkles, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Compass,
    number: '01',
    title: 'Signature Service',
    subtitle: 'Full Bespoke Planning',
    description:
      'Your vacation is designed entirely around your preferences — from accommodation style to dining philosophy, transport to unique local experiences. Includes our VIP Day option for urgent requests that need immediate, concierge-level attention.',
    features: ['Custom A–Z Itinerary', 'VIP Day Option', 'Preferred Partner Perks', 'Full Concierge Support'],
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80&auto=format',
  },
  {
    icon: MessageSquare,
    number: '02',
    title: 'Trip Consult',
    subtitle: 'Expert Guidance',
    description:
      'Already have a trip in mind? Our expert consultation service reviews your existing plans, optimizes your itinerary, advises on the best seasons and routes, and provides visa guidance — so every decision is made with insider knowledge.',
    features: ['Itinerary Review', 'Season & Route Advice', 'Visa Guidance', 'Local Expert Tips'],
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600&q=80&auto=format',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'À La Carte & Concierge',
    subtitle: 'Flexible Services',
    description:
      'Choose exactly what you need: hotel-only bookings with our preferred partner benefits, full itinerary creation, restaurant reservations, private transfers, or ongoing concierge support throughout your journey.',
    features: ['Hotel-Only Bookings', 'Full Itinerary Creation', 'Restaurant Reservations', 'Concierge On-Trip'],
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80&auto=format',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="bg-[#0d1117] py-28 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p
            className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            What We Offer
          </p>
          <h2
            className="text-white font-light leading-[1.1] mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            }}
          >
            Journeys Crafted with{' '}
            <em className="italic text-[#c9a84c]">Intention</em>
          </h2>
          <p
            className="text-white/50 max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem' }}
          >
            Every service is designed to give you the trip of your dreams — with none of the legwork.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {services.map((svc, i) => (
            <motion.div
              key={svc.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid lg:grid-cols-2 gap-0 overflow-hidden ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative h-64 lg:h-auto ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/60 to-transparent" />
                <span
                  className="absolute top-6 left-6 text-6xl font-light text-white/10"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {svc.number}
                </span>
              </div>

              {/* Content */}
              <div
                className={`bg-[#1a2436] p-10 lg:p-14 flex flex-col justify-center ${
                  i % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <svc.icon size={16} className="text-[#c9a84c]" />
                  <span
                    className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    {svc.subtitle}
                  </span>
                </div>
                <h3
                  className="text-white font-light mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  className="text-white/55 leading-relaxed mb-8"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem' }}
                >
                  {svc.description}
                </p>
                <ul className="grid grid-cols-2 gap-2 mb-8">
                  {svc.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-white/50 text-xs"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                    >
                      <span className="w-1 h-1 bg-[#c9a84c] rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-[#c9a84c] hover:gap-4 transition-all duration-300 text-xs tracking-[0.2em] uppercase group w-fit"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Get Started
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
