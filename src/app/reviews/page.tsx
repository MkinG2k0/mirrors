import { ReviewsPageContent } from "@/widgets/mirror-shop";

export const revalidate = 60;

export const dynamic = "force-static";

export const metadata = {
  title: "Отзывы о салоне Napoli",
  description:
    "Реальные отзывы клиентов о салоне зеркал Napoli: впечатления от качества зеркал, сервиса, доставки и монтажа.",
};

export default function ReviewsPage() {
  return <ReviewsPageContent />;
}

