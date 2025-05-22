import type {
  MicroCMSImage,
  MicroCMSContentId,
  MicroCMSDate,
} from "microcms-js-sdk";

// カテゴリーの型定義
export type Category = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

// ニュースの型定義
export type NewsContent = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: Category;
};

export type NewsItem = NewsContent & MicroCMSContentId & MicroCMSDate;

export type NewsLists = {
  articles?: NewsItem[];
};

export type NewsDetail = {
  news: NewsItem;
};
