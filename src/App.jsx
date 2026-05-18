import { useState } from 'react';
import { POSTS } from './data/posts';
import FeaturedPost from './components/FeaturedPost';
import PostModal from './components/PostModal';

export default function App() {
  const [selectedPost, setSelectedPost] = useState(null);
  const featured = POSTS.find(p => p.featured);

  return (
    <div style={{ fontFamily: 'var(--font-sans)', paddingBottom: '4rem' }}>
      <h1 className="sr-only">The AniVerse</h1>

      {/* Header */}
      <header style={{
        borderBottom: '0.5px solid var(--color-border-tertiary)',
        padding: '1.25rem 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: '2rem',
        background: 'var(--color-background-primary)',
        position: 'sticky', top: 0, zIndex: 10,
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 24, fontWeight: 400,
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.02em',
          }}>
            The AniVerse
          </div>
          <div style={{
            fontSize: 10, color: 'var(--color-text-tertiary)',
            letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2,
          }}>
            Essays & Ideas
          </div>
        </div>
      </header>

      <div style={{ padding: '0 2rem' }}>
        {featured && (
          <FeaturedPost post={featured} onClick={setSelectedPost} />
        )}
      </div>

      {selectedPost && (
        <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
}
