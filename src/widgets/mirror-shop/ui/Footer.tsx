"use client";

import { cn } from "@/shared/lib/cn";

const SOCIAL_LINKS = ["Instagram", "Facebook", "Pinterest"];

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn("mt-10 border-t border-white/5 px-4 py-8 sm:px-6", className)}
    >
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4">
        <div className="font-outfit text-xs text-text-muted">
          © 2026 RÉFLEXION — Зеркала & Интерьер. Frankfurt am Main
        </div>
        <div className="flex gap-6">
          {SOCIAL_LINKS.map((s) => (
            <span
              key={s}
              className="font-outfit cursor-pointer text-[11px] tracking-wide text-text-muted hover:text-gold transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
