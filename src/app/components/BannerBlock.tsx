import React from 'react';
import { ButtonPrimary } from './ui/button-primary';
import logo1VYU from './figma/1VYU_Sandwhich_logo.svg';

interface BannerBlockProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  onCtaClick?: () => void;
  showPattern?: boolean;
}

export function BannerBlock({ title, subtitle, ctaText, onCtaClick, showPattern = true }: BannerBlockProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-primary-200)',
        padding: '80px var(--spacing-desktop)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="banner-desktop"
    >
      {showPattern && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: '5%',
            transform: 'translateY(-50%)',
            opacity: 0.15,
          }}
        >
          <img src={logo1VYU} alt="" style={{ height: '200px', filter: 'grayscale(100%)' }} />
        </div>
      )}
      <div
        style={{
          maxWidth: '600px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: 'var(--text-4xl)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-neutral-900)',
            marginBottom: '16px',
            fontFamily: 'var(--font-family-heading)',
            lineHeight: '1.2',
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-neutral-700)',
              marginBottom: '32px',
              lineHeight: '1.6',
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
  );
}

export function BannerBlockMobile({ title, subtitle, ctaText, onCtaClick, showPattern = true }: BannerBlockProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-primary-200)',
        padding: '48px var(--spacing-mobile)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="banner-mobile"
    >
      {showPattern && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: '-20px',
            transform: 'translateY(-50%)',
            opacity: 0.15,
          }}
        >
          <img src={logo1VYU} alt="" style={{ height: '120px', filter: 'grayscale(100%)' }} />
        </div>
      )}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: 'var(--text-2xl)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-neutral-900)',
            marginBottom: '12px',
            fontFamily: 'var(--font-family-heading)',
            lineHeight: '1.2',
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              fontSize: 'var(--text-base)',
              color: 'var(--color-neutral-700)',
              marginBottom: '24px',
              lineHeight: '1.6',
            }}
          >
            {subtitle}
          </p>
        )}
        <ButtonPrimary size="base" onClick={onCtaClick} style={{ width: '100%' }}>
          {ctaText}
        </ButtonPrimary>
      </div>
    </div>
  );
}
