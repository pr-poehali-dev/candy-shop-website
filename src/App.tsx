import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "@/components/LanguageSwitcher";
import { CartProvider } from "@/contexts/CartContext";
import { Toaster } from "@/components/ui/sonner";
import HomePage from "@/pages/HomePage";

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
