import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  
  // هنا يمكنك إضافة المزيد من التفاصيل الخاصة بكل مشروع
  const projectDetails = {
    title: `مشروع ${id}`,
    description: "وصف تفصيلي للمشروع يوضح المميزات والتقنيات المستخدمة",
    image: "/lovable-uploads/e8cc55cd-78e6-4feb-b3ed-454994a7c73f.png",
    features: [
      "تصميم متجاوب",
      "واجهة مستخدم حديثة",
      "أداء عالي",
      "تجربة مستخدم مميزة"
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-24" dir="rtl">
      <div className="container mx-auto px-4">
        <Link to="/portfolio" className="text-primary hover:text-primary-light mb-8 inline-block">
          ← العودة إلى المشاريع
        </Link>
        
        <div className="glass-card p-8">
          <h1 className="text-4xl font-bold text-white mb-6">{projectDetails.title}</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-gray-200">{projectDetails.description}</p>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">المميزات:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-200">
                  {projectDetails.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">التقنيات المستخدمة:</h3>
                <div className="flex flex-wrap gap-2">
                  {projectDetails.technologies.map((tech, index) => (
                    <span key={index} className="bg-primary/20 text-primary px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative aspect-video">
              <img 
                src={projectDetails.image} 
                alt={projectDetails.title}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;