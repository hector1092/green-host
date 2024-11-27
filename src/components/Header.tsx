import React from 'react';
import AboutUsDialog from './AboutUsDialog';
import { Globe } from 'lucide-react';

const Header = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background circles */}
      <div className="hero-circle w-[600px] h-[600px] right-[-100px] top-[-100px]" />
      <div className="hero-circle w-[500px] h-[500px] right-[200px] bottom-[100px] opacity-50" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-[#00BFA5]" />
            <span className="text-2xl font-bold text-[#00BFA5]">Green Host</span>
          </div>
          
          <div className="flex gap-8 text-lg">
            <a href="#" className="nav-link">الرئيسية</a>
            <AboutUsDialog />
            <a href="https://wa.me/201030435987" className="nav-link">اتصل بنا</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center items-center relative">
        <div className="text-center space-y-8" dir="rtl">
          <h1 className="text-2xl md:text-4xl font-bold text-[#00BFA5]">
            مرحباً بك في
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Green Host
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            استضافة موثوقة وسريعة لأعمالك
          </p>
          <a 
            href="https://wa.me/201030435987"
            className="inline-block bg-[#00BFA5] text-white px-8 py-3 rounded-full text-lg font-bold
                     hover:bg-[#00897B] transition-colors duration-300 transform hover:scale-105"
          >
            احجز الان
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;