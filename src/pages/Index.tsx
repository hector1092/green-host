import React from 'react';
import { Heart } from 'lucide-react';
import Header from '../components/Header';
import HostingPlans from '../components/HostingPlans';
import PaymentMethods from '../components/PaymentMethods';
import Ratings from '../components/Ratings';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative text-right overflow-hidden bg-white" dir="rtl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#40E0D0] to-[#48e9e0] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                تصميم. تطوير. استضافة.
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                احصل على أفضل خدمات الاستضافة مع دعم فني متميز على مدار الساعة
              </p>
              <button className="bg-white text-[#40E0D0] px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
                ابدأ الآن
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img 
                src="/lovable-uploads/09e3fd80-b642-47d3-8fb9-07a8ad136c31.png" 
                alt="Hero" 
                className="w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">لماذا تختارنا؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#40E0D0] rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">دعم فني متميز</h3>
              <p className="text-gray-600">نوفر لك دعماً فنياً على مدار الساعة لحل جميع مشاكلك</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#40E0D0] rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">خدمات استضافة سريعة</h3>
              <p className="text-gray-600">استضافة تتميز بالسرعة والكفاءة لضمان أداء موقعك</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#40E0D0] rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">أسعار تنافسية</h3>
              <p className="text-gray-600">نقدم لك أفضل الأسعار مقابل خدمات راقية</p>
            </div>
          </div>
        </div>
      </div>

      <HostingPlans />
      <PaymentMethods />
      <Ratings />

      {/* Newsletter Section */}
      <div className="bg-[#40E0D0] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">اشترك في نشرتنا البريدية</h2>
          <p className="text-white opacity-90 mb-8">احصل على آخر الأخبار والعروض مباشرة إلى بريدك الإلكتروني</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="بريدك الإلكتروني" 
              className="flex-1 px-4 py-3 rounded-full focus:outline-none"
            />
            <button className="bg-white text-[#40E0D0] px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
              اشتراك
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
