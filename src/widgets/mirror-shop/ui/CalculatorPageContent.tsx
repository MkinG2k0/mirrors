"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SiteShell } from "./SiteShell";
import { CalculatorSection } from "./CalculatorSection";

const DEFAULT_WIDTH = 60;
const DEFAULT_HEIGHT = 80;
const DEFAULT_SHAPE = "rect";

export function CalculatorPageContent() {
  const searchParams = useSearchParams();
  const [calcWidth, setCalcWidth] = useState(DEFAULT_WIDTH);
  const [calcHeight, setCalcHeight] = useState(DEFAULT_HEIGHT);
  const [calcShape, setCalcShape] = useState(DEFAULT_SHAPE);
  const [calcType, setCalcType] = useState(0);

  useEffect(() => {
    const typeFromQuery = searchParams.get("type");
    if (typeFromQuery !== null) {
      const parsed = Number.parseInt(typeFromQuery, 10);
      if (Number.isFinite(parsed) && parsed >= 0) {
        setCalcType(parsed);
      }
    }

    const widthFromQuery = searchParams.get("width");
    if (widthFromQuery !== null) {
      const parsed = Number.parseInt(widthFromQuery, 10);
      if (Number.isFinite(parsed) && parsed > 0) {
        setCalcWidth(parsed);
      }
    }

    const heightFromQuery = searchParams.get("height");
    if (heightFromQuery !== null) {
      const parsed = Number.parseInt(heightFromQuery, 10);
      if (Number.isFinite(parsed) && parsed > 0) {
        setCalcHeight(parsed);
      }
    }

    const shapeFromQuery = searchParams.get("shape");
    if (shapeFromQuery === "rect" || shapeFromQuery === "round" || shapeFromQuery === "arch") {
      setCalcShape(shapeFromQuery);
    }
  }, [searchParams]);

  return (
    <SiteShell>
      <CalculatorSection
        calcWidth={calcWidth}
        calcHeight={calcHeight}
        calcShape={calcShape}
        calcType={calcType}
        onWidthChange={setCalcWidth}
        onHeightChange={setCalcHeight}
        onShapeChange={setCalcShape}
        onTypeChange={setCalcType}
      />
    </SiteShell>
  );
}

