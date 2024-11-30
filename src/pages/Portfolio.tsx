import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "تصميم موقع إلكتروني",
      description: "تصميم موقع إلكتروني متجاوب مع كافة الأجهزة",
      embed: "https://www.canva.com/design/DAGX9NOrKRw/jJpZNdRIyTP601axng5iYA/view?embed",
      link: `/portfolio/project-1`
    },
    // ... باقي المشاريع تبقى كما هي
    ...Array.from({ length: 12 }, (_, index) => ({
      id: index + 2,
      title: `مشروع ${index + 2}`,
      description: "وصف تفصيلي للمشروع يوضح المميزات والتقنيات المستخدمة",
      image: "/lovable-uploads/e8cc55cd-78e6-4feb-b3ed-454994a7c73f.png",
      link: `/portfolio/project-${index + 2}`
    }))
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-24" dir="rtl">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          سابقة أعمال تصميم المواقع
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="relative group">
              <div className="relative bg-gray-800 rounded-lg p-3">
                <div className="bg-gray-900 rounded-t-lg p-2">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-white">
                    {project.embed ? (
                      <iframe 
                        src={project.embed}
                        className="w-full h-full"
                        allowFullScreen
                        loading="lazy"
                        title={project.title}
                      />
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
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