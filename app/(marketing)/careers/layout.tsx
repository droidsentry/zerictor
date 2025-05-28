import PageHeader from "@/lib/components/page-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader title="CAREER" subtitle="キャリア" />
      {children}
    </>
  );
}
