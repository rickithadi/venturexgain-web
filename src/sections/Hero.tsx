import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=85&auto=format"
          alt="Luxury travel destination"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/70 via-[#0d1117]/50 to-[#0d1117]/80" />
      </div>

      {/* Decorative gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent origin-left"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-6"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          New York&apos;s Premier Luxury Travel Agency
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-white font-light leading-[1.1] mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.8rem, 7vw, 6rem)',
          }}
        >
          Worldly Wonders,
          <br />
          <em className="italic text-[#c9a84c]">Mindfully Explored</em>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-white/75 font-light leading-relaxed max-w-xl mx-auto mb-10"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
          }}
        >
          Luxury travel with purpose — stress-free, thoughtful adventures
          for the sophisticated &amp; conscious traveler.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="group relative bg-[#c9a84c] text-[#0d1117] px-10 py-4 text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            <span className="relative z-10">Plan My Trip</span>
            <span className="absolute inset-0 bg-[#e6c97a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          <a
            href="#services"
            className="border border-white/40 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Our Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-white/50" size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
