import { useState } from 'react';
import CategoryBadge from './CategoryBadge';
import { Illustrations } from './Illustrations';

export default function PostCard({ post, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(post)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--color-background-primary)',
        border: '0.5px solid var(--color-border-tertiary)',
        borderRadius: 'var(--border-radius-lg)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? '0 8px 28px rgba(0,0,0,0.08)' : 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{
        background: '#f5ede0',
        height: 155,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {Illustrations[post.image]}
      </div>

      <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '0.6rem' }}>
          <CategoryBadge cat={post.category} />
        </div>

        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 16, fontWeight: 400, lineHeight: 1.35,
          color: 'var(--color-text-primary)', margin: '0 0 0.5rem',
          letterSpacing: '-0.01em',
        }}>{post.title}</h3>

        <p style={{
          fontSize: 13, lineHeight: 1.65,
          color: 'var(--color-text-secondary)',
          margin: '0 0 auto',
          paddingBottom: '0.75rem',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
        }}>{post.excerpt}</p>

        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: '0.75rem',
          borderTop: '0.5px solid var(--color-border-tertiary)',
        }}>
          <span style={{ fontSize: 11, color: 'var(--color-text-tertiary)' }}>{post.author}</span>
          <span style={{ fontSize: 11, color: 'var(--color-text-tertiary)' }}>{post.readTime}</span>
        </div>
      </div>
    </div>
  );
}
