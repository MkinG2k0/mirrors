export interface Mirror {
  id: number;
  name: string;
  category: string;
  basePrice: number;
  pricePerSqM: number;
  image: string;
  desc: string;
  thickness: string;
  features: string[];
}

export interface CategoryItem {
  key: string;
  label: string;
}

export interface ShapeItem {
  key: string;
  label: string;
  icon: string;
}

export interface NavItem {
  key: string;
  label: string;
}

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
    features: ["Пескоструй", "Индивид. рисунок", "Закалённое стекло", "Премиум"],
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
