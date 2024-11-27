import React from 'react';
import { Star } from 'lucide-react';

const Ratings = () => {
  const ratings = [
    {
      rating: 4.7,
      reviews: 874,
      name: "WPBeginner"
    },
    {
      rating: 4.6,
      reviews: 2432,
      name: "HostAdvice"
    },
    {
      rating: 4.8,
      reviews: 1237,
      name: "Google"
    },
    {
      rating: 4.7,
      reviews: 35703,
      name: "TrustPilot"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-6 h-6 ${
              index < Math.floor(rating)
                ? 'fill-primary text-primary'
                : 'fill-gray-300 text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-secondary/95 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">تقييمات العملاء</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ratings.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-xl font-bold text-primary mb-2">{item.name}</h3>
                {renderStars(item.rating)}
                <div className="text-center">
                  <p className="text-xl font-bold text-white mb-1">
                    {item.rating} / 5
                  </p>
                  <p className="text-gray-300">
                    {item.reviews.toLocaleString()} تقييم
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ratings;