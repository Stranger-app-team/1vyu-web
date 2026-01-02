import React, { useState, useRef, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ButtonPrimary } from '../components/ui/button-primary';
import { ButtonTertiaryNeutral } from '../components/ui/button-tertiary-neutral';
import { ProductSlider } from '../components/ProductSlider';
import { mockProducts } from '../utils/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

interface ProductPageProps {
  onNavigate: (path: string) => void;
  productId?: string;
}

export function ProductPage({ onNavigate, productId = '1' }: ProductPageProps) {
  const product = mockProducts.find((p) => p.id === productId) || mockProducts[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'shipping' | 'reviews'>('details');
  const tabsRef = useRef<HTMLDivElement>(null);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(false);

  // Mock product images (using same image multiple times for demo)
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  const recommendedProducts = mockProducts.filter((p) => p.id !== product.id).slice(0, 6);

  const tabs = [
    { id: 'details' as const, label: 'Details', icon: <InfoOutlinedIcon sx={{ fontSize: 20, fontWeight: 200 }} /> },
    { id: 'shipping' as const, label: 'Shipping', icon: <LocalShippingOutlinedIcon sx={{ fontSize: 20, fontWeight: 200 }} /> },
    { id: 'reviews' as const, label: 'Reviews', icon: <StarOutlineIcon sx={{ fontSize: 20, fontWeight: 200 }} /> },
  ];

  useEffect(() => {
    const checkScroll = () => {
      if (tabsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
        setShowLeftChevron(scrollLeft > 0);
        setShowRightChevron(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    checkScroll();
    const ref = tabsRef.current;
    ref?.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      ref?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const scrollAmount = 100;
      tabsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <Header onNavigate={onNavigate} cartCount={3} />

      {/* Breadcrumbs */}
      <div
        style={{
          padding: '24px var(--spacing-desktop)',
          borderBottom: '1px solid var(--color-neutral-200)',
        }}
        className="breadcrumbs-desktop"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => onNavigate('/')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: 'var(--color-neutral-600)',
              fontSize: 'var(--text-sm)',
            }}
          >
            <HomeIcon sx={{ fontSize: 16 }} />
            Home
          </button>
          <ChevronRightIcon sx={{ fontSize: 16, color: 'var(--color-neutral-400)' }} />
          <button
            onClick={() => onNavigate('/listing')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-neutral-600)',
              fontSize: 'var(--text-sm)',
            }}
          >
            Products
          </button>
          <ChevronRightIcon sx={{ fontSize: 16, color: 'var(--color-neutral-400)' }} />
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-900)' }}>
            {product.title}
          </span>
        </div>
      </div>

      {/* Desktop Product Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          padding: '48px var(--spacing-desktop)',
        }}
        className="product-desktop"
      >
        {/* Left: Image Gallery */}
        <div>
          <div
            style={{
              aspectRatio: '1 / 1',
              backgroundColor: 'var(--color-neutral-100)',
              marginBottom: '16px',
            }}
          >
            <ImageWithFallback
              src={productImages[selectedImage]}
              alt={product.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            {productImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                style={{
                  width: '80px',
                  height: '80px',
                  border: selectedImage === index ? '2px solid var(--color-neutral-900)' : '1px solid var(--color-neutral-300)',
                  padding: 0,
                  cursor: 'pointer',
                  backgroundColor: 'var(--color-neutral-100)',
                }}
              >
                <ImageWithFallback
                  src={img}
                  alt={`${product.title} ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div>
          <h1
            style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '16px',
              fontFamily: 'var(--font-family-heading)',
            }}
          >
            {product.title}
          </h1>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '32px' }}>
            <span
              style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-neutral-900)',
              }}
            >
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-normal)',
                  color: 'var(--color-neutral-500)',
                  textDecoration: 'line-through',
                }}
              >
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p
            style={{
              fontSize: 'var(--text-base)',
              color: 'var(--color-neutral-700)',
              lineHeight: '1.6',
              marginBottom: '32px',
            }}
          >
            {product.description}
          </p>

          {/* Quantity Selector */}
          <div style={{ marginBottom: '24px' }}>
            <label
              style={{
                display: 'block',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: '8px',
              }}
            >
              Quantity
            </label>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid var(--color-neutral-300)',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  fontSize: 'var(--text-lg)',
                }}
              >
                −
              </button>
              <span
                style={{
                  width: '60px',
                  height: '40px',
                  border: '1px solid var(--color-neutral-300)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--text-base)',
                }}
              >
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid var(--color-neutral-300)',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  fontSize: 'var(--text-lg)',
                }}
              >
                +
              </button>
            </div>
          </div>

          <ButtonPrimary
            size="lg"
            onClick={() => {
              console.log('Add to cart:', product.id, quantity);
              onNavigate('/checkout');
            }}
            style={{ width: '100%' }}
          >
            Add to Cart
          </ButtonPrimary>

          {/* Product Specifications */}
          <div style={{ marginTop: '48px', borderTop: '1px solid var(--color-neutral-200)', paddingTop: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-600)' }}>Material</span>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>{product.material}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-600)' }}>Color</span>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>{product.color}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-600)' }}>Dimensions</span>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>{product.dimensions}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Product Layout */}
      <div style={{ paddingBottom: '24px' }} className="product-mobile">
        {/* Image Gallery */}
        <div style={{ position: 'relative', marginBottom: '24px' }}>
          <div
            style={{
              aspectRatio: '1 / 1',
              backgroundColor: 'var(--color-neutral-100)',
            }}
          >
            <ImageWithFallback
              src={productImages[selectedImage]}
              alt={product.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <button
            onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
            disabled={selectedImage === 0}
            style={{
              position: 'absolute',
              left: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              opacity: selectedImage === 0 ? 0.3 : 1,
            }}
          >
            <ChevronLeftIcon sx={{ fontSize: 24 }} />
          </button>
          <button
            onClick={() => setSelectedImage(Math.min(productImages.length - 1, selectedImage + 1))}
            disabled={selectedImage === productImages.length - 1}
            style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              opacity: selectedImage === productImages.length - 1 ? 0.3 : 1,
            }}
          >
            <ChevronRightIcon sx={{ fontSize: 24 }} />
          </button>
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '8px',
            }}
          >
            {productImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: selectedImage === index ? 'var(--color-neutral-900)' : 'rgba(255, 255, 255, 0.7)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        <div style={{ padding: '0 var(--spacing-mobile)' }}>
          <h1
            style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '12px',
              fontFamily: 'var(--font-family-heading)',
            }}
          >
            {product.title}
          </h1>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
            <span
              style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-neutral-900)',
              }}
            >
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-normal)',
                  color: 'var(--color-neutral-500)',
                  textDecoration: 'line-through',
                }}
              >
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--color-neutral-700)',
              lineHeight: '1.6',
              marginBottom: '24px',
            }}
          >
            {product.description}
          </p>

          {/* Quantity Selector */}
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: '8px',
              }}
            >
              Quantity
            </label>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid var(--color-neutral-300)',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  fontSize: 'var(--text-lg)',
                }}
              >
                −
              </button>
              <span
                style={{
                  width: '60px',
                  height: '40px',
                  border: '1px solid var(--color-neutral-300)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--text-base)',
                }}
              >
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid var(--color-neutral-300)',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  fontSize: 'var(--text-lg)',
                }}
              >
                +
              </button>
            </div>
          </div>

          <ButtonPrimary
            size="base"
            onClick={() => {
              console.log('Add to cart:', product.id, quantity);
              onNavigate('/checkout');
            }}
            style={{ width: '100%', marginBottom: '24px' }}
          >
            Add to Cart
          </ButtonPrimary>

          {/* Product Specifications */}
          <div style={{ borderTop: '1px solid var(--color-neutral-200)', paddingTop: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-600)' }}>Material</span>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>{product.material}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-600)' }}>Color</span>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>{product.color}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-600)' }}>Dimensions</span>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>{product.dimensions}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section - Desktop */}
      <div
        style={{
          borderTop: '1px solid var(--color-neutral-200)',
          borderBottom: '1px solid var(--color-neutral-200)',
          padding: '0 var(--spacing-desktop)',
        }}
        className="tabs-desktop"
      >
        <div style={{ display: 'flex', gap: '8px' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '16px 24px',
                border: 'none',
                backgroundColor: activeTab === tab.id ? 'var(--color-primary-200)' : 'transparent',
                cursor: 'pointer',
                borderBottom: activeTab === tab.id ? '2px solid var(--color-neutral-900)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                fontFamily: 'var(--font-family-body)',
              }}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs Section - Mobile */}
      <div
        style={{
          borderTop: '1px solid var(--color-neutral-200)',
          borderBottom: '1px solid var(--color-neutral-200)',
          position: 'relative',
        }}
        className="tabs-mobile"
      >
        {showLeftChevron && (
          <button
            onClick={() => scrollTabs('left')}
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: 'none',
              padding: '8px 4px',
              cursor: 'pointer',
            }}
          >
            <ChevronLeftIcon sx={{ fontSize: 20 }} />
          </button>
        )}
        <div
          ref={tabsRef}
          style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            padding: '0 8px',
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '12px 16px',
                border: 'none',
                backgroundColor: activeTab === tab.id ? 'var(--color-primary-200)' : 'transparent',
                cursor: 'pointer',
                borderBottom: activeTab === tab.id ? '2px solid var(--color-neutral-900)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                fontFamily: 'var(--font-family-body)',
                whiteSpace: 'nowrap',
                flex: '0 0 auto',
              }}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
        {showRightChevron && (
          <button
            onClick={() => scrollTabs('right')}
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: 'none',
              padding: '8px 4px',
              cursor: 'pointer',
            }}
          >
            <ChevronRightIcon sx={{ fontSize: 20 }} />
          </button>
        )}
      </div>

      {/* Tab Content */}
      <div style={{ padding: '48px var(--spacing-desktop)' }} className="tab-content-desktop">
        {activeTab === 'details' && (
          <div>
            <h3
              style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: '16px',
                fontFamily: 'var(--font-family-heading)',
              }}
            >
              Product Details
            </h3>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-neutral-700)', lineHeight: '1.6' }}>
              {product.description} This premium piece is crafted with attention to detail and designed to last for years.
              Each item is carefully inspected to ensure the highest quality standards.
            </p>
          </div>
        )}
        {activeTab === 'shipping' && (
          <div>
            <h3
              style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: '16px',
                fontFamily: 'var(--font-family-heading)',
              }}
            >
              Shipping Information
            </h3>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-neutral-700)', lineHeight: '1.6' }}>
              Free shipping on all orders over $500. Standard delivery takes 5-7 business days. White glove delivery
              available for an additional fee. All items are carefully packaged and insured during transit.
            </p>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div>
            <h3
              style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: '16px',
                fontFamily: 'var(--font-family-heading)',
              }}
            >
              Customer Reviews
            </h3>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-neutral-700)', lineHeight: '1.6' }}>
              No reviews yet. Be the first to review this product!
            </p>
          </div>
        )}
      </div>

      <div style={{ padding: '24px var(--spacing-mobile)' }} className="tab-content-mobile">
        {activeTab === 'details' && (
          <div>
            <h3
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: '12px',
                fontFamily: 'var(--font-family-heading)',
              }}
            >
              Product Details
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-700)', lineHeight: '1.6' }}>
              {product.description} This premium piece is crafted with attention to detail and designed to last for years.
            </p>
          </div>
        )}
        {activeTab === 'shipping' && (
          <div>
            <h3
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: '12px',
                fontFamily: 'var(--font-family-heading)',
              }}
            >
              Shipping Information
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-700)', lineHeight: '1.6' }}>
              Free shipping on all orders over $500. Standard delivery takes 5-7 business days.
            </p>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div>
            <h3
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: '12px',
                fontFamily: 'var(--font-family-heading)',
              }}
            >
              Customer Reviews
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-700)', lineHeight: '1.6' }}>
              No reviews yet. Be the first to review this product!
            </p>
          </div>
        )}
      </div>

      {/* Recommended Products */}
      <div style={{ padding: '80px var(--spacing-desktop)', backgroundColor: 'var(--color-neutral-50)' }} className="recommended-desktop">
        <ProductSlider
          title="You May Also Like"
          products={recommendedProducts}
          onProductClick={(id) => onNavigate(`/product?id=${id}`)}
        />
      </div>

      <div style={{ padding: '48px var(--spacing-mobile)', backgroundColor: 'var(--color-neutral-50)' }} className="recommended-mobile">
        <ProductSlider
          title="You May Also Like"
          products={recommendedProducts}
          onProductClick={(id) => onNavigate(`/product?id=${id}`)}
        />
      </div>

      <Footer onNavigate={onNavigate} />

      <style>
        {`
          @media (max-width: 767px) {
            .product-desktop,
            .breadcrumbs-desktop,
            .tabs-desktop,
            .tab-content-desktop,
            .recommended-desktop {
              display: none !important;
            }
          }
          @media (min-width: 768px) {
            .product-mobile,
            .tabs-mobile,
            .tab-content-mobile,
            .recommended-mobile {
              display: none !important;
            }
          }
          .tabs-mobile > div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
}
