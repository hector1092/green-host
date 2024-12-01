import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { EmblaOptionsType } from 'embla-carousel';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Header = () => {
  const options: EmblaOptionsType = {
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    direction: "rtl"
  };

  const autoplayPlugin = Autoplay({
    delay: 5000,
    stopOnInteraction: false,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplayPlugin]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const slides = [
    {
      title: "استضافة مخصصة وVIP",
      subtitle: "حلول فاخرة لاحتياجاتك الخاصة",
      description: "في Green & Host، نقدم لك أفضل خدمات الاستضافة المخصصة و الـ VIP التي تتميز بالأداء العالي، الأمان الفائق، والدعم المستمر، لتلبية كافة احتياجاتك التقنية من خلال حلول مصممة خصيصًا لك."
    },
    {
      image: "/lovable-uploads/1.png",
      title: "أداء عالي واستقرار دائم",
      subtitle: "خدمة متميزة على مدار الساعة",
      description: "نقدم لك استضافات مخصصة تتمتع بأداء عالي واستقرار دائم، كل ما عليك هو أن تتواصل معنا الآن، وسنقدم لك الحلول المثالية التي تضمن لك استضافة سريعة وآمنة مع دعم فني VIP على مدار الساعة."
    },
    {
      image: "/lovable-uploads/2.png",
      title: "دار بأيدي مختصين",
      subtitle: "دعم فني 24/7",
      description: "إذا احتجت إلى المساعدة المخصصة أو العادية في إدارة سيرفرك أو استضافك، يسعدنا تقديمها لك على مدار 24/7."
    }
  ];

  return (
    <header className="relative min-h-screen bg-secondary">
      {/* Background Image */}
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

      <div className="overflow-hidden relative z-10" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-0"
            >
              <div className="relative h-screen flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                  {/* Image Container */}
                  {slide.image && (
                    <div className="w-full md:w-1/2 relative flex items-center justify-center">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full max-w-xs mx-auto h-auto object-contain rounded-lg shadow-2xl"
                        style={{ maxHeight: '300px' }}
                      />
                    </div>
                  )}

                  {/* Text Content */}
                  <div className={`w-full ${slide.image ? 'md:w-1/2' : ''} text-right space-y-6 animate-fade-in`}>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary drop-shadow-lg">
                      {slide.title}
                    </h2>
                    <h3 className="text-xl md:text-2xl text-primary-light font-semibold drop-shadow-md">
                      {slide.subtitle}
                    </h3>
                    <p className="text-lg md:text-xl text-white leading-relaxed font-medium drop-shadow">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 bottom-20 flex justify-center items-center gap-4 z-20">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-primary/20 hover:bg-primary/40 border-primary"
          onClick={scrollPrev}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">السابق</span>
        </Button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === selectedIndex
                  ? "bg-primary"
                  : "bg-primary/20 hover:bg-primary/40"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            >
              <span className="sr-only">Slide {index + 1}</span>
            </button>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-primary/20 hover:bg-primary/40 border-primary"
          onClick={scrollNext}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">التالي</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;