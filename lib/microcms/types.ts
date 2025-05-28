import {
  EmploymentTypeId,
  JobCategoryId,
  OtherTagId,
} from "@/app/(marketing)/careers/data/careers";
import type {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSImage,
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

// ビジネスの型定義
export type BusinessContent = {
  title: string;
  subTitle: string;
  description: string;
  image: MicroCMSImage;
  link?: string;
};

export type BusinessItem = BusinessContent & MicroCMSContentId & MicroCMSDate;

export type CareerTag = {
  employmentTypeIds?: EmploymentTypeId[]; // 雇用形態 (例: "正社員", "アルバイト")
  jobCategoryIds?: JobCategoryId[]; // 職種カテゴリー (例: "エンジニア", "デザイナー")
  othersIds?: OtherTagId[]; // その他 (オプショナル)
};

export type Career = {
  careerId: string;
  title: string; // 職種
  tag: CareerTag; // ★変更点
  jobDescription: string; // 仕事内容
  mustSkills: string[]; // 必須スキル
  welcomeSkills: string[]; // 歓迎スキル
  humanResources: string[]; // 人材スキル
};
