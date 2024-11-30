import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#141722] to-[#1A1F2C] py-24" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#33C3F0] via-[#66D4F4] to-[#33C3F0] bg-clip-text text-transparent mb-4">
            معرض أعمالنا
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            نقدم لكم مجموعة من أفضل المشاريع التي قمنا بتنفيذها بكل احترافية وإتقان
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#2A2F3C]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              قريباً
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              سيتم إضافة المشاريع قريباً
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;