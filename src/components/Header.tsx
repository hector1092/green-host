import React from 'react';
import AboutUsDialog from './AboutUsDialog';
import { Globe } from 'lucide-react';

const Header = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background circles */}
      <div className="hero-circle w-[600px] h-[600px] right-[-100px] top-[-100px]" />
      <div className="hero-circle w-[500px] h-[500px] right-[200px] bottom-[100px] opacity-50" />
      
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Globe className="w-8 h-8 text-primary animate-spin-slow" />
              <span className="text-2xl font-bold text-primary">Green Host</span>
            </div>
            <img 
              src="/lovable-uploads/1707ff04-ef84-44d7-af00-f80b3a446b0a.png" 
              alt="Earth" 
              className="w-10 h-10 animate-spin-slow"
            />
          </div>
          
          <div className="flex gap-8 text-lg items-center">
            <a href="#" className="nav-link">الرئيسية</a>
            <AboutUsDialog />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center items-center relative">
        <div className="text-center space-y-8" dir="rtl">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary-light to-primary text-transparent bg-clip-text animate-text-flow">
            مرحباً بك في
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-2xl">
            Green Host
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium leading-relaxed">
            استضافة موثوقة وسريعة لأعمالك مع أفضل الخدمات والدعم الفني على مدار الساعة
          </p>
          <a 
            href="https://wa.me/201030435987"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-bold
                     hover:bg-primary-dark transition-all duration-300 transform hover:scale-105
                     shadow-lg hover:shadow-primary/30"
          >
            احجز الان
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;