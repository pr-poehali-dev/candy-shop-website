import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageSwitcher";

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t("heroTitle")}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t("heroSubtitle")}
            </p>
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg"
            >
              {t("shopNow")} 🍬
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-20 absolute -top-4 -left-4 w-32 h-32"></div>
            <div className="aspect-square bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 absolute -bottom-4 -right-4 w-24 h-24"></div>
            <img
              src="https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&h=600&fit=crop"
              alt="Premium chocolates"
              className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
