import Link from 'next/link';

const licensingLinks = [
  { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed' },
  { href: '/nc-landscape-contractor-license-requirements/', label: 'License Requirements' },
  { href: '/landscape-contractor-license-application-process-nc/', label: 'Application Process' },
  { href: '/nc-landscape-contractor-exam/', label: 'Licensing Exam' },
  { href: '/nc-landscape-contractor-license-renewal/', label: 'License Renewal' },
  { href: '/landscape-contractor-continuing-education-nc/', label: 'Continuing Education' },
  { href: '/what-work-requires-a-landscape-license-nc/', label: 'What Work Requires a License' },
];

const resourceLinks = [
  { href: '/nc-landscape-contractor-laws-chapter-89d/', label: 'Laws — Chapter 89D' },
  { href: '/penalties-for-unlicensed-landscaping-nc/', label: 'Penalties for Unlicensed Work' },
  { href: '/landscape-contractor-insurance-bonding-nc/', label: 'Insurance & Bonding' },
  { href: '/nc-landscape-contractor-license-verification/', label: 'License Verification' },
  { href: '/landscape-contractor-license-reciprocity-nc/', label: 'Reciprocity' },
  { href: '/nc-landscape-contractor-faq/', label: 'FAQ' },
  { href: '/landscape-contractor-glossary-nc/', label: 'Glossary' },
];

const cityLinks = [
  { href: '/landscape-contractor-license-raleigh-nc/', label: 'Raleigh' },
  { href: '/landscape-contractor-license-charlotte-nc/', label: 'Charlotte' },
  { href: '/landscape-contractor-license-greensboro-nc/', label: 'Greensboro' },
  { href: '/landscape-contractor-license-durham-nc/', label: 'Durham' },
  { href: '/landscape-contractor-license-fayetteville-nc/', label: 'Fayetteville' },
  { href: '/landscape-contractor-license-wilmington-nc/', label: 'Wilmington' },
  { href: '/landscape-contractor-license-asheville-nc/', label: 'Asheville' },
  { href: '/landscape-contractor-license-winston-salem-nc/', label: 'Winston-Salem' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border mt-16">
      <div className="max-w-content mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-ui font-semibold text-sm uppercase tracking-wide text-text-muted mb-3">
              Licensing
            </h3>
            <ul className="space-y-1.5 list-none p-0 m-0">
              {licensingLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-ui text-sm text-link no-underline hover:underline hover:text-link-hover"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-ui font-semibold text-sm uppercase tracking-wide text-text-muted mb-3">
              Resources
            </h3>
            <ul className="space-y-1.5 list-none p-0 m-0">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-ui text-sm text-link no-underline hover:underline hover:text-link-hover"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-ui font-semibold text-sm uppercase tracking-wide text-text-muted mb-3">
              City Guides
            </h3>
            <ul className="space-y-1.5 list-none p-0 m-0">
              {cityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-ui text-sm text-link no-underline hover:underline hover:text-link-hover"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 space-y-2">
          <p className="font-ui text-xs text-text-muted leading-relaxed">
            This site is an independent informational resource and is not affiliated with any
            government agency or licensing board.
          </p>
          <p className="font-ui text-xs text-text-muted">
            © {year} NC Landscape Contractor Resource Guide — Independent Informational Resource
          </p>
        </div>
      </div>
    </footer>
  );
}
