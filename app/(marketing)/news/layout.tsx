import NewsHeader from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="">
        <NewsHeader />
        {children}
      </div>
    </div>
  );
}
