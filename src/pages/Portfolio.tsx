import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#141722] to-[#1A1F2C] py-24" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#33C3F0] via-[#66D4F4] to-[#33C3F0] bg-clip-text text-transparent">
            معرض أعمالنا
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            نقدم لكم مجموعة متميزة من المشاريع التي تعكس خبرتنا وإبداعنا في مجال تطوير المواقع الإلكترونية
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
            <div className="h-48 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-primary text-lg">قريباً</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">تصميم موقع شركة</h3>
            <p className="text-gray-400">موقع احترافي لشركة تقنية مع واجهة مستخدم حديثة</p>
          </div>

          {/* Project Card 2 */}
          <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
            <div className="h-48 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-primary text-lg">قريباً</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">متجر إلكتروني</h3>
            <p className="text-gray-400">منصة تسوق إلكترونية متكاملة مع نظام دفع آمن</p>
          </div>

          {/* Project Card 3 */}
          <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
            <div className="h-48 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-primary text-lg">قريباً</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">تطبيق موبايل</h3>
            <p className="text-gray-400">تطبيق جوال متكامل مع واجهة مستخدم سلسة</p>
          </div>

          {/* Project Card 4 */}
          <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
            <div className="h-48 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-primary text-lg">قريباً</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">نظام إدارة محتوى</h3>
            <p className="text-gray-400">منصة متكاملة لإدارة المحتوى الرقمي</p>
          </div>

          {/* Project Card 5 */}
          <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
            <div className="h-48 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-primary text-lg">قريباً</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">منصة تعليمية</h3>
            <p className="text-gray-400">نظام تعليم إلكتروني متكامل مع ميزات تفاعلية</p>
          </div>

          {/* Project Card 6 */}
          <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
            <div className="h-48 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-primary text-lg">قريباً</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">بوابة خدمات</h3>
            <p className="text-gray-400">منصة خدمات إلكترونية متعددة الاستخدامات</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;