import { notFound } from "next/navigation";
import { StandalonePageView } from "@/components/site/standalone-page-view";
import { getStandalonePage } from "@/lib/standalone-pages";

export default function Page() {
  const page = getStandalonePage("/education-consultant-jayanagar-bangalore");
  if (!page) notFound();
  return <StandalonePageView page={page} />;
}
