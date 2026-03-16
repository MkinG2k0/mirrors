"use client";

import { cn } from "@/shared/lib/cn";
import {
  ABOUT_BADGE,
  ABOUT_PARAGRAPHS,
  ABOUT_TITLE,
  COMPANY_PROCESS_STEPS,
  COMPANY_STATS,
} from "@/shared/constants/mirrors";

const cardBase =
  "bg-white/5 border border-white/5 p-7 transition-all duration-400 cursor-default hover:bg-white/[0.07] hover:border-gold/20 hover:-translate-y-1";

export function InfoSection({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto max-w-3xl pb-20 pt-14", className)}>
      <div className="mb-14 text-center">
        <p className="font-outfit mb-3 text-[11px] uppercase tracking-[5px] text-gold">
          {ABOUT_BADGE}
        </p>
        <h2 className="font-cormorant text-[clamp(1.75rem,4vw,2.75rem)] font-light text-text-primary">
          {ABOUT_TITLE}
        </h2>
      </div>

      <div className="font-outfit mb-12 text-[15px] leading-loose text-text-dim">
        {ABOUT_PARAGRAPHS.map((text, index) => (
          <p key={text} className={index < ABOUT_PARAGRAPHS.length - 1 ? "mb-5" : undefined}>
            {text}
          </p>
        ))}
      </div>

      <div className="mb-12 grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-3">
        {COMPANY_STATS.map((s) => (
          <div key={s.label} className="bg-surface px-6 py-9 text-center">
            <div className="mb-2 font-cormorant text-4xl font-semibold text-gold">{s.num}</div>
            <div className="font-outfit text-xs tracking-wide text-text-dim">{s.label}</div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="mb-8 text-center font-cormorant text-2xl font-normal text-text-primary">
          Как мы работаем
        </h3>
        <div className="flex flex-col gap-5">
          {COMPANY_PROCESS_STEPS.map((p) => (
            <div key={p.step} className={cn(cardBase, "flex gap-6 items-start")}>
              <div className="font-outfit text-3xl font-light text-gold/30">{p.step}</div>
              <div>
                <h4 className="mb-1.5 font-cormorant text-lg font-normal text-text-primary">
                  {p.title}
                </h4>
                <p className="font-outfit text-[13px] leading-snug text-text-dim">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
