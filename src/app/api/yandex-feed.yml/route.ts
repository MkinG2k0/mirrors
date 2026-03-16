import { CATEGORIES, MIRRORS, BRAND_NAME } from "@/shared/constants/mirrors";

const CURRENCY_ID = "RUR";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://zerkalanapoli.ru";

const xmlEscape = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const formatYmlDate = (): string => {
  const date = new Date();

  const pad = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

export async function GET(): Promise<Response> {
  const date = formatYmlDate();

  const categoriesXml = [
    `<category id="1">${xmlEscape("Зеркала")}</category>`,
    ...CATEGORIES.filter((category) => category.key !== "all").map(
      (category, index) =>
        `<category id="${index + 2}" parentId="1">${xmlEscape(
          category.label,
        )}</category>`,
    ),
  ].join("\n");

  const offersXml = MIRRORS.map((mirror, index) => {
    const offerId = index + 1;
    const categoryIndex = CATEGORIES.findIndex(
      (category) => category.key === mirror.category,
    );
    const categoryId = categoryIndex === -1 ? 1 : categoryIndex + 1;

    const name = `Зеркало ${mirror.name.toLowerCase()} ${BRAND_NAME}`;
    const description = `${mirror.desc} Цена указана за 1 м².`;

    return [
      `<offer id="${offerId}" available="true">`,
      `<categoryId>${categoryId}</categoryId>`,
      `<name>${xmlEscape(name)}</name>`,
      `<vendor>${xmlEscape(BRAND_NAME)}</vendor>`,
      `<description><![CDATA[${description}]]></description>`,
      `<price>${mirror.pricePerSqM}</price>`,
      `<currencyId>${CURRENCY_ID}</currencyId>`,
      `<pickup>true</pickup>`,
      `<delivery>true</delivery>`,
      `<store>true</store>`,
      `</offer>`,
    ].join("\n");
  }).join("\n\n");

  const xml = [
    '<?xml version="1.0" encoding="utf-8"?>',
    `<yml_catalog date="${date}">`,
    "<shop>",
    `<name>${xmlEscape(BRAND_NAME)}</name>`,
    `<company>${xmlEscape(`${BRAND_NAME} — Зеркала & Интерьер`)}</company>`,
    `<url>${xmlEscape(SITE_URL)}</url>`,
    "",
    "<currencies>",
    `<currency id="${CURRENCY_ID}" rate="1"/>`,
    "</currencies>",
    "",
    "<categories>",
    categoriesXml,
    "</categories>",
    "",
    "<offers>",
    offersXml,
    "</offers>",
    "</shop>",
    "</yml_catalog>",
    "",
  ].join("\n");

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

