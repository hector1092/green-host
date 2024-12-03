import React from 'react';
import { Link } from 'react-router-dom';
import AboutUsDialog from './AboutUsDialog';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-secondary/90 backdrop-blur-sm z-50 border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12 sm:h-14">
          {/* Company Name - Left Side */}
          <div className="flex items-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
              Green OF Host
            </h1>
          </div>

          {/* Navigation Links - Right Side */}
          <div className="flex items-center space-x-3 sm:space-x-6">
            <Link to="/" className="nav-link text-sm sm:text-base">الرئيسية</Link>
            <Link to="/portfolio" className="nav-link text-sm sm:text-base">تصفح أعمالنا</Link>
            <AboutUsDialog />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;