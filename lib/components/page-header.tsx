import { cn } from "../utils";

export default async function PageHeader({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div className={cn("container mx-auto px-6 py-12 lg:py-34", className)}>
      <h1 className="text-5xl md:text-5xl lg:text-7xl mb-6 font-bold tracking-widest text-white">
        {title}
      </h1>
      <p className="text-xl md:text-2xl font-bold tracking-widest text-white">
        {subtitle}
      </p>
    </div>
  );
}
