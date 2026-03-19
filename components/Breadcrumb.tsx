import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
        <li>
          <Link
            href="/"
            className="font-ui text-xs text-text-muted no-underline hover:text-accent hover:underline"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <span className="text-text-muted text-xs" aria-hidden="true">›</span>
            {item.href ? (
              <Link
                href={item.href}
                className="font-ui text-xs text-text-muted no-underline hover:text-accent hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-ui text-xs text-text" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
