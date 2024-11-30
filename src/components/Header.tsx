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
            <CarouselItem className="md:basis-full">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6">
                <div className="md:w-1/2 space-y-6 text-right">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">حلول برمجية متكاملة</h2>
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                    نحن متخصصون في حلول الاستضافة التي تدار بالكامل من قبلنا، وعندما تحتاج إلى المساعدة المخصصة أو العادية في إدارة الاستضافة، يسعدنا تقديمها لك.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/2def3e78-89d2-47d7-b28e-dadd8e032b06.png" 
                    alt="حلول برمجية"
                    className="w-full h-auto rounded-lg shadow-xl animate-float"
                  />
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="md:basis-full">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6">
                <div className="md:w-1/2 space-y-6 text-right">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">حلول استضافة متنوعة ومتكاملة</h2>
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                    Green host نحن متخصصون في حلول الاستضافة التي تدار بالكامل من قبلنا، وعندما تحتاج إلى المساعدة المخصصة أو العادية في إدارة الاستضافة، يسعدنا تقديمها لك.
                  </p>
                  <h3 className="text-2xl font-bold text-primary">استضافات مخصصة ودعم فني VIP</h3>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/b137125e-7f9b-443b-b255-57623531a05b.png" 
                    alt="حلول استضافة"
                    className="w-full h-auto rounded-lg shadow-xl animate-float"
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