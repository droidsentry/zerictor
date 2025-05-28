import { getBaseURL } from "@/lib/base-url";
import PageBreadcrumb from "@/lib/components/page-breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: "お問い合わせ",
  description:
    "弊社へのお問い合わせはこちらのフォームより承っております。お問い合わせ内容によっては、ご返信に3営業日ほどお時間をいただく場合がございます。",
};

export default function Page() {
  return (
    <div className="bg-muted">
      <div className="container mx-auto px-3 lg:px-12 xl:px-48 py-24">
        <Card className="p-24">
          <CardHeader className="space-y-6">
            <CardTitle className="text-2xl font-bold text-center">
              弊社へのお問い合わせ
              <br />
              こちらのフォームより承っております。
            </CardTitle>
            <CardDescription className="text-center">
              ご返信に3営業日ほどお時間をいただいております。
              <br />
              3営業日を過ぎても返信がない場合は、お手数ですが再度お問い合わせをお願いいたします。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <iframe
              src="https://tally.so/embed/wv1G8X?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              className="w-full h-[800px]"
              loading="lazy"
              width="100%"
              height="100%"
              title="弊社へのお問い合わせは
こちらのフォームより承っております"
            />
          </CardContent>
        </Card>

        <PageBreadcrumb
          items={[
            { title: "HOME", url: "/" },
            { title: "CONTACT" }, // urlなしで現在のページ
          ]}
          className="mt-24"
        />
      </div>
    </div>
  );
}
