import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, Share2, BarChart3, ArrowRight, Zap } from "lucide-react";
import { Link } from "wouter";

/**
 * Design Philosophy: Modern Balance
 * - Deep Blue (#1E40AF) for trust and professionalism
 * - Soft Green (#10B981) for success and confirmation
 * - Clean hierarchy with ample whitespace
 * - Smooth transitions and natural interactions
 * - Icons only, no images
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-display font-bold text-lg text-foreground">موعدي</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/register">
              <Button variant="outline">تسجيل جديد</Button>
            </Link>
            <Link href="/login">
              <Button>دخول</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                  نظام الحجز الذكي لعملك
                </h1>
                <p className="text-xl text-muted-foreground">
                  إدارة الحجوزات والمواعيد بسهولة، شارك رابطك الفريد مع عملائك عبر واتساب وإنستغرام
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="gap-2">
                    ابدأ الآن مجاناً
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  شاهد العرض التوضيحي
                </Button>
              </div>
              <div className="flex gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm text-foreground">بدون بطاقة ائتمان</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  <span className="text-sm text-foreground">إعداد سريع</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <i className="fas fa-calendar-check text-6xl text-primary/30"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              كيف يعمل النظام؟
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              أربع خطوات بسيطة لتشغيل نظام الحجز الخاص بك
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              {
                step: "1",
                title: "إنشاء الحساب",
                description: "سجل حسابك واختر القالب المناسب لنشاطك",
                icon: "fa-user-plus",
              },
              {
                step: "2",
                title: "الإعداد",
                description: "حدد أوقات العمل والخدمات وخيارات الدفع",
                icon: "fa-cog",
              },
              {
                step: "3",
                title: "المشاركة",
                description: "احصل على رابط فريد وشاركه مع عملائك",
                icon: "fa-share-alt",
              },
              {
                step: "4",
                title: "الإدارة",
                description: "وافق على الحجوزات وأدرها من لوحة التحكم",
                icon: "fa-chart-bar",
              },
            ].map((item) => (
              <Card key={item.step} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary text-xl">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-display font-bold text-primary">الخطوة {item.step}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              المميزات الرئيسية
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              كل ما تحتاجه لإدارة حجوزاتك بكفاءة
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "رابط حجز فريد",
                description: "احصل على رابط ذكي خاص بك (مثلاً: mawidi.pro/clinic-name) وشاركه مباشرة",
                icon: "fa-link",
              },
              {
                title: "إدارة المواعيد",
                description: "عرض جميع الحجوزات في تقويم واحد مع إمكانية الموافقة أو التعديل",
                icon: "fa-calendar-alt",
              },
              {
                title: "لوحة تحكم شاملة",
                description: "إحصائيات فورية عن الحجوزات والعملاء والإيرادات",
                icon: "fa-tachometer-alt",
              },
              {
                title: "تنبيهات فورية",
                description: "استقبل إشعارات فورية عند كل حجز جديد أو تعديل",
                icon: "fa-bell",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent text-xl">
                    <i className={`fas ${feature.icon}`}></i>
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sharing Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
                شارك بسهولة مع عملائك
              </h2>
              <p className="text-lg text-muted-foreground">
                شارك رابط الحجز الفريد الخاص بك عبر:
              </p>
              <div className="space-y-3">
                {[
                  { name: "واتساب", icon: "fa-whatsapp" },
                  { name: "إنستغرام", icon: "fa-instagram" },
                  { name: "البريد الإلكتروني", icon: "fa-envelope" },
                  { name: "رسائل نصية", icon: "fa-sms" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <span className="text-foreground">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <i className="fas fa-share-nodes text-6xl text-accent/30"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/80">
        <div className="container text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
            ابدأ إدارة حجوزاتك اليوم
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف أصحاب الأعمال الذين يستخدمون موعدي لتبسيط عملية الحجز
          </p>
          <Link href="/register">
            <Button size="lg" variant="secondary" className="gap-2">
              تسجيل مجاني الآن
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="font-display font-bold text-foreground">موعدي</span>
              </div>
              <p className="text-sm text-muted-foreground">
                نظام الحجز الذكي لعملك
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">الخدمات</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">الحجوزات</a></li>
                <li><a href="#" className="hover:text-foreground transition">الإدارة</a></li>
                <li><a href="#" className="hover:text-foreground transition">الإحصائيات</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">الشركة</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">عن الموقع</a></li>
                <li><a href="#" className="hover:text-foreground transition">التدوين</a></li>
                <li><a href="#" className="hover:text-foreground transition">التواصل</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">القانوني</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">الخصوصية</a></li>
                <li><a href="#" className="hover:text-foreground transition">الشروط</a></li>
                <li><a href="#" className="hover:text-foreground transition">الملفات</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2026 موعدي. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition">تويتر</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition">فيسبوك</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition">إنستغرام</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
