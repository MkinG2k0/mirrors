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
  defaultWidthCm?: number;
  defaultHeightCm?: number;
  defaultShapeKey?: string;
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

export interface HeroFeature {
  icon: string;
  title: string;
  text: string;
}

export interface CompanyStat {
  num: string;
  label: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  text: string;
}

export interface ContactItem {
  icon: string;
  label: string;
  value: string;
  sub: string;
  href?: string;
}

export interface Review {
  author: string;
  date: string;
  text: string;
  source: string;
  rating?: number;
}


