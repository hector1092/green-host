import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-secondary/95 backdrop-blur-sm z-50 border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="nav-link">الرئيسية</Link>
            <Link to="/portfolio" className="nav-link">تصفح أعمالنا</Link>
            <Link to="#about" className="nav-link">من نحن</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;