import "server-only";

import { client } from "./client";
import { notFound } from "next/navigation";
import { MicroCMSQueries } from "microcms-js-sdk";
import { BusinessContent } from "./types";

// サービス一覧を取得
export const getBusinessList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<BusinessContent>({
      endpoint: "business",
      queries,
    })
    .catch(notFound);
  return listData;
};
