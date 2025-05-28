"use client";

import { useTagParams } from "@/hooks/tag-params";
import { Button } from "@/lib/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import {
  allEmploymentTypeTags,
  allJobCategoryTags,
  allOtherTags,
  EmploymentTypeId,
  JobCategoryId,
  OtherTagId,
} from "./data/careers";

export default function FilterCategory() {
  const {
    employmentTypeIds,
    jobCategoryIds,
    othersIds,
    addTagToSearchParams,
    removeTagFromSearchParams,
  } = useTagParams();

  const router = useRouter();
  const pathname = usePathname();

  const updateURL = useCallback(
    (newParams: URLSearchParams) => {
      const newURL = `${pathname}?${newParams.toString()}`;
      // router.push(newURL);
      router.push(newURL, { scroll: false });
    },
    [pathname, router]
  );

  const handleTagClick = useCallback(
    (
      tagType: "employmentTypeIds" | "jobCategoryIds" | "othersIds",
      tagId: EmploymentTypeId | JobCategoryId | OtherTagId
    ) => {
      const currentIds =
        tagType === "employmentTypeIds"
          ? employmentTypeIds
          : tagType === "jobCategoryIds"
          ? jobCategoryIds
          : othersIds;

      const isSelected = currentIds.includes(tagId);
      const newValue = isSelected
        ? removeTagFromSearchParams(tagType, tagId)
        : addTagToSearchParams(tagType, tagId);

      const newParams = new URLSearchParams(window.location.search);

      if (newValue) {
        newParams.set(tagType, newValue);
      } else {
        newParams.delete(tagType);
      }

      updateURL(newParams);
    },
    [
      employmentTypeIds,
      jobCategoryIds,
      othersIds,
      addTagToSearchParams,
      removeTagFromSearchParams,
      updateURL,
    ]
  );

  const handleClearAll = useCallback(
    (tagType: "employmentTypeIds" | "jobCategoryIds" | "othersIds") => {
      const newParams = new URLSearchParams(window.location.search);
      newParams.delete(tagType);
      updateURL(newParams);
    },
    [updateURL]
  );

  return (
    <div className="pb-18 space-y-4">
      <div className="flex pb-4 border-b">
        <div className="basis-1/5 text-lg font-bold">
          <p>雇用形態</p>
        </div>
        <div className="flex gap-2 flex-wrap basis-4/5">
          <Button
            variant="outline"
            className={cn(
              employmentTypeIds.length === 0 &&
                "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
            )}
            onClick={() => handleClearAll("employmentTypeIds")}
          >
            すべて
          </Button>
          {allEmploymentTypeTags.map((type, index) => {
            const isSelected = employmentTypeIds.includes(type.id);
            return (
              <Button
                variant="outline"
                key={`employmentType-${index}`}
                className={
                  isSelected
                    ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                    : ""
                }
                onClick={() => handleTagClick("employmentTypeIds", type.id)}
              >
                {type.label}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="flex pb-4 border-b">
        <div className="basis-1/5 text-lg font-bold">
          <p>職種カテゴリー</p>
        </div>
        <div className="flex gap-2 flex-wrap basis-4/5">
          <Button
            variant="outline"
            className={
              jobCategoryIds.length === 0
                ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                : ""
            }
            onClick={() => handleClearAll("jobCategoryIds")}
          >
            すべて
          </Button>
          {allJobCategoryTags.map((category, index) => {
            const isSelected = jobCategoryIds.includes(category.id);
            return (
              <Button
                variant="outline"
                key={`jobCategory-${index}`}
                className={
                  isSelected
                    ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                    : ""
                }
                onClick={() => handleTagClick("jobCategoryIds", category.id)}
              >
                {category.label}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="flex pb-4">
        <div className="basis-1/5 text-lg font-bold">
          <p>その他</p>
        </div>
        <div className="flex gap-2 flex-wrap basis-4/5">
          <Button
            variant="outline"
            className={
              othersIds.length === 0
                ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                : ""
            }
            onClick={() => handleClearAll("othersIds")}
          >
            すべて
          </Button>
          {allOtherTags.map((other, index) => {
            const isSelected = othersIds.includes(other.id);
            return (
              <Button
                variant="outline"
                key={`other-${index}`}
                className={
                  isSelected
                    ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                    : ""
                }
                onClick={() => handleTagClick("othersIds", other.id)}
              >
                {other.label}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
