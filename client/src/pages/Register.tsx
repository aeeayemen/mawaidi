import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/**
 * Design Philosophy: Modern Balance
 * - Step-by-step registration flow
 * - Clear visual hierarchy
 * - Smooth transitions between steps
 */

export default function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    businessName: "",
    businessType: "",
    workHoursStart: "09:00",
    workHoursEnd: "17:00",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, businessType: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

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
        <div className="max-w-2xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold transition-all ${
                      s <= step
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {s < step ? <CheckCircle2 className="w-5 h-5" /> : s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-all ${
                        s < step ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm">
              <span className={step >= 1 ? "text-foreground font-semibold" : "text-muted-foreground"}>
                الحساب
              </span>
              <span className={step >= 2 ? "text-foreground font-semibold" : "text-muted-foreground"}>
                النشاط
              </span>
              <span className={step >= 3 ? "text-foreground font-semibold" : "text-muted-foreground"}>
                الإعداد
              </span>
            </div>
          </div>

          {/* Step 1: Account Creation */}
          {step === 1 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">إنشاء حسابك</CardTitle>
                <CardDescription>
                  ابدأ برحلتك مع موعدي بإنشاء حساب جديد
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-10"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">كلمة المرور</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="h-10"
                  />
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-foreground">
                    ✓ بدون بطاقة ائتمان مطلوبة
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    يمكنك البدء مجاناً والترقية لاحقاً إذا أردت
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Business Type */}
          {step === 2 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">اختر نشاطك</CardTitle>
                <CardDescription>
                  اختر القالب المناسب لنشاطك التجاري
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">اسم النشاط</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    placeholder="مثلاً: عيادة الدكتور أحمد"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="h-10"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType">نوع النشاط</Label>
                  <Select value={formData.businessType} onValueChange={handleSelectChange}>
                    <SelectTrigger id="businessType" className="h-10">
                      <SelectValue placeholder="اختر نوع النشاط" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clinic">عيادة طبية</SelectItem>
                      <SelectItem value="salon">صالون تجميل</SelectItem>
                      <SelectItem value="restaurant">مطعم</SelectItem>
                      <SelectItem value="gym">صالة رياضية</SelectItem>
                      <SelectItem value="hotel">فندق</SelectItem>
                      <SelectItem value="other">أخرى</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {["عيادة", "صالون", "مطعم"].map((type) => (
                    <button
                      key={type}
                      className={`p-4 rounded-lg border-2 transition-all text-center ${
                        formData.businessType
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="text-2xl mb-2">
                        {type === "عيادة" && "🏥"}
                        {type === "صالون" && "✂️"}
                        {type === "مطعم" && "🍽️"}
                      </div>
                      <p className="text-sm font-semibold">{type}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Setup */}
          {step === 3 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">الإعدادات الأساسية</CardTitle>
                <CardDescription>
                  حدد أوقات عملك والخدمات التي تقدمها
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="workStart">وقت البداية</Label>
                    <Input
                      id="workStart"
                      name="workHoursStart"
                      type="time"
                      value={formData.workHoursStart}
                      onChange={handleInputChange}
                      className="h-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workEnd">وقت النهاية</Label>
                    <Input
                      id="workEnd"
                      name="workHoursEnd"
                      type="time"
                      value={formData.workHoursEnd}
                      onChange={handleInputChange}
                      className="h-10"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>الخدمات</Label>
                  <div className="space-y-2">
                    {["استشارة عامة", "فحص شامل", "متابعة"].map((service) => (
                      <label key={service} className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-blue-50 cursor-pointer transition">
                        <input type="checkbox" className="w-4 h-4" defaultChecked />
                        <span className="text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">رابطك الفريد</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        mawidi.pro/{formData.businessName?.toLowerCase().replace(/\s+/g, "-") || "your-business"}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <Button variant="outline" onClick={handlePrev} className="flex-1">
                السابق
              </Button>
            )}
            {step < 3 ? (
              <Button onClick={handleNext} className="flex-1 gap-2">
                التالي
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Link href="/choose-template">
                <Button className="w-full gap-2">
                  التالي
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            هل لديك حساب بالفعل؟{" "}
            <Link href="/login">
              <a className="text-primary hover:underline font-semibold">دخول</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
