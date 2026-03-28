import { HomePageView } from "@/components/site/home-page";
import { getSiteContent } from "@/lib/content";

export default async function HomePage() {
  const content = await getSiteContent();
  return <HomePageView content={content} />;
}
