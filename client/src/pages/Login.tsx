import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/**
 * Design Philosophy: Modern Balance
 * - Clean login form
 * - Minimal and focused
 * - Clear call-to-action
 */

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-display font-bold text-2xl text-foreground">موعدي</span>
          </div>
          <p className="text-muted-foreground">نظام الحجز الذكي لعملك</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">دخول</CardTitle>
            <CardDescription>
              أدخل بيانات حسابك للمتابعة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">كلمة المرور</Label>
                <a href="#" className="text-sm text-primary hover:underline">
                  هل نسيت كلمتك؟
                </a>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-10"
              />
            </div>

            <Link href="/dashboard">
              <Button className="w-full gap-2" size="lg">
                دخول
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-muted-foreground">أو</span>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              الدخول عبر جوجل
            </Button>
          </CardContent>
        </Card>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          ليس لديك حساب؟{" "}
          <Link href="/register">
            <a className="text-primary hover:underline font-semibold">إنشاء حساب جديد</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
