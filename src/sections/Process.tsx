import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { PhoneCall, FileText, Plane, HeartHandshake } from 'lucide-react'

const steps = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'Discovery Call',
    desc: 'We start with a conversation to understand your travel style, preferences, bucket list, and budget.',
  },
  {
    icon: FileText,
    step: '02',
    title: 'Custom Proposal',
    desc: 'Within days, you receive a bespoke itinerary crafted entirely around your vision.',
  },
  {
    icon: HeartHandshake,
    step: '03',
    title: 'Refine & Confirm',
    desc: 'We refine every detail together until the trip feels perfectly you. Then we handle all bookings.',
  },
  {
    icon: Plane,
    step: '04',
    title: 'Travel & Enjoy',
    desc: 'Depart stress-free. Our concierge support continues throughout your journey, whenever you need us.',
  },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#faf6f0] py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            How It Works
          </p>
          <h2
            className="text-[#0d1117] font-light leading-[1.1]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            }}
          >
            Your Journey Begins with <em className="italic text-[#c9a84c]">A Conversation</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-[1px] bg-[#c9a84c]/20 z-0" style={{ width: 'calc(100% - 2.5rem)', left: '2.5rem' }} />
              )}

              <div className="w-20 h-20 border border-[#c9a84c]/30 flex items-center justify-center mb-6 relative z-10 bg-[#faf6f0]">
                <s.icon size={22} className="text-[#c9a84c]" strokeWidth={1.5} />
              </div>

              <span
                className="text-[#c9a84c]/30 text-5xl font-light mb-2 leading-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {s.step}
              </span>
              <h3
                className="text-[#0d1117] text-sm font-medium tracking-[0.1em] uppercase mb-3"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                {s.title}
              </h3>
              <p
                className="text-[#2c2c2c]/60 leading-relaxed text-sm"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem' }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
