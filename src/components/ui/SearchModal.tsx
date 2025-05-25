import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import { Product } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleProductClick = (productId: number) => {
    onClose();
    navigate(`/product/${productId}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-white dark:bg-dark-surface rounded-xl shadow-xl">
          {/* Search Input */}
          <div className="p-4 border-b border-gray-200 dark:border-dark-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-dark-surface-elevated border border-gray-200 dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400"
              />
              <button
                onClick={onClose}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-dark-text"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Search Results */}
          <div className="max-h-[60vh] overflow-y-auto p-4">
            {searchQuery.trim() ? (
              searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {searchResults.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-surface-hover transition-colors"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="text-left">
                        <h3 className="font-medium text-gray-900 dark:text-dark-text">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-dark-muted">
                          {product.type}
                        </p>
                        <p className="text-sm font-medium text-amber-600">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-dark-muted">
                    No products found matching "{searchQuery}"
                  </p>
                </div>
              )
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-dark-muted">
                  Start typing to search products
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal; 