"use client";

import { cn } from "@/shared/lib/cn";
import { formatPrice } from "@/shared/utils/formatPrice";
import { MIRRORS, SHAPES, WHATSAPP_NUMBER } from "@/shared/constants/mirrors";
import { MirrorPreview } from "./MirrorPreview";

interface CalculatorSectionProps {
  calcWidth: number;
  calcHeight: number;
  calcShape: string;
  calcType: number;
  onWidthChange: (v: number) => void;
  onHeightChange: (v: number) => void;
  onShapeChange: (key: string) => void;
  onTypeChange: (index: number) => void;
  className?: string;
}

const MIN_WIDTH = 20;
const MAX_WIDTH = 300;
const MIN_HEIGHT = 20;
const MAX_HEIGHT = 400;

function getAreaSqM(width: number, height: number, shape: string): number {
  if (shape === "round") {
    return Math.PI * (width / 200) * (height / 200);
  }
  if (shape === "arch") {
    return (width / 100) * (height / 100) - ((width / 200) ** 2) * ((Math.PI - 2) / 2) * -1;
  }
  return (width / 100) * (height / 100);
}

export function CalculatorSection({
  calcWidth,
  calcHeight,
  calcShape,
  calcType,
  onWidthChange,
  onHeightChange,
  onShapeChange,
  onTypeChange,
  className,
}: CalculatorSectionProps) {
  const selectedMirror = MIRRORS[calcType];
  const areaSqM = getAreaSqM(calcWidth, calcHeight, calcShape);
  const calcPrice = Math.round(
    selectedMirror.basePrice + areaSqM * selectedMirror.pricePerSqM
  );
  const shapeLabel = SHAPES.find((s) => s.key === calcShape)?.label ?? "";

  const handleOrderClick = () => {
    const message = [
      "Здравствуйте! Хочу оформить заказ на зеркало Napoli.",
      "",
      `Тип: ${selectedMirror.name}`,
      `Форма: ${shapeLabel}`,
      `Размер: ${calcWidth} × ${calcHeight} см`,
      `Площадь: ${areaSqM.toFixed(2)} м²`,
      `Ориентировочная стоимость: ${formatPrice(calcPrice)}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={cn("pb-20 pt-14", className)}>
      <div className="mb-12 text-center">
        <p className="font-outfit mb-3 text-[11px] uppercase tracking-[5px] text-gold">
          Конфигуратор
        </p>
        <h2 className="font-cormorant text-[clamp(1.75rem,4vw,2.75rem)] font-light text-text-primary">
          Калькулятор стоимости
        </h2>
        <p className="font-outfit mt-3 text-sm text-text-dim">
          Настройте параметры зеркала и узнайте стоимость мгновенно
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="min-w-0">
          <div className="mb-8">
            <label className="font-outfit mb-3 block text-[11px] uppercase tracking-[2px] text-text-dim">
              Тип зеркала
            </label>
            <div className="grid grid-cols-2 gap-2">
              {MIRRORS.map((m, i) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => onTypeChange(i)}
                  className={cn(
                    "font-outfit text-left text-xs py-3 px-3.5 transition-all duration-300",
                    calcType === i
                      ? "bg-gold/10 border border-gold/30 text-gold"
                      : "bg-white/5 border border-white/5 text-text-dim"
                  )}
                >
                  {m.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label className="font-outfit mb-3 block text-[11px] uppercase tracking-[2px] text-text-dim">
              Форма
            </label>
            <div className="flex gap-2">
              {SHAPES.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => onShapeChange(s.key)}
                  className={cn(
                    "flex-1 font-outfit text-center text-xs py-3.5 px-4 transition-all duration-300",
                    calcShape === s.key
                      ? "bg-gold/10 border border-gold/30 text-gold"
                      : "bg-white/5 border border-white/5 text-text-dim"
                  )}
                >
                  <div className="mb-1 text-xl">{s.icon}</div>
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-7">
            <div className="mb-2.5 flex justify-between">
              <label className="font-outfit text-[11px] uppercase tracking-[2px] text-text-dim">
                {calcShape === "round" ? "Диаметр гор." : "Ширина"}
              </label>
              <span className="font-outfit text-base font-semibold text-gold">{calcWidth} см</span>
            </div>
            <input
              type="range"
              min={MIN_WIDTH}
              max={MAX_WIDTH}
              value={calcWidth}
              onChange={(e) => onWidthChange(Number(e.target.value))}
              className="slider-track w-full h-0.5 rounded-sm bg-surface-2 outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-bg-base [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gold [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-bg-base"
            />
            <div className="font-outfit mt-1 flex justify-between text-[10px] text-text-muted">
              <span>{MIN_WIDTH} см</span>
              <span>{MAX_WIDTH} см</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="mb-2.5 flex justify-between">
              <label className="font-outfit text-[11px] uppercase tracking-[2px] text-text-dim">
                {calcShape === "round" ? "Диаметр верт." : "Высота"}
              </label>
              <span className="font-outfit text-base font-semibold text-gold">{calcHeight} см</span>
            </div>
            <input
              type="range"
              min={MIN_HEIGHT}
              max={MAX_HEIGHT}
              value={calcHeight}
              onChange={(e) => onHeightChange(Number(e.target.value))}
              className="slider-track w-full h-0.5 rounded-sm bg-surface-2 outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-bg-base [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gold [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-bg-base"
            />
            <div className="font-outfit mt-1 flex justify-between text-[10px] text-text-muted">
              <span>{MIN_HEIGHT} см</span>
              <span>{MAX_HEIGHT} см</span>
            </div>
          </div>

          <div className="mb-5 flex gap-3">
            <div className="flex-1">
              <label className="font-outfit mb-1 block text-[10px] text-text-muted">
                Точная ширина (см)
              </label>
              <input
                type="number"
                min={MIN_WIDTH}
                max={MAX_WIDTH}
                value={calcWidth}
                onChange={(e) =>
                  onWidthChange(Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, Number(e.target.value) || MIN_WIDTH)))
                }
                className="w-full bg-white/5 border border-white/10 py-2.5 px-3.5 font-outfit text-sm text-text-primary outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="font-outfit mb-1 block text-[10px] text-text-muted">
                Точная высота (см)
              </label>
              <input
                type="number"
                min={MIN_HEIGHT}
                max={MAX_HEIGHT}
                value={calcHeight}
                onChange={(e) =>
                  onHeightChange(
                    Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, Number(e.target.value) || MIN_HEIGHT))
                  )
                }
                className="w-full bg-white/5 border border-white/10 py-2.5 px-3.5 font-outfit text-sm text-text-primary outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6 flex flex-col items-center border border-white/5 bg-white/5 p-8">
            <p className="font-outfit mb-5 text-[11px] uppercase tracking-[2px] text-text-dim">
              Предпросмотр
            </p>
            <MirrorPreview width={calcWidth} height={calcHeight} shape={calcShape} />
          </div>

          <div className="border border-gold/15 bg-linear-to-br from-gold/10 to-gold/5 p-8">
            <p className="font-outfit mb-2 text-[11px] uppercase tracking-[2px] text-text-dim">
              Итого
            </p>
            <div className="font-cormorant mb-4 text-[clamp(2rem,5vw,3rem)] font-semibold leading-none text-gold">
              {formatPrice(calcPrice)}
            </div>

            <div className="mb-6 grid grid-cols-2 gap-3 font-outfit text-xs text-text-dim">
              <div>
                <div className="mb-0.5 text-[10px] text-text-muted">Тип</div>
                {selectedMirror.name}
              </div>
              <div>
                <div className="mb-0.5 text-[10px] text-text-muted">Форма</div>
                {shapeLabel}
              </div>
              <div>
                <div className="mb-0.5 text-[10px] text-text-muted">Размер</div>
                {calcWidth} × {calcHeight} см
              </div>
              <div>
                <div className="mb-0.5 text-[10px] text-text-muted">Площадь</div>
                {areaSqM.toFixed(2)} м²
              </div>
            </div>

            <div className="font-outfit mb-5 border-t border-white/5 py-3 text-[11px] text-text-muted">
              Базовая стоимость: {formatPrice(selectedMirror.basePrice)}
              <br />
              Стоимость за м²: {formatPrice(selectedMirror.pricePerSqM)}
            </div>

            <button
              type="button"
              onClick={handleOrderClick}
              className="gold-btn w-full text-center font-outfit text-xs font-medium uppercase tracking-[3px] py-3.5 px-9 border border-gold text-gold bg-transparent cursor-pointer transition-all duration-400 hover:bg-gold hover:text-bg-base"
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
