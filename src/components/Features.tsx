import React from 'react';
import { Shield, Rocket, HeadphonesIcon, Server, Database, Code, Cog, Lock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "آمن وموثوق",
      description: "نوفر خدمات استضافة آمنة مع حماية عالية المستوى"
    },
    {
      icon: Rocket,
      title: "سرعة فائقة",
      description: "خوادم سريعة وموثوقة لتحميل موقعك بسرعة عالية"
    },
    {
      icon: HeadphonesIcon,
      title: "دعم العملاء",
      description: "فريق دعم فني متخصص متواجد على مدار الساعة"
    }
  ];

  const additionalFeatures = [
    {
      icon: Server,
      title: "إعداد فوري",
      description: "تجهيز الخادم وتفعيل الخدمة بشكل فوري"
    },
    {
      icon: Database,
      title: "نسخ احتياطي مستمر",
      description: "نسخ احتياطي يومي تلقائي لجميع بياناتك"
    },
    {
      icon: Code,
      title: "دعم Git/SVN",
      description: "دعم كامل لأنظمة إدارة الإصدارات"
    },
    {
      icon: Cog,
      title: "لوحة تحكم cPanel",
      description: "لوحة تحكم احترافية سهلة الاستخدام"
    },
    {
      icon: Lock,
      title: "أحدث إصدارات PHP و MySQL",
      description: "دعم لأحدث إصدارات PHP و MySQL مع تحديثات مستمرة"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
              <feature.icon className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-2">المزيد من المميزات</h2>
          <p className="text-gray-300">ستحصل على الكثير من المميزات مع خدماتنا</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-800/30 rounded-xl hover:bg-gray-700/30 transition-all duration-300">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;