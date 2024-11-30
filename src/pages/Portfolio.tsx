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
            <Link to={project.link} key={project.id} className="block">
              <div className="card overflow-hidden">
                <div className="aspect-[16/10] relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;