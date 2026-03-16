import type {
  CategoryItem,
  CompanyStat,
  ContactItem,
  HeroFeature,
  Mirror,
  NavItem,
  ProcessStep,
  Review,
  ShapeItem,
} from "@/shared/model/mirrors";

export const MIRRORS: Mirror[] = [
  {
    id: 1,
    name: "Зеркало на ножке",
    category: "floor",
    basePrice: 7500,
    pricePerSqM: 4200,
    image: "https://avatars.mds.yandex.net/get-sprav-products/17712810/2a0000019c60f50231eafa64515bfe9cb712/M_height",
    desc: "Компактное напольное зеркало на устойчивой ножке — удобно для спальни и гардеробной.",
    thickness: "4 мм",
    features: ["Напольное", "Устойчивая опора", "Подходит для примерки одежды"],
    defaultWidthCm: 60,
    defaultHeightCm: 80,
    defaultShapeKey: "rect",
  },
  {
    id: 2,
    name: "Зеркало напольное 165×54",
    category: "floor",
    basePrice: 15900,
    pricePerSqM: 5200,
    image: "https://avatars.mds.yandex.net/get-sprav-products/17712810/2a0000019c60f6094e8e0a3f376350122184/M_height",
    desc: "Высокое напольное зеркало 165×54 см — эффектный акцент для прихожей или шоурума.",
    thickness: "4 мм",
    features: ["Размер 165×54 см", "Напольное", "Визуально увеличивает пространство"],
    defaultWidthCm: 54,
    defaultHeightCm: 165,
    defaultShapeKey: "rect",
  },
  {
    id: 3,
    name: "Зеркало с подсветкой",
    category: "led",
    basePrice: 9900,
    pricePerSqM: 7800,
    image: "https://avatars.mds.yandex.net/get-sprav-products/19253181/2a0000019c60f6f90aab335f0c94c5c74642/M_height",
    desc: "Настенное зеркало с яркой светодиодной подсветкой — идеально для ванной и макияжа.",
    thickness: "5 мм",
    features: ["LED подсветка", "Настенное крепление", "Удобно для макияжа"],
    defaultWidthCm: 60,
    defaultHeightCm: 80,
    defaultShapeKey: "rect",
  },
  {
    id: 4,
    name: "Зеркало в металлической раме",
    category: "framed",
    basePrice: 8200,
    pricePerSqM: 6500,
    image: "https://avatars.mds.yandex.net/get-sprav-products/20222640/2a0000019c60f7cfc90edf2c71269e9f4c58/M_height",
    desc: "Стильное зеркало в лаконичной металлической раме — подходит для современных интерьеров.",
    thickness: "5 мм",
    features: ["Металлическая рама", "Современный дизайн", "Настенное крепление"],
    defaultWidthCm: 60,
    defaultHeightCm: 80,
    defaultShapeKey: "rect",
  },
  {
    id: 5,
    name: "Зеркало с лампочками",
    category: "bulbs",
    basePrice: 15500,
    pricePerSqM: 9000,
    image: "https://avatars.mds.yandex.net/get-sprav-products/17712810/2a0000019c60f8cff26e14880f533623effa/M_height",
    desc: "Гримерное зеркало с лампочками по периметру — профессиональный свет для макияжа.",
    thickness: "5 мм",
    features: ["Гримерный стиль", "Лампочки по периметру", "Регулируемый свет"],
    defaultWidthCm: 80,
    defaultHeightCm: 100,
    defaultShapeKey: "rect",
  },
  {
    id: 6,
    name: "Большое круглое зеркало с двойной подсветкой",
    category: "round",
    basePrice: 16900,
    pricePerSqM: 8800,
    image: "https://avatars.mds.yandex.net/get-sprav-products/17700615/2a0000019c60fe4bd80d337f207023fd33fb/M_height",
    desc: "Крупное круглое зеркало с двойной LED-подсветкой — эффектный центр любой стены.",
    thickness: "5 мм",
    features: ["Круглая форма", "Двойная подсветка", "Современный дизайн"],
    defaultWidthCm: 80,
    defaultHeightCm: 80,
    defaultShapeKey: "round",
  },
  {
    id: 7,
    name: "Зеркало с подсветкой 170×95",
    category: "led",
    basePrice: 16900,
    pricePerSqM: 8200,
    image: "https://avatars.mds.yandex.net/get-sprav-products/17763327/2a0000019c61003c946510bd0361c7d60f7e/M_height",
    desc: "Крупное прямоугольное зеркало 170×95 см с яркой подсветкой — для просторных санузлов и залов.",
    thickness: "5 мм",
    features: ["Размер 170×95 см", "LED подсветка", "Настенное крепление"],
    defaultWidthCm: 95,
    defaultHeightCm: 170,
    defaultShapeKey: "rect",
  },
  {
    id: 8,
    name: "Зеркало 100×75 с нейтральной подсветкой",
    category: "led",
    basePrice: 12400,
    pricePerSqM: 8000,
    image: "https://avatars.mds.yandex.net/get-sprav-products/17712810/2a0000019c61019db985c4ab2b812b95f509/M_height",
    desc: "Зеркало 100×75 см с нейтральной подсветкой — комфортный свет для ежедневных ритуалов.",
    thickness: "5 мм",
    features: ["Размер 100×75 см", "Нейтральный свет", "Подходит для ванной"],
    defaultWidthCm: 75,
    defaultHeightCm: 100,
    defaultShapeKey: "rect",
  },
];

