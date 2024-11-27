import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";

const AboutUsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 bg-gradient-to-r from-primary via-primary-light to-primary text-secondary px-6 py-3 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/30">
          <Info className="w-5 h-5" />
          من نحن
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-secondary border border-primary/20" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary via-primary-light to-primary text-transparent bg-clip-text mb-8">
            مرحبا بك في Green Host – حيث يلتقي الأداء بالأمان.
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-8 text-right">
          <p className="text-xl leading-relaxed text-white">
            نحن أكثر من مجرد شركة استضافة مواقع، نحن بوابتك إلى عالم رقمي سريع، آمن، وموثوق.
            بفريقنا المبدع وتقنياتنا المتطورة، نقدم لك تجربة استضافة تضيف لموقعك القوة، السرعة، والاستقرار.
          </p>

          <div className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-primary mb-4">رؤيتنا: نُعيد تعريف استضافة المواقع.</h3>
            <p className="leading-relaxed text-white">
              في عالم مليء بالتحديات التقنية، نسعى لنكون الحل الأمثل لأصحاب المواقع الطموحين. هدفنا هو تقديم خدمات تجعل من السهل على الجميع الانطلاق نحو النجاح في فضاء الإنترنت.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl shadow-md backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-primary mb-4">قيمنا الأساسية:</h3>
            <ul className="list-none space-y-4">
              <li className="flex items-center gap-2 text-white">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                التطوير المستمر: نحن دائمًا في رحلة تطوير وتحسين.
              </li>
              <li className="flex items-center gap-2 text-white">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                الأمان أولويتنا: نوفر حماية شاملة للحفاظ على بياناتك وموقعك.
              </li>
              <li className="flex items-center gap-2 text-white">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                الابتكار: نجلب أحدث التقنيات لخدمتك.
              </li>
            </ul>
          </div>

          <div className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-primary mb-4">ماذا نقدم؟</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="bg-white/5 p-4 rounded-lg shadow backdrop-blur-sm flex items-start gap-3">
                <span className="w-3 h-3 bg-primary rounded-full mt-2"></span>
                <div>
                  <h4 className="font-bold text-primary mb-1">استضافة فائقة السرعة</h4>
                  <p className="text-white">خوادم حديثة مهيأة لتقديم أفضل أداء.</p>
                </div>
              </li>
              <li className="bg-white/5 p-4 rounded-lg shadow backdrop-blur-sm flex items-start gap-3">
                <span className="w-3 h-3 bg-primary rounded-full mt-2"></span>
                <div>
                  <h4 className="font-bold text-primary mb-1">حماية متقدمة</h4>
                  <p className="text-white">أنظمة أمان ذكية لضمان تجربة خالية من المخاطر.</p>
                </div>
              </li>
              <li className="bg-white/5 p-4 rounded-lg shadow backdrop-blur-sm flex items-start gap-3">
                <span className="w-3 h-3 bg-primary rounded-full mt-2"></span>
                <div>
                  <h4 className="font-bold text-primary mb-1">دعم مستمر</h4>
                  <p className="text-white">فريق دعم فني متاح على مدار الساعة.</p>
                </div>
              </li>
              <li className="bg-white/5 p-4 rounded-lg shadow backdrop-blur-sm flex items-start gap-3">
                <span className="w-3 h-3 bg-primary rounded-full mt-2"></span>
                <div>
                  <h4 className="font-bold text-primary mb-1">حلول مخصصة</h4>
                  <p className="text-white">خطط تناسب الجميع، من المواقع الشخصية إلى المشاريع الكبرى.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 p-6 rounded-xl shadow-md backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-primary mb-4">لماذا Green Host؟</h3>
            <p className="leading-relaxed text-white">
              لأننا نؤمن أن التكنولوجيا المتطورة وحدها لا تكفي، بل يجب أن تكون مدعومة بخدمة إنسانية حقيقية.
              معنا، ستحصل على تجربة استضافة تجمع بين الأداء الراقي، السهولة، والأمان – كل ذلك بأسعار تنافسية.
            </p>
          </div>

          <p className="text-xl font-bold text-primary text-center py-4 bg-white/5 backdrop-blur-sm rounded-xl">
            ابدأ اليوم رحلتك الرقمية معنا – لأن موقعك يستحق الأفضل.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutUsDialog;