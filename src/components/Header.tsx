import React from 'react';
import AboutUsDialog from './AboutUsDialog';
import { Globe, Shield, Award, Star } from 'lucide-react';

const Header = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: 'url(/background.svg)' }}
      />
      
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/90 backdrop-blur-sm shadow-lg">
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

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-primary/30 hover:border-primary transition-all duration-300 hover:bg-primary/20 shadow-xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/30 flex items-center justify-center">
                <Star className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">سرعة</h3>
              <p className="text-gray-100">خوادم فائقة السرعة تضمن أداءً استثنائياً</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-primary/30 hover:border-primary transition-all duration-300 hover:bg-primary/20 shadow-xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/30 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">أمان</h3>
              <p className="text-gray-100">حماية متقدمة وشهادات SSL مجانية</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-primary/30 hover:border-primary transition-all duration-300 hover:bg-primary/20 shadow-xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/30 flex items-center justify-center">
                <Award className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">احترافية</h3>
              <p className="text-gray-100">دعم فني محترف على مدار الساعة</p>
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