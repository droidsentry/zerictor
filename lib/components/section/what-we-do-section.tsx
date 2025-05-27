export default function WhatWeDoSection() {
  return (
    <>
      <div className="h-[10vh] bg-gradient-to-t from-foreground/40 to-transparent" />
      <div className="h-dvh bg-gradient-to-t from-foreground to-foreground/40">
        <div className="flex flex-col items-center justify-center text-primary-foreground font-bold tracking-widest h-full px-6">
          <h2 className="text-4xl md:text-7xl mb-24">WHAT WE DO</h2>
          <div className="flex flex-col gap-6 max-w-xl text-xs md:text-base text-pretty leading-8">
            <p>
              Zerictorは、
              テクノロジーと創造力で「まだ存在しない価値」を生み出すチームです。
            </p>
            <p>
              私たちが大切にしているのは、“面白いことに真剣である”ということ。
              技術に熱中し、遊び心を忘れず、
              誠実に、お客様と一緒に“新しい当たり前”をつくっていきます。
              今までも、そしてこれからも、お客様の事業継続に貢献してまいります。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
