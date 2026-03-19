import Link from 'next/link';

export interface RelatedLink {
  href: string;
  label: string;
  description?: string;
}

interface RelatedLinksProps {
  links: RelatedLink[];
}

export default function RelatedLinks({ links }: RelatedLinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <aside className="mt-12 pt-8 border-t border-border">
      <h2 className="font-display text-lg font-bold text-text mb-4">Related Pages</h2>
      <ul className="space-y-3 list-none p-0 m-0">
        {links.map((link) => (
          <li key={link.href} className="flex flex-col">
            <Link
              href={link.href}
              className="font-ui text-sm font-medium text-link no-underline hover:underline hover:text-link-hover"
            >
              {link.label}
            </Link>
            {link.description && (
              <span className="font-ui text-xs text-text-muted mt-0.5">{link.description}</span>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
