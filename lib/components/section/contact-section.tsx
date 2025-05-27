import { Button } from "@/lib/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="bg-background/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-24 text-primary-foreground tracking-widest">
        <div className="flex items-center justify-between flex-col md:flex-row gap-12">
          <div
            className="p-5 rounded-lg
          "
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-8">
              ご相談・ご依頼・ご質問など、どんなことでもお気軽にご連絡ください。
            </p>
            <p className="text-sm lg:text-base font-bold">
              アイデアの段階でも構いません。
              <span className="font-bold">「こういうことってできる？」</span>
              という問いに、私たちは真剣に向き合います。
            </p>
          </div>
          <Button
            className="hover:bg-background bg-background text-primary text-sm py-3 px-12 h-12.5 duration-300 hover:translate-2 shadow-2xl hover:shadow-none "
            asChild
          >
            <Link href="/contact">
              <div className="flex items-center gap-2">
                <span className="tracking-widest font-bold text-xs md:text-sm">
                  お問い合わせはこちら
                </span>
                <ChevronRight className="size-4" />
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
