import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Check, Star, ShoppingCart } from 'lucide-react';
import Button from '../components/ui/Button';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const { addToCart } = useCart();
  const { showToast } = useToast();
  
  const product = products.find(p => p.id === Number(id));
  
  // Find related products (same type but different id)
  const relatedProducts = products
    .filter(p => p.type === product?.type && p.id !== product?.id)
    .slice(0, 4);
  
  // SEO improvements
  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Marble&Stone`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', product.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = product.description;
        document.head.appendChild(meta);
      }
      
      // Add Open Graph tags
      const ogTags = [
        { property: 'og:title', content: `${product.name} | Marble&Stone` },
        { property: 'og:description', content: product.description },
        { property: 'og:type', content: 'product' },
        { property: 'og:url', content: window.location.href },
        { property: 'og:image', content: product.image }
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
    }
  }, [product]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Button href="/shop" variant="primary">Continue Shopping</Button>
      </div>
    );
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      showToast(`${quantity} ${product.name} added to cart`, 'success');
    }
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 dark:bg-black py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
              </li>
              <li className="flex items-center">
                <ChevronRight size={16} />
              </li>
              <li>
                <Link to="/shop" className="hover:text-amber-600 transition-colors">Shop</Link>
              </li>
              <li className="flex items-center">
                <ChevronRight size={16} />
              </li>
              <li>
                <Link to={`/shop?category=${product.type}`} className="hover:text-amber-600 transition-colors capitalize">
                  {product.type}
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight size={16} />
              </li>
              <li className="text-gray-700 dark:text-gray-300 font-medium" aria-current="page">
                {product.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Product Info */}
            <div>
              <span className="inline-block px-3 py-1 border border-amber-600 text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full mb-4 capitalize">
                {product.type}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={18} 
                      className={`${star <= 4 ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-600'}`} 
                    />
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  (24 reviews)
                </span>
              </div>
              <div className="mb-6">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-gray-600 dark:text-gray-400 ml-2">
                  /{product.unit}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {product.description}
              </p>

              {/* Product Specifications */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Specifications
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-600 dark:text-gray-400 w-32">Origin:</span>
                    <span className="text-gray-900 dark:text-white font-medium">{product.details.origin}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 dark:text-gray-400 w-32">Finish:</span>
                    <span className="text-gray-900 dark:text-white font-medium">{product.details.finish}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 dark:text-gray-400 w-32">Dimensions:</span>
                    <span className="text-gray-900 dark:text-white font-medium">{product.details.dimensions}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 dark:text-gray-400 w-32">Availability:</span>
                    <span className="flex items-center">
                      {product.details.inStock ? (
                        <>
                          <Check size={16} className="text-green-500 mr-1" />
                          <span className="text-green-600 dark:text-green-400 font-medium">In Stock</span>
                        </>
                      ) : (
                        <span className="text-red-600 font-medium">Out of Stock</span>
                      )}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded overflow-hidden h-12 w-full sm:w-auto">
                  <button
                    onClick={decrementQuantity}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors h-full"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-12 h-full text-center border-0 focus:ring-0 text-gray-900 dark:text-white bg-white dark:bg-gray-900"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors h-full"
                  >
                    +
                  </button>
                </div>
                <Button 
                  variant="primary" 
                  className="w-full sm:w-auto flex items-center justify-center"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </Button>
              </div>

              {/* Recommended Uses */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Recommended Uses
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.details.recommended.map((use, index) => (
                    <span 
                      key={index}
                      className="inline-block px-3 py-1 border border-amber-600 text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-12 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
            <button
              className={`py-4 px-6 focus:outline-none ${
                activeTab === 'description'
                  ? 'border-b-2 border-amber-600 text-amber-600'
                  : 'text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-600'
              }`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`py-4 px-6 focus:outline-none ${
                activeTab === 'specifications'
                  ? 'border-b-2 border-amber-600 text-amber-600'
                  : 'text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-600'
              }`}
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </button>
            <button
              className={`py-4 px-6 focus:outline-none ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-amber-600 text-amber-600'
                  : 'text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-600'
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews (24)
            </button>
          </div>

          <div className="pb-8">
            {activeTab === 'description' && (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Product Description</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {product.description}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Our {product.name} is carefully selected from the finest quarries in {product.details.origin}. Each piece undergoes rigorous quality control to ensure only the best reaches your home. The {product.details.finish} finish highlights the natural beauty of the stone, creating a luxurious appearance that enhances any space.
                </p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Technical Specifications</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400 font-medium">Material</td>
                        <td className="py-3 px-4 text-gray-900 dark:text-white capitalize">{product.type}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400 font-medium">Origin</td>
                        <td className="py-3 px-4 text-gray-900 dark:text-white">{product.details.origin}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400 font-medium">Finish</td>
                        <td className="py-3 px-4 text-gray-900 dark:text-white">{product.details.finish}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400 font-medium">Dimensions</td>
                        <td className="py-3 px-4 text-gray-900 dark:text-white">{product.details.dimensions}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400 font-medium">Recommended Uses</td>
                        <td className="py-3 px-4 text-gray-900 dark:text-white">{product.details.recommended.join(', ')}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400 font-medium">Maintenance</td>
                        <td className="py-3 px-4 text-gray-900 dark:text-white">Regular sealing recommended every 6-12 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Customer Reviews</h3>
                <div className="space-y-6">
                  {/* Sample reviews */}
                  {[
                    {
                      name: "Sarah Johnson",
                      date: "June 12, 2023",
                      rating: 5,
                      comment: "Absolutely beautiful marble! The veining is exactly as pictured, and it transformed our kitchen. Highly recommended."
                    },
                    {
                      name: "Michael Smith",
                      date: "May 3, 2023",
                      rating: 4,
                      comment: "Great quality stone. Delivery was prompt and the product was well-packaged. Would buy from this company again."
                    }
                  ].map((review, index) => (
                    <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium text-gray-900 dark:text-white">{review.name}</h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{review.date}</span>
                      </div>
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            size={16} 
                            className={`${star <= review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-600'}`} 
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;