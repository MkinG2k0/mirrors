"use client";

import Image from "next/image";

import { cn } from "@/shared/lib/cn";
import { formatPrice } from "@/shared/utils/formatPrice";
import { MIRRORS, CATEGORIES } from "@/shared/constants/mirrors";
import type { Mirror } from "@/shared/model/mirrors";

interface CatalogSectionProps {
  category: string;
  onCategoryChange: (key: string) => void;
  onOrderFromCatalog: (index: number) => void;
  className?: string;
}

const cardBase =
  "bg-white/5 border border-white/5 p-7 transition-all duration-400 cursor-default hover:bg-white/[0.07] hover:border-gold/20 hover:-translate-y-1";

const tagBase =
  "font-outfit inline-block text-[10px] tracking-wider px-2.5 py-1 bg-gold/10 text-gold border border-gold/15";

export function CatalogSection({
  category,
  onCategoryChange,
  onOrderFromCatalog,
  className,
}: CatalogSectionProps) {
  const filtered =
    category === "all"
      ? MIRRORS
      : MIRRORS.filter((m: Mirror) => m.category === category);

  return (
    <div className={cn("pb-20 pt-14", className)}>
      <div className="mb-12 text-center">
        <p className="font-outfit mb-3 text-[11px] uppercase tracking-[5px] text-gold">
          Коллекция
        </p>
        <h2 className="font-cormorant text-[clamp(1.75rem,4vw,2.75rem)] font-light text-text-primary">
          Наши зеркала
        </h2>
      </div>

      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => onCategoryChange(c.key)}
            className={cn(
              "font-outfit rounded text-xs tracking-wide py-2 px-5 transition-all duration-300",
              category === c.key
                ? "bg-gold/15 border border-gold/30 text-gold"
                : "border border-white/8 text-text-dim hover:text-gold",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
        {filtered.map((m) => (
          <article key={m.id} className={cardBase}>
            <div className="mb-5 h-40 border-b border-white/5 bg-linear-to-br from-surface-2 to-gold/5">
              <div className="relative h-full w-full">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mb-3 flex items-start justify-between">
              <h3 className="font-cormorant text-xl font-normal text-text-primary">
                {m.name}
              </h3>
              <span className={tagBase}>{m.thickness}</span>
            </div>
            <p className="font-outfit mb-4 text-[13px] leading-snug text-text-dim">
              {m.desc}
            </p>
            <div className="mb-5 flex flex-wrap gap-1.5">
              {m.features.map((f) => (
                <span
                  key={f}
                  className="font-outfit text-[10px] tracking-wider px-2 py-0.5 bg-white/5 border border-white/5 text-text-dim"
                >
                  {f}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="font-outfit text-[11px] text-text-dim">
                  от{" "}
                </span>
                <span className="font-cormorant text-2xl font-semibold text-gold">
                  {formatPrice(m.basePrice)}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  onOrderFromCatalog(MIRRORS.indexOf(m));
                }}
                className="gold-btn font-outfit text-[11px] font-medium uppercase tracking-[3px] py-2.5 px-5 border border-gold text-gold bg-transparent cursor-pointer transition-all duration-400 hover:bg-gold hover:text-bg-base"
              >
                Оформить заказ
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
