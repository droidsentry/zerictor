import "server-only";

import { client } from "./client";
import { notFound } from "next/navigation";
import { MicroCMSQueries } from "microcms-js-sdk";
import { NewsContent } from "./types";

// ニュース一覧を取得
export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<NewsContent>({
      endpoint: "news",
      queries,
    })
    .catch(notFound);
  return listData;
};

// ニュースの詳細を取得
export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client
    .getListDetail<NewsContent>({
      endpoint: "news",
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};
