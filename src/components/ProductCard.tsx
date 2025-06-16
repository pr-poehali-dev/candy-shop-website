import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useLanguage } from "@/components/LanguageSwitcher";

interface ProductCardProps {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  image: string;
  category: string;
  categoryEn: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  nameEn,
  price,
  image,
  category,
  categoryEn,
}) => {
  const { t, language } = useLanguage();

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardContent className="p-4">
        <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-pink-50 to-orange-50">
          <img
            src={image}
            alt={language === "ru" ? name : nameEn}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="space-y-2">
          <div className="text-xs text-gray-500 uppercase tracking-wide">
            {language === "ru" ? category : categoryEn}
          </div>

          <h3 className="font-semibold text-gray-900 line-clamp-2">
            {language === "ru" ? name : nameEn}
          </h3>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-red-600">{price} ₽</span>
            <Button size="sm" className="bg-red-500 hover:bg-red-600">
              <Icon name="Plus" size={14} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
