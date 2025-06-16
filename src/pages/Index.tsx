import React from "react";
import { LanguageProvider } from "@/components/LanguageSwitcher";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
      </div>
    </LanguageProvider>
  );
};

export default Index;
