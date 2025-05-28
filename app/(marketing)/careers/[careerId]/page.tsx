import { careers } from "../data/careers";
import CareerDetailCard from "./career-detail-card";

export default async function Page({
  params,
}: {
  params: Promise<{ careerId: string }>;
}) {
  const { careerId } = await params;
  const career = careers.find((c) => c.careerId === careerId);
  if (!career) {
    return <div>Career not found</div>;
  }
  return (
    <div className="bg-muted">
      <div className="container mx-auto px-4 py-5 lg:py-18">
        <CareerDetailCard career={career} />
      </div>
    </div>
  );
}
