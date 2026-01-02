import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Category {
  id: string;
  title: string;
  image: string;
}

interface CategoryGridBlockProps {
  categories: Category[];
  onCategoryClick?: (categoryId: string) => void;
}

export function CategoryGridBlock({ categories, onCategoryClick }: CategoryGridBlockProps) {
  return (
    <div
      style={{
        padding: '80px var(--spacing-desktop)',
      }}
      className="category-desktop"
    >
      <h2
        style={{
          fontSize: 'var(--text-3xl)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-neutral-900)',
          marginBottom: '48px',
          textAlign: 'center',
          fontFamily: 'var(--font-family-heading)',
        }}
      >
        Shop by Category
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => onCategoryClick?.(category.id)}
            style={{
              position: 'relative',
              height: '400px',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            <ImageWithFallback
              src={category.image}
              alt={category.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                padding: '40px 24px 24px',
              }}
            >
              <h3
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'white',
                  fontFamily: 'var(--font-family-heading)',
                }}
              >
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CategoryGridBlockMobile({ categories, onCategoryClick }: CategoryGridBlockProps) {
  return (
    <div
      style={{
        padding: '48px var(--spacing-mobile)',
      }}
      className="category-mobile"
    >
      <h2
        style={{
          fontSize: 'var(--text-2xl)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-neutral-900)',
          marginBottom: '32px',
          textAlign: 'center',
          fontFamily: 'var(--font-family-heading)',
        }}
      >
        Shop by Category
      </h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => onCategoryClick?.(category.id)}
            style={{
              position: 'relative',
              height: '250px',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            <ImageWithFallback
              src={category.image}
              alt={category.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                padding: '32px 16px 16px',
              }}
            >
              <h3
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'white',
                  fontFamily: 'var(--font-family-heading)',
                }}
              >
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
