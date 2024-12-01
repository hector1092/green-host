import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";
import { EmblaOptionsType } from 'embla-carousel';

const Header = () => {
  const options: EmblaOptionsType = {
    loop: true,
    align: "center",
    containScroll: "trimSnaps"
  };

  const autoplayPlugin = Autoplay({
    delay: 4000,
    stopOnInteraction: false
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplayPlugin]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <header className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/3f699391-06d8-481b-8dd9-83347b318678.png')",
          backgroundBlendMode: "overlay",
          opacity: 0.8
        }}
      />

      {/* Company Name */}
      <div className="absolute top-4 left-4 z-10">
        <h1 className="text-3xl font-bold text-primary">Green & Host</h1>
      </div>

      <div className="container mx-auto px-4 pt-24 min-h-screen flex flex-col justify-center items-center relative z-10">
        <div className="text-center space-y-6 glass-card p-8 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary font-poppins">خدمات استضافة متميزة</h2>
          <p className="text-xl md:text-2xl text-white leading-relaxed font-poppins">
            نقدم لكم أفضل خدمات الاستضافة مع دعم فني متخصص على مدار الساعة
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-4 z-20">
        <button 
          onClick={scrollPrev} 
          className="bg-primary hover:bg-primary-dark text-white border-none h-8 w-8 rounded-full flex items-center justify-center transition-colors"
        >
          <span className="sr-only">Previous slide</span>
          ←
        </button>
        <button 
          onClick={scrollNext} 
          className="bg-primary hover:bg-primary-dark text-white border-none h-8 w-8 rounded-full flex items-center justify-center transition-colors"
        >
          <span className="sr-only">Next slide</span>
          →
        </button>
      </div>
    </header>
  );
};

export default Header;