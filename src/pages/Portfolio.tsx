import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "نظام تحليل البيانات المتقدم",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "منصة متطورة لتحليل البيانات الضخمة وعرض النتائج بشكل تفاعلي"
    },
    {
      id: 2,
      title: "منصة البرمجة التفاعلية",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "بيئة برمجة متكاملة للتعلم والتطوير بأحدث التقنيات"
    },
    {
      id: 3,
      title: "نظام إدارة الشبكات",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description: "حل متكامل لإدارة ومراقبة الشبكات بكفاءة عالية"
    },
    {
      id: 4,
      title: "منصة الذكاء الاصطناعي",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "تطبيقات ذكاء اصطناعي متقدمة لحل المشكلات المعقدة"
    },
    {
      id: 5,
      title: "نظام الأمن السيبراني",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      description: "حماية متقدمة للبيانات والأنظمة من التهديدات الإلكترونية"
    },
    {
      id: 6,
      title: "منصة الروبوتات المتقدمة",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      description: "برمجة وإدارة الروبوتات الذكية للتطبيقات الصناعية"
    },
    {
      id: 7,
      title: "نظام معالجة البيانات",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      description: "معالجة وتحليل البيانات المعقدة باستخدام خوارزميات متطورة"
    },
    {
      id: 8,
      title: "منصة المراقبة الذكية",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      description: "نظام مراقبة ذكي متكامل مع تقنيات التعرف على الأنماط"
    },
    {
      id: 9,
      title: "نظام التصميم التفاعلي",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
      description: "منصة تصميم متقدمة مع واجهات مستخدم تفاعلية"
    },
    {
      id: 10,
      title: "منصة التعاون الافتراضي",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      description: "بيئة عمل افتراضية متكاملة للمشاريع التقنية المتقدمة"
    }
  ];

  return (
    <div className="min-h-screen bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat py-24" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#33C3F0] via-[#66D4F4] to-[#33C3F0] bg-clip-text text-transparent">
            معرض المشاريع المتقدمة
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            مجموعة من المشاريع التقنية المتقدمة التي تعكس خبرتنا في مجال الحوسبة والبرمجة
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="glass-card overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <Link 
                  to={`/portfolio/project-${project.id}`}
                  className="btn-primary inline-block text-center w-full"
                >
                  عرض المشروع
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;