"use client";

import { cn } from "@/shared/lib/cn";

const CONTACTS = [
  { icon: "☎", label: "Телефон", value: "+49 69 123 456 78", sub: "Пн–Пт 9:00 – 18:00" },
  { icon: "✉", label: "Email", value: "info@reflexion-spiegel.de", sub: "Ответим в течение 2 часов" },
  { icon: "◎", label: "Адрес", value: "Musterstraße 42", sub: "60311 Frankfurt am Main" },
  { icon: "◈", label: "WhatsApp", value: "+49 170 123 45 67", sub: "Быстрая связь" },
];

const cardBase =
  "bg-white/5 border border-white/5 p-7 transition-all duration-400 cursor-default hover:bg-white/[0.07] hover:border-gold/20 hover:-translate-y-1";

const inputBase =
  "w-full bg-white/5 border border-white/10 py-3.5 px-4 font-outfit text-sm text-text-primary outline-none placeholder:text-text-dim";

export function ContactsSection({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto max-w-3xl pb-20 pt-14", className)}>
      <div className="mb-14 text-center">
        <p className="font-outfit mb-3 text-[11px] uppercase tracking-[5px] text-gold">
          Связаться с нами
        </p>
        <h2 className="font-cormorant text-[clamp(1.75rem,4vw,2.75rem)] font-light text-text-primary">
          Контакты
        </h2>
      </div>

      <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {CONTACTS.map((c) => (
          <div key={c.label} className={cardBase}>
            <div className="mb-3 text-2xl text-gold">{c.icon}</div>
            <div className="font-outfit mb-1.5 text-[10px] uppercase tracking-[2px] text-text-muted">
              {c.label}
            </div>
            <div className="mb-1 font-cormorant text-base font-normal text-text-primary">
              {c.value}
            </div>
            <div className="font-outfit text-xs text-text-dim">{c.sub}</div>
          </div>
        ))}
      </div>

      <div className={cn(cardBase, "p-10")}>
        <h3 className="mb-6 font-cormorant text-xl font-normal text-text-primary">
          Оставьте заявку
        </h3>
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Ваше имя"
            className={inputBase}
            aria-label="Ваше имя"
          />
          <input
            type="text"
            placeholder="Телефон или Email"
            className={inputBase}
            aria-label="Телефон или Email"
          />
        </div>
        <textarea
          placeholder="Опишите ваш проект..."
          rows={4}
          className={cn(inputBase, "mb-5 resize-y")}
          aria-label="Сообщение"
        />
        <button
          type="button"
          className="gold-btn font-outfit text-xs font-medium uppercase tracking-[3px] py-3.5 px-9 border border-gold text-gold bg-transparent cursor-pointer transition-all duration-400 hover:bg-gold hover:text-bg-base"
        >
          Отправить заявку
        </button>
      </div>
    </div>
  );
}
