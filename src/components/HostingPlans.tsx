import React from 'react';
import { HardDrive, Network, Mail, Globe, Database, Shield, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "خطة البداية",
    price: "1500",
    description: "مثالية للمشاريع الصغيرة والمواقع الشخصية",
    features: [
      { text: "مساحة 3 جيجا بايت", icon: HardDrive },
      { text: "باندويدث 30,000 جيجا بايت شهرياً", icon: Network },
      { text: "5 إيميلات رسمية", icon: Mail },
      { text: "دومين بسعر خاص", icon: Globe },
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
      { text: "دومين بسعر خاص", icon: Globe },
      { text: "تركيب ووردبريس", icon: Database },
      { text: "نسخ احتياطي يومي", icon: Clock },
    ]
  },
  {
    name: "خطة الأعمال المتقدمة",
    price: "3000",
    description: "مثالية للشركات والمؤسسات الكبيرة",
    features: [
      { text: "مساحة 15 جيجا بايت", icon: HardDrive },
      { text: "باندويدث 150,000 جيجا بايت شهرياً", icon: Network },
      { text: "20 إيميل رسمي", icon: Mail },
      { text: "دومين بسعر خاص", icon: Globe },
      { text: "تركيب ووردبريس", icon: Database },
      { text: "دعم فني متقدم 24/7", icon: Clock },
    ]
  },
  {
    name: "خطة الاستضافة الشاملة",
    price: "5000",
    description: "الحل الأمثل للمشاريع الكبيرة",
    features: [
      { text: "مساحة تخزينية غير محدودة", icon: HardDrive },
      { text: "نقل بيانات شهري غير محدود", icon: Network },
      { text: "عدد غير محدود من الإيميلات الرسمية", icon: Mail },
      { text: "دومين مجاني", icon: Globe },
      { text: "تركيب وتجهيز ووردبريس", icon: Database },
      { text: "حماية متقدمة من الفيروسات والهجمات", icon: Shield },
      { text: "دعم فني متميز على مدار الساعة", icon: Clock },
    ]
  }
];

const HostingPlans = () => {
  const handleSubscribe = () => {
    window.open('https://wa.me/201030435987', '_blank');
  };

  return (
    <section dir="rtl" className="py-24 bg-secondary/95">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-black text-primary mb-6 text-center drop-shadow-lg">
          خطط الاستضافة
        </h2>
        <p className="text-2xl font-bold text-gray-200 mb-16 text-center">
          اختر الخطة المناسبة لمشروعك
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-primary/20"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary mb-4">{plan.name}</h3>
                <p className="text-xl text-gray-300 mb-6">{plan.description}</p>
                <div className="text-5xl font-black text-white mb-8 drop-shadow-lg">
                  {plan.price}
                  <span className="text-2xl text-gray-300"> ج.م</span>
                </div>
                <ul className="space-y-6 mb-8 text-right">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-4">
                      <feature.icon className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-lg text-gray-200">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={handleSubscribe}
                  className="w-full bg-primary hover:bg-primary-dark text-white text-xl font-bold py-6
                           transition-all duration-300 shadow-lg hover:shadow-xl"
                  size="lg"
                >
                  اشترك الآن
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingPlans;