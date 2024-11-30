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
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#141722] to-[#1A1F2C] py-24" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#33C3F0] via-[#66D4F4] to-[#33C3F0] bg-clip-text text-transparent mb-4">
            معرض أعمالنا
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            نقدم لكم مجموعة من أفضل المشاريع التي قمنا بتنفيذها بكل احترافية وإتقان
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link to={project.link} key={project.id} className="group">
              <div className="bg-[#2A2F3C]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:border-[#33C3F0]/30 hover:shadow-lg hover:shadow-[#33C3F0]/5">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#33C3F0] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
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