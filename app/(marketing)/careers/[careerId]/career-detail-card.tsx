import { Badge } from "@/lib/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";
import { Career } from "@/lib/microcms/types";
import Image from "next/image";
import {
  allEmploymentTypeTags,
  allJobCategoryTags,
  allOtherTags,
} from "../data/careers";

import { Button } from "@/lib/components/ui/button";
import { Separator } from "@/lib/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/lib/components/ui/table";
import { ExternalLinkIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import CareerInfo from "./images/career-info.png";

export default function CareerDetailCard({ career }: { career: Career }) {
  return (
    <Card>
      <CardHeader className="max-w-4xl mx-auto w-full">
        <CardTitle className="text-2xl font-bold mb-3">
          {career.title}
        </CardTitle>
        <div className="flex flex-wrap gap-2">
          {career.tag.employmentTypeIds?.map((employmentTypeId, tagIndex) => (
            <Badge
              key={tagIndex}
              className="px-3 py-1 text-sm text-primary border-primary"
              variant="outline"
            >
              {
                allEmploymentTypeTags.find((tag) => tag.id === employmentTypeId)
                  ?.label
              }
            </Badge>
          ))}
          {career.tag.jobCategoryIds?.map((jobCategoryId, tagIndex) => (
            <Badge
              key={tagIndex}
              className="px-3 py-1 text-sm text-primary border-primary"
              variant="outline"
            >
              {
                allJobCategoryTags.find((tag) => tag.id === jobCategoryId)
                  ?.label
              }
            </Badge>
          ))}
          {career.tag.othersIds?.map((othersId, tagIndex) => (
            <Badge
              key={tagIndex}
              className="px-3 py-1 text-sm text-primary border-primary"
              variant="outline"
            >
              {allOtherTags.find((tag) => tag.id === othersId)?.label}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="relative aspect-video w-full rounded-lg overflow-hidden ">
            <Image
              src={CareerInfo}
              alt="career-image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-10">
          <h3 className="border-l-5 pl-3 text-xl font-bold mb-3">職務内容</h3>
          <p className="text-gray-700 leading-relaxed pl-3 mt-3">
            {career.jobDescription}
          </p>
        </div>

        <div className="mt-10">
          <h3 className="border-l-5 pl-3 text-xl font-bold mb-3">必須スキル</h3>
          <ul className="list-disc list-inside space-y-1 pl-3 mt-3">
            {career.mustSkills.map((skill, skillIndex) => (
              <li key={skillIndex} className="text-gray-700">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="border-l-5 pl-3 text-xl font-bold mb-3">歓迎スキル</h3>
          <ul className="list-disc list-inside space-y-1 pl-3 mt-3">
            {career.welcomeSkills.map((skill, skillIndex) => (
              <li key={skillIndex} className="text-gray-700">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="border-l-5 pl-3 text-xl font-bold mb-3">
            求める人物像
          </h3>
          <ul className="list-disc list-inside space-y-1 pl-3 mt-3">
            {career.humanResources.map((resource, resourceIndex) => (
              <li key={resourceIndex} className="text-gray-700">
                {resource}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 w-full">
          <Table className="w-full border">
            <TableBody>
              <TableRow>
                <TableCell className="border bg-muted w-1/4">
                  職種 / 募集ポジション
                </TableCell>
                <TableCell className="border w-3/4">{career.title}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border bg-muted">雇用形態</TableCell>
                <TableCell className="border">
                  {
                    allEmploymentTypeTags.find(
                      (tag) => tag.id === career.tag.employmentTypeIds?.[0]
                    )?.label
                  }
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border bg-muted">給与</TableCell>
                <TableCell className="border">
                  <p className="pb-2">年収 450万円 〜 650万円</p>
                  <p className="border-t pt-2">
                    ※ スキル・経験・能力を考慮の上、当社規定により優遇致します
                    <br />※ 賞与年2回（業績連動）
                  </p>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="border bg-muted">勤務地</TableCell>
                <TableCell className="border">
                  <p className="pb-2">
                    〒170-0013
                    東京都豊島区東池袋2丁目62番8号BIGオフィスプラザ池袋1206
                  </p>
                  <div className="flex items-center gap-2 border-t pt-2">
                    <MapPinIcon className="inline size-5 text-primary" />
                    <Button variant="link" className="p-0 h-fit">
                      <Link
                        href={
                          "https://www.google.com/maps/search/?api=1&query=35.734142,139.717060"
                        }
                        target="_blank"
                      >
                        地図で確認
                      </Link>
                    </Button>
                    <ExternalLinkIcon className="inline size-5 text-primary" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border bg-muted">勤務体系</TableCell>
                <TableCell className="border space-y-2">
                  <p>■勤務時間</p>{" "}
                  <p> フレックスタイム制(コアタイム：有 12:00〜16:00)</p>
                  <p> 所定労働時間：8時間(休憩60分)</p>
                  <p>
                    残業手当：有(45時間分の固定残業代を支給、超過分別途支給)
                  </p>
                  <p>■休日 </p>{" "}
                  <p> 土日祝日、夏季休暇、年末年始休暇 年間休日数 125日</p>
                  <p> ※休日勤務：有(振替休日の取得可能) ■休暇 年次有給休暇</p>
                  <p> 産前産後休暇 育児休暇 慶弔休暇 その他休暇</p>
                  <p>■休暇</p>
                  <p>年次有給休暇</p>
                  <p>産前産後休暇</p>
                  <p>育児休暇</p>
                  <p>慶弔休暇</p>
                  <p>その他休暇</p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border bg-muted">福利厚生</TableCell>
                <TableCell className="border">
                  <p>・各種社会保険完備</p>
                  <p>・交通費支給（1か月あたり上限5万円）</p>
                  <p>・オフィスコンビニ /ウォーターサーバー設置</p>
                  <p>・PC / 付属機器等の貸与</p>
                  <p>・雇入 / 定期健康診断等の費用負担勤務体系</p>
                  <p>・インフルエンザ予防接種等の費用負担</p>
                  <p>・副業可</p>
                  <p>・メンタルヘルスケア</p>
                  <p>・イベント支援制度（社内規定あり）</p>
                  <p>・リモートワーク制度</p>
                  <p>・帰省リモートワーク制度</p>
                  <p>・配信ライブイベントチケット配布</p>
                  <p>・語学学習支援</p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border bg-muted">選考フロー</TableCell>
                <TableCell className="border">
                  <p>「応募ページ」よりエントリー</p>
                  <p>↓</p>
                  <p>書類選考</p>
                  <p>↓</p>
                  <p>面談（2-3回程度）</p>
                  <p>※原則web面接</p>
                  <p>↓</p>
                  <p>リファレンスチェック</p>
                  <p>↓</p>
                  <p>内定</p>
                  <p>※選考状況によってフローが変更となる可能性があります</p>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <Separator className="my-8" />
        <div className="mt-10 text-center mb-10">
          <Button className="h-12 bg-muted-foreground" disabled={true}>
            この求人の応募は終了しました。
            {/* <Link
              href={`/`}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              この求人に応募する
            </Link> */}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
