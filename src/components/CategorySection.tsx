import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/LanguageSwitcher";

const CategorySection: React.FC = () => {
  const { t } = useLanguage();

  const categories = [
    { key: "newYear", emoji: "🎄", color: "from-green-400 to-red-500" },
    { key: "valentines", emoji: "💕", color: "from-pink-400 to-red-500" },
    { key: "easter", emoji: "🐰", color: "from-yellow-400 to-orange-500" },
    { key: "birthday", emoji: "🎂", color: "from-purple-400 to-pink-500" },
    { key: "wedding", emoji: "💍", color: "from-blue-400 to-purple-500" },
    { key: "corporate", emoji: "🏢", color: "from-gray-400 to-blue-500" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {t("categoriesTitle")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Card
              key={category.key}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <span className="text-2xl">{category.emoji}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {t(category.key)}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
