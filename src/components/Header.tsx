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
        playsInline
        preload="auto"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        style={{ 
          willChange: 'transform',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto'
        }}
      >
        <source src="/vedio/green 4545.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/10 backdrop-blur-[2px]">
        <div className="container mx-auto flex justify-start items-center py-4 px-8">
          <div className="flex items-center gap-8">
            <a href="#" className="text-white hover:text-primary-light transition-all duration-300 text-xl font-bold">
              الرئيسية
            </a>
            <AboutUsDialog />
            <a 
              href="https://wa.me/201030435987"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0FA0CE] hover:bg-[#0D8CB6] text-white px-8 py-3 rounded-lg text-xl font-bold
                       transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
              style={{
                background: 'linear-gradient(45deg, #0FA0CE, #33C3F0)',
                boxShadow: '0 4px 15px rgba(15, 160, 206, 0.3)'
              }}
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