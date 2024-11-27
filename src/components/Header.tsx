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
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary via-primary/20 to-secondary opacity-90" />
        </div>

        <div className="text-center space-y-8" dir="rtl">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-primary via-primary-light to-primary text-transparent bg-clip-text animate-text-flow drop-shadow-lg">
            مرحباً بك في
          </h1>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 drop-shadow-2xl tracking-wider">
            Green Host
          </h2>
          <p className="text-3xl md:text-4xl text-white mb-8 font-bold leading-relaxed max-w-3xl mx-auto bg-secondary/70 backdrop-blur-sm p-6 rounded-xl shadow-xl">
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:bg-white/20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">سرعة</h3>
              <p className="text-gray-300">خوادم فائقة السرعة تضمن أداءً استثنائياً</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:bg-white/20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">أمان</h3>
              <p className="text-gray-300">حماية متقدمة وشهادات SSL مجانية</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:bg-white/20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">احترافية</h3>
              <p className="text-gray-300">دعم فني محترف على مدار الساعة</p>
            </div>
          </div>

          <a 
            href="https://wa.me/201030435987"
            target="_blank"
            rel="noopener noreferrer"
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
