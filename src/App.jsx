import { useNavigate } from 'react-router-dom';
import { POSTS } from './data/posts';
import FeaturedPost from './components/FeaturedPost';
import SubscribeSection from './components/SubscribeSection';
import Header from './components/Header';
import Seo from './components/Seo';

export default function App() {
  const navigate = useNavigate();
  const featuredPosts = POSTS.filter(p => p.featured);

  return (
    <div style={{ fontFamily: 'var(--font-sans)', paddingBottom: '4rem' }}>
      <Seo path="/" />
      <h1 className="sr-only">The AniVerse</h1>
      <Header />
      <div style={{ padding: '0 2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {featuredPosts.map(post => (
          <FeaturedPost key={post.id} post={post} onClick={() => navigate(`/story/${post.slug}`)} />
        ))}
        <SubscribeSection />
      </div>
    </div>
  );
}
