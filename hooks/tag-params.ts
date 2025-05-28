"use client";

import {
  EmploymentTypeId,
  JobCategoryId,
  OtherTagId,
} from "@/app/(marketing)/careers/data/careers";
import { useSearchParams } from "next/navigation";

type TagId = EmploymentTypeId | JobCategoryId | OtherTagId;
type TagType = "employmentTypeIds" | "jobCategoryIds" | "othersIds";

export const useTagParams = () => {
  const searchParams = useSearchParams();

  //タグ取得
  const getTagIds = (tagType: TagType): string[] => {
    return searchParams.get(tagType)?.split(",").filter(Boolean) || [];
  };

  // タグ追加
  const addTagToSearchParams = (tagType: TagType, id: TagId): string => {
    const currentIds = getTagIds(tagType);

    if (currentIds.includes(id)) {
      return currentIds.join(",");
    }

    return [...currentIds, id].join(",");
  };

  // タグ削除
  const removeTagFromSearchParams = (tagType: TagType, id: TagId): string => {
    const currentIds = getTagIds(tagType);
    return currentIds.filter((tagId) => tagId !== id).join(",");
  };

  // 各タグの値を取得
  const employmentTypeIds = getTagIds("employmentTypeIds");
  const jobCategoryIds = getTagIds("jobCategoryIds");
  const othersIds = getTagIds("othersIds");

  return {
    employmentTypeIds,
    jobCategoryIds,
    othersIds,
    addTagToSearchParams,
    removeTagFromSearchParams,
  };
};
