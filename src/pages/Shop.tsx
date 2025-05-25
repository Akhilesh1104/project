import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';
import { Product } from '../types';
import { Filter, X } from 'lucide-react';
import Button from '../components/ui/Button';

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  // Get category from URL params
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesType = !selectedType || product.type === selectedType;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesType && matchesPrice;
  });

  // Get unique categories and types
  const categories = Array.from(new Set(products.map(p => p.category)));
  const types = Array.from(new Set(products.map(p => p.type)));

  const handleFilterChange = () => {
    const params = new URLSearchParams();
    if (selectedCategory) params.set('category', selectedCategory);
    if (selectedType) params.set('type', selectedType);
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedType(null);
    setPriceRange([0, 1000]);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-16 lg:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <Button
            onClick={() => setIsFilterOpen(true)}
            variant="outline"
            className="w-full flex items-center justify-center"
          >
            <Filter size={18} className="mr-2" />
            Filters
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`fixed inset-0 z-50 lg:relative lg:z-auto lg:w-64 bg-white dark:bg-black lg:bg-transparent lg:dark:bg-transparent transform ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
            <div className="h-full lg:h-auto overflow-y-auto lg:overflow-visible p-6 lg:p-0">
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                {/* Category Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 dark:border-gray-600"
                        />
                        <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 capitalize">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Type Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Type</h3>
                  <div className="space-y-2">
                    {types.map(type => (
                      <label key={type} className="flex items-center">
                        <input
                          type="radio"
                          name="type"
                          checked={selectedType === type}
                          onChange={() => setSelectedType(type)}
                          className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 dark:border-gray-600"
                        />
                        <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 capitalize">
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Price Range</h3>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Filter Actions */}
                <div className="flex flex-col space-y-3">
                  <Button
                    onClick={handleFilterChange}
                    variant="primary"
                    className="w-full"
                  >
                    Apply Filters
                  </Button>
                  <Button
                    onClick={clearFilters}
                    variant="outline"
                    className="w-full"
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedCategory ? `${selectedCategory} Products` : 'All Products'}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {filteredProducts.length} products found
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
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
        </div>
      </div>
    </div>
  );
};

export default Shop;