import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80&auto=format"
          alt="Travel inspiration"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0d1117]/80" />
      </div>

      {/* Gold border top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-32 text-center" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-5"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          Start Your Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white font-light leading-[1.1] mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          }}
        >
          Life&apos;s Too Short for{' '}
          <em className="italic text-[#c9a84c]">Mediocre Vacations</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/60 leading-relaxed mb-10 mx-auto max-w-xl"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem' }}
        >
          Let us craft an epic, inspired getaway tailored entirely to you — you get the trip of your
          dreams with none of the legwork.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group flex items-center justify-center gap-3 bg-[#c9a84c] text-[#0d1117] px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#e6c97a] transition-colors duration-300"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Plan My Dream Trip
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="mailto:hello@venturexgain.com"
            className="border border-white/30 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            hello@venturexgain.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}
