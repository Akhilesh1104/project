import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <>
    <hr className='mx-8' />
    <footer className="bg-gray-100 dark:bg-black pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo isDark={true} className="mb-4" />
            <p className="text-gray-600 dark:text-dark-muted mb-6">
              Premium natural stone products for elegant homes and spaces. Quality craftsmanship since 1995.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-amber-600 dark:text-dark-muted dark:hover:text-amber-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-amber-600 dark:text-dark-muted dark:hover:text-amber-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-amber-600 dark:text-dark-muted dark:hover:text-amber-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-dark-text">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-gray-600 dark:text-dark-muted hover:text-amber-600 dark:hover:text-amber-600 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-dark-text">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-amber-600 flex-shrink-0 mt-1" />
                <span className="text-gray-600 dark:text-dark-muted">
                  123 Stone Ave, Marble City, MC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-amber-600 flex-shrink-0" />
                <a 
                  href="tel:+15551234567" 
                  className="text-gray-600 dark:text-dark-muted hover:text-amber-600 dark:hover:text-amber-600 transition-colors duration-300"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-amber-600 flex-shrink-0" />
                <a 
                  href="mailto:info@kdmarble.com" 
                  className="text-gray-600 dark:text-dark-muted hover:text-amber-600 dark:hover:text-amber-600 transition-colors duration-300"
                >
                  info@kdmarble.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 text-amber-600 flex-shrink-0 mt-1" />
                <div className="text-gray-600 dark:text-dark-muted">
                  <p>Mon-Fri: 9am - 6pm</p>
                  <p>Sat: 10am - 4pm</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-dark-text">Newsletter</h3>
            <p className="text-gray-600 dark:text-dark-muted mb-4">
              Subscribe to receive updates on new products and special promotions.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-surface-elevated text-gray-900 dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-dark-border mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-dark-muted text-sm">
              © {new Date().getFullYear()} KD Marble & Granite. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link 
                to="/privacy-policy" 
                className="text-gray-600 dark:text-dark-muted text-sm hover:text-amber-600 dark:hover:text-amber-600 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-gray-600 dark:text-dark-muted text-sm hover:text-amber-600 dark:hover:text-amber-600 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;