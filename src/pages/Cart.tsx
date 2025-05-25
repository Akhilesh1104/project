import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center justify-center py-12">
            <ShoppingBag size={64} className="text-light-text dark:text-dark-text mb-6" />
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button href="/shop" variant="primary">
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map(({ product, quantity }) => (
                <div 
                  key={product.id}
                  className="bg-white dark:bg-black border border-light-border dark:border-dark-border rounded-lg p-4 flex items-center gap-4"
                >
                  <Link to={`/product/${product.id}`} className="shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                  </Link>
                  
                  <div className="flex-grow">
                    <Link 
                      to={`/product/${product.id}`}
                      className="font-medium hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      {product.name}
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      ${product.price.toFixed(2)} / {product.unit}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-light-border dark:border-dark-border rounded">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => updateQuantity(product.id, parseInt(e.target.value) || 1)}
                        className="w-16 text-center border-x border-light-border dark:border-dark-border bg-transparent"
                      />
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={clearCart}
              className="mt-4 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 transition-colors text-sm"
            >
              Clear Cart
            </button>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-black border border-light-border dark:border-dark-border rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              
              <div className="border-t border-light-border dark:border-dark-border pt-4 mb-6">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Button
                variant="primary"
                className="w-full justify-center"
                onClick={() => alert('Checkout functionality coming soon!')}
              >
                Proceed to Checkout
              </Button>
              
              <Link
                to="/shop"
                className="block text-center mt-4 text-sm hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;