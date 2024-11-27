import React from 'react';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-secondary via-secondary/80 to-secondary/60 backdrop-blur-lg py-12 sm:py-16 text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-6 sm:space-y-8">
          <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-text-flow mb-4 sm:mb-6">
            Green Host
          </h3>
          <div className="space-y-4">
            <p className="text-xl sm:text-2xl font-semibold text-white">جاهز لتحقيق أحلامك الرقمية؟</p>
            <p className="text-base sm:text-lg text-primary-light">مع Green Host، رحلتك إلى النجاح تبدأ بخطوة واحدة.</p>
            <p className="text-base sm:text-lg text-blue-300">لا تتردد، انضم إلينا اليوم واستمتع بتجربة استضافة استثنائية! 🌐</p>
            <div className="flex items-center justify-center gap-2 bg-primary/10 p-3 sm:p-4 rounded-xl backdrop-blur-sm">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse" />
              <p className="text-base sm:text-lg bg-gradient-to-r from-primary-light to-blue-300 bg-clip-text text-transparent">
                دعم فني دائم | خدمات متميزة | نجاح مضمون
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-base sm:text-lg text-primary-light/80">
            © {new Date().getFullYear()} Green Host. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;