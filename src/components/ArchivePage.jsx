import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { POSTS, CATEGORIES } from '../data/posts';
import PostCard from './PostCard';
import Header from './Header';

export default function ArchivePage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? POSTS : POSTS.filter(p => p.category === activeCategory);

  return (
    <div style={{ fontFamily: 'var(--font-sans)', paddingBottom: '4rem' }}>
      <Header showBack />
      <div style={{ padding: '0 2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 400, color: 'var(--color-text-primary)', letterSpacing: '-0.02em', margin: '0 0 0.5rem' }}>All Essays</h1>
        <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>{POSTS.length} essays so far.</p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {['All', ...CATEGORIES].map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              padding: '7px 16px', borderRadius: 20, fontSize: 12, fontWeight: 500,
              letterSpacing: '0.04em', cursor: 'pointer',
              border: '0.5px solid var(--color-border-secondary)',
              background: activeCategory === cat ? 'var(--color-text-primary)' : 'transparent',
              color: activeCategory === cat ? 'var(--color-background-primary)' : 'var(--color-text-secondary)',
              transition: 'all 0.15s',
            }}>{cat}</button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {filtered.map(post => (
            <PostCard key={post.id} post={post} onClick={() => navigate(`/story/${post.slug}`)} />
          ))}
        </div>
      </div>
    </div>
  );
}
