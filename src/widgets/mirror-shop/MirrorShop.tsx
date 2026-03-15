"use client";

import { useState, useEffect } from "react";
import { cn } from "@/shared/lib/cn";
import { NAV_ITEMS } from "@/shared/constants/mirrors";
import { Header } from "./ui/Header";
import { MobileNav } from "./ui/MobileNav";
import { HeroSection } from "./ui/HeroSection";
import { CatalogSection } from "./ui/CatalogSection";
import { CalculatorSection } from "./ui/CalculatorSection";
import { InfoSection } from "./ui/InfoSection";
import { ContactsSection } from "./ui/ContactsSection";
import { Footer } from "./ui/Footer";

export function MirrorShop({ className }: { className?: string }) {
  const [section, setSection] = useState("home");
  const [category, setCategory] = useState("all");
  const [calcWidth, setCalcWidth] = useState(60);
  const [calcHeight, setCalcHeight] = useState(80);
  const [calcShape, setCalcShape] = useState("rect");
  const [calcType, setCalcType] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [section]);

  const handleNavigate = (key: string) => setSection(key);
  const handleSelectMirrorForCalc = (index: number) => {
    setCalcType(index);
    setSection("calculator");
  };

  return (
    <div
      className={cn(
        "min-h-screen overflow-x-hidden bg-bg-base text-text-primary font-cormorant",
        className
      )}
    >
      <Header
        section={section}
        navItems={NAV_ITEMS}
        onNavigate={handleNavigate}
        onOpenMobileMenu={() => setMenuOpen(true)}
      />

      {menuOpen && (
        <MobileNav
          navItems={NAV_ITEMS}
          onNavigate={handleNavigate}
          onClose={() => setMenuOpen(false)}
        />
      )}

      <main
        key={animKey}
        className="mx-auto max-w-[1200px] px-4 animate-[fadeSlideUp_0.7s_cubic-bezier(0.22,1,0.36,1)_forwards sm:px-6"
      >
        {section === "home" && (
          <HeroSection onNavigate={handleNavigate} />
        )}

        {section === "catalog" && (
          <CatalogSection
            category={category}
            onCategoryChange={setCategory}
            onNavigate={handleNavigate}
            onSelectMirrorForCalc={handleSelectMirrorForCalc}
          />
        )}

        {section === "calculator" && (
          <CalculatorSection
            calcWidth={calcWidth}
            calcHeight={calcHeight}
            calcShape={calcShape}
            calcType={calcType}
            onWidthChange={setCalcWidth}
            onHeightChange={setCalcHeight}
            onShapeChange={setCalcShape}
            onTypeChange={setCalcType}
          />
        )}

        {section === "info" && <InfoSection />}
        {section === "contacts" && <ContactsSection />}
      </main>

      <Footer />
    </div>
  );
}
