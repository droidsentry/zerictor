"use client";

import { BusinessItem } from "@/lib/microcms/types";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

// 型定義を追加
interface IndicatorProps {
  className?: string;
  classNameButton?: string;
  currentIndex: number;
  totalItems: number;
  onIndexChange: (index: number) => void;
}

export const BusinessCarousel = ({
  businessesContents,
  autoplay = false,
  className,
}: {
  businessesContents: BusinessItem[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const [rotations, setRotations] = useState<number[]>([]);

  const businessList = businessesContents || [];

  const handleNext = () => {
    setActive((prev) => (prev + 1) % businessList.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + businessList.length) % businessList.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    // クライアントサイドでのみランダム回転値を初期化
    setRotations(businessList.map(() => Math.floor(Math.random() * 21) - 10));
    setIsInitialized(true);
  }, [businessList]);

  useEffect(() => {
    if (autoplay && isInitialized && businessList.length > 0) {
      const interval = setInterval(handleNext, 3000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isInitialized, businessList.length, handleNext]);

  const getRandomRotation = (index: number) => {
    return isInitialized ? rotations[index] || 0 : 0;
  };

  // サービスリストが空の場合は何も表示しない
  if (!businessList.length) {
    return null;
  }

  return (
    <div className={cn(className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 lg:gap-24 xl:gap-28">
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-full aspect-[16/9] mb-12">
            <AnimatePresence>
              {businessList.map((business, index) => (
                <motion.div
                  key={business.id}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: getRandomRotation(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : getRandomRotation(index),
                    zIndex: isActive(index)
                      ? 999
                      : businessList.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: getRandomRotation(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={business.image.url}
                    alt={business.title}
                    width={900}
                    height={900}
                    draggable={false}
                    className="h-full w-full rounded-lg object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {/* インジケーターを画像エリアに追加 */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="size-8 rounded-full bg-secondary flex items-center justify-center group/button sm:hidden"
              aria-label="前のサービスを表示"
            >
              <ArrowLeftIcon className="size-6 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </Button>
            <Indicator
              currentIndex={active}
              totalItems={businessList.length}
              onIndexChange={setActive}
              className=""
            />
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="size-8 rounded-full bg-secondary flex items-center justify-center group/button sm:hidden"
              aria-label="次のサービスを表示"
            >
              <ArrowRightIcon className="size-6  text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </Button>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4 max-w-xl">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold mb-2">
              {businessList[active]?.title}
            </h3>
            <p className="text-xs md:text-base font-bold mb-6">
              {businessList[active]?.subTitle}
            </p>
            <motion.p className="text-lg text-muted-foreground mb-6">
              {businessList[active]?.description

                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
            </motion.p>
          </motion.div>
          <div className="flex justify-center h-12.5 items-center gap-4">
            {businessList[active]?.link && (
              <Button
                className="text-sm py-3 px-12 h-12.5 duration-300 hover:translate-2 hover:bg-foreground bg-foreground shadow-2xl hover:shadow-none"
                asChild
              >
                <Link href={businessList[active].link} target="_blank">
                  <div className="flex items-center gap-4">
                    <span className="tracking-widest">サービスページ</span>
                    <ExternalLinkIcon className="size-4" />
                  </div>
                </Link>
              </Button>
            )}
          </div>
          <div className="gap-6 pt-12 md:pt-6 lg:pt-3 hidden sm:flex">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="size-8 rounded-full bg-secondary flex items-center justify-center group/button"
              aria-label="前のサービスを表示"
            >
              <ArrowLeftIcon className="size-6 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="size-8 rounded-full bg-secondary flex items-center justify-center group/button"
              aria-label="次のサービスを表示"
            >
              <ArrowRightIcon className="size-6  text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Indicator({
  className,
  classNameButton,
  currentIndex,
  totalItems,
  onIndexChange,
}: IndicatorProps) {
  return (
    <div className={cn("flex w-full items-center justify-center", className)}>
      <div className="flex space-x-2">
        {Array.from({ length: totalItems }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => onIndexChange(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-opacity duration-300",
              currentIndex === i
                ? "bg-muted-foreground"
                : "bg-muted-foreground/50",
              classNameButton
            )}
          />
        ))}
      </div>
    </div>
  );
}
