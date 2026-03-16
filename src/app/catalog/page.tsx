import { CatalogPageContent } from "@/widgets/mirror-shop";

export const revalidate = 60;

export const dynamic = "force-static";

export const metadata = {
  title: "Каталог зеркал",
  description:
    "Каталог премиальных зеркал Napoli: настенные, с подсветкой, панно и другие решения для интерьера. Индивидуальные размеры и профессиональный монтаж.",
};

export default function CatalogPage() {
  return <CatalogPageContent />;
}

