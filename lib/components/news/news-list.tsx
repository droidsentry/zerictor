import { NewsLists } from "@/lib/microcms/types";
import NewsCard from "./news-card";

export default function NewsList({ articles }: NewsLists) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <>
      {articles.map((article) => (
        <li key={article.id}>
          <NewsCard news={article} />
        </li>
      ))}
    </>
  );
}
