import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-surface border-b border-border">
      <div className="max-w-content mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline group">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
            className="text-accent flex-shrink-0"
          >
            <path
              d="M11 2C7 2 3 5.5 3 10c0 3 1.5 5.5 4 7l1-3c-1.5-1-2.5-2.5-2.5-4C5.5 7 8 4.5 11 4.5c3 0 5.5 2.5 5.5 5.5 0 1.5-1 3-2.5 4l1 3c2.5-1.5 4-4 4-7 0-4.5-4-8-8-8z"
              fill="currentColor"
            />
            <path
              d="M11 9c-2 0-4 1-5 3 1.5.5 3 .5 4.5 0L11 20l.5-8c1.5.5 3 .5 4.5 0-1-2-3-3-5-3z"
              fill="currentColor"
              opacity="0.7"
            />
          </svg>
          <span
            className="font-display font-bold text-text leading-tight"
            style={{ fontSize: '1rem' }}
          >
            NC Landscape Contractor Resource Guide
          </span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            <li>
              <Link
                href="/how-to-get-a-landscape-contractor-license-in-nc/"
                className="font-ui text-sm font-medium text-text-muted no-underline hover:text-accent"
              >
                Licensing
              </Link>
            </li>
            <li>
              <Link
                href="/nc-landscape-contractor-laws-chapter-89d/"
                className="font-ui text-sm font-medium text-text-muted no-underline hover:text-accent"
              >
                Laws &amp; Regulations
              </Link>
            </li>
            <li>
              <Link
                href="/landscape-contractor-license-raleigh-nc/"
                className="font-ui text-sm font-medium text-text-muted no-underline hover:text-accent"
              >
                City Guides
              </Link>
            </li>
            <li>
              <Link
                href="/nc-landscape-contractor-faq/"
                className="font-ui text-sm font-medium text-text-muted no-underline hover:text-accent"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/about/"
                className="font-ui text-sm font-medium text-text-muted no-underline hover:text-accent"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
