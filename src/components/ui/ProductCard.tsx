import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent navigation if clicking on the add to cart button
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    navigate(`/product/${product.id}`);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group relative bg-white dark:bg-dark-surface rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-300 dark:border-gray-600 hover:border-amber-500 dark:hover:border-gray-400 cursor-pointer h-[400px]"
    >
      {/* Product Image with Overlay */}
      <div className="relative overflow-hidden h-[250px]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        
        {/* Quick actions overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-end">
          <button 
            className="bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-full transition-colors duration-300"
            aria-label="Add to cart"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-medium text-gray-900 dark:text-dark-text group-hover:text-amber-600 dark:group-hover:text-amber-600 transition-colors duration-300">
            {product.name}
          </h3>
          <span className="font-semibold text-amber-600">
            ${product.price.toFixed(2)}
            <span className="text-sm text-gray-500 dark:text-dark-muted font-normal">/{product.unit}</span>
          </span>
        </div>
        <p className="text-sm text-gray-500 dark:text-dark-muted line-clamp-2 mb-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-dark-surface-elevated text-gray-600 dark:text-dark-muted rounded-full capitalize border border-gray-300 dark:border-gray-600">
            {product.type}
          </span>
          <span className="text-xs text-gray-500 dark:text-dark-muted">
            {product.details.origin}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;