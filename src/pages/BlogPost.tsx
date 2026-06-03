import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getPost, posts } from '../data/blog'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = getPost(slug ?? '')
  const idx = posts.findIndex((p) => p.slug === slug)
  const prev = idx > 0 ? posts[idx - 1] : null
  const next = idx < posts.length - 1 ? posts[idx + 1] : null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) return <Navigate to="/journal" replace />

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div style={{ background: 'var(--bg)', paddingTop: '100px' }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8" style={{ paddingTop: '40px', paddingBottom: '48px' }}>
            {/* Breadcrumb */}
            <Link
              to="/journal"
              style={{
                fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--fg-2)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px',
                marginBottom: '36px', transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-2)')}
            >
              <ArrowLeft size={11} /> The Journal
            </Link>

            {/* Meta */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                {post.category}
              </span>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.1em', color: 'var(--fg-2)' }}>
                {post.dateDisplay}
              </span>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.1em', color: 'var(--fg-2)' }}>
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 300,
                lineHeight: 1.1, color: 'var(--fg)', marginBottom: '16px', marginTop: 0,
              }}
            >
              {post.title}
            </h1>
            <p
              style={{
                fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                color: 'var(--fg-2)', lineHeight: 1.5, marginBottom: '40px',
              }}
            >
              {post.subtitle}
            </p>
          </div>

          {/* Hero image */}
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', paddingBottom: '80px' }}>
            <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
              <img
                src={post.image}
                alt={post.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            {post.imageCaption && (
              <p style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg-2)', marginTop: '10px', textAlign: 'right' }}>
                {post.imageCaption}
              </p>
            )}
          </div>
        </div>

        {/* Article body */}
        <article
          style={{ background: 'var(--bg)', paddingBottom: '100px' }}
          className="blog-content"
        >
          <div
            className="max-w-2xl mx-auto px-6 lg:px-0"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* CTA block */}
        <div style={{ background: 'var(--bg-2)', padding: '64px 24px' }}>
          <div className="max-w-2xl mx-auto text-center">
            <p style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
              Ready to Travel?
            </p>
            <h2
              style={{
                fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 300,
                lineHeight: 1.2, color: 'var(--fg)', marginBottom: '20px', marginTop: 0,
              }}
            >
              Let us design this trip for you
            </h2>
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--fg-2)', marginBottom: '32px' }}>
              Every journey we build is tailored entirely to the person taking it.
            </p>
            <Link
              to="/#contact"
              style={{
                fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
                background: 'var(--fg)', color: 'var(--bg)', padding: '14px 36px', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Plan My Trip <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Prev / Next */}
        {(prev || next) && (
          <div
            style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '40px 24px' }}
          >
            <div className="max-w-4xl mx-auto grid grid-cols-2 gap-8">
              <div>
                {prev && (
                  <Link to={`/journal/${prev.slug}`} style={{ textDecoration: 'none' }}>
                    <span style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-2)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                      <ArrowLeft size={10} /> Previous
                    </span>
                    <p style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontWeight: 300, color: 'var(--fg)', margin: 0, lineHeight: 1.3, transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg)')}
                    >
                      {prev.title}
                    </p>
                  </Link>
                )}
              </div>
              <div style={{ textAlign: 'right' }}>
                {next && (
                  <Link to={`/journal/${next.slug}`} style={{ textDecoration: 'none' }}>
                    <span style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-2)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', justifyContent: 'flex-end' }}>
                      Next <ArrowRight size={10} />
                    </span>
                    <p style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontWeight: 300, color: 'var(--fg)', margin: 0, lineHeight: 1.3, transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg)')}
                    >
                      {next.title}
                    </p>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
