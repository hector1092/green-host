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
        style={{ filter: 'brightness(0.4)' }}
      >
        <source src="/vedio/green 4545.mp4" type="video/mp4" />
      </video>

      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/50 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
          </div>
          
          <div className="flex gap-8 text-lg items-center">
            <a href="#" className="nav-link font-bold text-xl hover:text-primary-light drop-shadow-lg">الرئيسية</a>
            <AboutUsDialog />
            <a 
              href="https://wa.me/201030435987"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              احجز الان
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 min-h-screen flex flex-col justify-center items-center relative">
        <div className="text-center space-y-8" dir="rtl">
          <a 
            href="https://wa.me/201030435987"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full text-xl font-bold
                     hover:bg-primary-dark transition-all duration-300 transform hover:scale-105
                     shadow-lg hover:shadow-primary/30 drop-shadow-lg"
          >
            احجز الان
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;