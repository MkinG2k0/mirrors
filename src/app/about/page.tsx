import { AboutPageContent } from "@/widgets/mirror-shop";
import { FaqJsonLd } from "@/shared/seo/FaqJsonLd";

export const revalidate = 60;

export const dynamic = "force-static";

export const metadata = {
  title: "О салоне Napoli",
  description:
    "Салон зеркал Napoli: опытная команда, собственное производство и полный цикл — от замера до установки зеркал премиум-класса.",
};

export default function AboutPage() {
  return (
    <>
      <FaqJsonLd />
      <AboutPageContent />
    </>
  );
}

