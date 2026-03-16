"use client";

import { cn } from "@/shared/lib/cn";
import { REVIEWS, REVIEWS_COUNT, REVIEWS_RATING, REVIEWS_URL } from "@/shared/constants/mirrors";

const cardBase =
  "bg-white/5 border border-white/5 p-7 transition-all duration-400 cursor-default hover:bg-white/[0.07] hover:border-gold/20 hover:-translate-y-1";

export function ReviewsSection({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto max-w-3xl pb-20 pt-14", className)}>
      <div className="mb-10 text-center">
        <p className="font-outfit mb-3 text-[11px] uppercase tracking-[5px] text-gold">
          Отзывы клиентов
        </p>
        <h2 className="font-cormorant text-[clamp(1.75rem,4vw,2.75rem)] font-light text-text-primary">
          Что говорят о Napoli
        </h2>
        <p className="font-outfit mt-4 text-[13px] text-text-dim">
          Рейтинг {REVIEWS_RATING.toFixed(1)} из 5 на Яндекс Картах • {REVIEWS_COUNT} отзывов
        </p>
        <a
          href={REVIEWS_URL}
          target="_blank"
          rel="noreferrer"
          className="font-outfit mt-2 inline-flex items-center text-[11px] uppercase tracking-[2px] text-gold/80 underline underline-offset-4 hover:text-gold"
        >
          Смотреть все отзывы на Яндекс Картах
        </a>
      </div>

      <div className="flex flex-col gap-5">
        {REVIEWS.map((review) => (
          <article key={`${review.author}-${review.date}`} className={cardBase}>
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <div>
                <div className="font-cormorant text-xl font-normal text-text-primary">
                  {review.author}
                </div>
                {typeof review.rating === "number" && (
                  <div className="font-outfit mt-1 text-[11px] text-gold">
                    {"★★★★★".slice(0, review.rating)}
                  </div>
                )}
              </div>
              <div className="font-outfit text-[11px] uppercase tracking-[2px] text-text-dim">
                {review.date}
              </div>
            </div>
            <p className="font-outfit mb-4 text-[13px] leading-relaxed text-text-dim">
              {review.text}
            </p>
            <div className="font-outfit text-[11px] uppercase tracking-[2px] text-gold/80">
              {review.source}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

