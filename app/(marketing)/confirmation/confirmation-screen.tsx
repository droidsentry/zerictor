import { Button } from "@/lib/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";
import {
  ExternalLinkIcon,
  HeadsetIcon,
  HomeIcon,
  MailCheckIcon,
} from "lucide-react";
import Link from "next/link";

export default function ConfirmationScreen({
  type,
}: {
  type: "email" | "online";
}) {
  return (
    <Card className="w-full max-w-md ">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl font-bold text-center">
          お問い合わせ完了
        </CardTitle>
        <CardDescription className="text-center">
          お問い合わせ頂きありがとうございます。
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-around py-6">
          <div className="flex flex-col items-center gap-6">
            {type === "email" && (
              <>
                <MailCheckIcon className="size-10" />
                <span className="text-sm font-medium">
                  3営業日以内にメールでご返信いたします
                </span>
              </>
            )}
            {type === "online" && (
              <>
                <HeadsetIcon className="size-10" />
                <p className="text-sm font-medium">
                  下記ボタンをクリックし、
                  <br />
                  オンライン相談を予約してください。
                </p>
              </>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full gap-4">
          <Link
            href={type === "email" ? "/" : "https://cal.com/zerictor-p6fgmh"}
            target={type === "email" ? "_self" : "_blank"}
          >
            {type === "email" && (
              <>
                <HomeIcon className="size-4" />
                <span>ホームに戻る</span>
              </>
            )}
            {type === "online" && (
              <>
                <span>オンライン相談を予約する</span>
                <ExternalLinkIcon className="size-4" />
              </>
            )}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
