import React from 'react';
import { ProductBadge } from './ProductBadge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  badges?: Array<'new' | 'sale' | 'exclusive'>;
  onClick?: () => void;
}

export function ProductCard({
  image,
  title,
  price,
  originalPrice,
  badges = [],
  onClick,
}: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1 / 1',
          overflow: 'hidden',
          backgroundColor: 'var(--color-neutral-100)',
        }}
      >
        <ImageWithFallback
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {badges.length > 0 && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              display: 'flex',
              gap: '8px',
            }}
          >
            {badges.map((badge, index) => (
              <ProductBadge key={index} type={badge} />
            ))}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h3
          style={{
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-neutral-900)',
            fontFamily: 'var(--font-family-heading)',
          }}
        >
          {title}
        </h3>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span
            style={{
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-neutral-900)',
            }}
          >
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-normal)',
                color: 'var(--color-neutral-500)',
                textDecoration: 'line-through',
              }}
            >
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