export const CATEGORIES: CategoryItem[] = [
  { key: "all", label: "Все" },
  { key: "floor", label: "Напольные" },
  { key: "led", label: "С подсветкой" },
  { key: "framed", label: "В раме" },
  { key: "bulbs", label: "С лампочками" },
  { key: "round", label: "Круглые" },
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
  { key: "reviews", label: "Отзывы" },
  { key: "contacts", label: "Контакты" },
];

export const BUSINESS_CITY = "Махачкала";

export const BUSINESS_ADDRESS = "Проспект Имама Шамиля, 146";

export const BUSINESS_POSTAL_CODE = "367030";

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
    href: `https://yandex.ru/maps/?text=${encodeURIComponent(BUSINESS_FULL_ADDRESS)}`,
  },
  {
    icon: "◇",
    label: "Instagram",
    value: "zerkala_napoli",
    sub: "Мы в соцсетях",
    href: INSTAGRAM_URL,
  },
];

export const REVIEWS_RATING = 4.2;

export const REVIEWS_COUNT = 6;

export const REVIEWS_URL =
  "https://yandex.ru/maps/org/napoli/177863440500/reviews/?ll=47.52157%2C42.951069&z=17";

export const REVIEWS: Review[] = [
  {
    author: "Sagid M.",
    date: "20 февраля",
    text: "Огромный выбор зеркал. Качество на высоком уровне. Профессиональный персонал.",
    source: "Яндекс Карты",
    rating: 5,
  },
  {
    author: "Ибрагим Гаджикасумов",
    date: "15 сентября",
    text: "Хороший выбор,хорошие цены",
    source: "Яндекс Карты",
    rating: 5,
  },
  {
    author: "Камилла А.",
    date: "14 сентября",
    text:
      "Про магазин зеркал Napoli слышала давно, а когда пришло время заказать зеркала, сразу вспомнила об этом магазине. " +
      "Изготовили зеркала в срок, доставили и установили вовремя. Спасибо продавцу Мадине за оперативную работу и чёткую консультацию, советую.",
    source: "Яндекс Карты",
    rating: 5,
  },
  {
    author: "📞",
    date: "13 ноября",
    text: "Заказал зеркало, изготовили в сказанные сроки, привезли вовремя. Большой выбор на любой вкус, качество очень понравилось, цены адекватные. Мастера профессионалы, ответственно подошли к работе. Остался доволен, рекомендую",
    source: "Яндекс Карты",
    rating: 5,
  },
  {
    author: "нона м.",
    date: "14 сентября",
    text: "В любом интерьере нужны зеркала, а в этом магазине такое разнообразие. И классические, и современные, можно обговорить свои предпочтения, сотрудники молодцы, выслушают, подскажут. Оооочень понравилось внимательное отношение и терпение персонала. Я очень дотошный человек, но они выдержали все мои вопросы. По итогу заказала пока одно зеркало в прихожую , планирую еще , думаю. Мне подсказали интересные решения по дизайну. Спасибо за ваше отношение к клиентам. Минусов не увидела",
    source: "Яндекс Карты",
    rating: 5,
  },
  {
    author: "Зайнулабид Рахматулаев",
    date: "1 декабря",
    text: "Большой выбор и низкие цены",
    source: "Яндекс Карты",
    rating: 5,
  },
];


