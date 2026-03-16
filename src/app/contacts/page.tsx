import { ContactsPageContent } from "@/widgets/mirror-shop";

export const revalidate = 60;

export const dynamic = "force-static";

export const metadata = {
  title: "Контакты салона Napoli",
  description:
    "Контакты салона зеркал Napoli: адрес, телефон, мессенджеры и форма обратной связи для заказа зеркал и консультации по проекту.",
};

export default function ContactsPage() {
  return <ContactsPageContent />;
}

