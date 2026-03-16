"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SiteShell } from "./SiteShell";
import { CalculatorSection } from "./CalculatorSection";

const DEFAULT_WIDTH = 60;
const DEFAULT_HEIGHT = 80;

export function CalculatorPageContent() {
  const searchParams = useSearchParams();
  const [calcWidth, setCalcWidth] = useState(DEFAULT_WIDTH);
  const [calcHeight, setCalcHeight] = useState(DEFAULT_HEIGHT);
  const [calcShape, setCalcShape] = useState("rect");
  const [calcType, setCalcType] = useState(0);

  useEffect(() => {
    const typeFromQuery = searchParams.get("type");
    if (typeFromQuery !== null) {
      const parsed = Number.parseInt(typeFromQuery, 10);
      if (Number.isFinite(parsed) && parsed >= 0) {
        setCalcType(parsed);
      }
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

