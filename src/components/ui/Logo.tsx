import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
  isDark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', isScrolled = false, isDark = false }) => {
  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg transform rotate-45 flex items-center justify-center">
          <span className="text-white font-bold text-lg transform -rotate-45">KD</span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-600 rounded-full"></div>
      </div>
      <div className="flex flex-col">
        <span className={`text-xl font-bold tracking-tight ${
          isScrolled || isDark ? 'text-gray-900 dark:text-white' : 'text-white'
        }`}>
          KD Marble<span className="text-amber-500">&</span>Granite
        </span>
        <span className={`text-xs tracking-wider ${
          isScrolled || isDark ? 'text-gray-600 dark:text-gray-400' : 'text-gray-200'
        }`}>
          PREMIUM STONE SOLUTIONS
        </span>
      </div>
    </Link>
  );
};

export default Logo; 