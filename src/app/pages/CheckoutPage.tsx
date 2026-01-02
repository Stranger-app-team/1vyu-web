import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ButtonPrimary } from '../components/ui/button-primary';
import { mockProducts } from '../utils/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

import logo1VYU from '../components/figma/1VYU_Sandwhich_logo.svg';

interface CheckoutPageProps {
  onNavigate: (path: string) => void;
}

export function CheckoutPage({ onNavigate }: CheckoutPageProps) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
  });

  // Mock cart items
  const cartItems = [
    { ...mockProducts[0], quantity: 1 },
    { ...mockProducts[2], quantity: 2 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
    alert('Order placed successfully!');
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    border: '1px solid var(--color-neutral-300)',
    fontSize: 'var(--text-base)',
    fontFamily: 'var(--font-family-body)',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--font-weight-medium)',
    marginBottom: '8px',
    color: 'var(--color-neutral-900)',
  };

  return (
    <div>
      <Header onNavigate={onNavigate} cartCount={cartItems.length} />

      {/* Checkout Header */}
      <div
        style={{
          borderBottom: '1px solid var(--color-neutral-200)',
          padding: '24px var(--spacing-desktop)',
          textAlign: 'center',
        }}
        className="checkout-header-desktop"
      >
        <img src={logo1VYU} alt="1VYU" style={{ height: '40px', margin: '0 auto' }} />
      </div>

      <div
        style={{
          borderBottom: '1px solid var(--color-neutral-200)',
          padding: '20px var(--spacing-mobile)',
          textAlign: 'center',
        }}
        className="checkout-header-mobile"
      >
        <img src={logo1VYU} alt="1VYU" style={{ height: '32px', margin: '0 auto' }} />
      </div>

      {/* Desktop Checkout Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 480px',
          minHeight: 'calc(100vh - 200px)',
        }}
        className="checkout-desktop"
      >
        {/* Left: Form */}
        <div style={{ padding: '48px var(--spacing-desktop)' }}>
          <form onSubmit={handleSubmit}>
            {/* Contact Information */}
            <div style={{ marginBottom: '40px' }}>
              <h2
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: '24px',
                  fontFamily: 'var(--font-family-heading)',
                }}
              >
                Contact Information
              </h2>
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  style={inputStyle}
                  required
                />
              </div>
            </div>

            {/* Shipping Information */}
            <div style={{ marginBottom: '40px' }}>
              <h2
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: '24px',
                  fontFamily: 'var(--font-family-heading)',
                }}
              >
                Shipping Information
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={labelStyle}>First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    style={inputStyle}
                    required
                  />
                </div>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  style={inputStyle}
                  required
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>State</label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>ZIP Code</label>
                  <input
                    type="text"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    style={inputStyle}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div style={{ marginBottom: '40px' }}>
              <h2
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: '24px',
                  fontFamily: 'var(--font-family-heading)',
                }}
              >
                Payment Details
              </h2>
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Cardholder Name</label>
                <input
                  type="text"
                  value={formData.cardName}
                  onChange={(e) => handleInputChange('cardName', e.target.value)}
                  style={inputStyle}
                  required
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Card Number</label>
                <input
                  type="text"
                  value={formData.cardNumber}
                  onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  style={inputStyle}
                  required
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>Expiry Date</label>
                  <input
                    type="text"
                    value={formData.expiryDate}
                    onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                    placeholder="MM/YY"
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>CVV</label>
                  <input
                    type="text"
                    value={formData.cvv}
                    onChange={(e) => handleInputChange('cvv', e.target.value)}
                    placeholder="123"
                    style={inputStyle}
                    required
                  />
                </div>
              </div>
            </div>

            <ButtonPrimary size="lg" type="submit" style={{ width: '100%' }}>
              Complete Order
            </ButtonPrimary>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div
          style={{
            backgroundColor: 'var(--color-neutral-50)',
            padding: '48px 40px',
            borderLeft: '1px solid var(--color-neutral-200)',
          }}
        >
          <h2
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '24px',
              fontFamily: 'var(--font-family-heading)',
            }}
          >
            Order Summary
          </h2>

          {/* Cart Items */}
          <div style={{ marginBottom: '24px' }}>
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '16px',
                  marginBottom: '20px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid var(--color-neutral-200)',
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'var(--color-neutral-100)',
                    flexShrink: 0,
                  }}
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      marginBottom: '4px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-neutral-600)',
                      marginBottom: '8px',
                    }}
                  >
                    Quantity: {item.quantity}
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                    }}
                  >
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Summary */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-600)' }}>Subtotal</span>
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-600)' }}>Shipping</span>
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-600)' }}>Tax</span>
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                ${tax.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Total */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '16px',
              borderTop: '2px solid var(--color-neutral-900)',
            }}
          >
            <span
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                fontFamily: 'var(--font-family-heading)',
              }}
            >
              Total
            </span>
            <span
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                fontFamily: 'var(--font-family-heading)',
              }}
            >
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Checkout Layout */}
      <div style={{ padding: '24px var(--spacing-mobile)' }} className="checkout-mobile">
        {/* Order Summary First on Mobile */}
        <div style={{ marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: 'var(--text-lg)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '20px',
              fontFamily: 'var(--font-family-heading)',
            }}
          >
            Order Summary
          </h2>

          {/* Cart Items */}
          <div style={{ marginBottom: '20px' }}>
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '12px',
                  marginBottom: '16px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--color-neutral-200)',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'var(--color-neutral-100)',
                    flexShrink: 0,
                  }}
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      marginBottom: '4px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-neutral-600)',
                      marginBottom: '6px',
                    }}
                  >
                    Quantity: {item.quantity}
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                    }}
                  >
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Summary */}
          <div
            style={{
              backgroundColor: 'var(--color-neutral-50)',
              padding: '16px',
              marginBottom: '24px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-600)' }}>Subtotal</span>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-600)' }}>Shipping</span>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-600)' }}>Tax</span>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                  ${tax.toFixed(2)}
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '12px',
                borderTop: '2px solid var(--color-neutral-900)',
              }}
            >
              <span
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  fontFamily: 'var(--font-family-heading)',
                }}
              >
                Total
              </span>
              <span
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  fontFamily: 'var(--font-family-heading)',
                }}
              >
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Contact Information */}
          <div style={{ marginBottom: '32px' }}>
            <h2
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: '16px',
                fontFamily: 'var(--font-family-heading)',
              }}
            >
              Contact Information
            </h2>
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                style={inputStyle}
                required
              />
            </div>
          </div>

          {/* Shipping Information */}
          <div style={{ marginBottom: '32px' }}>
            <h2
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: '16px',
                fontFamily: 'var(--font-family-heading)',
              }}
            >
              Shipping Information
            </h2>
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>First Name</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                style={inputStyle}
                required
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Last Name</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                style={inputStyle}
                required
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                style={inputStyle}
                required
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>City</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                style={inputStyle}
                required
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={labelStyle}>State</label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  style={inputStyle}
                  required
                />
              </div>
              <div>
                <label style={labelStyle}>ZIP Code</label>
                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange('zipCode', e.target.value)}
                  style={inputStyle}
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div style={{ marginBottom: '32px' }}>
            <h2
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: '16px',
                fontFamily: 'var(--font-family-heading)',
              }}
            >
              Payment Details
            </h2>
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Cardholder Name</label>
              <input
                type="text"
                value={formData.cardName}
                onChange={(e) => handleInputChange('cardName', e.target.value)}
                style={inputStyle}
                required
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Card Number</label>
              <input
                type="text"
                value={formData.cardNumber}
                onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                placeholder="1234 5678 9012 3456"
                style={inputStyle}
                required
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Expiry Date</label>
                <input
                  type="text"
                  value={formData.expiryDate}
                  onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                  placeholder="MM/YY"
                  style={inputStyle}
                  required
                />
              </div>
              <div>
                <label style={labelStyle}>CVV</label>
                <input
                  type="text"
                  value={formData.cvv}
                  onChange={(e) => handleInputChange('cvv', e.target.value)}
                  placeholder="123"
                  style={inputStyle}
                  required
                />
              </div>
            </div>
          </div>

          <ButtonPrimary size="base" type="submit" style={{ width: '100%' }}>
            Complete Order
          </ButtonPrimary>
        </form>
      </div>

      <Footer onNavigate={onNavigate} />

      <style>
        {`
          @media (max-width: 767px) {
            .checkout-desktop,
            .checkout-header-desktop {
              display: none !important;
            }
          }
          @media (min-width: 768px) {
            .checkout-mobile,
            .checkout-header-mobile {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
}
