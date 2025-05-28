import { careers } from "./data/careers";

import { CareerTag } from "@/lib/microcms/types";
import FilterCategory from "./filter-category";
import JobCards from "./job-cards";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<CareerTag>;
}) {
  const { employmentTypeIds, jobCategoryIds, othersIds } = await searchParams;
  console.log("employmentTypeIds", employmentTypeIds);
  console.log("jobCategoryIds", jobCategoryIds);
  console.log("othersIds", othersIds);

  // searchParamsに設定がない場合は全件表示
  const hasFilters =
    employmentTypeIds?.length || jobCategoryIds?.length || othersIds?.length;

  const filteredCareers = hasFilters
    ? careers.filter((career) => {
        const matchesEmploymentType =
          !employmentTypeIds?.length ||
          career.tag.employmentTypeIds?.some((id) =>
            employmentTypeIds.includes(id)
          );

        const matchesJobCategory =
          !jobCategoryIds?.length ||
          career.tag.jobCategoryIds?.some((id) => jobCategoryIds.includes(id));

        const matchesOthers =
          !othersIds?.length ||
          career.tag.othersIds?.some((id) => othersIds.includes(id));

        return matchesEmploymentType && matchesJobCategory && matchesOthers;
      })
    : careers; // フィルターがない場合は全件表示

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-18">
        <FilterCategory />

        <div className="flex items-center bg-muted p-2 pl-8 mb-12 text-primary">
          <p>
            <span className="text-3xl font-bold">{filteredCareers.length}</span>{" "}
            件
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <JobCards careers={filteredCareers} />
        </div>
      </div>
    </div>
  );
}
