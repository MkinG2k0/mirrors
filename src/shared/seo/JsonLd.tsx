import {
  BUSINESS_ADDRESS,
  BUSINESS_CITY,
  BRAND_NAME,
  INSTAGRAM_URL,
  WHATSAPP_NUMBER,
} from "@/shared/constants/mirrors";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function getLocalBusinessJsonLd(siteUrl: string) {
  const url = siteUrl.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#business`,
    name: BRAND_NAME,
    url,
    description:
      "Салон зеркал Napoli в Махачкале. Зеркала на заказ любых размеров и форм, монтаж и доставка.",
    image: `${url}/og-image.png`,
    telephone: "+7 928 511 74 18",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_ADDRESS,
      addressLocality: BUSINESS_CITY,
      addressCountry: "RU",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+7 928 511 74 18",
        contactType: "customer service",
        areaServed: "RU",
        availableLanguage: ["ru"],
      },
      {
        "@type": "ContactPoint",
        telephone: `+${WHATSAPP_NUMBER}`,
        contactType: "customer service",
        areaServed: "RU",
        availableLanguage: ["ru"],
      },
    ],
    sameAs: [INSTAGRAM_URL],
  };
}

