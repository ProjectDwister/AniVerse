import { useEffect } from 'react';

const SITE_URL = 'https://projectdwister.github.io/AniVerse/';

export default function Seo({ title, description, path = '' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — The AniVerse` : 'The AniVerse — Essays & Ideas';
    const desc = description || 'Writings by Animesh — sometimes philosophical, but mostly absurd.';
    const url = `${SITE_URL}#${path}`;
    const prevTitle = document.title;
    document.title = fullTitle;
    const tags = [
      ['meta[name="description"]', desc],
      ['meta[property="og:title"]', fullTitle],
      ['meta[property="og:description"]', desc],
      ['meta[property="og:url"]', url],
      ['meta[name="twitter:title"]', fullTitle],
      ['meta[name="twitter:description"]', desc],
    ];
    const previous = [];
    tags.forEach(([selector, value]) => {
      const el = document.querySelector(selector);
      if (el) { previous.push([el, el.getAttribute('content')]); el.setAttribute('content', value); }
    });
    return () => {
      document.title = prevTitle;
      previous.forEach(([el, value]) => el.setAttribute('content', value));
    };
  }, [title, description, path]);
  return null;
}
