import { useState } from 'react';
import CategoryBadge from './CategoryBadge';
import { Illustrations } from './Illustrations';

export default function FeaturedPost({ post, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(post)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        background: 'var(--color-background-primary)',
        border: '0.5px solid var(--color-border-tertiary)',
        borderRadius: 'var(--border-radius-lg)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s',
        boxShadow: hovered ? '0 4px 24px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <div style={{
        background: '#f5ede0',
        minHeight: 280,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transition: 'transform 0.3s',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
      }}>
        {Illustrations[post.image]}
      </div>

      <div style={{
        padding: '2.5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <CategoryBadge cat={post.category} />
          <span style={{ fontSize: 11, color: 'var(--color-text-tertiary)' }}>{post.readTime}</span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 24, fontWeight: 400, lineHeight: 1.3,
          color: 'var(--color-text-primary)',
          letterSpacing: '-0.01em',
          margin: 0,
        }}>{post.title}</h2>

        <p style={{
          fontSize: 14, lineHeight: 1.75,
          color: 'var(--color-text-secondary)',
          margin: 0,
        }}>{post.excerpt}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{
            fontSize: 12, color: 'var(--color-text-tertiary)',
            fontFamily: 'var(--font-sans)',
          }}>
            {post.author ? `By ${post.author}` : 'By Animesh Dwivedi'}
          </span>
          <span style={{
            fontSize: 13, color: '#c4603a',
            fontFamily: 'var(--font-serif)', fontStyle: 'italic',
          }}>
            Read essay →
          </span>
        </div>
      </div>
    </div>
  );
}
