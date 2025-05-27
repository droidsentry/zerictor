import PageHeader from "@/lib/components/page-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader title="COMPANY" subtitle="会社概要" />
      {children}
    </>
  );
}
