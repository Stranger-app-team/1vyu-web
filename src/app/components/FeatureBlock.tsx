import React from 'react';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureBlock() {
  const features: Feature[] = [
    {
      icon: <LocalShippingOutlinedIcon sx={{ fontSize: 48, fontWeight: 200 }} />,
      title: 'Free Shipping',
      description: 'On all orders over $500',
    },
    {
      icon: <SecurityOutlinedIcon sx={{ fontSize: 48, fontWeight: 200 }} />,
      title: 'Secure Payment',
      description: 'Safe & secure checkout',
    },
    {
      icon: <SupportAgentOutlinedIcon sx={{ fontSize: 48, fontWeight: 200 }} />,
      title: '24/7 Support',
      description: 'Dedicated customer service',
    },
    {
      icon: <AutorenewOutlinedIcon sx={{ fontSize: 48, fontWeight: 200 }} />,
      title: 'Easy Returns',
      description: '30-day return policy',
    },
  ];

  return (
    <div
      style={{
        padding: '80px var(--spacing-desktop)',
      }}
      className="feature-desktop"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '48px',
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                color: 'var(--color-neutral-900)',
                marginBottom: '16px',
              }}
            >
              {feature.icon}
            </div>
            <h3
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-neutral-900)',
                marginBottom: '8px',
                fontFamily: 'var(--font-family-heading)',
              }}
            >
              {feature.title}
            </h3>
            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-neutral-600)',
                lineHeight: '1.6',
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeatureBlockMobile() {
  const features: Feature[] = [
    {
      icon: <LocalShippingOutlinedIcon sx={{ fontSize: 40, fontWeight: 200 }} />,
      title: 'Free Shipping',
      description: 'On all orders over $500',
    },
    {
      icon: <SecurityOutlinedIcon sx={{ fontSize: 40, fontWeight: 200 }} />,
      title: 'Secure Payment',
      description: 'Safe & secure checkout',
    },
    {
      icon: <SupportAgentOutlinedIcon sx={{ fontSize: 40, fontWeight: 200 }} />,
      title: '24/7 Support',
      description: 'Dedicated customer service',
    },
    {
      icon: <AutorenewOutlinedIcon sx={{ fontSize: 40, fontWeight: 200 }} />,
      title: 'Easy Returns',
      description: '30-day return policy',
    },
  ];

  return (
    <div
      style={{
        padding: '48px var(--spacing-mobile)',
      }}
      className="feature-mobile"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                color: 'var(--color-neutral-900)',
                marginBottom: '12px',
              }}
            >
              {feature.icon}
            </div>
            <h3
              style={{
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-neutral-900)',
                marginBottom: '4px',
                fontFamily: 'var(--font-family-heading)',
              }}
            >
              {feature.title}
            </h3>
            <p
              style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--color-neutral-600)',
                lineHeight: '1.5',
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
