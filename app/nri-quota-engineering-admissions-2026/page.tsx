import { notFound } from "next/navigation";
import { StandalonePageView } from "@/components/site/standalone-page-view";
import { getStandalonePage } from "@/lib/standalone-pages";

export default function Page() {
  const page = getStandalonePage("/nri-quota-engineering-admissions-2026");
  if (!page) notFound();
  return <StandalonePageView page={page} />;
}
