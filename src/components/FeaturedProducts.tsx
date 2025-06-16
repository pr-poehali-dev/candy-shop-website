import React from "react";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/components/LanguageSwitcher";

const FeaturedProducts: React.FC = () => {
  const { t } = useLanguage();

  const products = [
    {
      id: "1",
      name: 'Новогодний набор "Зимняя сказка"',
      nameEn: 'New Year Set "Winter Tale"',
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1549007577-ca71bb3dcf80?w=400&h=400&fit=crop",
      category: "Новый год",
      categoryEn: "New Year",
    },
    {
      id: "2",
      name: 'Романтический набор "Сердце"',
      nameEn: 'Romantic Set "Heart"',
      price: 1800,
      image:
        "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop",
      category: "День Валентина",
      categoryEn: "Valentine's Day",
    },
    {
      id: "3",
      name: "Пасхальная коллекция",
      nameEn: "Easter Collection",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
      category: "Пасха",
      categoryEn: "Easter",
    },
    {
      id: "4",
      name: "Трюфели ручной работы",
      nameEn: "Handmade Truffles",
      price: 3200,
      image:
        "https://images.unsplash.com/photo-1571197119282-4c137a6a9e5e?w=400&h=400&fit=crop",
      category: "Премиум",
      categoryEn: "Premium",
    },
    {
      id: "5",
      name: 'Детский набор "Сладкий подарок"',
      nameEn: 'Kids Set "Sweet Gift"',
      price: 900,
      image:
        "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&h=400&fit=crop",
      category: "День рождения",
      categoryEn: "Birthday",
    },
    {
      id: "6",
      name: 'Корпоративный набор "Успех"',
      nameEn: 'Corporate Set "Success"',
      price: 4500,
      image:
        "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=400&fit=crop",
      category: "Корпоративные",
      categoryEn: "Corporate",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {t("featuredProducts")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
