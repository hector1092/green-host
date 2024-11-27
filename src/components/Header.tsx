import React from 'react';
import AboutUsDialog from './AboutUsDialog';

const Header = () => {
  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        style={{ filter: 'brightness(0.6)' }}
      >
        <source src="/vedio/green 4545.mp4" type="video/mp4" />
      </video>

      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary shadow-xl">
        <div className="container mx-auto flex justify-between items-center py-6">
          <div className="flex items-center gap-2">
          </div>
          
          <div className="flex gap-8 text-lg items-center">
            <a href="#" className="nav-link font-bold text-xl hover:text-primary-light transition-all duration-300">الرئيسية</a>
            <AboutUsDialog />
            <a 
              href="https://wa.me/201030435987"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg text-lg font-bold
                       transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              احجز الان
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 min-h-screen flex flex-col justify-center items-center relative">
        <div className="text-center space-y-8" dir="rtl">
          {/* Content can be added here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Header;