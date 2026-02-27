import { workshops } from "@/data/workshops";
import WorkshopPage from "@/components/WorkshopPage";

export default function KubernetesWorkshop() {
  const workshop = workshops.find((w) => w.slug === "kubernetes")!;
  return <WorkshopPage workshop={workshop} />;
}
