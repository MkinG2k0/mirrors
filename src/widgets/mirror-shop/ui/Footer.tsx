"use client";

import { cn } from "@/shared/lib/cn";
import { FOOTER_COPY, INSTAGRAM_URL } from "@/shared/constants/mirrors";

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn("mt-10 border-t border-white/5 px-4 py-8 sm:px-6", className)}
    >
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4">
        <div className="font-outfit text-xs text-text-muted">
          {FOOTER_COPY}
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-outfit text-[11px] tracking-wide text-text-muted hover:text-gold transition-colors"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
