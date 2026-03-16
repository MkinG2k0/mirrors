"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/shared/lib/cn";
import { NAV_ITEMS } from "@/shared/constants/mirrors";
import { Header } from "./Header";
import { MobileNav } from "./MobileNav";
import { Footer } from "./Footer";

type SectionKey = "home" | "catalog" | "calculator" | "info" | "reviews" | "contacts";

const SECTION_PATHS: Record<SectionKey, string> = {
  home: "/",
  catalog: "/catalog",
  calculator: "/calculator",
  info: "/about",
  reviews: "/reviews",
  contacts: "/contacts",
};

function getSectionFromPath(pathname: string): SectionKey {
  if (pathname.startsWith("/catalog")) return "catalog";
  if (pathname.startsWith("/calculator")) return "calculator";
  if (pathname.startsWith("/about")) return "info";
  if (pathname.startsWith("/reviews")) return "reviews";
  if (pathname.startsWith("/contacts")) return "contacts";
  return "home";
}

interface SiteShellProps {
  children: React.ReactNode;
  className?: string;
}

export function SiteShell({ children, className }: SiteShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const section = getSectionFromPath(pathname);

  const handleNavigate = (key: string) => {
    const target = SECTION_PATHS[(key as SectionKey) ?? "home"] ?? "/";
    if (target !== pathname) {
      router.push(target);
    }
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

      <main className="mx-auto max-w-[1200px] px-4 animate-[fadeSlideUp_0.7s_cubic-bezier(0.22,1,0.36,1)_forwards sm:px-6">
        {children}
      </main>

      <Footer />
    </div>
  );
}

