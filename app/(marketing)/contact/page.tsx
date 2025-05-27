import PageBreadcrumb from "@/lib/components/page-breadcrumb";

export default function Page() {
  return (
    <div className="bg-background ">
      <div className="container mx-auto px-3 lg:px-12 xl:px-48 py-24">
        <iframe
          src="https://tally.so/embed/wv1G8X?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          className="w-full h-[1200px]"
          loading="lazy"
          width="100%"
          height="100%"
          title="弊社へのお問い合わせは
こちらのフォームより承っております"
        />

        <PageBreadcrumb
          items={[
            { title: "HOME", url: "/" },
            { title: "CONTACT" }, // urlなしで現在のページ
          ]}
        />
      </div>
    </div>
  );
}
