import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HeroBlock, HeroBlockMobile } from '../components/HeroBlock';
import { FeatureBlock, FeatureBlockMobile } from '../components/FeatureBlock';
import { CategoryGridBlock, CategoryGridBlockMobile } from '../components/CategoryGridBlock';
import { BannerBlock, BannerBlockMobile } from '../components/BannerBlock';
import { ProductSlider } from '../components/ProductSlider';
import { mockProducts, mockCategories } from '../utils/mockData';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredProducts = mockProducts.slice(0, 8);
  const newArrivals = mockProducts.filter((p) => p.badges?.includes('new'));

  return (
    <div>
      <Header onNavigate={onNavigate} cartCount={3} />
      
      {/* Hero Section */}
      <div className="responsive-hero">
        <HeroBlock
          image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
          title="Redefine Your Space"
          subtitle="Discover timeless furniture and lighting for the modern home"
          ctaText="Shop Collection"
          onCtaClick={() => onNavigate('/listing')}
        />
      </div>
      <div className="responsive-hero-mobile">
        <HeroBlockMobile
          image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
          title="Redefine Your Space"
          subtitle="Discover timeless furniture for modern living"
          ctaText="Shop Collection"
          onCtaClick={() => onNavigate('/listing')}
        />
      </div>

      {/* Featured Products Slider */}
      <div style={{ padding: '80px var(--spacing-desktop)' }} className="section-desktop">
        <ProductSlider
          title="Featured Products"
          products={featuredProducts}
          onProductClick={(id) => onNavigate(`/product?id=${id}`)}
        />
      </div>
      <div style={{ padding: '48px var(--spacing-mobile)' }} className="section-mobile">
        <ProductSlider
          title="Featured Products"
          products={featuredProducts}
          onProductClick={(id) => onNavigate(`/product?id=${id}`)}
        />
      </div>

      {/* Feature Block */}
      <div className="responsive-feature">
        <FeatureBlock />
      </div>
      <div className="responsive-feature-mobile">
        <FeatureBlockMobile />
      </div>

      {/* Category Grid */}
      <div className="responsive-category">
        <CategoryGridBlock
          categories={mockCategories}
          onCategoryClick={(id) => onNavigate(`/listing?category=${id}`)}
        />
      </div>
      <div className="responsive-category-mobile">
        <CategoryGridBlockMobile
          categories={mockCategories}
          onCategoryClick={(id) => onNavigate(`/listing?category=${id}`)}
        />
      </div>

      {/* New Arrivals Slider */}
      <div style={{ padding: '80px var(--spacing-desktop)' }} className="section-desktop">
        <ProductSlider
          title="New Arrivals"
          products={newArrivals}
          onProductClick={(id) => onNavigate(`/product?id=${id}`)}
        />
      </div>
      <div style={{ padding: '48px var(--spacing-mobile)' }} className="section-mobile">
        <ProductSlider
          title="New Arrivals"
          products={newArrivals}
          onProductClick={(id) => onNavigate(`/product?id=${id}`)}
        />
      </div>

      {/* Banner Block */}
      <div className="responsive-banner">
        <BannerBlock
          title="Experience 1VYU Design"
          subtitle="Visit our showroom to see our full collection and receive personalized design consultation."
          ctaText="Book Appointment"
          onCtaClick={() => console.log('Book appointment')}
        />
      </div>
      <div className="responsive-banner-mobile">
        <BannerBlockMobile
          title="Experience 1VYU Design"
          subtitle="Visit our showroom for personalized design consultation."
          ctaText="Book Appointment"
          onCtaClick={() => console.log('Book appointment')}
        />
      </div>

      <Footer onNavigate={onNavigate} />

      <style>
        {`
          @media (max-width: 767px) {
            .responsive-hero,
            .responsive-feature,
            .responsive-category,
            .responsive-banner,
            .section-desktop {
              display: none !important;
            }
          }
          @media (min-width: 768px) {
            .responsive-hero-mobile,
            .responsive-feature-mobile,
            .responsive-category-mobile,
            .responsive-banner-mobile,
            .section-mobile {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
}
