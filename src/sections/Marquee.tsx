import { motion } from 'framer-motion'

const items = [
  'Curated Journeys',
  'VIP Experiences',
  'Conscious Travel',
  'Bespoke Itineraries',
  'Global Connections',
  'Luxury Redefined',
  'Purposeful Adventures',
]

export default function Marquee() {
  return (
    <div className="bg-[#0d1117] py-4 overflow-hidden border-y border-[#c9a84c]/20">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex gap-10 whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span
              className="text-[#c9a84c]/70 text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              {item}
            </span>
            <span className="text-[#c9a84c]/30 text-lg">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
