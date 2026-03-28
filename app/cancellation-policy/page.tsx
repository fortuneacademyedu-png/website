import { notFound } from "next/navigation";
import { StandalonePageView } from "@/components/site/standalone-page-view";
import { getStandalonePage } from "@/lib/standalone-pages";

export default function Page() {
  const page = getStandalonePage("/cancellation-policy");
  if (!page) notFound();
  return <StandalonePageView page={page} />;
}
