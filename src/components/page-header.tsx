export function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-muted py-12">
      <div className="content-wrapper">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          {description}
        </p>
      </div>
    </div>
  );
}