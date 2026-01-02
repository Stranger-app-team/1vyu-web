import React from 'react';

type ButtonSize = 'sm' | 'base' | 'lg';

interface ButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  isActive?: boolean;
  isHovered?: boolean;
  isLoading?: boolean;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  children: React.ReactNode;
}

export function ButtonPrimary({
  size = 'base',
  isActive = false,
  isHovered = false,
  isLoading = false,
  prefixIcon,
  suffixIcon,
  children,
  className = '',
  disabled,
  ...props
}: ButtonPrimaryProps) {
  const sizeStyles = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--text-sm)',
    },
    base: {
      padding: '12px 24px',
      fontSize: 'var(--text-base)',
    },
    lg: {
      padding: '16px 32px',
      fontSize: 'var(--text-lg)',
    },
  };

  const baseStyles: React.CSSProperties = {
    backgroundColor: 'var(--color-neutral-900)',
    color: 'var(--color-neutral-50)',
    cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
    opacity: disabled || isLoading ? 0.6 : 1,
    transition: 'background-color 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'var(--font-family-body)',
    fontWeight: 'var(--font-weight-medium)',
    ...sizeStyles[size],
  };

  const hoverStyles: React.CSSProperties = isHovered
    ? {
        backgroundColor: 'var(--color-neutral-800)',
      }
    : {};

  return (
    <button
      style={{ ...baseStyles, ...hoverStyles }}
      className={className}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite' }}>⏳</span>
      )}
      {prefixIcon && <span>{prefixIcon}</span>}
      {children}
      {suffixIcon && <span>{suffixIcon}</span>}
    </button>
  );
}
