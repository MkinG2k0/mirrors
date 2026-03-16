"use client";

import { JsonLd } from "./JsonLd";

const FAQ_ITEMS = [
  {
    question: "Сколько стоит зеркало на заказ?",
    answer:
      "Стоимость зависит от размеров, типа зеркала и наличия подсветки. Точную цену можно узнать через калькулятор на сайте или оставив заявку.",
  },
  {
    question: "Сколько времени занимает изготовление зеркала?",
    answer:
      "В среднем изготовление занимает от 5 до 10 рабочих дней в зависимости от сложности заказа и загруженности производства.",
  },
  {
    question: "Вы выполняете доставку и монтаж?",
    answer:
      "Да, мы занимаемся профессиональной доставкой и монтажом зеркал. Все работы выполняют опытные монтажники с гарантией.",
  },
];

function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function FaqJsonLd() {
  return <JsonLd data={getFaqJsonLd()} />;
}

