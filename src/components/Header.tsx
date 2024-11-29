import React, { useState, useEffect } from 'react';
import AboutUsDialog from './AboutUsDialog';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
        >
          <source src="/vedio/green 4545.mp4" type="video/mp4" />
          عذراً، متصفحك لا يدعم تشغيل الفيديو.
        </video>
      </div>

      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible 
            ? 'transform translate-y-0 bg-secondary/80 backdrop-blur-md' 
            : 'transform -translate-y-full'
        }`}
      >
        <div className="container mx-auto flex flex-col sm:flex-row justify-start items-center py-1 px-2 sm:px-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <Link 
              to="/" 
              className="text-white hover:text-primary-light transition-all duration-300 text-sm sm:text-base font-bold font-poppins mb-1 sm:mb-0"
            >
              الرئيسية
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-white hover:text-primary-light transition-all duration-300 text-sm sm:text-base font-bold font-poppins mb-1 sm:mb-0">
                سابقة أعمال
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link to="/portfolio">
                  <DropdownMenuItem>
                    تصميم المواقع
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="text-white hover:text-primary-light transition-all duration-300 text-sm sm:text-base font-bold font-poppins cursor-pointer">
              من نحن
            </span>
            <a 
              href="https://wa.me/201030435987"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-[#0FA0CE] to-[#33C3F0] text-white px-2 sm:px-4 py-1 sm:py-1.5 rounded-lg 
                       text-sm sm:text-base font-bold font-poppins transition-all duration-300 transform 
                       hover:scale-105 hover:shadow-xl flex items-center justify-center gap-1"
            >
              احجز الان
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-24 min-h-screen flex flex-col justify-center items-center relative">
        <div className="text-center space-y-6 sm:space-y-8" dir="rtl">
        </div>
      </div>
    </div>
  );
};

export default Header;