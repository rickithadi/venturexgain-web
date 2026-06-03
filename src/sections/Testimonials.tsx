import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Thanks to Avantika's global connections and meticulous attention to detail, I had an incredible first safari around East Africa. Every camp, every transfer, every moment exceeded my expectations.",
    author: 'Ava Jaeggi',
    trip: 'East Africa Safari',
  },
  {
    quote:
      "Avantika takes all the research, guesswork, and stress out of traveling. She crafted a perfectly paced itinerary for us and thought of details I never would have. I'll never plan a trip without her again.",
    author: 'Abby Miracle',
    trip: 'Custom European Journey',
  },
  {
    quote:
      'Avantika went above and beyond to make my family feel extra special during our trip. Her warm professionalism and genuine care made the entire experience unforgettable from start to finish.',
    author: 'Natacha Leopold',
    trip: 'Family Luxury Escape',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  const t = testimonials[idx]

  return (
    <section
      id="testimonials"
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0e8d8 0%, #faf6f0 100%)',
      }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c9a84c]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto text-center relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p
            className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Guest Experiences
          </p>
          <h2
            className="text-[#0d1117] font-light leading-[1.1]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            }}
          >
            Stories from <em className="italic text-[#c9a84c]">Our Travelers</em>
          </h2>
        </motion.div>

        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Quote
            className="text-[#c9a84c]/20 mx-auto mb-6"
            size={56}
            strokeWidth={1}
          />
          <blockquote
            className="text-[#2c2c2c]/80 leading-relaxed mb-8 italic"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            }}
          >
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-[1px] bg-[#c9a84c] mb-3" />
            <p
              className="text-[#0d1117] font-medium text-sm tracking-[0.15em] uppercase"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              {t.author}
            </p>
            <p
              className="text-[#c9a84c] text-xs tracking-[0.1em]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              {t.trip}
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 border border-[#0d1117]/20 hover:border-[#c9a84c] hover:text-[#c9a84c] flex items-center justify-center transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === idx ? 'w-6 h-1.5 bg-[#c9a84c]' : 'w-1.5 h-1.5 bg-[#0d1117]/20'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 border border-[#0d1117]/20 hover:border-[#c9a84c] hover:text-[#c9a84c] flex items-center justify-center transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
