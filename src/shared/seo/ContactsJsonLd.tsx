import { JsonLd, getLocalBusinessJsonLd } from "./JsonLd";

interface ContactsJsonLdProps {
  siteUrl?: string;
}

export function ContactsJsonLd({ siteUrl }: ContactsJsonLdProps) {
  const url = siteUrl ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://zerkalanapoli.ru";

  // Для контактов переиспользуем LocalBusiness, чтобы страница явно ассоциировалась с организацией
  const data = getLocalBusinessJsonLd(url);

  return <JsonLd data={data} />;
}

