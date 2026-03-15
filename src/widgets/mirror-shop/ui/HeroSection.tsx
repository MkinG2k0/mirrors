"use client";

interface HeroSectionProps {
  onNavigate: (key: string) => void;
  className?: string;
}

const FEATURES = [
  {
    icon: "◈",
    title: "Индивидуальный размер",
    text: "Любые размеры от 20×20 до 300×400 см",
  },
  {
    icon: "◇",
    title: "Премиум качество",
    text: "Зеркала от ведущих европейских производителей",
  },
  {
    icon: "△",
    title: "Монтаж и доставка",
    text: "Бесплатная доставка и установка по Франкфурту",
  },
  {
    icon: "○",
    title: "Гарантия 5 лет",
    text: "Полная гарантия на все изделия и монтаж",
  },
];

export function HeroSection({ onNavigate, className }: HeroSectionProps) {
  return (
    <div className={className}>
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-12">
        <div
          className="orb absolute -top-24 -right-24 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.15)_0%,transparent_70%)] animate-[glow_4s_ease-in-out_infinite] pointer-events-none"
          aria-hidden
        />
        <div
          className="orb absolute -bottom-12 -left-20 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.15)_0%,transparent_70%)] animate-[glow_4s_ease-in-out_infinite] pointer-events-none [animation-delay:2s]"
          aria-hidden
        />

        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
          <div className="max-w-[480px]">
            <p className="font-outfit mb-5 text-[11px] font-normal uppercase tracking-[5px] text-gold">
              Премиальные зеркала на заказ
            </p>
            <h1 className="mb-6 font-cormorant text-[clamp(2.25rem,6vw,4rem)] font-light leading-[1.1] text-text-primary">
              Отражение
              <br />
              <span className="italic text-gold">вашего</span>
              <br />
              стиля
            </h1>
            <p className="font-outfit mb-9 max-w-[380px] text-[15px] leading-[1.7] text-text-dim">
              Изготовление зеркал любых форм и размеров. Индивидуальный подход к каждому проекту.
              Доставка и установка по всей Германии.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onNavigate("catalog")}
                className="gold-btn font-outfit text-xs font-medium uppercase tracking-[3px] py-3.5 px-9 border border-gold text-gold bg-transparent cursor-pointer transition-all duration-400 hover:bg-gold hover:text-bg-base"
              >
                Каталог
              </button>
              <button
                type="button"
                onClick={() => onNavigate("calculator")}
                className="gold-btn font-outfit text-xs font-medium uppercase tracking-[3px] py-3.5 px-9 border border-white/15 text-text-primary bg-transparent cursor-pointer transition-all duration-400 hover:bg-gold hover:text-bg-base"
              >
                Калькулятор
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              className="hero-mirror h-[280px] w-[200px] rounded border border-white/20 bg-[linear-gradient(135deg,#c5d3e0_0%,#e8edf2_25%,#b8c9d9_50%,#dce5ed_75%,#c5d3e0_100%)] bg-[length:200%_200%] shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_0_60px_rgba(255,255,255,0.1)] animate-[shimmer_6s_ease_infinite,float_6s_ease-in-out_infinite]"
              aria-hidden
            />
            <div className="absolute -bottom-5 -right-5 border border-gold/20 bg-surface px-5 py-3.5 font-outfit text-xs tracking-wide">
              <span className="text-[22px] font-semibold text-gold">500+</span>
              <br />
              <span className="text-text-dim">проектов в год</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-20 grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className={`bg-surface px-8 py-10 lg:border-r ${i < 3 ? "lg:border-white/5" : ""}`}
          >
            <div className="mb-4 text-[28px] text-gold">{f.icon}</div>
            <h3 className="font-outfit mb-2 text-sm font-medium tracking-wide">{f.title}</h3>
            <p className="font-outfit text-[13px] leading-snug text-text-dim">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
