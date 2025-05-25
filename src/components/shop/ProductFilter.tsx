import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { Category } from '../../types';

interface ProductFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  return (
    <div className="mb-8">
      {/* Mobile filter toggle */}
      <div className="lg:hidden flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Filters
        </h2>
        <button
          onClick={toggleMobileFilter}
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-600 transition-colors"
        >
          <Filter size={18} className="mr-1" />
          <span>Filter</span>
        </button>
      </div>

      {/* Desktop filters */}
      <div className="hidden lg:block">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Categories
        </h2>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                activeCategory === category.id
                  ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile filters slide-in */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 lg:hidden ${
          isMobileFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileFilter}
      ></div>

      <div
        className={`fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 z-50 rounded-t-xl shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileFilterOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Filters</h3>
          <button
            onClick={toggleMobileFilter}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-4 max-h-[60vh] overflow-y-auto">
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  onCategoryChange(category.id);
                  toggleMobileFilter();
                }}
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;