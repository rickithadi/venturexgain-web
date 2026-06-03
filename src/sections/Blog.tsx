import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { posts } from '../data/blog'

export default function Blog() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const featured = posts[0]
  const secondary = posts.slice(1, 3)

  return (
    <section id="journal" ref={ref} style={{ background: 'var(--bg)', paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-14"
          style={{ borderBottom: '1px solid var(--border)', paddingBottom: '24px' }}
        >
          <div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>
              The Journal
            </p>
            <h2
              style={{
                fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4vw, 3.4rem)',
                fontWeight: 300, lineHeight: 1.1, color: 'var(--fg)', margin: 0,
              }}
            >
              Notes on Travel
            </h2>
          </div>
          <Link
            to="/journal"
            style={{
              fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--fg-2)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-2)')}
          >
            All Articles <ArrowRight size={12} />
          </Link>
        </motion.div>

        {/* Featured + secondary grid */}
        <div className="grid lg:grid-cols-[5fr_3fr] gap-12 items-start">
          {/* Featured post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Link to={`/journal/${featured.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
              <div
                style={{ overflow: 'hidden', aspectRatio: '16/9', marginBottom: '20px', background: 'var(--bg-2)' }}
                className="group"
              >
                <img
                  src={featured.image}
                  alt={featured.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
                  loading="lazy"
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                  {featured.category}
                </span>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.1em', color: 'var(--fg-2)' }}>
                  {featured.dateDisplay}
                </span>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.1em', color: 'var(--fg-2)' }}>
                  {featured.readTime}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                  fontWeight: 300, lineHeight: 1.2, color: 'var(--fg)', marginBottom: '10px', marginTop: 0,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg)')}
              >
                {featured.title}
              </h3>
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', lineHeight: 1.65, color: 'var(--fg-2)', margin: '0 0 16px' }}>
                {featured.excerpt}
              </p>
              <span
                style={{
                  fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'var(--fg)', display: 'inline-flex', alignItems: 'center', gap: '8px',
                  borderBottom: '1px solid var(--border)', paddingBottom: '2px',
                }}
              >
                Read Article <ArrowRight size={11} />
              </span>
            </Link>
          </motion.div>

          {/* Secondary posts */}
          <div className="flex flex-col" style={{ gap: '0', borderTop: '1px solid var(--border)' }}>
            {secondary.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1 }}
                style={{ borderBottom: '1px solid var(--border)', padding: '28px 0' }}
              >
                <Link to={`/journal/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '90px', aspectRatio: '1/1', flexShrink: 0, overflow: 'hidden', background: 'var(--bg-2)' }}>
                      <img
                        src={post.image}
                        alt={post.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                        loading="lazy"
                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', gap: '10px', marginBottom: '8px', alignItems: 'center' }}>
                        <span style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                          {post.category}
                        </span>
                        <span style={{ fontFamily: 'var(--sans)', fontSize: '9px', color: 'var(--fg-2)' }}>
                          {post.readTime}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 300,
                          lineHeight: 1.3, color: 'var(--fg)', margin: '0 0 6px',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg)')}
                      >
                        {post.title}
                      </h3>
                      <p style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.05em', color: 'var(--fg-2)', margin: 0 }}>
                        {post.dateDisplay}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* CTA to journal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ paddingTop: '24px' }}
            >
              <Link
                to="/journal"
                style={{
                  fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'var(--fg)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px',
                  border: '1px solid var(--fg)', padding: '14px 20px', justifyContent: 'center',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--fg)'; e.currentTarget.style.color = 'var(--bg)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--fg)' }}
              >
                Browse All Articles <ArrowRight size={11} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
