import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "سوق التكييفات",
      description: "منصة متطورة لبيع وشراء أجهزة التكييف",
      websiteUrl: "https://souqeltakeefat.com/",
      imageUrls: [
        "/lovable-uploads/27ff4a97-b611-44c7-92d2-7bafcb22bfc9.png",
      ]
    },
    {
      id: 2,
      title: "معرض الحلويات المصري",
      description: "معرض متخصص في صناعة الحلويات والشوكولاتة",
      websiteUrl: "https://egysweetexpo.com/",
      imageUrls: [
        "/lovable-uploads/a463352f-010c-4c9d-b1d8-3527f67986ab.png",
      ]
    },
    {
      id: 3,
      title: "معرض المفروشات",
      description: "معرض متخصص في المفروشات والأثاث المنزلي",
      websiteUrl: "https://coverexexpo.com/",
      imageUrls: [
        "/lovable-uploads/80df9451-829d-4587-867d-f476d28bde88.png",
      ]
    },
    {
      id: 4,
      title: "أوتو لاين لتأجير السيارات",
      description: "منصة متخصصة في تأجير السيارات",
      websiteUrl: "https://autoline-car-rent.com/",
      imageUrls: [
        "/lovable-uploads/e1eca2e5-3149-4c0e-bb63-4ec8daf53e48.png",
      ]
    },
    {
      id: 5,
      title: "شركة المنارة للاستشارات",
      description: "شركة متخصصة في الاستشارات الهندسية",
      websiteUrl: "https://al-manaraconsult.com/",
      imageUrls: [
        "/lovable-uploads/af464e9d-ade3-4ea3-85ba-b1ed2be1ac3a.png",
      ]
    },
    {
      id: 6,
      title: "منصة الروبوتات المتقدمة",
      description: "برمجة وإدارة الروبوتات الذكية للتطبيقات الصناعية",
      websiteUrl: "https://www.siagates.com/"
    },
    {
      id: 7,
      title: "نظام معالجة البيانات",
      description: "معالجة وتحليل البيانات المعقدة باستخدام خوارزميات متطورة",
      websiteUrl: "https://bakarmanfoods.com/"
    },
    {
      id: 8,
      title: "منصة المراقبة الذكية",
      description: "نظام مراقبة ذكي متكامل مع تقنيات التعرف على الأنماط",
      websiteUrl: "https://lamozencairo.com/"
    },
    {
      id: 9,
      title: "نظام التصميم التفاعلي",
      description: "منصة تصميم متقدمة مع واجهات مستخدم تفاعلية",
      websiteUrl: "https://supernovauae.ae/"
    },
    {
      id: 10,
      title: "منصة التعاون الافتراضي",
      description: "بيئة عمل افتراضية متكاملة للمشاريع التقنية المتقدمة",
      websiteUrl: "https://souqeltakeefat.com/"
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
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/3] mb-6">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-2">
                  <div className="relative h-full bg-white rounded border border-gray-200 p-4 overflow-hidden">
                    <div className="absolute top-2 left-2 flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="h-full flex flex-col items-center justify-center text-center">
                      {project.imageUrls ? (
                        <div className="w-full h-full relative">
                          {project.imageUrls.map((imageUrl, index) => (
                            <motion.img
                              key={index}
                              src={imageUrl}
                              alt={`${project.title} - صورة ${index + 1}`}
                              className="w-full h-full object-cover absolute top-0 left-0 rounded"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5 }}
                            />
                          ))}
                        </div>
                      ) : (
                        <>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                          <p className="text-gray-600 text-sm">{project.description}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded"></div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-800 rounded-full"></div>
              </div>
              
              <a 
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 w-full max-w-xs text-center"
              >
                عرض المشروع
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
