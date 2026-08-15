import { useState } from 'react';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw6TvQiyU1qG4l4txf0QKVvA0zmQCiRcU0pnHwGLJ7SIv6plkqkz-s6ZyJB48R6gLgXVQ/exec';

export default function SubscribeSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  async function handleSubmit() {
    if (!name.trim() || !email.trim()) return;
    setStatus('loading');
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      setStatus('success');
      setName('');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section style={{
      margin: '3rem 0 0',
      padding: '2.5rem 2rem',
      background: 'var(--color-background-primary)',
      border: '0.5px solid var(--color-border-tertiary)',
      borderRadius: 'var(--border-radius-lg)',
    }}>
      {/* Envelope icon */}
      <div style={{ marginBottom: '1rem', opacity: 0.4, fontSize: 28, lineHeight: 1 }}>✉</div>

      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 22, fontWeight: 400,
        color: 'var(--color-text-primary)',
        letterSpacing: '-0.01em',
        marginBottom: '0.5rem',
      }}>
        Get new essays in your inbox
      </h2>

      <p style={{
        fontSize: 13, lineHeight: 1.7,
        color: 'var(--color-text-secondary)',
        marginBottom: '1.75rem',
        maxWidth: 420,
      }}>
        When a new story is published, you'll get an email with a direct link. No newsletters, no noise — just the essay.
      </p>

      {status === 'success' ? (
        <div style={{
          padding: '1rem 1.25rem',
          borderRadius: 8,
          background: '#f0faf4',
          border: '0.5px solid #b6dfc8',
          fontSize: 14,
          color: '#2d6a4a',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
        }}>
          You're in. A confirmation is on its way to your inbox.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: 420 }}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            style={inputStyle}
          />
          <button
            onClick={handleSubmit}
            disabled={status === 'loading' || !name.trim() || !email.trim()}
            style={{
              padding: '11px 20px',
              borderRadius: 8,
              fontSize: 13, fontWeight: 500,
              cursor: (status === 'loading' || !name.trim() || !email.trim()) ? 'not-allowed' : 'pointer',
              background: '#c4603a',
              color: '#fff',
              border: 'none',
              opacity: (status === 'loading' || !name.trim() || !email.trim()) ? 0.55 : 1,
              transition: 'opacity 0.15s',
              alignSelf: 'flex-start',
            }}
          >
            {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
          </button>
          {status === 'error' && (
            <p style={{ fontSize: 12, color: '#c4603a', marginTop: 4 }}>
              Something went wrong. Please try again or email directly.
            </p>
          )}
        </div>
      )}
    </section>
  );
}

const inputStyle = {
  padding: '10px 14px',
  borderRadius: 8,
  fontSize: 14,
  background: 'var(--color-background-secondary)',
  color: 'var(--color-text-primary)',
  border: '0.5px solid var(--color-border-secondary)',
  outline: 'none',
  width: '100%',
};
