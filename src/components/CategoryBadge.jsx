import { CATEGORY_COLORS } from '../data/posts';

export default function CategoryBadge({ cat }) {
  const c = CATEGORY_COLORS[cat] || { bg: '#f1efe8', text: '#5f5e5a' };
  return (
    <span style={{
      background: c.bg,
      color: c.text,
      fontSize: 10,
      fontWeight: 500,
      padding: '3px 10px',
      borderRadius: 20,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
    }}>
      {cat}
    </span>
  );
}
