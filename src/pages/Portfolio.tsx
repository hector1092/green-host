import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  // إنشاء مصفوفة من 13 مشروعًا
  const projects = Array.from({ length: 13 }, (_, index) => ({
    id: index + 1,
    title: `مشروع ${index + 1}`,
    image: "/lovable-uploads/e8cc55cd-78e6-4feb-b3ed-454994a7c73f.png",
    link: "#"
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-24" dir="rtl">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          سابقة أعمال تصميم المواقع
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="glass-card overflow-hidden group hover:scale-105 transition-all duration-300"
            >
              <div className="relative aspect-[16/10]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="btn-primary text-sm"
                  >
                    عرض المشروع
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white text-center">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;