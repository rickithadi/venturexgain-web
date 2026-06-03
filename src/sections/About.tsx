import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Leaf, Globe, Star } from 'lucide-react'

const values = [
  {
    icon: Globe,
    title: 'Expert Curation',
    desc: 'As a repeat expat and arts, history & culinary expert, Avantika brings insider knowledge to every journey.',
  },
  {
    icon: Leaf,
    title: 'Conscious Travel',
    desc: 'We help you leave every destination better than you found it — sustainable, responsible, and meaningful.',
  },
  {
    icon: Star,
    title: 'VIP Treatment',
    desc: 'Global connections mean you receive valued-added perks, upgrades, and experiences unavailable elsewhere.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="bg-[#faf6f0] py-28 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=85&auto=format"
                alt="Luxury travel experience"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative gold border */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-[#c9a84c]/30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            <div>
              <p
                className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                About Venture &amp; Gain
              </p>
              <h2
                className="font-light leading-[1.15] text-[#0d1117] mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                }}
              >
                You deserve the trip
                <br />
                <em className="italic text-[#c9a84c]">of a lifetime, every time</em>
              </h2>
              <p
                className="text-[#2c2c2c]/70 leading-relaxed mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem' }}
              >
                At Venture &amp; Gain Travel, we are passionate about curating rich, awe-inspiring,
                purposeful journeys for the modern traveler. We bridge the gap between your travel
                dreams and a flawlessly executed reality.
              </p>
              <p
                className="text-[#2c2c2c]/70 leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem' }}
              >
                Founded by Avantika Krishna — a repeat expat, arts, history &amp; culinary expert,
                and national park aficionado — our agency is built on the belief that life&apos;s
                too short for mediocre vacations.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 border border-[#c9a84c]/40 flex items-center justify-center">
                    <v.icon size={16} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <h3
                      className="text-[#0d1117] font-medium mb-1 text-sm tracking-wide uppercase"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                    >
                      {v.title}
                    </h3>
                    <p
                      className="text-[#2c2c2c]/65 text-sm leading-relaxed"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem' }}
                    >
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
