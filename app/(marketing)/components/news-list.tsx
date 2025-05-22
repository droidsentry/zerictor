import { NewsLists, NewsDetail } from "@/lib/microcms/types";
import { Card } from "@/lib/components/ui/card";
import Image from "next/image";
import { Badge } from "@/lib/components/ui/badge";
import Link from "next/link";
import { formatToJapaneseDateTime } from "@/lib/microcms/date-fns";

export default function NewsList({ articles }: NewsLists) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className="grid grid-cols-3 gap-6">
      {articles.map((article) => (
        <NewsListItem key={article.id} news={article} />
      ))}
    </ul>
  );
}

export function NewsListItem({ news }: NewsDetail) {
  return (
    <li>
      <Card className="p-6 duration-300 hover:shadow-none hover:translate-2 relative">
        <div className="relative aspect-video rounded-lg overflow-hidden h-[180px]">
          {news.thumbnail ? (
            <Image
              src={news.thumbnail?.url}
              alt="news"
              fill
              className="object-cover"
            />
          ) : (
            <Image
              className="object-cover"
              src="/no-image.png"
              alt="No Image"
              fill
            />
          )}
        </div>
        <Badge className="bg-primary text-primary-foreground rounded-full mb-3 px-3 tracking-widest">
          {news.category.name}
        </Badge>
        <p className="text-[16px] font-bold">{news.title}</p>
        <button>
          <Link href={`/news/${news.id}`}>
            <span className="absolute inset-0" />
          </Link>
        </button>
        <p className="text-sm font-bold text-muted-foreground/80">
          {formatToJapaneseDateTime(news.publishedAt || news.createdAt)}
        </p>
      </Card>
    </li>
  );
}
