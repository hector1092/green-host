import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";

const Header = () => {
  const options = {
    loop: true,
    align: "center" as const,
    containScroll: "trimSnaps" as const
  };

  const autoplayPlugin = React.useMemo(
    () => Autoplay({ delay: 4000, stopOnInteraction: false }),
    []
  );
  
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplayPlugin]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <header className="relative min-h-screen bg-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background.svg')",
          backgroundBlendMode: "normal",
          backgroundColor: "rgba(255, 255, 255, 0.95)"
        }}
      />

      {/* Company Name - Right Side */}
      <div className="absolute top-4 left-4 z-10">
        <h1 className="text-3xl font-bold text-primary">Green & Host</h1>
      </div>

      <div className="container mx-auto px-4 pt-24 min-h-screen flex flex-col justify-center items-center relative">
        <div className="embla w-full max-w-6xl mx-auto overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            <div className="embla__slide flex-[0_0_100%]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 bg-white/90 rounded-xl shadow-lg">
                <div className="md:w-1/2 space-y-6 text-right">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary font-poppins">دعم فني متخصص على مدار الساعة طوال الأسبوع</h2>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-poppins">
                    نحن في Green & Host نقدم لك دعمًا فنيًا محترفًا وخدمات متكاملة لإدارة سيرفرك أو استضافتك. سواء كنت بحاجة إلى مساعدة فنية عاجلة أو استشارات مهنية، نحن هنا لتلبية احتياجاتك في أي وقت. فريقنا المتخصص متواجد على مدار الساعة لضمان استمرارية عمل موقعك بأعلى مستوى من الكفاءة والأمان. تواصل معنا في أي لحظة، وسنكون دائمًا إلى جانبك.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/2.png" 
                    alt="دعم فني متخصص"
                    className="w-full h-auto rounded-lg shadow-xl animate-float object-contain max-h-[400px]"
                    onError={(e) => {
                      console.error('Image failed to load:', e);
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="embla__slide flex-[0_0_100%]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 bg-white/90 rounded-xl shadow-lg">
                <div className="md:w-1/2 space-y-6 text-right">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary font-poppins">استضافة مخصصة وفائقة التميز</h2>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-poppins">
                    Green host نحن متخصصون في حلول الاستضافة التي تدار بالكامل من قبلنا، وعندما تحتاج إلى المساعدة المخصصة أو العادية في إدارة الاستضافة، يسعدنا تقديمها لك.
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary font-poppins">استضافات مخصصة ودعم فني VIP</h3>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/1.png" 
                    alt="استضافة مخصصة"
                    className="w-full h-auto rounded-lg shadow-xl animate-float object-contain max-h-[400px]"
                    onError={(e) => {
                      console.error('Image failed to load:', e);
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons - Right Side */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-4">
          <button onClick={scrollPrev} className="bg-primary hover:bg-primary-dark text-white border-none h-8 w-8 rounded-full flex items-center justify-center">
            <span className="sr-only">Previous slide</span>
            ←
          </button>
          <button onClick={scrollNext} className="bg-primary hover:bg-primary-dark text-white border-none h-8 w-8 rounded-full flex items-center justify-center">
            <span className="sr-only">Next slide</span>
            →
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;