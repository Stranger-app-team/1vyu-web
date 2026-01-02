import React from 'react';

interface ProductBadgeProps {
  type: 'new' | 'sale' | 'exclusive';
  text?: string;
}

export function ProductBadge({ type, text }: ProductBadgeProps) {
  const badges = {
    new: {
      bg: 'var(--color-neutral-900)',
      color: 'var(--color-neutral-50)',
      label: text || 'New',
    },
    sale: {
      bg: 'var(--color-primary-500)',
      color: 'var(--color-neutral-50)',
      label: text || 'Sale',
    },
    exclusive: {
      bg: 'var(--color-primary-200)',
      color: 'var(--color-neutral-900)',
      label: text || 'Exclusive',
    },
  };

  const badge = badges[type];

  return (
    <span
      style={{
        backgroundColor: badge.bg,
        color: badge.color,
        padding: '4px 12px',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--font-weight-medium)',
        fontFamily: 'var(--font-family-body)',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
      }}
    >
      {badge.label}
    </span>
  );
}
