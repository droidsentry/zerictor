import { Badge } from "@/lib/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/lib/components/ui/card";
import { formatToJapaneseDateTime } from "@/lib/microcms/date-fns";
import { NewsDetail } from "@/lib/microcms/types";
import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ news }: NewsDetail) {
  return (
    <Card className="duration-300 hover:shadow-none hover:translate-2 relative h-full">
      <CardContent>
        <div className="relative rounded-lg overflow-hidden mb-6">
          {news.thumbnail ? (
            <Image
              src={news.thumbnail?.url}
              alt="news"
              width={news.thumbnail?.width}
              height={news.thumbnail?.height}
              priority
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
        <Badge className="bg-primary text-primary-foreground rounded-full mb-2 px-3 tracking-widest">
          {news.category.name}
        </Badge>
        <p className="text-[18px] font-bold tracking-wide h-[40px]">
          {news.title}
        </p>
        <button>
          <Link href={`/news/${news.id}`}>
            <span className="absolute inset-0" />
          </Link>
        </button>
      </CardContent>
      <CardFooter className="items-end">
        <p className="text-sm font-bold text-muted-foreground/80">
          {formatToJapaneseDateTime(news.publishedAt || news.createdAt)}
        </p>
      </CardFooter>
    </Card>
  );
}
