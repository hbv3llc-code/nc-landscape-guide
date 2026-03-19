'use client';

export interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  if (!items || items.length === 0) return null;

  return (
    <aside className="hidden lg:block w-56 flex-shrink-0">
      <div className="sticky top-8 bg-accent-light border border-border rounded p-4">
        <p className="font-ui font-semibold text-xs uppercase tracking-wide text-text-muted mb-3">
          On This Page
        </p>
        <nav aria-label="Table of contents">
          <ul className="space-y-2 list-none p-0 m-0">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="font-ui text-sm text-link no-underline hover:underline hover:text-link-hover block leading-snug"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
