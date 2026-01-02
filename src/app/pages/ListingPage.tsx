import React, { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';
import { ButtonTertiaryNeutral } from '../components/ui/button-tertiary-neutral';
import { mockProducts } from '../utils/mockData';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface ListingPageProps {
  onNavigate: (path: string) => void;
  category?: string;
}

export function ListingPage({ onNavigate, category }: ListingPageProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(category || 'all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');

  const categories = ['all', 'living-room', 'bedroom', 'dining', 'lighting'];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-500', label: 'Under $500' },
    { value: '500-1000', label: '$500 - $1000' },
    { value: '1000-2000', label: '$1000 - $2000' },
    { value: '2000+', label: 'Over $2000' },
  ];
  const colors = ['all', 'Gray', 'Navy', 'Natural', 'Charcoal', 'Brass', 'White Oak', 'Tan', 'Black', 'Walnut'];
  const materials = ['all', 'Fabric', 'Wood', 'Velvet', 'Oak Wood', 'Metal', 'Leather', 'Glass'];

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
      
      if (priceRange !== 'all') {
        const price = product.price;
        if (priceRange === '0-500' && price >= 500) return false;
        if (priceRange === '500-1000' && (price < 500 || price >= 1000)) return false;
        if (priceRange === '1000-2000' && (price < 1000 || price >= 2000)) return false;
        if (priceRange === '2000+' && price < 2000) return false;
      }

      if (selectedColor !== 'all' && product.color !== selectedColor) return false;
      if (selectedMaterial !== 'all' && product.material !== selectedMaterial) return false;

      return true;
    });
  }, [selectedCategory, priceRange, selectedColor, selectedMaterial]);

  const FilterSection = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Category Filter */}
      <div>
        <h3
          style={{
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-medium)',
            marginBottom: '16px',
            fontFamily: 'var(--font-family-heading)',
          }}
        >
          Category
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {categories.map((cat) => (
            <ButtonTertiaryNeutral
              key={cat}
              size="sm"
              isActive={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                justifyContent: 'flex-start',
                textTransform: 'capitalize',
              }}
            >
              {cat.replace('-', ' ')}
            </ButtonTertiaryNeutral>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3
          style={{
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-medium)',
            marginBottom: '16px',
            fontFamily: 'var(--font-family-heading)',
          }}
        >
          Price
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {priceRanges.map((range) => (
            <ButtonTertiaryNeutral
              key={range.value}
              size="sm"
              isActive={priceRange === range.value}
              onClick={() => setPriceRange(range.value)}
              style={{ justifyContent: 'flex-start' }}
            >
              {range.label}
            </ButtonTertiaryNeutral>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <h3
          style={{
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-medium)',
            marginBottom: '16px',
            fontFamily: 'var(--font-family-heading)',
          }}
        >
          Color
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {colors.map((color) => (
            <ButtonTertiaryNeutral
              key={color}
              size="sm"
              isActive={selectedColor === color}
              onClick={() => setSelectedColor(color)}
              style={{ justifyContent: 'flex-start', textTransform: 'capitalize' }}
            >
              {color}
            </ButtonTertiaryNeutral>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <div>
        <h3
          style={{
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-medium)',
            marginBottom: '16px',
            fontFamily: 'var(--font-family-heading)',
          }}
        >
          Material
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {materials.map((material) => (
            <ButtonTertiaryNeutral
              key={material}
              size="sm"
              isActive={selectedMaterial === material}
              onClick={() => setSelectedMaterial(material)}
              style={{ justifyContent: 'flex-start', textTransform: 'capitalize' }}
            >
              {material}
            </ButtonTertiaryNeutral>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Header onNavigate={onNavigate} cartCount={3} />

      {/* Breadcrumbs - Desktop */}
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
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-900)' }}>
            {selectedCategory === 'all' ? 'All Products' : selectedCategory.replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Breadcrumbs - Mobile */}
      <div
        style={{
          padding: '16px var(--spacing-mobile)',
          borderBottom: '1px solid var(--color-neutral-200)',
        }}
        className="breadcrumbs-mobile"
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
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-900)' }}>
            Products
          </span>
        </div>
      </div>

      {/* Main Content - Desktop */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: '48px',
          padding: '48px var(--spacing-desktop)',
        }}
        className="listing-desktop"
      >
        {/* Filters Sidebar */}
        <aside>
          <FilterSection />
        </aside>

        {/* Products Grid */}
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '32px',
            }}
          >
            <h1
              style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--font-weight-medium)',
                fontFamily: 'var(--font-family-heading)',
              }}
            >
              {selectedCategory === 'all' ? 'All Products' : selectedCategory.replace('-', ' ')}
            </h1>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-600)' }}>
              {filteredProducts.length} products
            </span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '32px',
            }}
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onClick={() => onNavigate(`/product?id=${product.id}`)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - Mobile */}
      <div
        style={{
          padding: '24px var(--spacing-mobile)',
        }}
        className="listing-mobile"
      >
        {/* Filter Button */}
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-weight-medium)',
              fontFamily: 'var(--font-family-heading)',
            }}
          >
            Products
          </h1>
          <ButtonTertiaryNeutral
            size="sm"
            onClick={() => setMobileFiltersOpen(true)}
            prefixIcon={<TuneIcon sx={{ fontSize: 20 }} />}
          >
            Filters
          </ButtonTertiaryNeutral>
        </div>

        {/* Products Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onClick={() => onNavigate(`/product?id=${product.id}`)}
            />
          ))}
        </div>
      </div>

      {/* Mobile Filters Panel */}
      {mobileFiltersOpen && (
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
              position: 'sticky',
              top: 0,
              backgroundColor: 'white',
              zIndex: 1,
            }}
          >
            <h2
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                fontFamily: 'var(--font-family-heading)',
              }}
            >
              Filters
            </h2>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <CloseIcon sx={{ fontSize: 28 }} />
            </button>
          </div>
          <div style={{ padding: '24px 16px' }}>
            <FilterSection />
          </div>
        </div>
      )}

      <Footer onNavigate={onNavigate} />

      <style>
        {`
          @media (max-width: 767px) {
            .listing-desktop,
            .breadcrumbs-desktop {
              display: none !important;
            }
          }
          @media (min-width: 768px) {
            .listing-mobile,
            .breadcrumbs-mobile {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
}
