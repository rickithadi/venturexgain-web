import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, AtSign, ExternalLink, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', destination: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Opens email client with pre-filled content
    const subject = encodeURIComponent(`New Inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nDestination Interest: ${form.destination}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:hello@venturexgain.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputClass =
    'w-full bg-transparent border-b border-[#0d1117]/20 focus:border-[#c9a84c] outline-none py-3 text-[#2c2c2c] placeholder-[#2c2c2c]/40 transition-colors duration-300 text-sm'

  return (
    <section id="contact" className="bg-[#faf6f0] py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Get In Touch
            </p>
            <h2
              className="text-[#0d1117] font-light leading-[1.1] mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              }}
            >
              Let&apos;s Plan Your{' '}
              <em className="italic text-[#c9a84c]">Next Adventure</em>
            </h2>
            <p
              className="text-[#2c2c2c]/65 leading-relaxed mb-12"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem' }}
            >
              Ready to experience travel the way it was meant to be? Reach out and let&apos;s start
              crafting your perfect journey. We typically respond within 24 hours.
            </p>

            <div className="flex flex-col gap-5">
              <a
                href="mailto:hello@venturexgain.com"
                className="flex items-center gap-4 text-[#2c2c2c]/70 hover:text-[#c9a84c] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 border border-[#0d1117]/15 group-hover:border-[#c9a84c] flex items-center justify-center transition-colors duration-300">
                  <Mail size={15} />
                </div>
                <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-sm tracking-wide">
                  hello@venturexgain.com
                </span>
              </a>
              <a
                href="https://instagram.com/venturexgain"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#2c2c2c]/70 hover:text-[#c9a84c] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 border border-[#0d1117]/15 group-hover:border-[#c9a84c] flex items-center justify-center transition-colors duration-300">
                  <AtSign size={15} />
                </div>
                <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-sm tracking-wide">
                  @venturexgain
                </span>
              </a>
              <a
                href="https://linkedin.com/in/avantika-krishna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#2c2c2c]/70 hover:text-[#c9a84c] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 border border-[#0d1117]/15 group-hover:border-[#c9a84c] flex items-center justify-center transition-colors duration-300">
                  <ExternalLink size={15} />
                </div>
                <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-sm tracking-wide">
                  Avantika Krishna
                </span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 border border-[#c9a84c] flex items-center justify-center mb-6">
                  <Send size={22} className="text-[#c9a84c]" />
                </div>
                <h3
                  className="text-[#0d1117] font-light mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem' }}
                >
                  Your Inquiry is Sent
                </h3>
                <p
                  className="text-[#2c2c2c]/60"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem' }}
                >
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="destination"
                    placeholder="Dream Destination (optional)"
                    value={form.destination}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your dream trip..."
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={inputClass + ' resize-none'}
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 bg-[#0d1117] text-[#c9a84c] border border-[#0d1117] hover:bg-[#c9a84c] hover:text-[#0d1117] hover:border-[#c9a84c] py-4 transition-all duration-300 text-xs tracking-[0.2em] uppercase group"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Submit Request
                  <Send size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
