import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

const Header = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <header className="relative min-h-screen">
      {/* خلفية الصفحة */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
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
            {/* الشريحة الأولى */}
            <CarouselItem className="md:basis-full">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 glass-card">
                <div className="md:w-1/2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">دار بأيدي مختصين</h2>
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                    إذا احتجت إلى المساعدة المخصصة أو العادية في إدارة سيرفرك أو استضافك، يسعدنا تقديمها لك على مدار 24/7.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/abad6bc5-8225-4f5e-bba4-215c6d0c1bc5.png" 
                    alt="خدمات السيرفر"
                    className="w-full h-auto rounded-lg shadow-xl animate-float"
                  />
                </div>
              </div>
            </CarouselItem>

            {/* الشريحة الثانية */}
            <CarouselItem className="md:basis-full">
              <div className="flex flex-col items-center gap-8 p-6 glass-card">
                <img 
                  src="/lovable-uploads/c4936bd9-beff-40a9-87e1-368e23abe8cb.png" 
                  alt="استضافة VIP"
                  className="w-full max-w-2xl h-auto rounded-lg shadow-xl animate-float"
                />
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">استضافات مخصصة ودعم فني VIP</h2>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          <div className="mt-8">
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/40 border-primary" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/40 border-primary" />
          </div>
        </Carousel>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/portfolio">
            <Button className="btn-primary text-lg">تصفح أعمالنا</Button>
          </Link>
          <Button variant="outline" className="text-white border-primary hover:bg-primary/20">
            تواصل معنا
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;