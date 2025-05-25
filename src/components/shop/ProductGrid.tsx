import React from 'react';
import ProductCard from '../ui/ProductCard';
import { Product } from '../../types';
import { ShoppingBag } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6).fill(0).map((_, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden animate-pulse">
            <div className="aspect-square bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-4 space-y-3">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <ShoppingBag size={48} className="text-gray-400 mb-4" />
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No products found</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Try adjusting your filter criteria or check back later for new arrivals.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="opacity-0 animate-fadeIn"
          style={{
            animationDelay: `${(product.id % 6) * 100}ms`,
            animationFillMode: 'forwards'
          }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;