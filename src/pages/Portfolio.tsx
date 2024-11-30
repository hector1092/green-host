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
              {/* Mac-Style Display Frame */}
              <div className="relative bg-[#a1a1a6] rounded-[20px] p-3 shadow-2xl">
                {/* Screen Bezel */}
                <div className="bg-black rounded-[18px] overflow-hidden border-[3px] border-[#121214]">
                  {/* Notch Area */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black w-[80px] h-[20px] rounded-b-lg z-10 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-black border border-gray-800"></div>
                    <div className="w-1 h-1 rounded-full bg-[#1a1a1a]"></div>
                  </div>
                  {/* Screen Content */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-white">
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
                {/* Mac-Style Stand */}
                <div className="flex justify-center mt-3">
                  <div className="w-20 h-[60px] bg-[#a1a1a6] rounded-b-lg relative">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-[#909095] rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-36 h-[6px] bg-[#909095] rounded-full"></div>
                  </div>
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