import React from 'react';
import { ButtonPrimary } from './ui/button-primary';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroBlockProps {
  image: string;
  title: string;
  subtitle?: string;
  ctaText: string;
  onCtaClick?: () => void;
}

export function HeroBlock({ image, title, subtitle, ctaText, onCtaClick }: HeroBlockProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '600px',
        overflow: 'hidden',
      }}
      className="hero-desktop"
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
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            color: 'white',
            maxWidth: '800px',
            padding: '0 var(--spacing-desktop)',
          }}
        >
          <h1
            style={{
              fontSize: 'var(--text-5xl)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '16px',
              fontFamily: 'var(--font-family-heading)',
              lineHeight: '1.2',
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                fontSize: 'var(--text-xl)',
                marginBottom: '32px',
                fontWeight: 'var(--font-weight-normal)',
              }}
            >
              {subtitle}
            </p>
          )}
          <ButtonPrimary size="lg" onClick={onCtaClick}>
            {ctaText}
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
}

export function HeroBlockMobile({ image, title, subtitle, ctaText, onCtaClick }: HeroBlockProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        overflow: 'hidden',
      }}
      className="hero-mobile"
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
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            color: 'white',
            padding: '0 var(--spacing-mobile)',
          }}
        >
          <h1
            style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '12px',
              fontFamily: 'var(--font-family-heading)',
              lineHeight: '1.2',
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                fontSize: 'var(--text-base)',
                marginBottom: '24px',
                fontWeight: 'var(--font-weight-normal)',
              }}
            >
              {subtitle}
            </p>
          )}
          <ButtonPrimary size="base" onClick={onCtaClick}>
            {ctaText}
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
}
