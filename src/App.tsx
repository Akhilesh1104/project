import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Cart = lazy(() => import('./pages/Cart'));

// Loading fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-light-text dark:border-dark-text"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <ToastProvider>
          <Router>
            <Layout>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/cart" element={<Cart />} />
                  {/* 404 fallback */}
                  <Route path="*" element={
                    <div className="flex flex-col items-center justify-center min-h-[70vh] py-16 px-4 text-center">
                      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
                      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                        The page you are looking for doesn't exist or has been moved.
                      </p>
                      <button 
                        onClick={() => window.history.back()}
                        className="px-6 py-3 bg-light-text dark:bg-dark-text text-light-bg dark:text-dark-bg font-medium rounded transition-colors duration-300 hover:scale-105"
                      >
                        Go Back
                      </button>
                    </div>
                  } />
                </Routes>
              </Suspense>
            </Layout>
          </Router>
        </ToastProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;