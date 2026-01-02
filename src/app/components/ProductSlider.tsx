import React, { useRef } from 'react';
import { ProductCard } from './ProductCard';
import { ButtonTertiaryNeutral } from './ui/button-tertiary-neutral';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  badges?: Array<'new' | 'sale' | 'exclusive'>;
}

interface ProductSliderProps {
  products: Product[];
  title?: string;
  onProductClick?: (productId: string) => void;
}

export function ProductSlider({ products, title, onProductClick }: ProductSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {title && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
          }}
        >
          <h2
            style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-neutral-900)',
              fontFamily: 'var(--font-family-heading)',
            }}
          >
            {title}
          </h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <ButtonTertiaryNeutral size="sm" onClick={() => scroll('left')}>
              <ChevronLeftIcon sx={{ fontSize: 24, fontWeight: 200 }} />
            </ButtonTertiaryNeutral>
            <ButtonTertiaryNeutral size="sm" onClick={() => scroll('right')}>
              <ChevronRightIcon sx={{ fontSize: 24, fontWeight: 200 }} />
            </ButtonTertiaryNeutral>
          </div>
        </div>
      )}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        className="hide-scrollbar"
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              minWidth: '240px',
              maxWidth: '320px',
              flex: '0 0 auto',
            }}
          >
            <ProductCard
              {...product}
              onClick={() => onProductClick?.(product.id)}
            />
          </div>
        ))}
      </div>
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
}
