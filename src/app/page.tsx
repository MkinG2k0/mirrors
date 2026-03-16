import { HomeContent } from "@/widgets/mirror-shop";
import { JsonLd, getLocalBusinessJsonLd } from "@/shared/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zerkalanapoli.ru";

export default function Home() {
  return (
    <>
      <JsonLd data={getLocalBusinessJsonLd(siteUrl)} />
      <HomeContent />
    </>
  );
}
