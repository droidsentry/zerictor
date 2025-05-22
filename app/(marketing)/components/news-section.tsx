import { Button } from "@/lib/components/ui/button";
import { ChevronRight } from "lucide-react";
import { getNewsList } from "@/lib/microcms/news";
import NewsList from "./news-list";
import { TOP_NEWS_LIMIT } from "@/lib/constants";

export default async function NewsSection() {
  const newsList = await getNewsList({ limit: TOP_NEWS_LIMIT });
  console.log(newsList);
  return (
    <div className="bg-background">
      <div className="container mx-auto py-48 ">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-[64px] font-bold">NEWS</h2>
          <Button variant="ghost" className="group">
            <span className="text-primary">VIEW MORE</span>
            <ChevronRight className="size-4 group-hover:translate-x-1 duration-300" />
          </Button>
        </div>
        <NewsList articles={newsList.contents} />
      </div>
    </div>
  );
}
