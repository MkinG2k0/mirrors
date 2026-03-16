"use client";

import { useState } from "react";
import { MIRRORS, SHAPES, WHATSAPP_NUMBER } from "@/shared/constants/mirrors";
import { SiteShell } from "./SiteShell";
import { CatalogSection } from "./CatalogSection";

export function CatalogPageContent() {
  const [category, setCategory] = useState("all");

  const handleOrderFromCatalog = (index: number) => {
    const mirror = MIRRORS[index];
    const shapeKey =
      mirror.defaultShapeKey ??
      (mirror.category === "round" ? "round" : "rect");
    const shapeLabel = SHAPES.find((s) => s.key === shapeKey)?.label ?? "";

    const fallbackWidth = 60;
    const fallbackHeight = 80;

    const width = mirror.defaultWidthCm ?? fallbackWidth;
    const height = mirror.defaultHeightCm ?? fallbackHeight;

    const estimatedAreaSqM = ((width / 100) * (height / 100)).toFixed(2);
    const estimatedPrice = Math.round(
      mirror.basePrice + (width / 100) * (height / 100) * mirror.pricePerSqM
    );

    const messageLines = [
      "Заказ из каталога на сайте Napoli.",
      "",
      `Тип: ${mirror.name}`,
      `Форма: ${shapeLabel}`,
      `Размер: ${width} × ${height} см`,
      `Площадь (примерно): ${estimatedAreaSqM} м²`,
      `Ориентировочная стоимость: ${estimatedPrice.toLocaleString("ru-RU")} ₽`,
    ];

    void fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: mirror.name,
        contact: "Заказ из каталога (сайт)",
        message: messageLines.join("\n"),
      }),
    }).catch(() => {
      // игнорируем сбой записи, чтобы не ломать UX
    });

    const whatsappText = [
      "Здравствуйте! Хочу оформить заказ на зеркало Napoli.",
      "",
      ...messageLines,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <SiteShell>
      <CatalogSection
        category={category}
        onCategoryChange={setCategory}
        onOrderFromCatalog={handleOrderFromCatalog}
      />
    </SiteShell>
  );
}

