import { Button } from "@/lib/components/ui/button";
import { getCategoryList, getNewsList } from "@/lib/microcms/news";
import NewsList from "@/lib/components/news/news-list";
import { NEWS_LIST_LIMIT } from "@/lib/config/constants";
import Link from "next/link";
import PageBreadcrumb from "@/lib/components/page-breadcrumb";
import { Metadata } from "next";
import { getBaseURL } from "@/lib/base-url";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: "ニュース一覧",
  description:
    "サービスに関する最新情報、アップデート、お知らせを随時更新しています。重要な機能追加やメンテナンス情報など、ユーザーの皆様に役立つ情報をいち早くお届けします。",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    draftKey: string;
    categoryId?: string;
  }>;
}) {
  const { categoryId } = await searchParams;

  const getNewsListPromise = categoryId
    ? getNewsList({
        limit: NEWS_LIST_LIMIT,
        filters: `category[equals]${categoryId}`,
      })
    : getNewsList({
        limit: NEWS_LIST_LIMIT,
      });

  const [newsList, category] = await Promise.all([
    getNewsListPromise,
    getCategoryList(),
  ]);

  return (
    <div className="bg-muted">
      <div className="container mx-auto px-3 md:px-12 py-24">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4">すべての記事一覧</h2>
          <div className="flex gap-2 mb-12">
            <Button variant={!categoryId ? "default" : "outline"} size="sm">
              <Link href="/news">すべて</Link>
            </Button>
            {category.contents.map((cat) => (
              <Button
                key={cat.id}
                variant={categoryId === cat.id ? "default" : "outline"}
                size="sm"
              >
                <Link href={`/news?categoryId=${cat.id}`}>{cat.name}</Link>
              </Button>
            ))}
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <NewsList articles={newsList.contents} />
          </ul>
        </div>
        <PageBreadcrumb
          items={[
            { title: "HOME", url: "/" },
            { title: "NEWS" }, // urlなしで現在のページ
          ]}
          className="mt-24"
        />
      </div>
    </div>
  );
}
