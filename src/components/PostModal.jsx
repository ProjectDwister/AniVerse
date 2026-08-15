import { useEffect } from 'react';
import CategoryBadge from './CategoryBadge';
import { Illustrations } from './Illustrations';

export default function PostModal({ post, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.55)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        zIndex: 100, overflowY: 'auto', padding: '2rem 1rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--color-background-primary)',
          borderRadius: 'var(--border-radius-lg)',
          border: '0.5px solid var(--color-border-tertiary)',
          maxWidth: 680, width: '100%',
          overflow: 'hidden',
          marginTop: '1rem',
          marginBottom: '2rem',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{
          background: '#f5ede0', height: 220,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {Illustrations[post.image]}
        </div>

        <div style={{ padding: '2rem 2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1.25rem' }}>
            <CategoryBadge cat={post.category} />
            <span style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>
              {post.readTime}
            </span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 30, fontWeight: 400, lineHeight: 1.2,
            color: 'var(--color-text-primary)', margin: '0 0 2rem',
            letterSpacing: '-0.02em',
          }}>{post.title}</h2>

          {post.body.map((paragraph, i) => (
            <p key={i} style={{
              fontSize: 17, lineHeight: 1.85,
              color: i === post.body.length - 1 ? 'var(--color-text-tertiary)' : 'var(--color-text-secondary)',
              fontStyle: i === post.body.length - 1 ? 'italic' : 'normal',
              marginBottom: i < post.body.length - 1 ? '1.5rem' : '2rem',
              fontFamily: 'var(--font-serif)',
            }}>
              {paragraph}
            </p>
          ))}

          <button
            onClick={onClose}
            style={{
              padding: '10px 22px', borderRadius: 8,
              fontSize: 13, cursor: 'pointer', fontWeight: 500,
              background: 'transparent',
              color: 'var(--color-text-secondary)',
              border: '0.5px solid var(--color-border-secondary)',
            }}
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}
