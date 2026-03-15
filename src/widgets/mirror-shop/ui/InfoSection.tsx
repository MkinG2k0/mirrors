"use client";

import { cn } from "@/shared/lib/cn";

const STATS = [
  { num: "15+", label: "лет опыта" },
  { num: "3 000+", label: "выполненных заказов" },
  { num: "98%", label: "довольных клиентов" },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Консультация",
    text: "Обсуждаем ваши пожелания, замеряем пространство, подбираем оптимальное решение.",
  },
  {
    step: "02",
    title: "Производство",
    text: "Изготавливаем зеркало на собственном производстве с контролем качества на каждом этапе.",
  },
  {
    step: "03",
    title: "Доставка и монтаж",
    text: "Бережно доставляем и профессионально устанавливаем зеркало в вашем интерьере.",
  },
  {
    step: "04",
    title: "Гарантия",
    text: "Предоставляем 5-летнюю гарантию и постгарантийное обслуживание.",
  },
];

const cardBase =
  "bg-white/5 border border-white/5 p-7 transition-all duration-400 cursor-default hover:bg-white/[0.07] hover:border-gold/20 hover:-translate-y-1";

export function InfoSection({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto max-w-3xl pb-20 pt-14", className)}>
      <div className="mb-14 text-center">
        <p className="font-outfit mb-3 text-[11px] uppercase tracking-[5px] text-gold">
          О компании
        </p>
        <h2 className="font-cormorant text-[clamp(1.75rem,4vw,2.75rem)] font-light text-text-primary">
          Napoli
        </h2>
      </div>

      <div className="font-outfit mb-12 text-[15px] leading-loose text-text-dim">
        <p className="mb-5">
          Мы — магазин зеркал с многолетним опытом в производстве и установке зеркал
          премиум-класса. Наш салон расположен на проспекте Имама Шамиля в Махачкале.
        </p>
        <p className="mb-5">
          Каждое зеркало изготавливается по индивидуальным размерам с использованием
          высококачественного стекла от ведущих европейских производителей. Мы предлагаем широкий
          выбор обработки краёв, типов подсветки и рамок.
        </p>
        <p>
          Наша команда включает опытных стекольщиков, дизайнеров и монтажников, которые обеспечивают
          безупречное качество на каждом этапе — от замера до установки.
        </p>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-3">
        {STATS.map((s) => (
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
          {PROCESS_STEPS.map((p) => (
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
