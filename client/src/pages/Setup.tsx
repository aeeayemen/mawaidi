import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/**
 * Design Philosophy: Modern Balance
 * - Setup configuration with clear sections
 * - Icon-based visual hierarchy
 * - Smooth transitions
 */

export default function Setup() {
  const [formData, setFormData] = useState({
    businessName: "",
    workDaysStart: "السبت",
    workDaysEnd: "الخميس",
    workHoursStart: "09:00",
    workHoursEnd: "17:00",
    services: ["خدمة 1", "خدمة 2"],
    paymentMethods: ["cash", "card"],
    virtualMeeting: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
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
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              إعدادات نشاطك
            </h1>
            <p className="text-lg text-muted-foreground">
              حدد أوقات العمل والخدمات وخيارات الدفع
            </p>
          </div>

          {/* Setup Form */}
          <div className="space-y-6">
            {/* Business Name */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <i className="fas fa-store text-primary text-xl"></i>
                  اسم النشاط
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <i className="fas fa-clock text-primary text-xl"></i>
                  أوقات العمل
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="workDaysStart">من يوم</Label>
                    <select
                      id="workDaysStart"
                      value={formData.workDaysStart}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          workDaysStart: e.target.value,
                        }))
                      }
                      className="w-full h-10 px-3 rounded-lg border border-border bg-white"
                    >
                      {["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"].map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workDaysEnd">إلى يوم</Label>
                    <select
                      id="workDaysEnd"
                      value={formData.workDaysEnd}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          workDaysEnd: e.target.value,
                        }))
                      }
                      className="w-full h-10 px-3 rounded-lg border border-border bg-white"
                    >
                      {["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"].map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="workHoursStart">وقت البداية</Label>
                    <Input
                      id="workHoursStart"
                      name="workHoursStart"
                      type="time"
                      value={formData.workHoursStart}
                      onChange={handleInputChange}
                      className="h-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workHoursEnd">وقت النهاية</Label>
                    <Input
                      id="workHoursEnd"
                      name="workHoursEnd"
                      type="time"
                      value={formData.workHoursEnd}
                      onChange={handleInputChange}
                      className="h-10"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <i className="fas fa-briefcase text-primary text-xl"></i>
                  الخدمات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {formData.services.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Input
                      type="text"
                      value={service}
                      onChange={(e) => {
                        const newServices = [...formData.services];
                        newServices[idx] = e.target.value;
                        setFormData((prev) => ({
                          ...prev,
                          services: newServices,
                        }));
                      }}
                      className="h-10"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        const newServices = formData.services.filter(
                          (_, i) => i !== idx
                        );
                        setFormData((prev) => ({
                          ...prev,
                          services: newServices,
                        }));
                      }}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  className="w-full gap-2"
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      services: [...prev.services, "خدمة جديدة"],
                    }));
                  }}
                >
                  <i className="fas fa-plus"></i>
                  إضافة خدمة
                </Button>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <i className="fas fa-credit-card text-primary text-xl"></i>
                  خيارات الدفع
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-blue-50 cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={formData.paymentMethods.includes("cash")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData((prev) => ({
                          ...prev,
                          paymentMethods: [...prev.paymentMethods, "cash"],
                        }));
                      } else {
                        setFormData((prev) => ({
                          ...prev,
                          paymentMethods: prev.paymentMethods.filter(
                            (m) => m !== "cash"
                          ),
                        }));
                      }
                    }}
                    className="w-4 h-4"
                  />
                  <i className="fas fa-money-bill text-lg"></i>
                  <span>الدفع نقداً</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-blue-50 cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={formData.paymentMethods.includes("card")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData((prev) => ({
                          ...prev,
                          paymentMethods: [...prev.paymentMethods, "card"],
                        }));
                      } else {
                        setFormData((prev) => ({
                          ...prev,
                          paymentMethods: prev.paymentMethods.filter(
                            (m) => m !== "card"
                          ),
                        }));
                      }
                    }}
                    className="w-4 h-4"
                  />
                  <i className="fas fa-credit-card text-lg"></i>
                  <span>البطاقات الائتمانية</span>
                </label>
              </CardContent>
            </Card>

            {/* Virtual Meeting */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <i className="fas fa-video text-primary text-xl"></i>
                  الاجتماعات الافتراضية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-blue-50 cursor-pointer transition">
                  <input
                    type="checkbox"
                    name="virtualMeeting"
                    checked={formData.virtualMeeting}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4"
                  />
                  <span>تفعيل خيار الاجتماعات الافتراضية</span>
                </label>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-12">
            <Link href="/choose-template">
              <Button variant="outline" className="flex-1">
                السابق
              </Button>
            </Link>
            <Link href="/get-link">
              <Button className="flex-1 gap-2">
                التالي
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
