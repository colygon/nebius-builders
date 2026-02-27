import { workshops } from "@/data/workshops";
import WorkshopPage from "@/components/WorkshopPage";

export default function H200GpuWorkshop() {
  const workshop = workshops.find((w) => w.slug === "h200-gpu")!;
  return <WorkshopPage workshop={workshop} />;
}
