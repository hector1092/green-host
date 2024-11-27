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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary backdrop-blur-lg shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-primary animate-spin-slow" />
            <span className="text-2xl font-bold text-primary">Green Host</span>
          </div>
          
          <div className="flex gap-8 text-lg items-center">
            <a href="#" className="nav-link font-bold text-xl hover:text-primary-light">الرئيسية</a>
            <AboutUsDialog />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 min-h-screen flex flex-col justify-center items-center relative">
        <div className="text-center space-y-8" dir="rtl">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-primary via-primary-light to-primary text-transparent bg-clip-text animate-text-flow drop-shadow-lg">
            مرحباً بك في
          </h1>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 drop-shadow-2xl tracking-wider">
            Green Host
          </h2>
          <p className="text-2xl md:text-3xl text-gray-200 mb-8 font-semibold leading-relaxed max-w-3xl mx-auto">
            استضافة موثوقة وسريعة لأعمالك مع أفضل الخدمات والدعم الفني على مدار الساعة
          </p>
          <a 
            href="https://wa.me/201030435987"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full text-xl font-bold
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