import { workshops } from "@/data/workshops";
import WorkshopPage from "@/components/WorkshopPage";

export default function ClawdVmWorkshop() {
  const workshop = workshops.find((w) => w.slug === "clawd-vm")!;
  return <WorkshopPage workshop={workshop} />;
}
