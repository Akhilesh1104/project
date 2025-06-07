import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../ui/ProductCard';
import { Product } from '../../types';
import Button from '../ui/Button';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  // Filter for featured products
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 dark:text-dark-muted max-w-2xl">
              Explore our handpicked selection of premium natural stone products that add elegance and value to any space.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button 
              href="/shop" 
              variant="outline"
              className="group"
            >
              View All Products
              <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="opacity-0 animate-fadeIn"
              style={{
                animationDelay: `${(product.id % 4) * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;