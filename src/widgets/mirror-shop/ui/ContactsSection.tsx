"use client";

import { useState, useCallback } from "react";
import { cn } from "@/shared/lib/cn";
import { CONTACT_ITEMS } from "@/shared/constants/mirrors";

const cardBase =
  "bg-white/5 border border-white/5 p-7 transition-all duration-400 cursor-default hover:bg-white/[0.07] hover:border-gold/20 hover:-translate-y-1";

const inputBase =
  "w-full bg-white/5 border border-white/10 py-3.5 px-4 font-outfit text-sm text-text-primary outline-none placeholder:text-text-dim";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function ContactsSection({ className }: { className?: string }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setErrorMessage("");
      setStatus("loading");
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            contact: contact.trim(),
            message: message.trim(),
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          setStatus("error");
          setErrorMessage(
            typeof data?.error === "string" ? data.error : "Не удалось отправить заявку"
          );
          return;
        }
        setStatus("success");
        setName("");
        setContact("");
        setMessage("");
      } catch {
        setStatus("error");
        setErrorMessage("Ошибка соединения");
      }
    },
    [name, contact, message]
  );

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
        {CONTACT_ITEMS.map((c) => {
          const content = (
            <>
              <div className="mb-3 text-2xl text-gold">{c.icon}</div>
              <div className="font-outfit mb-1.5 text-[10px] uppercase tracking-[2px] text-text-muted">
                {c.label}
              </div>
              <div className="mb-1 font-cormorant text-base font-normal text-text-primary">
                {c.value}
              </div>
              <div className="font-outfit text-xs text-text-dim">{c.sub}</div>
            </>
          );
          if (c.href) {
            return (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(cardBase, "cursor-pointer")}
              >
                {content}
              </a>
            );
          }
          return (
            <div key={c.label} className={cardBase}>
              {content}
            </div>
          );
        })}
      </div>

      <form
        className={cn(cardBase, "p-10")}
        onSubmit={handleSubmit}
        noValidate
      >
        <h3 className="mb-6 font-cormorant text-xl font-normal text-text-primary">
          Оставьте заявку
        </h3>
        {status === "success" && (
          <p className="mb-4 font-outfit text-sm text-green-500">
            Заявка отправлена. Мы свяжемся с вами в ближайшее время.
          </p>
        )}
        {status === "error" && errorMessage && (
          <p className="mb-4 font-outfit text-sm text-red-400" role="alert">
            {errorMessage}
          </p>
        )}
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            className={inputBase}
            aria-label="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === "loading"}
          />
          <input
            type="text"
            name="contact"
            placeholder="Телефон или Email"
            className={inputBase}
            aria-label="Телефон или Email"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            disabled={status === "loading"}
          />
        </div>
        <textarea
          name="message"
          placeholder="Опишите ваш проект..."
          rows={4}
          className={cn(inputBase, "mb-5 resize-y")}
          aria-label="Сообщение"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="gold-btn font-outfit text-xs font-medium uppercase tracking-[3px] py-3.5 px-9 border border-gold text-gold bg-transparent cursor-pointer transition-all duration-400 hover:bg-gold hover:text-bg-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Отправка…" : "Отправить заявку"}
        </button>
      </form>
    </div>
  );
}
