import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useCart } from '../../context/CartContext';
import ThemeToggle from '../ui/ThemeToggle';
import SearchModal from '../ui/SearchModal';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme } = useTheme();
  const { items } = useCart();
  const location = useLocation();

  // Handle scroll effect for transparent header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/70 dark:bg-dark-surface/70 backdrop-blur-lg shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo */}
            <Logo 
              isScrolled={isScrolled}
              isDark={theme === 'dark'}
            />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium text-sm lg:text-base transition-colors duration-300 hover:text-amber-600 ${
                    location.pathname === link.path
                      ? 'text-amber-600'
                      : isScrolled || theme === 'dark'
                        ? 'text-gray-900 dark:text-white'
                        : 'text-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <ThemeToggle />
              <button 
                onClick={() => setIsSearchOpen(true)}
                className={`p-1.5 sm:p-2 rounded-full transition-colors duration-300 hover:text-amber-600 ${
                  isScrolled || theme === 'dark'
                    ? 'text-gray-900 dark:text-gray-300 dark:hover:text-amber-600'
                    : 'text-gray-900 '
                }`}
                aria-label="Search"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <Link 
                to="/cart" 
                className={`p-1.5 sm:p-2 rounded-full transition-colors duration-300 relative hover:text-amber-600 ${
                  isScrolled || theme === 'dark'
                    ? 'text-gray-900 dark:text-gray-300 dark:hover:text-amber-600'
                    : 'text-gray-900'
                }`}
                aria-label="Cart"
              >
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-amber-600 text-white text-[10px] sm:text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-1.5 sm:p-2 rounded-full transition-colors duration-300 ${
                  isScrolled || theme === 'dark'
                    ? 'text-gray-900 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-600'
                    : 'text-gray-900 hover:text-amber-600'
                }`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-dark-surface shadow-lg">
            <div className="container mx-auto px-4 py-3 sm:py-4">
              <nav className="flex flex-col space-y-3 sm:space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-medium py-2 text-sm sm:text-base transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'text-amber-600'
                        : 'text-gray-600 dark:text-dark-text hover:text-amber-600 dark:hover:text-amber-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
};

export default Header;