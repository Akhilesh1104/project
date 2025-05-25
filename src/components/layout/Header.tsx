import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from '../ui/ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
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
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-bold tracking-tighter flex items-center"
          >
            <span className={`transition-colors duration-300 ${
              isScrolled || theme === 'dark'
                ? 'text-gray-900 dark:text-white'
                : 'text-white'
            }`}>
              Marble<span className="text-amber-600">&</span>Stone
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 hover:text-amber-600 ${
                  location.pathname === link.path
                    ? 'text-amber-600'
                    : isScrolled || theme === 'dark'
                      ? 'text-gray-900 dark:text-white'
                      : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button 
              className={`p-1 rounded-full transition-colors duration-300 ${
                isScrolled || theme === 'dark'
                  ? 'text-gray-600 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-600'
                  : 'text-white hover:text-amber-200'
              }`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link 
              to="/cart" 
              className={`p-1 rounded-full transition-colors duration-300 ${
                isScrolled || theme === 'dark'
                  ? 'text-gray-600 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-600'
                  : 'text-white hover:text-amber-200'
              }`}
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-1 rounded-full transition-colors duration-300 ${
                isScrolled || theme === 'dark'
                  ? 'text-gray-600 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-600'
                  : 'text-white hover:text-amber-200'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium py-2 transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-amber-600'
                      : 'text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-600'
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
  );
};

export default Header;