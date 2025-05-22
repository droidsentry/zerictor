import { Badge } from "@/lib/components/ui/badge";
import { formatToJapaneseDateTime } from "@/lib/microcms/date-fns";
import { getNewsDetail } from "@/lib/microcms/news";
import Image from "next/image";
import { load } from "cheerio";
import hljs from "highlight.js";
import { Button } from "@/lib/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default async function Page({
  params,
}: {
  params: Promise<{ contentId: string }>;
}) {
  const contentId = (await params).contentId;
  const news = await getNewsDetail(contentId);
  return (
    <div className="bg-muted">
      <div className="container mx-auto px-12 py-12">
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
            <div
              dangerouslySetInnerHTML={{
                __html: `${formatRichText(news.content)}`,
              }}
            />
          </div>
          <Button asChild className="h-13 w-2xs">
            <Link href="/news">
              <ChevronLeft className="size-5" />
              <p className="text-lg font-bold">ニュース一覧へ</p>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function formatRichText(richText: string) {
  const $ = load(richText, null, false);
  $("pre code").each((_, elm) => {
    const lang = $(elm).attr("class");
    const res = lang
      ? hljs.highlight($(elm).text(), {
          language: lang?.replace(/^language-/, "") || "",
        })
      : hljs.highlightAuto($(elm).text());
    $(elm).html(res.value);
  });
  return $.html();
}
