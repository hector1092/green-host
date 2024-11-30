import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "نظام تحليل البيانات المتقدم",
      description: "منصة متطورة لتحليل البيانات الضخمة وعرض النتائج بشكل تفاعلي",
      imageUrl: "https://engazmedia.com/wp-content/uploads/2024/10/screencapture-autoline-car-rent-2024-10-29-12_44_42.png"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col h-full"
            >
              <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-lg shadow-lg">
                {project.imageUrl && (
                  <motion.img
                    src={project.imageUrl}
                    alt={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              
              <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                
                <Link 
                  to={`/portfolio/project-${project.id}`}
                  className="btn-primary mt-4 inline-block"
                >
                  عرض المشروع
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
