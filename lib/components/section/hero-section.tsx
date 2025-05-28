import { Button } from "@/lib/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-12 pt-18 pb-48">
      <div className="text-primary-foreground tracking-widest">
        <div className="flex flex-col mb-22">
          <h1 className="text-6xl md:text-8xl font-semibold font-montserrat opacity-0 animate-fadeInUp break-words break-all pb-2">
            ゼロから世界を描け。
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat opacity-0 animate-fadeInUpDelay">
            Zerictor – 熱中と創造のITカンパニー
          </h2>
        </div>
        <div className="font-semibold opacity-0 animate-fadeInUpDelay5">
          <p className="mb-8 text-sm md:text-xl">OUR MISSION</p>
          <p className="mb-2 text-lg md:text-2xl lg:text-[28px] ">
            常識を疑い、ゼロから創る。
          </p>
          <p className="mb-12 text-lg md:text-2xl lg:text-[28px] flex">
            技術と好奇心で、世界に新たなベクトルを示す。
          </p>
        </div>
        <div className="opacity-0 animate-fadeInUpDelay9">
          <p className="mb-1 text-xs md:text-sm lg:text-base">
            私たちは、制約に縛られず、自由な発想と確かな技術力で、
            「未来の当たり前」を創造します。
          </p>
          <p className="mb-12 text-xs md:text-sm lg:text-base">
            Zerictorは、既存の価値観を超えて、
            ワクワクするような体験と変化を、ITの力で社会に届けるプロフェッショナル集団です。
          </p>
          <Button className="py-3 px-9 h-12.5 duration-300 hover:translate-2 shadow-2xl hover:shadow-none font-bold">
            <Link href={"/company"} className="flex items-center gap-2">
              <span className="text-xs md:text-sm ">この会社について</span>
              <ChevronRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
