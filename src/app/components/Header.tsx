import React, { useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo1VYU from './figma/1VYU_Sandwhich_logo.svg';

interface HeaderProps {
  onNavigate?: (path: string) => void;
  cartCount?: number;
}

export function Header({ onNavigate, cartCount = 0 }: HeaderProps) {
  const [activeMegamenu, setActiveMegamenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    {
      label: 'Living Room',
      path: '/listing?category=living-room',
      megamenu: [
        { label: 'Sofas', path: '/listing?category=sofas' },
        { label: 'Armchairs', path: '/listing?category=armchairs' },
        { label: 'Coffee Tables', path: '/listing?category=coffee-tables' },
        { label: 'Side Tables', path: '/listing?category=side-tables' },
      ],
    },
    {
      label: 'Bedroom',
      path: '/listing?category=bedroom',
      megamenu: [
        { label: 'Beds', path: '/listing?category=beds' },
        { label: 'Nightstands', path: '/listing?category=nightstands' },
        { label: 'Dressers', path: '/listing?category=dressers' },
        { label: 'Wardrobes', path: '/listing?category=wardrobes' },
      ],
    },
    {
      label: 'Dining',
      path: '/listing?category=dining',
      megamenu: [
        { label: 'Dining Tables', path: '/listing?category=dining-tables' },
        { label: 'Dining Chairs', path: '/listing?category=dining-chairs' },
        { label: 'Bar Stools', path: '/listing?category=bar-stools' },
        { label: 'Sideboards', path: '/listing?category=sideboards' },
      ],
    },
    {
      label: 'Lighting',
      path: '/listing?category=lighting',
      megamenu: [
        { label: 'Pendant Lights', path: '/listing?category=pendant-lights' },
        { label: 'Floor Lamps', path: '/listing?category=floor-lamps' },
        { label: 'Table Lamps', path: '/listing?category=table-lamps' },
        { label: 'Wall Lights', path: '/listing?category=wall-lights' },
      ],
    },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header
        style={{
          borderBottom: '1px solid var(--color-neutral-200)',
          backgroundColor: 'white',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            padding: '20px var(--spacing-desktop)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          className="desktop-header"
        >
          {/* Logo */}
          <div
            onClick={() => onNavigate?.('/')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <img src={logo1VYU} alt="1VYU" style={{ height: '32px' }} />
          </div>

          {/* Navigation */}
          <nav style={{ display: 'flex', gap: '32px' }}>
            {navigation.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => setActiveMegamenu(item.label)}
                onMouseLeave={() => setActiveMegamenu(null)}
                style={{ position: 'relative' }}
              >
                <button
                  onClick={() => onNavigate?.(item.path)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-normal)',
                    color: 'var(--color-neutral-900)',
                    fontFamily: 'var(--font-family-body)',
                    padding: '8px 0',
                  }}
                >
                  {item.label}
                </button>
                {activeMegamenu === item.label && item.megamenu && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      backgroundColor: 'white',
                      padding: '24px',
                      minWidth: '200px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      marginTop: '8px',
                    }}
                  >
                    {item.megamenu.map((subItem) => (
                      <button
                        key={subItem.label}
                        onClick={() => {
                          onNavigate?.(subItem.path);
                          setActiveMegamenu(null);
                        }}
                        style={{
                          display: 'block',
                          width: '100%',
                          textAlign: 'left',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '12px 0',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-normal)',
                          color: 'var(--color-neutral-700)',
                          fontFamily: 'var(--font-family-body)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--color-neutral-900)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--color-neutral-700)';
                        }}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Icons */}
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <button
              onClick={() => onNavigate?.('/checkout')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <ShoppingCartOutlinedIcon
                sx={{ fontSize: 24, fontWeight: 200, color: 'var(--color-neutral-900)' }}
              />
              {cartCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-8px',
                    backgroundColor: 'var(--color-neutral-900)',
                    color: 'white',
                    fontSize: 'var(--text-xs)',
                    padding: '2px 6px',
                    minWidth: '18px',
                    textAlign: 'center',
                  }}
                >
                  {cartCount}
                </span>
              )}
            </button>
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <PersonOutlineIcon
                sx={{ fontSize: 24, fontWeight: 200, color: 'var(--color-neutral-900)' }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Header */}
        <div
          style={{
            padding: '16px var(--spacing-mobile)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          className="mobile-header"
        >
          <button
            onClick={() => setMobileMenuOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <MenuIcon sx={{ fontSize: 28, fontWeight: 200 }} />
          </button>
          <div onClick={() => onNavigate?.('/')} style={{ cursor: 'pointer' }}>
            <img src={logo1VYU} alt="1VYU" style={{ height: '28px' }} />
          </div>
          <button
            onClick={() => onNavigate?.('/checkout')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <ShoppingCartOutlinedIcon sx={{ fontSize: 24, fontWeight: 200 }} />
            {cartCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-8px',
                  backgroundColor: 'var(--color-neutral-900)',
                  color: 'white',
                  fontSize: 'var(--text-xs)',
                  padding: '2px 6px',
                  minWidth: '18px',
                  textAlign: 'center',
                }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            zIndex: 2000,
            overflowY: 'auto',
          }}
        >
          <div
            style={{
              padding: '16px',
              borderBottom: '1px solid var(--color-neutral-200)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <img src={logo1VYU} alt="1VYU" style={{ height: '28px' }} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <CloseIcon sx={{ fontSize: 28, fontWeight: 200 }} />
            </button>
          </div>
          <nav style={{ padding: '24px 16px' }}>
            {navigation.map((item) => (
              <div key={item.label} style={{ marginBottom: '24px' }}>
                <button
                  onClick={() => {
                    onNavigate?.(item.path);
                    setMobileMenuOpen(false);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-neutral-900)',
                    fontFamily: 'var(--font-family-heading)',
                    marginBottom: '12px',
                    display: 'block',
                  }}
                >
                  {item.label}
                </button>
                {item.megamenu && (
                  <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {item.megamenu.map((subItem) => (
                      <button
                        key={subItem.label}
                        onClick={() => {
                          onNavigate?.(subItem.path);
                          setMobileMenuOpen(false);
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-normal)',
                          color: 'var(--color-neutral-700)',
                          fontFamily: 'var(--font-family-body)',
                          padding: '8px 0',
                        }}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}

      <style>
        {`
          @media (max-width: 767px) {
            .desktop-header {
              display: none !important;
            }
          }
          @media (min-width: 768px) {
            .mobile-header {
              display: none !important;
            }
          }
        `}
      </style>
    </>
  );
}
