import React, { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { ListingPage } from './pages/ListingPage';
import { ProductPage } from './pages/ProductPage';
import { CheckoutPage } from './pages/CheckoutPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState('/');
  const [params, setParams] = useState<Record<string, string>>({});

  useEffect(() => {
    // Initialize from URL
    const path = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);
    const urlParams: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      urlParams[key] = value;
    });
    setCurrentPath(path);
    setParams(urlParams);
  }, []);

  const navigate = (path: string) => {
    const [pathname, search] = path.split('?');
    const searchParams = new URLSearchParams(search);
    const urlParams: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      urlParams[key] = value;
    });
    
    setCurrentPath(pathname);
    setParams(urlParams);
    
    // Update browser URL
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route rendering
  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={navigate} />;
      case '/listing':
        return <ListingPage onNavigate={navigate} category={params.category} />;
      case '/product':
        return <ProductPage onNavigate={navigate} productId={params.id} />;
      case '/checkout':
        return <CheckoutPage onNavigate={navigate} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return <div>{renderPage()}</div>;
}
