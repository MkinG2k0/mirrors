"use client";

import { cn } from "@/shared/lib/cn";
import type { NavItem } from "@/shared/model/mirrors";

interface MobileNavProps {
  navItems: NavItem[];
  onNavigate: (key: string) => void;
  onClose: () => void;
  className?: string;
}

export function MobileNav({ navItems, onNavigate, onClose, className }: MobileNavProps) {
  const handleNav = (key: string) => {
    onNavigate(key);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-label="Мобильное меню"
      className={cn(
        "fixed inset-0 z-[1000] flex flex-col items-center justify-center gap-6 bg-bg-base/97",
        className
      )}
      onClick={onClose}
    >
      {navItems.map((n) => (
        <button
          key={n.key}
          type="button"
          className="font-outfit text-lg text-text-primary hover:text-gold transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            handleNav(n.key);
          }}
        >
          {n.label}
        </button>
      ))}
    </div>
  );
}
