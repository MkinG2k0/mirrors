"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SiteShell } from "./SiteShell";
import { CatalogSection } from "./CatalogSection";

type SectionKey = "home" | "catalog" | "calculator";

const SECTION_PATHS: Record<SectionKey, string> = {
  home: "/",
  catalog: "/catalog",
  calculator: "/calculator",
};

export function CatalogPageContent() {
  const [category, setCategory] = useState("all");
  const router = useRouter();

  const handleNavigate = (key: string) => {
    const target = SECTION_PATHS[(key as SectionKey) ?? "home"] ?? "/";
    router.push(target);
  };

  const handleSelectMirrorForCalc = (index: number) => {
    const params = new URLSearchParams({ type: String(index) });
    router.push(`/calculator?${params.toString()}`);
  };

  return (
    <SiteShell>
      <CatalogSection
        category={category}
        onCategoryChange={setCategory}
        onNavigate={handleNavigate}
        onSelectMirrorForCalc={handleSelectMirrorForCalc}
      />
    </SiteShell>
  );
}

