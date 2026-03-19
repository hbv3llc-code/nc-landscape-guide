const BASE_URL = 'https://nclcrb.org';
const SITE_NAME = 'NC Landscape Contractor Resource Guide';
const PUBLISHER = {
  '@type': 'Organization',
  name: SITE_NAME,
  url: BASE_URL,
};

// ─── Global schemas ────────────────────────────────────────────────────────────

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: BASE_URL,
    description:
      'Independent guide to North Carolina landscape contractor licensing — requirements, exam, renewal, laws, and city guides.',
    publisher: PUBLISHER,
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: BASE_URL,
    description:
      'An independent informational resource covering landscape contractor licensing in North Carolina under Chapter 89D.',
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/logo.png`,
    },
  };
}

// ─── Page-level schemas ─────────────────────────────────────────────────────────

export function webPageSchema({
  title,
  description,
  url,
  datePublished = '2026-03-01',
  dateModified = '2026-03-19',
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    datePublished,
    dateModified,
    isPartOf: { '@type': 'WebSite', url: BASE_URL, name: SITE_NAME },
    publisher: PUBLISHER,
    inLanguage: 'en-US',
  };
}

export function articleSchema({
  title,
  description,
  url,
  datePublished = '2026-03-01',
  dateModified = '2026-03-19',
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    author: PUBLISHER,
    publisher: PUBLISHER,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: 'en-US',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.prose-content p:first-of-type', 'h1', 'h2'],
    },
  };
}

export function blogPostingSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: PUBLISHER,
    publisher: PUBLISHER,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'Blog',
      name: `${SITE_NAME} — Blog`,
      url: `${BASE_URL}/blog/`,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.prose-content p:first-of-type', 'h1', 'h2'],
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL + '/' },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: item.href.startsWith('http') ? item.href : BASE_URL + item.href,
      })),
    ],
  };
}

// ─── Specialist schemas ─────────────────────────────────────────────────────────

export function faqPageSchema() {
  const url = `${BASE_URL}/nc-landscape-contractor-faq/`;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: 'NC Landscape Contractor Licensing — Frequently Asked Questions',
    url,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need a license to mow lawns in NC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Routine lawn mowing is generally considered lawn care maintenance, which is exempt from the landscape contractor licensing requirement under Chapter 89D. The licensing law targets landscape contracting — work involving the installation, construction, or permanent alteration of outdoor landscapes for compensation. However, if your business also installs plants, builds patios, grades land, or installs irrigation systems, those activities may require a license even if you also offer mowing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a landscape contractor and a lawn care company in NC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A landscape contractor under Chapter 89D performs work involving the installation or permanent modification of landscapes — planting, hardscape, grading, and irrigation. A lawn care company typically performs ongoing maintenance: mowing, fertilizing, trimming, and seasonal cleanups. NC does not require a landscape contractor license solely for lawn maintenance. When a company does both, the installation side falls under Chapter 89D requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to get a landscape contractor license in NC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Generally, applicants should expect the process to take several weeks to a few months from start to finish. You need to complete an application, document your qualifying experience, submit fees, and pass the written examination. Processing times vary based on the board\'s workload and upcoming exam dates. Contact the NCLCRB for current processing times.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does the NC landscape contractor license cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Licensing fees are set by the NC Landscape Contractors\' Registration Board and are subject to change. Fees typically include an application fee and may include a separate exam fee and renewal fee. Obtain the current fee schedule directly from the NCLCRB\'s official website or by contacting the board\'s office.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I work under someone else\'s landscape contractor license in NC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. A landscape contractor license in North Carolina is not transferable. Each individual or business entity performing regulated landscape contracting must hold its own valid license. If you are operating your own landscape contracting business or bidding on contracts, you need your own license.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if my NC landscape contractor license expires?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If your license lapses, you are no longer legally authorized to perform regulated landscape contracting work. Continuing to work with a lapsed license can result in penalties and disciplinary action by the NCLCRB. Reinstatement may require paying a late renewal fee or additional steps. Contact the NCLCRB immediately to determine your reinstatement options.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a separate landscape contractor license for each county in NC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. A landscape contractor license issued by the NCLCRB is a statewide license valid throughout North Carolina. However, local governments may have separate requirements — such as business privilege licenses, building permits, or local contractor registrations — that are distinct from the state license.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can a business entity get a landscape contractor license in NC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Corporations, LLCs, partnerships, and other business entities can hold a North Carolina landscape contractor license. The business license is typically contingent on a designated qualifying individual who has passed the required examination and met the experience requirements. Consult the NCLCRB for current requirements applicable to your business structure.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if I fail the NC landscape contractor exam?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Failing the exam does not permanently bar you from becoming licensed. The NCLCRB allows retakes, though waiting periods and additional fees may apply. Review identified weak areas, study Chapter 89D and landscape construction principles, and consult any prep materials the board recommends. Contact the NCLCRB for the specific retake policy.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is a surety bond required for an NC landscape contractor license?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Surety bond requirements may be part of the NC landscape contractor licensing framework and are subject to change. Confirm current bond requirements — including required coverage amounts and acceptable bond forms — directly with the NCLCRB.',
        },
      },
    ],
  };
}

export function howToGetLicensedSchema() {
  const url = `${BASE_URL}/how-to-get-a-landscape-contractor-license-in-nc/`;
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Get a Landscape Contractor License in North Carolina',
    description:
      'A step-by-step guide to obtaining a landscape contractor license in NC under Chapter 89D, from eligibility through receiving your license.',
    url,
    totalTime: 'P3M',
    supply: [
      { '@type': 'HowToSupply', name: 'Proof of work experience or education in landscape/horticulture' },
      { '@type': 'HowToSupply', name: 'General liability insurance certificate' },
      { '@type': 'HowToSupply', name: 'Government-issued identification' },
      { '@type': 'HowToSupply', name: 'Application fee payment' },
    ],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Confirm You Meet the Requirements',
        text: 'Verify you meet the NCLCRB\'s eligibility criteria: minimum age of 18, a qualifying combination of work experience and/or formal education in horticulture or a related field, and the ability to obtain general liability insurance.',
        url: `${BASE_URL}/nc-landscape-contractor-license-requirements/`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Apply to the NCLCRB',
        text: 'Obtain the official application from the NCLCRB. Complete the application in full, attach supporting documentation (proof of experience, educational transcripts if applicable, insurance certificate), and submit the non-refundable application fee.',
        url: `${BASE_URL}/landscape-contractor-license-application-process-nc/`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Pass the Licensing Exam',
        text: 'All first-time applicants must pass the NCLCRB written examination, which covers plant identification, landscape design and installation, maintenance practices, pest management, and NC contractor law.',
        url: `${BASE_URL}/nc-landscape-contractor-exam/`,
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Submit Proof of Insurance',
        text: 'Provide the NCLCRB with a current certificate of general liability insurance meeting the board\'s minimum coverage requirements. Your insurance provider can issue this certificate directly.',
        url: `${BASE_URL}/landscape-contractor-insurance-bonding-nc/`,
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Receive Your License',
        text: 'After the NCLCRB confirms your application is complete, your exam score meets the passing threshold, and your insurance is on file, the board will issue your landscape contractor license.',
      },
    ],
  };
}

export function cityPageSchema({
  city,
  slug,
  description,
}: {
  city: string;
  slug: string;
  description: string;
}) {
  const url = `${BASE_URL}/${slug}/`;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Landscape Contractor License — ${city}, NC`,
    description,
    url,
    about: {
      '@type': 'GovernmentService',
      name: 'NC Landscape Contractor License',
      provider: {
        '@type': 'GovernmentOrganization',
        name: 'NC Landscape Contractors\' Registration Board',
        url: 'https://www.nclcrb.com',
      },
      areaServed: {
        '@type': 'City',
        name: city,
        containedInPlace: {
          '@type': 'State',
          name: 'North Carolina',
        },
      },
    },
    publisher: PUBLISHER,
    inLanguage: 'en-US',
  };
}
