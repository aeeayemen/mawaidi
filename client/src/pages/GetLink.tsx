import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Copy, Share2 } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/**
 * Design Philosophy: Modern Balance
 * - Final step showing unique booking link
 * - Clear sharing options
 * - Success celebration
 */

export default function GetLink() {
  const [copied, setCopied] = useState(false);
  const [businessName] = useState("clinic-name");
  const bookingLink = `https://mawidi.pro/${businessName}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(bookingLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
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
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-accent" />
            </div>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              مبروك! 🎉
            </h1>
            <p className="text-lg text-muted-foreground">
              تم إعداد نشاطك بنجاح. الآن حان وقت مشاركة رابط الحجز مع عملائك
            </p>
          </div>

          {/* Booking Link Card */}
          <Card className="shadow-lg mb-8 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2">
                <i className="fas fa-link text-accent text-xl"></i>
                رابط الحجز الفريد الخاص بك
              </CardTitle>
              <CardDescription>
                شارك هذا الرابط مع عملائك ليتمكنوا من الحجز
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg border border-border">
                  <Input
                    type="text"
                    value={bookingLink}
                    readOnly
                    className="bg-transparent border-0 text-foreground font-semibold flex-1"
                  />
                  <Button
                    size="sm"
                    variant="default"
                    onClick={handleCopyLink}
                    className="gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    {copied ? "تم النسخ" : "نسخ"}
                  </Button>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-foreground font-semibold mb-2">
                    💡 نصيحة: يمكنك تخصيص الرابط لاحقاً من لوحة التحكم
                  </p>
                  <p className="text-sm text-muted-foreground">
                    استخدم نطاق مخصص (Domain) أو احتفظ بالرابط الحالي
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sharing Options */}
          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-primary" />
                شارك الرابط مع عملائك
              </CardTitle>
              <CardDescription>
                اختر الطريقة المناسبة لمشاركة رابط الحجز
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "واتساب", icon: "fa-whatsapp", color: "bg-green-100 text-green-600" },
                  { name: "إنستغرام", icon: "fa-instagram", color: "bg-pink-100 text-pink-600" },
                  { name: "فيسبوك", icon: "fa-facebook", color: "bg-blue-100 text-blue-600" },
                  { name: "بريد إلكتروني", icon: "fa-envelope", color: "bg-red-100 text-red-600" },
                  { name: "تويتر", icon: "fa-twitter", color: "bg-sky-100 text-sky-600" },
                  { name: "لينكدإن", icon: "fa-linkedin", color: "bg-blue-100 text-blue-700" },
                  { name: "رسائل نصية", icon: "fa-sms", color: "bg-purple-100 text-purple-600" },
                  { name: "نسخ الرابط", icon: "fa-copy", color: "bg-gray-100 text-gray-600" },
                ].map((option) => (
                  <button
                    key={option.name}
                    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-border hover:shadow-md transition ${option.color}`}
                  >
                    <i className={`fas ${option.icon} text-2xl`}></i>
                    <span className="text-xs font-semibold text-center">{option.name}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* What's Next */}
          <Card className="shadow-lg mb-8 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <i className="fas fa-arrow-right text-primary text-xl"></i>
                الخطوات التالية
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold flex-shrink-0">
                    1
                  </span>
                  <span className="text-foreground">شارك الرابط مع عملائك عبر القنوات المختلفة</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold flex-shrink-0">
                    2
                  </span>
                  <span className="text-foreground">استقبل الحجوزات من عملائك تلقائياً</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold flex-shrink-0">
                    3
                  </span>
                  <span className="text-foreground">أدر الحجوزات من لوحة التحكم الخاصة بك</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold flex-shrink-0">
                    4
                  </span>
                  <span className="text-foreground">تابع الإحصائيات والأداء من التقارير</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 flex-col md:flex-row">
            <Link href="/setup" className="flex-1">
              <Button variant="outline" className="w-full">
                <i className="fas fa-arrow-left ml-2"></i>
                السابق
              </Button>
            </Link>
            <Link href="/dashboard" className="flex-1">
              <Button className="w-full gap-2">
                <i className="fas fa-chart-line"></i>
                الذهاب إلى لوحة التحكم
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
