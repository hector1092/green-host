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
    <header className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/lovable-uploads/a902a542-6e79-4b8a-9b1f-fc342e0c73dd.png')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(255, 255, 255, 0.9)"
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
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 glass-card">
                <div className="md:w-1/2 space-y-6 text-right">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary font-poppins">حلول برمجية متكاملة</h2>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-poppins">
                    نحن متخصصون في حلول الاستضافة التي تدار بالكامل من قبلنا، وعندما تحتاج إلى المساعدة المخصصة أو العادية في إدارة الاستضافة، يسعدنا تقديمها لك.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/2def3e78-89d2-47d7-b28e-dadd8e032b06.png" 
                    alt="حلول برمجية"
                    className="w-full h-auto rounded-lg shadow-xl animate-float object-contain max-h-[400px]"
                  />
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="md:basis-full">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 glass-card">
                <div className="md:w-1/2 space-y-6 text-right">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary font-poppins">دعم فني متخصص على مدار الساعة طوال الأسبوع</h2>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-poppins">
                    نحن في Green & Host نقدم لك دعمًا فنيًا محترفًا وخدمات متكاملة لإدارة سيرفرك أو استضافتك. سواء كنت بحاجة إلى مساعدة فنية عاجلة أو استشارات مهنية، نحن هنا لتلبية احتياجاتك في أي وقت. فريقنا المتخصص متواجد على مدار الساعة لضمان استمرارية عمل موقعك بأعلى مستوى من الكفاءة والأمان. تواصل معنا في أي لحظة، وسنكون دائمًا إلى جانبك.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/694ceddf-2151-4bf8-8161-3da8a4ed81a5.png" 
                    alt="دعم فني"
                    className="w-full h-auto rounded-lg shadow-xl animate-float object-contain max-h-[400px]"
                  />
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="md:basis-full">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 glass-card">
                <div className="md:w-1/2 space-y-6 text-right">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary font-poppins">استضافة مخصصة وفائقة التميز</h2>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/a487d68e-7260-41ef-804e-3d9bfff8634f.png" 
                    alt="استضافة مخصصة"
                    className="w-full h-auto rounded-lg shadow-xl animate-float object-contain max-h-[400px]"
                  />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-primary text-primary" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-primary text-primary" />
        </Carousel>
      </div>
    </header>
  );
};

export default Header;