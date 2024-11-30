import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Header = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <header className="relative min-h-screen">
      <div className="fixed top-0 left-0 right-0 bg-secondary/95 backdrop-blur-sm z-50 border-b border-primary/20 px-4 py-2">
        <h1 className="text-2xl md:text-3xl font-bold text-primary text-center">Green & Host</h1>
      </div>
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/lovable-uploads/a902a542-6e79-4b8a-9b1f-fc342e0c73dd.png')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.7)"
        }}
      />

      <div className="container mx-auto px-4 pt-24 min-h-screen flex flex-col justify-center items-center relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-full">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6">
                <div className="md:w-1/2 space-y-6 text-right">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary font-poppins">دار بأيدي مختصين</h2>
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-poppins">
                    إذا احتجت إلى المساعدة المخصصة أو العادية في إدارة سيرفرك أو استضافك، يسعدنا تقديمها لك على مدار 24/7
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/ed45391f-de72-4b42-a18b-f8233c762a25.png" 
                    alt="خدمات مختصين"
                    className="w-full h-auto rounded-lg shadow-xl animate-float object-contain max-h-[400px]"
                  />
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="md:basis-full">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6">
                <div className="md:w-1/2 space-y-6 text-right">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary font-poppins">حلول استضافة متنوعة ومتكاملة</h2>
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-poppins">
                    Green host نحن متخصصون في حلول الاستضافة التي تدار بالكامل من قبلنا، وعندما تحتاج إلى المساعدة المخصصة أو العادية في إدارة الاستضافة، يسعدنا تقديمها لك.
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary font-poppins">استضافات مخصصة ودعم فني VIP</h3>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/c69017eb-6e18-4566-b010-e141caec74e0.png" 
                    alt="حلول استضافة"
                    className="w-full h-auto rounded-lg shadow-xl animate-float object-contain max-h-[400px]"
                  />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/40 border-primary" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/40 border-primary" />
        </Carousel>
      </div>
    </header>
  );
};

export default Header;