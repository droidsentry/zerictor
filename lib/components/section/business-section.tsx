import { getBusinessList } from "@/lib/microcms/service";
import { BusinessCarousel } from "../business/business-carousel";

export default async function BusinessSection() {
  const businesses = await getBusinessList({
    orders: "createdAt",
  });
  // console.log("business", businesses);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 md:px-12 py-24 md:py-48">
        <div className="flex mb-12 md:mb-24">
          <h2 className="text-2xl md:text-5xl font-bold">BUSINESS</h2>
        </div>
        <BusinessCarousel
          businessesContents={businesses.contents}
          autoplay={true}
        />
      </div>
    </div>
  );
}
