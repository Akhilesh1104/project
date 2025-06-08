import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
  isDark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', isScrolled = false, isDark = false }) => {
  return (
    <Link to="/" className={`flex items-center space-x-1 sm:space-x-2 ${className}`}>
      <div className="relative">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg transform rotate-45 flex items-center justify-center">
          <span className="text-white font-bold text-sm sm:text-lg transform -rotate-45">KD</span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-amber-600 rounded-full"></div>
      </div>
      <div className="flex flex-col">
        <span className={`text-base sm:text-xl font-bold tracking-tight ${
          isScrolled || isDark ? 'text-gray-800 dark:text-white' : 'text-gray-800'
        }`}>
          KD Marble<span className="text-amber-500">&</span>Granite
        </span>
        <span className={`text-[10px] sm:text-xs tracking-wider ${
          isScrolled || isDark ? 'text-gray-600 dark:text-gray-500' : 'text-gray-600'
        }`}>
          PREMIUM STONE SOLUTIONS
        </span>
      </div>
    </Link>
  );
};

export default Logo; 