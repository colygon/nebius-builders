import { workshops } from "@/data/workshops";
import WorkshopPage from "@/components/WorkshopPage";

export default function LocalFirstWorkshop() {
  const workshop = workshops.find((w) => w.slug === "local-first")!;
  return <WorkshopPage workshop={workshop} />;
}
