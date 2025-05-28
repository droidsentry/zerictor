import Image from "next/image";
import CompanyHoro from "./images/company-horo.png";
import { Card, CardContent } from "@/lib/components/ui/card";
import PageBreadcrumb from "@/lib/components/page-breadcrumb";
import { Metadata } from "next";
import { getBaseURL } from "@/lib/base-url";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: "会社概要",
  description:
    "当社の企業理念、事業内容、会社情報をご紹介しています。私たちのミッションやビジョン、サービスへの取り組みについて詳しくご確認いただけます。",
};

export default function Page() {
  return (
    <div className="bg-background ">
      <div className="container mx-auto px-3 lg:px-12 xl:px-48 py-24">
        <section className="flex flex-col items-center justify-center mb-24">
          <h2 className="text-2xl lg:text-7xl font-bold tracking-widest mb-6">
            MISSION
          </h2>
          <p className="text-3xl font-bold tracking-widest pb-2">
            常識を疑い、ゼロから創る。
          </p>
          <p className="text-3xl font-bold tracking-widest pb-12">
            技術と好奇心で、世界に新たなベクトルを示す。
          </p>
          <Image
            src={CompanyHoro}
            alt="Mission"
            className=" object-cover rounded-2xl mb-24"
            width={896}
            height={520}
            priority
          />
          <p className="max-w-3xl text-pretty font-bold text-xl tracking-widest">
            私たちは、制約に縛られず、 自由な発想と誠実な技術力で、
            「未来の当たり前」を創造します。 Zerictorは、 既存の価値観を超えて、
            ワクワクするような体験と変化を、ITの力で社会に届けるプロフェッショナル集団です。
          </p>
        </section>

        <section className="flex flex-col items-center justify-center py-24">
          <h2 className="text-7xl font-bold tracking-widest mb-6">VISION</h2>
          <p className="text-3xl font-bold tracking-widest pb-12">
            4つの行動指針
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-10">
              <CardContent>
                <h3 className="text-3xl font-bold tracking-widest mb-3">
                  Create From Zero
                </h3>
                <p className="text-lg font-semibold tracking-widest mb-6">
                  ゼロから創る姿勢
                </p>
                <p className="text-sm font-semibold tracking-widest text-pretty">
                  常識を疑い、前例にとらわれず、自分たちの手で「当たり」をつくる。
                </p>
              </CardContent>
            </Card>
            <Card className="p-10">
              <CardContent>
                <h3 className="text-3xl font-bold tracking-widest mb-3">
                  Curiosity as the Driver
                </h3>
                <p className="text-lg font-semibold tracking-widest mb-6">
                  好奇心を駆動力に
                </p>
                <p className="text-sm font-semibold tracking-widest text-pretty">
                  「やってみたい」がスタートライン。未知と遊び、失敗から学ぶ。
                </p>
              </CardContent>
            </Card>
            <Card className="p-10">
              <CardContent>
                <h3 className="text-3xl font-bold tracking-widest mb-3">
                  Radical Honesty
                </h3>
                <p className="text-lg font-semibold tracking-widest mb-6">
                  正直に生きる
                </p>
                <p className="text-sm font-semibold tracking-widest text-pretty">
                  仲間や社会に誠実であること。率直な対話が、最高のチームを生む。
                </p>
              </CardContent>
            </Card>
            <Card className="p-10">
              <CardContent>
                <h3 className="text-3xl font-bold tracking-widest mb-3">
                  Dive into Passion
                </h3>
                <p className="text-lg font-semibold tracking-widest mb-6">
                  熱中し、突き抜ける
                </p>
                <p className="text-sm font-semibold tracking-widest text-pretty">
                  好きなことに夢中になり、楽しみながら技術も美意識も磨き上げる。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-7xl font-bold tracking-widest mb-6">ABOUT</h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                私たちは、技術と創意工夫を通じて、
                お客様に最高の価値を届けることを使命とするチームです。
                ゼロから考え、誠実に創り、社会に貢献します。
              </p>

              <div className="w-full prose prose-table:text-sm dark:prose-invert">
                <h3 className="text-2xl font-bold tracking-wide">会社情報</h3>
                <table>
                  <tbody>
                    <tr>
                      <td className="w-1/4">会社名：</td>
                      <td>株式会社Zerictor</td>
                    </tr>
                    <tr>
                      <td>所在地：</td>
                      <td>
                        〒104-0061 東京都中央区銀座1-22-11 銀座大竹ビジデンス 2F
                      </td>
                    </tr>
                    <tr>
                      <td>Email：</td>
                      <td>info@zerictor.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <iframe
              className="w-full h-80 lg:h-96 rounded-lg shadow-lg"
              title="company-location"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=35.671889,139.770944&zoom=15&maptype=roadmap&language=ja`}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </section>
        <PageBreadcrumb
          items={[
            { title: "HOME", url: "/" },
            { title: "COMPANY" }, // urlなしで現在のページ
          ]}
          className="mt-24"
        />
      </div>
    </div>
  );
}
