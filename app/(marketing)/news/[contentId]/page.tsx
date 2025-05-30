import { Badge } from "@/lib/components/ui/badge";
import { formatToJapaneseDateTime } from "@/lib/microcms/date-fns";
import { getNewsDetail } from "@/lib/microcms/news";
import Image from "next/image";
import { Button } from "@/lib/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import PageBreadcrumb from "@/lib/components/page-breadcrumb";
import { Metadata } from "next";
import { getBaseURL } from "@/lib/base-url";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: "ニュース詳細",
  description:
    "サービスに関する重要なお知らせや最新情報の詳細をご確認いただけます。機能アップデートやメンテナンス情報など、ユーザーの皆様に必要な情報を分かりやすくお伝えします。",
};

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ contentId: string }>;
  searchParams: Promise<{
    draftKey: string;
  }>;
}) {
  const { contentId } = await params;
  const { draftKey } = await searchParams;

  const news = await getNewsDetail(contentId, {
    draftKey,
  });
  return (
    <div className="bg-muted">
      <div className="container mx-auto px-12 py-24">
        <div className="flex gap-4 mb-8">
          <Badge>{news.category.name}</Badge>
          <p className="text-sm text-muted-foreground">
            {formatToJapaneseDateTime(news.publishedAt)}
          </p>
        </div>
        <h1 className="text-4xl font-semibold mb-12">{news.title}</h1>
        <div className="p-24 bg-background rounded-lg flex flex-col gap-4 items-center">
          <div className="flex flex-col justify-center gap-4 ">
            {news.thumbnail && (
              <Image
                src={news.thumbnail.url}
                alt={news.title}
                width={news.thumbnail.width}
                height={news.thumbnail.height}
                className="mb-18"
              />
            )}
            <div className="w-full">
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: news.content }}
              />
            </div>
          </div>
          <Button asChild className="h-13 w-2xs">
            <Link href="/news">
              <ChevronLeft className="size-5" />
              <p className="text-lg font-bold">ニュース一覧へ</p>
            </Link>
          </Button>
        </div>
        <PageBreadcrumb
          items={[
            { title: "HOME", url: "/" },
            { title: "NEWS", url: "/news" },
            { title: news.title },
          ]}
          className="mt-24"
        />
      </div>
    </div>
  );
}
