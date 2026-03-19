interface PageHeaderProps {
  title: string;
  intro: string;
}

export default function PageHeader({ title, intro }: PageHeaderProps) {
  return (
    <div className="mb-8 pb-6 border-b border-border">
      <h1 className="font-display text-3xl font-bold text-text mb-4 leading-tight">{title}</h1>
      <p className="text-lg text-text-muted leading-relaxed">{intro}</p>
    </div>
  );
}
