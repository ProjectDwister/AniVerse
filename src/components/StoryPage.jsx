import { useParams, useNavigate } from 'react-router-dom';
import { POSTS } from '../data/posts';
import CategoryBadge from './CategoryBadge';
import { Illustrations } from './Illustrations';
import Header from './Header';
import Seo from './Seo';
import ReadingProgress from './ReadingProgress';

export default function StoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const postIndex = POSTS.findIndex(p => p.slug === slug);
  const post = POSTS[postIndex];

  if (!post) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-serif)', color: 'var(--color-text-secondary)',
      }}>
        <p style={{ fontSize: 20, marginBottom: '1.5rem' }}>Story not found.</p>
        <button onClick={() => navigate('/')} style={buttonStyle}>
          ← Back to The AniVerse
        </button>
      </div>
    );
  }

  const nextPost = POSTS.length > 1 ? POSTS[(postIndex + 1) % POSTS.length] : null;
  const authorName = post.author || 'Animesh Dwivedi';

  return (
    <div style={{ fontFamily: 'var(--font-sans)', minHeight: '100vh', paddingBottom: '5rem' }}>
      <Seo title={post.title} description={post.excerpt} path={`/story/${post.slug}`} />
      <ReadingProgress />

      <Header showBack />

      {/* Hero illustration */}
      <div style={{
        background: '#f5ede0',
        height: 280,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {Illustrations[post.image]}
      </div>

      {/* Article */}
      <article style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 2rem' }}>

        {/* Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
          <CategoryBadge cat={post.category} />
          <span style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>{post.readTime}</span>
        </div>

        {/* Disclaimer */}
        {post.disclaimer && (
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 16,
            fontStyle: 'italic',
            lineHeight: 1.7,
            color: 'var(--color-text-tertiary)',
            borderLeft: '2px solid var(--color-border-secondary)',
            paddingLeft: '1rem',
            margin: '0 0 2rem',
          }}>
            {Array.isArray(post.disclaimer)
              ? post.disclaimer.map((part, i) =>
                  i === 1
                    ? <span key={i} style={{ fontFamily: "'Noto Serif Devanagari', var(--font-serif)", fontSize: '0.95em' }}>{part}</span>
                    : <span key={i}>{part}</span>
                )
              : post.disclaimer}
          </p>
        )}

        {/* Title */}
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(28px, 5vw, 42px)',
          fontWeight: 400, lineHeight: 1.2,
          color: 'var(--color-text-primary)',
          margin: '0 0 0.75rem',
          letterSpacing: '-0.02em',
        }}>
          {post.title}
        </h1>

        {/* Author */}
        <p style={{
          fontSize: 14,
          color: 'var(--color-text-tertiary)',
          fontFamily: 'var(--font-sans)',
          margin: '0 0 2.5rem',
          letterSpacing: '0.01em',
        }}>
          By {authorName}
        </p>

        {/* Body */}
        {post.body.map((paragraph, i) => {
          const isLast = i === post.body.length - 1;
          const isShort = paragraph.length < 60;
          return (
            <p key={i} style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 19,
              lineHeight: 1.6,
              color: isLast ? 'var(--color-text-tertiary)' : 'var(--color-text-secondary)',
              fontStyle: isLast ? 'italic' : 'normal',
              marginBottom: isLast ? '3rem' : '1rem',
              textAlign: (isLast || isShort) ? 'left' : 'justify',
            }}>
              {paragraph}
            </p>
          );
        })}

        {/* Footer nav */}
        <div style={{
          borderTop: '0.5px solid var(--color-border-tertiary)',
          paddingTop: '2rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: nextPost ? '2.5rem' : 0,
        }}>
          <button onClick={() => navigate('/essays')} style={buttonStyle}>
            ← All Essays
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: post.title, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
              }
            }}
            style={{ ...buttonStyle, borderColor: 'transparent', color: '#c4603a' }}
          >
            Share ↗
          </button>
        </div>

        {/* Next essay */}
        {nextPost && (
          <div
            onClick={() => navigate(`/story/${nextPost.slug}`)}
            style={{
              cursor: 'pointer',
              border: '0.5px solid var(--color-border-tertiary)',
              borderRadius: 'var(--border-radius-lg)',
              padding: '1.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
              transition: 'box-shadow 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <div>
              <div style={{
                fontSize: 10, color: 'var(--color-text-tertiary)',
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6,
              }}>
                Next Essay
              </div>
              <div style={{
                fontFamily: 'var(--font-serif)', fontSize: 20,
                color: 'var(--color-text-primary)', letterSpacing: '-0.01em',
              }}>
                {nextPost.title}
              </div>
              <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)', marginTop: 4 }}>
                By {nextPost.author || 'Animesh Dwivedi'}
              </div>
            </div>
            <div style={{ fontSize: 24, color: 'var(--color-text-tertiary)' }}>→</div>
          </div>
        )}
      </article>
    </div>
  );
}

const buttonStyle = {
  padding: '9px 18px',
  borderRadius: 8, fontSize: 13, cursor: 'pointer', fontWeight: 500,
  background: 'transparent', color: 'var(--color-text-secondary)',
  border: '0.5px solid var(--color-border-secondary)',
};
