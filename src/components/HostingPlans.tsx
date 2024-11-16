import React from 'react';
import { HardDrive, Network, Mail, Globe, Database, Shield, Clock, Check } from 'lucide-react';

const plans = [
  {
    name: "خطة البداية",
    price: "1500",
    description: "مثالية للمشاريع الصغيرة والمواقع الشخصية",
    features: [
      { text: "مساحة 3 جيجا بايت", icon: HardDrive },
      { text: "باندويدث 30,000 جيجا بايت شهرياً", icon: Network },
      { text: "5 إيميلات رسمية", icon: Mail },
      { text: "ربط الدومين مع الاستضافة", icon: Globe },
      { text: "تركيب ووردبريس", icon: Database },
      { text: "نسخ احتياطي يومي", icon: Clock },
    ]
  },
  {
    name: "خطة الأعمال المتوسطة",
    price: "2000",
    description: "مثالية للشركات الصغيرة والمتوسطة",
    features: [
      { text: "مساحة 6 جيجا بايت", icon: HardDrive },
      { text: "باندويدث 60,000 جيجا بايت شهرياً", icon: Network },
      { text: "10 إيميلات رسمية", icon: Mail },
      { text: "ربط الدومين مع الاستضافة", icon: Globe },
      { text: "تركيب ووردبريس", icon: Database },
      { text: "نسخ احتياطي يومي", icon: Clock },
    ]
  },
  {
    name: "خطة الأعمال المتقدمة",
    price: "2500",
    description: "مثالية للشركات والمؤسسات الكبيرة",
    features: [
      { text: "مساحة 15 جيجا بايت", icon: HardDrive },
      { text: "باندويدث 150,000 جيجا بايت شهرياً", icon: Network },
      { text: "20 إيميل رسمي", icon: Mail },
      { text: "ربط الدومين مع الاستضافة", icon: Globe },
      { text: "تركيب ووردبريس", icon: Database },
      { text: "دعم فني متقدم 24/7", icon: Clock },
    ]
  },
  {
    name: "خطة الاستضافة الشاملة",
    price: "2999",
    description: "الحل الأمثل للمشاريع الكبيرة",
    popular: true,
    features: [
      { text: "مساحة غير محدودة", icon: HardDrive },
      { text: "باندويدث غير محدود", icon: Network },
      { text: "إيميلات رسمية غير محدودة", icon: Mail },
      { text: "ربط الدومين مع الاستضافة", icon: Globe },
      { text: "تركيب ووردبريس", icon: Database },
      { text: "حماية متقدمة من الفيروسات", icon: Shield },
      { text: "دعم فني متقدم 24/7", icon: Clock },
    ]
  }
];

const HostingPlans = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="heading text-center mb-4">خطط الاستضافة</h2>
        <p className="text-gray-200 font-bold text-center mb-16">اختر الخطة المناسبة لمشروعك</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-secondary/80 p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all duration-300 relative ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm">
                  عرض محدود
                </span>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                <div className="text-4xl font-bold text-white mb-8">
                  {plan.price}
                  <span className="text-xl text-gray-400"> ج.م/شهرياً</span>
                </div>
                <ul className="space-y-4 mb-8 text-right">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <feature.icon className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-gray-200 text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-secondary-foreground/10 text-white hover:bg-secondary-foreground/20'
                }`}>
                  اختر الخطة
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingPlans;