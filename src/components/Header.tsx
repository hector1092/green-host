import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative min-h-screen bg-secondary">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/lovable-uploads/a902a542-6e79-4b8a-9b1f-fc342e0c73dd.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.95,
          filter: 'brightness(1.3)'
        }}
      />

      {/* Company Name */}
      <div className="absolute top-4 left-4 z-10">
        <h1 className="text-3xl font-bold text-primary">Green & Host</h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-right space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              استضافة مخصصة وVIP
            </h2>
            <h3 className="text-2xl md:text-3xl text-primary-light font-semibold">
              حلول فاخرة لاحتياجاتك الخاصة
            </h3>
            <p className="text-xl md:text-2xl text-white leading-relaxed">
              في Green & Host، نقدم لك أفضل خدمات الاستضافة المخصصة و الـ VIP التي تتميز بالأداء العالي، الأمان الفائق، والدعم المستمر، لتلبية كافة احتياجاتك التقنية من خلال حلول مصممة خصيصًا لك
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;