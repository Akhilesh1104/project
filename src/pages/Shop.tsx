import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/shop/ProductGrid';
import ProductFilter from '../components/shop/ProductFilter';
import { products, categories } from '../data/products';
import { Product } from '../types';

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Handle initial category from URL
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && categories.some(c => c.id === categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Filter products when active category changes
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.type === activeCategory));
    }
  }, [activeCategory]);

  // SEO improvements
  useEffect(() => {
    document.title = 'Shop Premium Marble, Granite & Tiles | Marble&Stone';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Browse our collection of premium marble, granite, and tiles. Find the perfect natural stone products for your home renovation or new construction project.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Browse our collection of premium marble, granite, and tiles. Find the perfect natural stone products for your home renovation or new construction project.';
      document.head.appendChild(meta);
    }
  }, []);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-16 lg:pt-24">
      {/* Shop Header */}
      <div className="bg-gray-100 dark:bg-gray-900 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Collection
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            Browse our extensive selection of premium marble, granite, and tiles. Each piece is carefully sourced and crafted to bring timeless beauty to your space.
          </p>
        </div>
      </div>

      {/* Shop Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <ProductFilter 
              categories={categories} 
              activeCategory={activeCategory} 
              onCategoryChange={handleCategoryChange}
            />
          </div>

          {/* Products */}
          <div className="lg:w-3/4">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-0">
                {activeCategory === 'all' ? 'All Products' : categories.find(c => c.id === activeCategory)?.name}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
            </div>
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;