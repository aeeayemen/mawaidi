import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/**
 * Design Philosophy: Modern Balance
 * - Template selection with clear visual hierarchy
 * - Icon-based representation
 * - Easy navigation
 */

export default function ChooseTemplate() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const templates = [
    {
      id: "clinic",
      name: "عيادة طبية",
      icon: "fa-hospital",
      description: "للعيادات والمراكز الطبية",
      features: ["مواعيد الاستشارة", "تقارير المرضى", "إدارة الأدوية"],
    },
    {
      id: "salon",
      name: "صالون تجميل",
      icon: "fa-scissors",
      description: "للصالونات ومراكز التجميل",
      features: ["حجز الخدمات", "إدارة العاملين", "الباقات والعروض"],
    },
    {
      id: "restaurant",
      name: "مطعم",
      icon: "fa-utensils",
      description: "للمطاعم والمقاهي",
      features: ["حجز الطاولات", "إدارة القائمة", "التوصيل"],
    },
    {
      id: "gym",
      name: "صالة رياضية",
      icon: "fa-dumbbell",
      description: "للصالات الرياضية",
      features: ["حجز الحصص", "إدارة الاشتراكات", "البرامج التدريبية"],
    },
    {
      id: "hotel",
      name: "فندق",
      icon: "fa-bed",
      description: "للفنادق والمنتجعات",
      features: ["حجز الغرف", "إدارة الحجوزات", "الخدمات الإضافية"],
    },
    {
      id: "other",
      name: "أخرى",
      icon: "fa-briefcase",
      description: "لأي خدمة أخرى",
      features: ["قابل للتخصيص", "مرن", "سهل الاستخدام"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-display font-bold text-lg text-foreground">موعدي</span>
            </div>
          </Link>
          <Link href="/">
            <Button variant="ghost">العودة</Button>
          </Link>
        </div>
      </nav>

      <div className="container py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            اختر قالب نشاطك
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اختر القالب المناسب لنشاطك التجاري لتبدأ بسهولة
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {templates.map((template) => (
            <Card
              key={template.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedTemplate === template.id
                  ? "ring-2 ring-primary shadow-lg"
                  : ""
              }`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-3xl text-primary">
                    <i className={`fas ${template.icon}`}></i>
                  </div>
                  {selectedTemplate === template.id && (
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  )}
                </div>
                <CardTitle>{template.name}</CardTitle>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {template.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <i className="fas fa-check text-accent text-xs"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center max-w-md mx-auto">
          <Link href="/register">
            <Button variant="outline" className="flex-1">
              السابق
            </Button>
          </Link>
          <Link href={selectedTemplate ? "/setup" : "#"}>
            <Button
              className="flex-1 gap-2"
              disabled={!selectedTemplate}
            >
              التالي
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
