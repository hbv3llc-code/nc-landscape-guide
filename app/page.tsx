import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMeta } from '@/lib/metadata';
import SchemaOrg from '@/components/SchemaOrg';
import { webPageSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: pageMeta.home.title,
  description: pageMeta.home.description,
  alternates: { canonical: pageMeta.home.canonical },
  openGraph: {
    title: pageMeta.home.ogTitle,
    description: pageMeta.home.ogDescription,
    url: pageMeta.home.canonical,
  },
};

const corePages = [
  { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get a Landscape Contractor License in NC', desc: 'Step-by-step overview of the full licensing process.' },
  { href: '/nc-landscape-contractor-license-requirements/', label: 'License Requirements', desc: 'Education, experience, and application prerequisites.' },
  { href: '/landscape-contractor-license-application-process-nc/', label: 'Application Process', desc: 'Forms, fees, and submission instructions.' },
  { href: '/nc-landscape-contractor-exam/', label: 'The Licensing Exam', desc: 'Format, topics, and how to prepare.' },
  { href: '/nc-landscape-contractor-license-renewal/', label: 'License Renewal', desc: 'Deadlines, continuing education, and renewal fees.' },
  { href: '/landscape-contractor-continuing-education-nc/', label: 'Continuing Education', desc: 'Required CEUs for license renewal.' },
  { href: '/what-work-requires-a-landscape-license-nc/', label: 'What Work Requires a License', desc: 'Which landscaping activities are regulated.' },
  { href: '/nc-landscape-contractor-laws-chapter-89d/', label: 'Laws — Chapter 89D', desc: 'NC General Statute governing landscape licensing.' },
  { href: '/penalties-for-unlicensed-landscaping-nc/', label: 'Penalties for Unlicensed Work', desc: 'Consequences of working without a license.' },
  { href: '/landscape-contractor-insurance-bonding-nc/', label: 'Insurance & Bonding', desc: 'Required coverage for licensed contractors.' },
  { href: '/nc-landscape-contractor-license-verification/', label: 'License Verification', desc: 'How to confirm a contractor is properly licensed.' },
  { href: '/landscape-contractor-license-reciprocity-nc/', label: 'License Reciprocity', desc: 'Options for contractors licensed in other states.' },
];

const supportingPages = [
  { href: '/nc-landscape-contractor-faq/', label: 'FAQ' },
  { href: '/landscape-contractor-glossary-nc/', label: 'Glossary' },
  { href: '/licensed-vs-unlicensed-landscape-contractors-nc/', label: 'Licensed vs. Unlicensed' },
  { href: '/how-to-hire-a-licensed-landscape-contractor-nc/', label: 'How to Hire a Licensed Contractor' },
  { href: '/file-complaint-landscape-contractor-nc/', label: 'File a Complaint' },
  { href: '/landscape-contractor-vs-lawn-care-nc/', label: 'Landscape Contractor vs. Lawn Care' },
  { href: '/types-of-landscape-work-nc/', label: 'Types of Landscape Work' },
];

const cityPages = [
  { href: '/landscape-contractor-license-raleigh-nc/', label: 'Raleigh' },
  { href: '/landscape-contractor-license-charlotte-nc/', label: 'Charlotte' },
  { href: '/landscape-contractor-license-greensboro-nc/', label: 'Greensboro' },
  { href: '/landscape-contractor-license-durham-nc/', label: 'Durham' },
  { href: '/landscape-contractor-license-fayetteville-nc/', label: 'Fayetteville' },
  { href: '/landscape-contractor-license-wilmington-nc/', label: 'Wilmington' },
  { href: '/landscape-contractor-license-asheville-nc/', label: 'Asheville' },
  { href: '/landscape-contractor-license-winston-salem-nc/', label: 'Winston-Salem' },
];

export default function HomePage() {
  const schemas = [
    webPageSchema({
      title: pageMeta.home.title,
      description: pageMeta.home.description,
      url: pageMeta.home.canonical,
    }),
    breadcrumbSchema([]),
  ];

  return (
    <>
      <SchemaOrg schema={schemas} />
    <main className="max-w-content mx-auto px-4 py-10">
      {/* Hero */}
      <div className="mb-10 pb-8 border-b border-border">
        <h1 className="font-display text-4xl font-bold text-text mb-4 leading-tight">
          North Carolina Landscape Contractor Licensing Guide
        </h1>
        <p className="text-xl text-text-muted leading-relaxed mb-2">
          The Independent Guide to Landscape Contractor Licensing in North Carolina
        </p>
        <p className="text-base leading-relaxed">
          North Carolina requires landscape contractors to hold a valid state license before performing
          certain types of outdoor construction and design work. This site is an independent reference
          covering the full licensing process — from initial requirements through renewal — as well as
          the state laws that govern licensed landscape contractors.
        </p>
      </div>

      {/* Core Licensing Section */}
      <section className="mb-10" aria-labelledby="licensing-heading">
        <h2 id="licensing-heading" className="font-display text-2xl font-bold text-text mb-6">
          Core Licensing Information
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {corePages.map((page) => (
            <div key={page.href} className="border border-border rounded bg-surface p-4">
              <Link
                href={page.href}
                className="font-display font-bold text-base text-link no-underline hover:underline hover:text-link-hover block mb-1"
              >
                {page.label}
              </Link>
              <p className="font-ui text-sm text-text-muted m-0">{page.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Supporting Resources */}
      <section className="mb-10" aria-labelledby="resources-heading">
        <h2 id="resources-heading" className="font-display text-2xl font-bold text-text mb-4">
          Additional Resources
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none p-0 m-0">
          {supportingPages.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                className="font-ui text-sm text-link no-underline hover:underline hover:text-link-hover"
              >
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* City Guides */}
      <section className="mb-10" aria-labelledby="cities-heading">
        <h2 id="cities-heading" className="font-display text-2xl font-bold text-text mb-4">
          City Guides
        </h2>
        <p className="text-sm text-text-muted mb-4">
          NC landscape contractor licensing is issued at the state level and applies uniformly
          across all municipalities. These guides cover licensing in major NC cities.
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 list-none p-0 m-0">
          {cityPages.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                className="font-ui text-sm text-link no-underline hover:underline hover:text-link-hover"
              >
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* About this site */}
      <section className="bg-accent-light border border-border rounded p-6">
        <h2 className="font-display text-lg font-bold text-text mb-2">About This Guide</h2>
        <p className="font-ui text-sm text-text-muted leading-relaxed">
          The NC Landscape Contractor Resource Guide is an independent informational resource.
          It is not affiliated with the North Carolina Landscape Contractors&apos; Association,
          any state licensing board, or any government agency. All information is provided for
          general reference only. For official licensing actions, contact the appropriate NC state authority.
          <Link href="/about/" className="ml-1 text-link hover:text-link-hover">
            Learn more about this site.
          </Link>
        </p>
      </section>
    </main>
    </>
  );
}
