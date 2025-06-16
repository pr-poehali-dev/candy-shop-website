import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import LanguageSwitcher, { useLanguage } from "@/components/LanguageSwitcher";

const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🍬</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">SweetGifts</h1>
              <p className="text-xs text-gray-600">Premium Chocolates</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="text-gray-700">
              {t("catalog")}
            </Button>
            <Button variant="ghost" className="text-gray-700">
              {t("giftSets")}
            </Button>
            <Button variant="ghost" className="text-gray-700">
              {t("promotions")}
            </Button>
            <Button variant="ghost" className="text-gray-700">
              {t("contacts")}
            </Button>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Icon name="ShoppingCart" size={16} />
              <span className="hidden sm:inline">{t("cart")}</span>
              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
