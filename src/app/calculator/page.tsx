import { CalculatorPageContent } from "@/widgets/mirror-shop";

export const revalidate = 60;

export const dynamic = "force-static";

export const metadata = {
  title: "Калькулятор стоимости зеркала",
  description:
    "Рассчитайте ориентировочную стоимость зеркала Napoli по размеру, форме и типу. Узнайте цену перед заказом и оформите консультацию.",
};

export default function CalculatorPage() {
  return <CalculatorPageContent />;
}

