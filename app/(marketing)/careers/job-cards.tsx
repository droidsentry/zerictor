import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";
import { Badge } from "@/lib/components/ui/badge";
import Link from "next/link";
import { Career } from "@/lib/microcms/types";
import {
  allEmploymentTypeTags,
  allJobCategoryTags,
  allOtherTags,
} from "./data/careers";

export default function JobCards({ careers }: { careers: Career[] }) {
  return (
    <>
      {careers.map((job) => (
        <Card key={job.careerId} className="relative pb-1 hover:bg-muted group">
          <CardHeader>
            <CardTitle>{job.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap mb-2 ">
              {/* 雇用形態のバッジ */}
              {job.tag.employmentTypeIds?.map(
                (employmentTypeId, index) =>
                  employmentTypeId && (
                    <Badge
                      key={`employmentType-${index}`}
                      className="px-3 py-1 m-1 bg-muted text-foreground font-semibold group-hover:bg-background"
                    >
                      {
                        allEmploymentTypeTags.find(
                          (employmentTypeTags) =>
                            employmentTypeTags.id === employmentTypeId
                        )?.label
                      }
                    </Badge>
                  )
              )}
              {/* 職種カテゴリーのバッジ */}
              {job.tag.jobCategoryIds?.map(
                (jobCategoryId, index) =>
                  jobCategoryId && (
                    <Badge
                      key={`jobCategory-${index}`}
                      className="px-3 py-1 m-1 bg-muted text-foreground font-semibold group-hover:bg-background"
                    >
                      {
                        allJobCategoryTags.find(
                          (jobCategoryTags) =>
                            jobCategoryTags.id === jobCategoryId
                        )?.label
                      }
                    </Badge>
                  )
              )}
              {/* その他のタグのバッジ (存在する場合) */}
              {job.tag.othersIds &&
                job.tag.othersIds.map((otherTagId, otherTagIndex) => (
                  <Badge
                    key={`other-${otherTagIndex}`}
                    className="px-3 py-1 m-1 bg-muted text-foreground font-semibold group-hover:bg-background"
                  >
                    {
                      allOtherTags.find(
                        (otherTag) => otherTag.id === otherTagId
                      )?.label
                    }
                  </Badge>
                ))}
            </div>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {job.jobDescription}
            </p>
          </CardContent>
          <Link href={`/careers/${job.careerId}`}>
            <span className="absolute inset-0" />
          </Link>
        </Card>
      ))}
    </>
  );
}
