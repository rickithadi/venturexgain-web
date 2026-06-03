import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '50+', label: 'Destinations Curated' },
  { value: '100%', label: 'Personalized Service' },
  { value: '5★', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Concierge Support' },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#1a2436] py-16 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex flex-col items-center text-center py-4"
          >
            <span
              className="text-[#c9a84c] font-light mb-2"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              {s.value}
            </span>
            <span
              className="text-white/50 text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              {s.label}
            </span>
            {i < stats.length - 1 && (
              <div className="hidden lg:block absolute right-0 top-4 bottom-4 w-[1px] bg-white/10" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
