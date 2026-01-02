import React, { useState } from 'react';
import { ButtonPrimary } from './ui/button-primary';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import logo1VYU from './figma/1VYU_Sandwhich_logo.svg';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-neutral-200)',
        backgroundColor: 'white',
      }}
    >
      <div
        style={{
          padding: '64px var(--spacing-desktop)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
        }}
        className="footer-desktop"
      >
        {/* Brand Column */}
        <div>
          <img src={logo1VYU} alt="1VYU" style={{ height: '32px', marginBottom: '16px' }} />
          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--color-neutral-600)',
              lineHeight: '1.6',
              marginTop: '16px',
            }}
          >
            Premium interior & home design for modern living.
          </p>
        </div>

        {/* Shop Column */}
        <div>
          <h4
            style={{
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-neutral-900)',
              marginBottom: '16px',
              fontFamily: 'var(--font-family-heading)',
            }}
          >
            Shop
          </h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Living Room', 'Bedroom', 'Dining', 'Lighting', 'Accessories'].map((item) => (
              <button
                key={item}
                onClick={() => onNavigate?.(`/listing?category=${item.toLowerCase().replace(' ', '-')}`)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-neutral-600)',
                  fontFamily: 'var(--font-family-body)',
                  padding: 0,
                }}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* Company Column */}
        <div>
          <h4
            style={{
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-neutral-900)',
              marginBottom: '16px',
              fontFamily: 'var(--font-family-heading)',
            }}
          >
            Company
          </h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['About Us', 'Contact', 'Showrooms', 'Careers'].map((item) => (
              <button
                key={item}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-neutral-600)',
                  fontFamily: 'var(--font-family-body)',
                  padding: 0,
                }}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4
            style={{
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-neutral-900)',
              marginBottom: '16px',
              fontFamily: 'var(--font-family-heading)',
            }}
          >
            Newsletter
          </h4>
          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--color-neutral-600)',
              marginBottom: '16px',
              lineHeight: '1.6',
            }}
          >
            Subscribe for design inspiration and exclusive offers.
          </p>
          <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              style={{
                padding: '12px',
                border: '1px solid var(--color-neutral-300)',
                fontSize: 'var(--text-sm)',
                fontFamily: 'var(--font-family-body)',
                width: '100%',
              }}
            />
            <ButtonPrimary size="sm" type="submit">
              Subscribe
            </ButtonPrimary>
          </form>
        </div>
      </div>

      {/* Mobile Footer */}
      <div
        style={{
          padding: '48px var(--spacing-mobile)',
        }}
        className="footer-mobile"
      >
        <div style={{ marginBottom: '32px' }}>
          <img src={logo1VYU} alt="1VYU" style={{ height: '28px', marginBottom: '16px' }} />
          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--color-neutral-600)',
              lineHeight: '1.6',
            }}
          >
            Premium interior & home design for modern living.
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h4
            style={{
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-neutral-900)',
              marginBottom: '16px',
              fontFamily: 'var(--font-family-heading)',
            }}
          >
            Newsletter
          </h4>
          <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              style={{
                padding: '12px',
                border: '1px solid var(--color-neutral-300)',
                fontSize: 'var(--text-sm)',
                fontFamily: 'var(--font-family-body)',
                width: '100%',
              }}
            />
            <ButtonPrimary size="sm" type="submit" style={{ width: '100%' }}>
              Subscribe
            </ButtonPrimary>
          </form>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px' }}>
          <div>
            <h4
              style={{
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-neutral-900)',
                marginBottom: '16px',
                fontFamily: 'var(--font-family-heading)',
              }}
            >
              Shop
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Living Room', 'Bedroom', 'Dining', 'Lighting'].map((item) => (
                <button
                  key={item}
                  onClick={() => onNavigate?.(`/listing?category=${item.toLowerCase().replace(' ', '-')}`)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-neutral-600)',
                    fontFamily: 'var(--font-family-body)',
                    padding: 0,
                  }}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4
              style={{
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-neutral-900)',
                marginBottom: '16px',
                fontFamily: 'var(--font-family-heading)',
              }}
            >
              Company
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['About Us', 'Contact', 'Showrooms', 'Careers'].map((item) => (
                <button
                  key={item}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-neutral-600)',
                    fontFamily: 'var(--font-family-body)',
                    padding: 0,
                  }}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: '1px solid var(--color-neutral-200)',
          padding: '24px var(--spacing-desktop)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        className="footer-bottom-desktop"
      >
        <p
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--color-neutral-500)',
          }}
        >
          © 2026 1VYU. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <InstagramIcon sx={{ fontSize: 20, color: 'var(--color-neutral-600)' }} />
          </button>
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <FacebookIcon sx={{ fontSize: 20, color: 'var(--color-neutral-600)' }} />
          </button>
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <PinterestIcon sx={{ fontSize: 20, color: 'var(--color-neutral-600)' }} />
          </button>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid var(--color-neutral-200)',
          padding: '24px var(--spacing-mobile)',
        }}
        className="footer-bottom-mobile"
      >
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '16px' }}>
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <InstagramIcon sx={{ fontSize: 20, color: 'var(--color-neutral-600)' }} />
          </button>
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <FacebookIcon sx={{ fontSize: 20, color: 'var(--color-neutral-600)' }} />
          </button>
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <PinterestIcon sx={{ fontSize: 20, color: 'var(--color-neutral-600)' }} />
          </button>
        </div>
        <p
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--color-neutral-500)',
            textAlign: 'center',
          }}
        >
          © 2026 1VYU. All rights reserved.
        </p>
      </div>

      <style>
        {`
          @media (max-width: 767px) {
            .footer-desktop {
              display: none !important;
            }
            .footer-bottom-desktop {
              display: none !important;
            }
          }
          @media (min-width: 768px) {
            .footer-mobile {
              display: none !important;
            }
            .footer-bottom-mobile {
              display: none !important;
            }
          }
        `}
      </style>
    </footer>
  );
}
