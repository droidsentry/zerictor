import PageHeader from "@/lib/components/page-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader
        title="CONTACT"
        subtitle="お問い合わせ"
        className="relative"
      />
      {children}
    </>
  );
}
