import type {
  CategoryItem,
  CompanyStat,
  ContactItem,
  HeroFeature,
  Mirror,
  NavItem,
  ProcessStep,
  ShapeItem,
} from "@/shared/model/mirrors";

export const MIRRORS: Mirror[] = [
  {
    id: 1,
    name: "Классическое",
    category: "classic",
    basePrice: 85,
    pricePerSqM: 4200,
    image: "🪞",
    desc: "Элегантное зеркало с фацетной обработкой края. Идеально для прихожей и гостиной.",
    thickness: "4 мм",
    features: ["Фацет 20мм", "Полировка края", "Крепёж в комплекте"],
  },
  {
    id: 2,
    name: "С LED подсветкой",
    category: "led",
    basePrice: 180,
    pricePerSqM: 7800,
    image: "💡",
    desc: "Современное зеркало с встроенной LED-подсветкой и сенсорным выключателем.",
    thickness: "5 мм",
    features: ["LED 6500K", "Сенсор касания", "Антизапотевание", "IP44"],
  },
  {
    id: 3,
    name: "Безрамное",
    category: "frameless",
    basePrice: 65,
    pricePerSqM: 3400,
    image: "◻️",
    desc: "Минималистичное зеркало без рамы с обработанным краем. Универсальное решение.",
    thickness: "4 мм",
    features: ["Еврокромка", "Скрытый крепёж", "Влагостойкое"],
  },
  {
    id: 4,
    name: "В багетной раме",
    category: "framed",
    basePrice: 220,
    pricePerSqM: 6500,
    image: "🖼️",
    desc: "Зеркало в роскошной багетной раме ручной работы. Подчеркнёт статус интерьера.",
    thickness: "5 мм",
    features: ["Багет дерево", "Патина золото", "Ручная работа", "На заказ"],
  },
  {
    id: 5,
    name: "Круглое",
    category: "round",
    basePrice: 120,
    pricePerSqM: 5200,
    image: "⭕",
    desc: "Стильное круглое зеркало. Тренд современного интерьерного дизайна.",
    thickness: "4 мм",
    features: ["Диаметр от 40см", "Полировка", "Подвес в комплекте"],
  },
  {
    id: 6,
    name: "С гравировкой",
    category: "engraved",
    basePrice: 300,
    pricePerSqM: 9200,
    image: "✨",
    desc: "Уникальное зеркало с художественной пескоструйной гравировкой по вашему эскизу.",
    thickness: "6 мм",
    features: [
      "Пескоструй",
      "Индивид. рисунок",
      "Закалённое стекло",
      "Премиум",
    ],
  },
];

export const CATEGORIES: CategoryItem[] = [
  { key: "all", label: "Все" },
  { key: "classic", label: "Классические" },
  { key: "led", label: "С подсветкой" },
  { key: "frameless", label: "Безрамные" },
  { key: "framed", label: "В раме" },
  { key: "round", label: "Круглые" },
  { key: "engraved", label: "С гравировкой" },
];

export const SHAPES: ShapeItem[] = [
  { key: "rect", label: "Прямоугольное", icon: "▬" },
  { key: "round", label: "Круглое", icon: "●" },
  { key: "arch", label: "Арочное", icon: "⌓" },
];

export const NAV_ITEMS: NavItem[] = [
  { key: "home", label: "Главная" },
  { key: "catalog", label: "Каталог" },
  { key: "calculator", label: "Калькулятор" },
  { key: "info", label: "О нас" },
  { key: "contacts", label: "Контакты" },
];

export const BUSINESS_CITY = "Махачкала";

export const BUSINESS_ADDRESS = "Проспект Имама Шамиля, 146";

export const BUSINESS_FULL_ADDRESS = `${BUSINESS_CITY}, ${BUSINESS_ADDRESS}`;

export const BRAND_NAME = "Napoli";

export const BRAND_TAGLINE = "Зеркала & Интерьер";

export const INSTAGRAM_URL =
  "https://www.instagram.com/zerkala_napoli?igsh=MW1uZzU1aDQ3aGh3ZA==";

export const FOOTER_COPY = `© 2026 ${BRAND_NAME} — Зеркала и интерьер. ${BUSINESS_FULL_ADDRESS}`;

export const HERO_BADGE = "Премиальные зеркала на заказ";

export const HERO_DESCRIPTION =
  "Изготовление зеркал любых форм и размеров. Индивидуальный подход к каждому проекту. Доставка и установка по всей Германии.";

export const HERO_PROJECTS_PER_YEAR_VALUE = "500+";

export const HERO_PROJECTS_PER_YEAR_LABEL = "проектов в год";

export const HERO_FEATURES: HeroFeature[] = [
  {
    icon: "◈",
    title: "Индивидуальный размер",
    text: "Любые размеры от 20×20 до 300×400 см",
  },
  {
    icon: "◇",
    title: "Премиум качество",
    text: "Зеркала от ведущих европейских производителей",
  },
  {
    icon: "△",
    title: "Монтаж и доставка",
    text: "Бесплатная доставка и установка по Франкфурту",
  },
  {
    icon: "○",
    title: "Гарантия 5 лет",
    text: "Полная гарантия на все изделия и монтаж",
  },
];

export const ABOUT_BADGE = "О компании";

export const ABOUT_TITLE = BRAND_NAME;

export const ABOUT_PARAGRAPHS: string[] = [
  "Мы — магазин зеркал с многолетним опытом в производстве и установке зеркал премиум-класса. Наш салон расположен на проспекте Имама Шамиля в Махачкале.",
  "Каждое зеркало изготавливается по индивидуальным размерам с использованием высококачественного стекла от ведущих европейских производителей. Мы предлагаем широкий выбор обработки краёв, типов подсветки и рамок.",
  "Наша команда включает опытных стекольщиков, дизайнеров и монтажников, которые обеспечивают безупречное качество на каждом этапе — от замера до установки.",
];

export const COMPANY_STATS: CompanyStat[] = [
  { num: "15+", label: "лет опыта" },
  { num: "3 000+", label: "выполненных заказов" },
  { num: "98%", label: "довольных клиентов" },
];

export const COMPANY_PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Консультация",
    text: "Обсуждаем ваши пожелания, замеряем пространство, подбираем оптимальное решение.",
  },
  {
    step: "02",
    title: "Производство",
    text: "Изготавливаем зеркало на собственном производстве с контролем качества на каждом этапе.",
  },
  {
    step: "03",
    title: "Доставка и монтаж",
    text: "Бережно доставляем и профессионально устанавливаем зеркало в вашем интерьере.",
  },
  {
    step: "04",
    title: "Гарантия",
    text: "Предоставляем 5-летнюю гарантию и постгарантийное обслуживание.",
  },
];

export const WHATSAPP_NUMBER = "79285006045";

export const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: "☎",
    label: "Телефон",
    value: "+7 928 511 74 18",
    sub: "Пн — Вс 09:00–18:00",
    href: "tel:+79285117418",
  },
  {
    icon: "◈",
    label: "WhatsApp",
    value: "+7 928 500 60 45",
    sub: "Быстрая связь",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: "◎",
    label: "Адрес",
    value: BUSINESS_ADDRESS,
    sub: "1 этаж",
  },
  {
    icon: "◇",
    label: "Instagram",
    value: "zerkala_napoli",
    sub: "Мы в соцсетях",
    href: INSTAGRAM_URL,
  },
];
