import React from 'react';
import AboutUsDialog from './AboutUsDialog';

const Header = () => {
  return (
    <div className="relative min-h-screen">
      {/* Video Background - تم تحديث خصائص العرض */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-screen h-screen object-cover scale-110 -z-10"
        style={{ transform: 'scale(1.1)' }}
      >
        <source src="/vedio/green 4545.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/5 backdrop-blur-[2px] shadow-lg">
        <div className="container mx-auto flex flex-col sm:flex-row justify-start items-center py-4 px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:w-auto">
            <a 
              href="#" 
              className="text-white hover:text-primary-light transition-all duration-300 text-lg sm:text-xl font-bold font-poppins mb-2 sm:mb-0"
            >
              الرئيسية
            </a>
            <AboutUsDialog />
            <a 
              href="https://wa.me/201030435987"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-[#0FA0CE] to-[#33C3F0] text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg 
                       text-lg sm:text-xl font-bold font-poppins transition-all duration-300 transform 
                       hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
            >
              احجز الان
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 min-h-screen flex flex-col justify-center items-center relative">
        <div className="text-center space-y-6 sm:space-y-8" dir="rtl">
          {/* Content can be added here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Header;