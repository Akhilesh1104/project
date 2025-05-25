import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategorySection from '../components/home/CategorySection';
import AboutPreview from '../components/home/AboutPreview';
import { products } from '../data/products';

// SEO improvements
const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Marble&Stone | Premium Natural Stone Products';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover our premium collection of marble, granite, and tiles to elevate your home with timeless elegance.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover our premium collection of marble, granite, and tiles to elevate your home with timeless elegance.';
      document.head.appendChild(meta);
    }

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Marble&Stone | Premium Natural Stone Products' },
      { property: 'og:description', content: 'Discover our premium collection of marble, granite, and tiles to elevate your home with timeless elegance.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:image', content: 'https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg' }
    ];

    ogTags.forEach(tag => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', tag.property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });
  }, []);

  return (
    <>
      <Hero />
      <FeaturedProducts products={products} />
      <CategorySection />
      <AboutPreview />
    </>
  );
};

export default Home;