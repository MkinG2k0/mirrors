"use client";

import { cn } from "@/shared/lib/cn";
import type { NavItem } from "@/shared/model/mirrors";
import { BRAND_NAME, BRAND_TAGLINE } from "@/shared/constants/mirrors";

interface HeaderProps {
  section: string;
  navItems: NavItem[];
  onNavigate: (key: string) => void;
  onOpenMobileMenu: () => void;
  className?: string;
}

const navLinkBase =
  "font-outfit text-[13px] font-normal tracking-[2px] uppercase py-2 cursor-pointer transition-colors duration-300 bg-transparent border-none relative text-text-dim hover:text-gold";

const navLinkActive =
  "text-gold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gold after:content-['']";

export function Header({
  section,
  navItems,
  onNavigate,
  onOpenMobileMenu,
  className,
}: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-[100] border-b border-white/5 backdrop-blur-[20px] bg-bg-base/85",
        className
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 sm:px-6">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="flex items-center gap-3 cursor-pointer"
          aria-label="На главную"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded bg-gradient-to-br from-gold to-gold-light text-lg">
            ◆
          </div>
          <div>
            <div className="font-cormorant text-xl font-semibold tracking-wide text-text-primary">
              {BRAND_NAME}
            </div>
            <div className="font-outfit text-[9px] tracking-[4px] uppercase text-text-dim">
              {BRAND_TAGLINE}
            </div>
          </div>
        </button>

        <nav className="hidden gap-8 md:flex" aria-label="Основная навигация">
          {navItems.map((n) => (
            <button
              key={n.key}
              type="button"
              className={cn(navLinkBase, section === n.key && navLinkActive)}
              onClick={() => onNavigate(n.key)}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden rounded border border-white/15 bg-transparent px-3 py-2 text-gold text-lg"
          onClick={onOpenMobileMenu}
          aria-label="Открыть меню"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
