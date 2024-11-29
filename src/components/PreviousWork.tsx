import React from 'react';
import { Card, CardContent } from './ui/card';

interface Project {
  id: number;
  title: string;
  image: string;
  buttonText: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'COVEREX',
    image: '/lovable-uploads/33bd22ca-d9de-4b1b-be13-b255704760d4.png',
    buttonText: 'عرض المشروع'
  },
  {
    id: 2,
    title: 'Egy Sweet',
    image: '/lovable-uploads/33bd22ca-d9de-4b1b-be13-b255704760d4.png',
    buttonText: 'عرض التفاصيل'
  },
  {
    id: 3,
    title: 'سوق التكييفات',
    image: '/lovable-uploads/33bd22ca-d9de-4b1b-be13-b255704760d4.png',
    buttonText: 'عرض المشروع'
  },
  // يمكنك إضافة المزيد من المشاريع هنا
];

const PreviousWork = () => {
  return (
    <section className="py-16 px-4 bg-secondary/5" dir="rtl">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
          سابقة أعمال تصميم المواقع
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col items-center">
              <Card className="w-full glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-4">
                  <div className="relative aspect-[4/3] mb-4">
                    <div className="absolute inset-0 bg-[#f6f6f6] rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">{project.title}</h3>
                  <button className="btn-primary w-full">
                    {project.buttonText}
                  </button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousWork;