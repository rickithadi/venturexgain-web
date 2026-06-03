import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { posts } from '../data/blog'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function BlogIndex() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [featured, ...rest] = posts

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', paddingTop: '100px' }}>
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-16" style={{ paddingTop: '60px', paddingBottom: '60px', borderBottom: '1px solid var(--border)' }}>
          <Link
            to="/"
            style={{
              fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--fg-2)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px',
              marginBottom: '32px', transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-2)')}
          >
            <ArrowLeft size={11} /> Home
          </Link>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>
            The Journal
          </p>
          <h1
            style={{
              fontFamily: 'var(--serif)', fontSize: 'clamp(2.8rem, 7vw, 6rem)', fontWeight: 300,
              lineHeight: 0.95, color: 'var(--fg)', margin: 0,
            }}
          >
            Notes on Travel
          </h1>
        </div>

        {/* Featured */}
        <div className="max-w-7xl mx-auto px-6 lg:px-16" style={{ paddingTop: '64px', paddingBottom: '64px', borderBottom: '1px solid var(--border)' }}>
          <Link to={`/journal/${featured.slug}`} style={{ textDecoration: 'none', display: 'grid' }} className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
            <div style={{ overflow: 'hidden', aspectRatio: '4/3' }}>
              <img
                src={featured.image}
                alt={featured.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
                loading="eager"
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
            <div>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                  {featured.category}
                </span>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '9px', color: 'var(--fg-2)' }}>
                  {featured.dateDisplay} · {featured.readTime}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300,
                  lineHeight: 1.15, color: 'var(--fg)', marginBottom: '16px', marginTop: 0, transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg)')}
              >
                {featured.title}
              </h2>
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.65, color: 'var(--fg-2)', marginBottom: '24px' }}>
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
            </div>
          </Link>
        </div>

        {/* Rest of posts */}
        <div className="max-w-7xl mx-auto px-6 lg:px-16" style={{ paddingTop: '64px', paddingBottom: '100px' }}>
          <div className="grid md:grid-cols-3 gap-0" style={{ borderTop: '1px solid var(--border)' }}>
            {rest.map((post, i) => (
              <div
                key={post.slug}
                style={{
                  borderRight: i < rest.length - 1 ? '1px solid var(--border)' : 'none',
                  borderBottom: '1px solid var(--border)',
                  padding: '32px',
                  paddingLeft: i === 0 ? '0' : '32px',
                  paddingRight: i === rest.length - 1 ? '0' : '32px',
                }}
              >
                <Link to={`/journal/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ overflow: 'hidden', aspectRatio: '4/3', marginBottom: '18px' }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                      loading="lazy"
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                      {post.category}
                    </span>
                    <span style={{ fontFamily: 'var(--sans)', fontSize: '9px', color: 'var(--fg-2)' }}>
                      {post.readTime}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--serif)', fontSize: '1.25rem', fontWeight: 300,
                      lineHeight: 1.25, color: 'var(--fg)', margin: '0 0 8px', transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg)')}
                  >
                    {post.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.1em', color: 'var(--fg-2)', margin: 0 }}>
                    {post.dateDisplay}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
