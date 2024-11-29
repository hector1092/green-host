import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = Array.from({ length: 13 }, (_, index) => ({
    id: index + 1,
    title: `مشروع ${index + 1}`,
    description: "وصف تفصيلي للمشروع يوضح المميزات والتقنيات المستخدمة",
    image: "/lovable-uploads/e8cc55cd-78e6-4feb-b3ed-454994a7c73f.png",
    link: `/portfolio/project-${index + 1}`
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-24" dir="rtl">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          سابقة أعمال تصميم المواقع
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="relative group">
              {/* Computer Frame */}
              <div className="relative bg-gray-800 rounded-lg p-3">
                {/* Monitor Frame */}
                <div className="bg-gray-900 rounded-t-lg p-2">
                  {/* Screen Content */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-white">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay with Project Info */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-200 mb-4 text-center">
                        {project.description}
                      </p>
                      <Link 
                        to={project.link}
                        className="btn-primary text-sm"
                      >
                        عرض المشروع
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Monitor Stand */}
                <div className="flex justify-center">
                  <div className="w-1/4 h-4 bg-gray-700 rounded-b-lg"></div>
                  <div className="w-1/6 h-1 bg-gray-600 absolute -bottom-1"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;