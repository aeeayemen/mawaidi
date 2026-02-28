import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, DollarSign, Bell, Settings, LogOut, CheckCircle2, Clock, XCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/**
 * Design Philosophy: Modern Balance
 * - Professional dashboard with clear data hierarchy
 * - Color-coded status indicators
 * - Responsive grid layout
 * - Template change option available
 */

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("clinic");

  const bookings = [
    { id: 1, name: "أحمد محمد", service: "استشارة عامة", date: "2026-03-01", time: "10:00", status: "pending" },
    { id: 2, name: "فاطمة علي", service: "فحص شامل", date: "2026-03-01", time: "11:00", status: "approved" },
    { id: 3, name: "محمود حسن", service: "متابعة", date: "2026-03-02", time: "14:00", status: "approved" },
    { id: 4, name: "سارة إبراهيم", service: "استشارة عامة", date: "2026-03-02", time: "15:30", status: "rejected" },
    { id: 5, name: "علي أحمد", service: "فحص شامل", date: "2026-03-03", time: "09:00", status: "pending" },
  ];

  const templates = [
    { id: "clinic", name: "عيادة طبية", icon: "fa-hospital" },
    { id: "salon", name: "صالون تجميل", icon: "fa-scissors" },
    { id: "restaurant", name: "مطعم", icon: "fa-utensils" },
    { id: "gym", name: "صالة رياضية", icon: "fa-dumbbell" },
    { id: "hotel", name: "فندق", icon: "fa-bed" },
    { id: "other", name: "أخرى", icon: "fa-briefcase" },
  ];

  const stats = [
    { label: "إجمالي الحجوزات", value: "248", icon: Calendar, color: "text-primary" },
    { label: "العملاء", value: "1,320", icon: Users, color: "text-accent" },
    { label: "الإيرادات", value: "$18,750", icon: DollarSign, color: "text-green-600" },
    { label: "التنبيهات", value: "5", icon: Bell, color: "text-orange-600" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "approved":
        return "موافق عليه";
      case "pending":
        return "قيد الانتظار";
      case "rejected":
        return "مرفوض";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground border-b border-primary/20">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-sm">M</span>
            </div>
            <span className="font-display font-bold text-lg">موعدي</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary/80"
              onClick={() => setShowTemplateModal(true)}
            >
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="font-display font-bold text-3xl text-foreground mb-2">
            مرحباً بك في لوحة التحكم
          </h1>
          <p className="text-muted-foreground">
            إدارة جميع حجوزاتك والعملاء من مكان واحد
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="font-display font-bold text-2xl text-foreground">{stat.value}</p>
                    </div>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="bookings">الحجوزات</TabsTrigger>
            <TabsTrigger value="calendar">التقويم</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Pending Bookings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    قيد الانتظار
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-display font-bold text-3xl text-yellow-600">12</p>
                  <p className="text-sm text-muted-foreground mt-2">تحتاج إلى موافقة</p>
                </CardContent>
              </Card>

              {/* Approved Bookings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    موافق عليها
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-display font-bold text-3xl text-green-600">234</p>
                  <p className="text-sm text-muted-foreground mt-2">حجوزات مؤكدة</p>
                </CardContent>
              </Card>

              {/* Rejected Bookings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    مرفوضة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-display font-bold text-3xl text-red-600">2</p>
                  <p className="text-sm text-muted-foreground mt-2">حجوزات ملغاة</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Bookings */}
            <Card>
              <CardHeader>
                <CardTitle>آخر الحجوزات</CardTitle>
                <CardDescription>أحدث الحجوزات المسجلة</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {bookings.slice(0, 3).map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-blue-50 transition">
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{booking.name}</p>
                        <p className="text-sm text-muted-foreground">{booking.service}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-foreground">{booking.date}</p>
                        <Badge className={getStatusColor(booking.status)}>
                          {getStatusLabel(booking.status)}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>جميع الحجوزات</CardTitle>
                <CardDescription>إدارة وتعديل الحجوزات</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-blue-50 transition">
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{booking.name}</p>
                        <p className="text-sm text-muted-foreground">{booking.service}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {booking.date} - {booking.time}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={getStatusColor(booking.status)}>
                          {getStatusLabel(booking.status)}
                        </Badge>
                        {booking.status === "pending" && (
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="text-green-600 border-green-200 hover:bg-green-50">
                              موافق
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                              رفض
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Calendar Tab */}
          <TabsContent value="calendar">
            <Card>
              <CardHeader>
                <CardTitle>التقويم</CardTitle>
                <CardDescription>عرض الحجوزات حسب التاريخ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">عرض التقويم قريباً</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Share Link Section */}
        <Card className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardHeader>
            <CardTitle>رابط الحجز الخاص بك</CardTitle>
            <CardDescription>شارك هذا الرابط مع عملائك</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 bg-white border border-border rounded-lg p-4">
              <input
                type="text"
                value="https://mawidi.pro/clinic-name"
                readOnly
                className="flex-1 bg-transparent text-foreground outline-none"
              />
              <Button size="sm" variant="default">
                نسخ الرابط
              </Button>
            </div>
            <div className="flex gap-3 mt-4">
              <Button size="sm" variant="outline" className="gap-2">
                <i className="fas fa-whatsapp"></i> واتساب
              </Button>
              <Button size="sm" variant="outline" className="gap-2">
                <i className="fas fa-instagram"></i> إنستغرام
              </Button>
              <Button size="sm" variant="outline" className="gap-2">
                <i className="fas fa-envelope"></i> بريد إلكتروني
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Template Change Modal */}
      {showTemplateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle>تغيير القالب</CardTitle>
              <CardDescription>
                اختر قالباً جديداً لنشاطك. يمكنك تغيير القالب في أي وقت
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-center ${
                      selectedTemplate === template.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="text-3xl mb-2 text-primary">
                      <i className={`fas ${template.icon}`}></i>
                    </div>
                    <p className="text-sm font-semibold">{template.name}</p>
                  </button>
                ))}
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t border-border">
                <Button variant="outline" onClick={() => setShowTemplateModal(false)}>
                  إلغاء
                </Button>
                <Button onClick={() => setShowTemplateModal(false)} className="gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  حفظ التغييرات
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
