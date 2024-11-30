import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "نظام تحليل البيانات المتقدم",
      description: "منصة متطورة لتحليل البيانات الضخمة وعرض النتائج بشكل تفاعلي"
    },
    {
      id: 2,
      title: "منصة البرمجة التفاعلية",
      description: "بيئة برمجة متكاملة للتعلم والتطوير بأحدث التقنيات"
    },
    {
      id: 3,
      title: "نظام إدارة الشبكات",
      description: "حل متكامل لإدارة ومراقبة الشبكات بكفاءة عالية"
    },
    {
      id: 4,
      title: "منصة الذكاء الاصطناعي",
      description: "تطبيقات ذكاء اصطناعي متقدمة لحل المشكلات المعقدة"
    },
    {
      id: 5,
      title: "نظام الأمن السيبراني",
      description: "حماية متقدمة للبيانات والأنظمة من التهديدات الإلكترونية"
    },
    {
      id: 6,
      title: "منصة الروبوتات المتقدمة",
      description: "برمجة وإدارة الروبوتات الذكية للتطبيقات الصناعية"
    },
    {
      id: 7,
      title: "نظام معالجة البيانات",
      description: "معالجة وتحليل البيانات المعقدة باستخدام خوارزميات متطورة"
    },
    {
      id: 8,
      title: "منصة المراقبة الذكية",
      description: "نظام مراقبة ذكي متكامل مع تقنيات التعرف على الأنماط"
    },
    {
      id: 9,
      title: "نظام التصميم التفاعلي",
      description: "منصة تصميم متقدمة مع واجهات مستخدم تفاعلية"
    },
    {
      id: 10,
      title: "منصة التعاون الافتراضي",
      description: "بيئة عمل افتراضية متكاملة للمشاريع التقنية المتقدمة"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-24" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#33C3F0] via-[#66D4F4] to-[#33C3F0] bg-clip-text text-transparent">
            معرض المشاريع المتقدمة
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            مجموعة من المشاريع التقنية المتقدمة التي تعكس خبرتنا في مجال الحوسبة والبرمجة
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col items-center">
              {/* Computer Screen Design */}
              <div className="relative w-full aspect-[4/3] mb-6">
                {/* Screen Frame */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-2">
                  {/* Screen Content */}
                  <div className="relative h-full bg-white rounded border border-gray-200 p-4">
                    {/* Screen Header */}
                    <div className="absolute top-2 left-2 flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    {/* Project Content */}
                    <div className="h-full flex flex-col items-center justify-center text-center p-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-gray-600 text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
                {/* Stand */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded"></div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-800 rounded-full"></div>
              </div>
              
              {/* View Project Button */}
              <Link 
                to={`/portfolio/project-${project.id}`}
                className="btn-primary mt-4 w-full max-w-xs text-center"
              >
                عرض المشروع
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;