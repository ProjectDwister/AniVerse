import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

export default function Header({ showBack = false }) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={{
      borderBottom: '0.5px solid var(--color-border-tertiary)',
      padding: '1.25rem 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      marginBottom: '2rem',
      background: 'var(--color-background-primary)',
      position: 'sticky', top: 0, zIndex: 10,
    }}>
      <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <div style={{
          fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 400,
          color: 'var(--color-text-primary)', letterSpacing: '-0.02em',
        }}>The AniVerse</div>
        <div style={{
          fontSize: 10, color: 'var(--color-text-tertiary)',
          letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2,
        }}>Essays & Ideas</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button onClick={() => navigate('/essays')} style={navButtonStyle}>All Essays</button>
        {showBack && <button onClick={() => navigate('/')} style={navButtonStyle}>← Home</button>}
        <button onClick={toggleTheme} aria-label="Toggle dark mode"
          style={{ ...navButtonStyle, width: 36, height: 36, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </div>
    </header>
  );
}

const navButtonStyle = {
  padding: '8px 14px', borderRadius: 8, fontSize: 12, fontWeight: 500,
  cursor: 'pointer', background: 'transparent',
  color: 'var(--color-text-secondary)', border: '0.5px solid var(--color-border-secondary)',
};
