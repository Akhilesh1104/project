import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategorySection from '../components/home/CategorySection';
import AboutPreview from '../components/home/AboutPreview';
import ProductCarousel from '../components/home/ProductCarousel';
import { products } from '../data/products';

// SEO improvements
const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Hero />
      <ProductCarousel products={products} />
      <FeaturedProducts products={products} />
      <CategorySection />
      <AboutPreview />
    </div>
  );
};

export default Home;