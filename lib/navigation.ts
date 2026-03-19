import type { RelatedLink } from '@/components/RelatedLinks';

export interface NavItem {
  href: string;
  label: string;
}

export const mainNav: NavItem[] = [
  { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'Licensing' },
  { href: '/nc-landscape-contractor-laws-chapter-89d/', label: 'Laws & Regulations' },
  { href: '/landscape-contractor-license-raleigh-nc/', label: 'City Guides' },
  { href: '/nc-landscape-contractor-faq/', label: 'FAQ' },
  { href: '/about/', label: 'About' },
];

export const allPages: NavItem[] = [
  // Core licensing pages
  { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get a Landscape Contractor License in NC' },
  { href: '/nc-landscape-contractor-license-requirements/', label: 'NC Landscape Contractor License Requirements' },
  { href: '/landscape-contractor-license-application-process-nc/', label: 'Landscape Contractor License Application Process' },
  { href: '/nc-landscape-contractor-exam/', label: 'NC Landscape Contractor Exam' },
  { href: '/nc-landscape-contractor-license-renewal/', label: 'NC Landscape Contractor License Renewal' },
  { href: '/landscape-contractor-continuing-education-nc/', label: 'Landscape Contractor Continuing Education NC' },
  { href: '/what-work-requires-a-landscape-license-nc/', label: 'What Work Requires a Landscape License in NC' },
  { href: '/nc-landscape-contractor-laws-chapter-89d/', label: 'NC Landscape Contractor Laws — Chapter 89D' },
  { href: '/penalties-for-unlicensed-landscaping-nc/', label: 'Penalties for Unlicensed Landscaping in NC' },
  { href: '/landscape-contractor-insurance-bonding-nc/', label: 'Landscape Contractor Insurance & Bonding NC' },
  { href: '/nc-landscape-contractor-license-verification/', label: 'NC Landscape Contractor License Verification' },
  { href: '/landscape-contractor-license-reciprocity-nc/', label: 'Landscape Contractor License Reciprocity NC' },
  // Supporting pages
  { href: '/nc-landscape-contractor-faq/', label: 'NC Landscape Contractor FAQ' },
  { href: '/landscape-contractor-glossary-nc/', label: 'Landscape Contractor Glossary NC' },
  { href: '/licensed-vs-unlicensed-landscape-contractors-nc/', label: 'Licensed vs. Unlicensed Landscape Contractors NC' },
  { href: '/how-to-hire-a-licensed-landscape-contractor-nc/', label: 'How to Hire a Licensed Landscape Contractor in NC' },
  { href: '/file-complaint-landscape-contractor-nc/', label: 'File a Complaint Against a Landscape Contractor NC' },
  { href: '/landscape-contractor-vs-lawn-care-nc/', label: 'Landscape Contractor vs. Lawn Care NC' },
  { href: '/types-of-landscape-work-nc/', label: 'Types of Landscape Work in NC' },
  { href: '/about/', label: 'About' },
  // City pages
  { href: '/landscape-contractor-license-raleigh-nc/', label: 'Landscape Contractor License — Raleigh, NC' },
  { href: '/landscape-contractor-license-charlotte-nc/', label: 'Landscape Contractor License — Charlotte, NC' },
  { href: '/landscape-contractor-license-greensboro-nc/', label: 'Landscape Contractor License — Greensboro, NC' },
  { href: '/landscape-contractor-license-durham-nc/', label: 'Landscape Contractor License — Durham, NC' },
  { href: '/landscape-contractor-license-fayetteville-nc/', label: 'Landscape Contractor License — Fayetteville, NC' },
  { href: '/landscape-contractor-license-wilmington-nc/', label: 'Landscape Contractor License — Wilmington, NC' },
  { href: '/landscape-contractor-license-asheville-nc/', label: 'Landscape Contractor License — Asheville, NC' },
  { href: '/landscape-contractor-license-winston-salem-nc/', label: 'Landscape Contractor License — Winston-Salem, NC' },
];

// Static related links map — keyed by page slug (without leading/trailing slashes)
export const relatedLinksMap: Record<string, RelatedLink[]> = {
  'how-to-get-a-landscape-contractor-license-in-nc': [
    { href: '/nc-landscape-contractor-license-requirements/', label: 'License Requirements', description: 'Detailed breakdown of eligibility and prerequisites.' },
    { href: '/landscape-contractor-license-application-process-nc/', label: 'Application Process', description: 'Step-by-step guide to submitting your application.' },
    { href: '/nc-landscape-contractor-exam/', label: 'The Licensing Exam', description: 'What to expect on the NC landscape contractor exam.' },
    { href: '/nc-landscape-contractor-faq/', label: 'Frequently Asked Questions', description: 'Common questions about getting licensed in NC.' },
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
  ],
  'nc-landscape-contractor-license-requirements': [
    { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed', description: 'Full overview of the licensing process.' },
    { href: '/landscape-contractor-license-application-process-nc/', label: 'Application Process', description: 'How to apply once you meet the requirements.' },
    { href: '/what-work-requires-a-landscape-license-nc/', label: 'What Work Requires a License', description: 'Understand which projects require licensure.' },
    { href: '/nc-landscape-contractor-faq/', label: 'FAQ', description: 'Answers to common licensing questions.' },
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
  ],
  'landscape-contractor-license-application-process-nc': [
    { href: '/nc-landscape-contractor-license-requirements/', label: 'License Requirements', description: 'Confirm you meet all prerequisites before applying.' },
    { href: '/nc-landscape-contractor-exam/', label: 'The Licensing Exam', description: 'Prepare for the required exam.' },
    { href: '/landscape-contractor-insurance-bonding-nc/', label: 'Insurance & Bonding', description: 'Coverage required at application time.' },
    { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed', description: 'Complete overview of the licensing process.' },
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
  ],
  'nc-landscape-contractor-exam': [
    { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed', description: 'Where the exam fits in the full process.' },
    { href: '/nc-landscape-contractor-license-requirements/', label: 'License Requirements', description: 'Eligibility before sitting for the exam.' },
    { href: '/landscape-contractor-license-application-process-nc/', label: 'Application Process', description: 'Apply before or after the exam.' },
    { href: '/nc-landscape-contractor-faq/', label: 'FAQ', description: 'Common exam questions answered.' },
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
  ],
  'nc-landscape-contractor-license-renewal': [
    { href: '/landscape-contractor-continuing-education-nc/', label: 'Continuing Education', description: 'CEU requirements for renewal.' },
    { href: '/landscape-contractor-insurance-bonding-nc/', label: 'Insurance & Bonding', description: 'Keep coverage current at renewal.' },
    { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed', description: 'Original licensing process for reference.' },
    { href: '/nc-landscape-contractor-faq/', label: 'FAQ', description: 'Renewal questions answered.' },
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
  ],
  'landscape-contractor-continuing-education-nc': [
    { href: '/nc-landscape-contractor-license-renewal/', label: 'License Renewal', description: 'How CEUs connect to your renewal deadline.' },
    { href: '/nc-landscape-contractor-license-requirements/', label: 'License Requirements', description: 'Full requirements including ongoing education.' },
    { href: '/nc-landscape-contractor-faq/', label: 'FAQ', description: 'Common questions about continuing education.' },
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
  ],
  'what-work-requires-a-landscape-license-nc': [
    { href: '/types-of-landscape-work-nc/', label: 'Types of Landscape Work in NC', description: 'Overview of work categories and definitions.' },
    { href: '/landscape-contractor-vs-lawn-care-nc/', label: 'Landscape Contractor vs. Lawn Care', description: 'Understand which activities require licensure.' },
    { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed', description: 'Start the licensing process.' },
    { href: '/penalties-for-unlicensed-landscaping-nc/', label: 'Penalties for Unlicensed Work', description: 'Consequences of working without a license.' },
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
  ],
  'nc-landscape-contractor-laws-chapter-89d': [
    { href: '/penalties-for-unlicensed-landscaping-nc/', label: 'Penalties for Unlicensed Work', description: 'Statutory penalties under Chapter 89D.' },
    { href: '/what-work-requires-a-landscape-license-nc/', label: 'What Work Requires a License', description: 'Scope of work defined by law.' },
    { href: '/nc-landscape-contractor-license-requirements/', label: 'License Requirements', description: 'Statutory requirements for licensure.' },
    { href: '/nc-landscape-contractor-faq/', label: 'FAQ', description: 'Common questions about NC landscape law.' },
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
  ],
  'penalties-for-unlicensed-landscaping-nc': [
    { href: '/nc-landscape-contractor-laws-chapter-89d/', label: 'NC Laws — Chapter 89D', description: 'The statutory basis for penalties.' },
    { href: '/what-work-requires-a-landscape-license-nc/', label: 'What Work Requires a License', description: 'Know before you start work.' },
    { href: '/licensed-vs-unlicensed-landscape-contractors-nc/', label: 'Licensed vs. Unlicensed', description: 'Why licensing matters for homeowners too.' },
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
  ],
  'landscape-contractor-insurance-bonding-nc': [
    { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed', description: 'Insurance requirements in the licensing process.' },
    { href: '/nc-landscape-contractor-license-requirements/', label: 'License Requirements', description: 'Full list of requirements including coverage.' },
    { href: '/how-to-hire-a-licensed-landscape-contractor-nc/', label: 'How to Hire a Licensed Contractor', description: 'Verify insurance when hiring.' },
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
  ],
  'nc-landscape-contractor-license-verification': [
    { href: '/how-to-hire-a-licensed-landscape-contractor-nc/', label: 'How to Hire a Licensed Contractor', description: 'Use verification before hiring.' },
    { href: '/licensed-vs-unlicensed-landscape-contractors-nc/', label: 'Licensed vs. Unlicensed', description: 'Why verification matters.' },
    { href: '/file-complaint-landscape-contractor-nc/', label: 'File a Complaint', description: 'If verification reveals a problem.' },
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
  ],
  'landscape-contractor-license-reciprocity-nc': [
    { href: '/nc-landscape-contractor-license-requirements/', label: 'License Requirements', description: 'NC requirements for comparison.' },
    { href: '/landscape-contractor-license-application-process-nc/', label: 'Application Process', description: 'Apply via reciprocity.' },
    { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed', description: 'Full licensing overview.' },
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
  ],
  'nc-landscape-contractor-faq': [
    { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed', description: 'Step-by-step licensing guide.' },
    { href: '/nc-landscape-contractor-license-requirements/', label: 'License Requirements', description: 'Detailed requirements.' },
    { href: '/nc-landscape-contractor-laws-chapter-89d/', label: 'NC Laws — Chapter 89D', description: 'Legal framework.' },
    { href: '/landscape-contractor-glossary-nc/', label: 'Glossary', description: 'Definitions of key terms.' },
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
  ],
  'landscape-contractor-glossary-nc': [
    { href: '/nc-landscape-contractor-faq/', label: 'FAQ', description: 'Common questions answered.' },
    { href: '/nc-landscape-contractor-laws-chapter-89d/', label: 'NC Laws — Chapter 89D', description: 'Statutory definitions.' },
    { href: '/what-work-requires-a-landscape-license-nc/', label: 'What Work Requires a License', description: 'Scope of licensable work.' },
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
  ],
  'licensed-vs-unlicensed-landscape-contractors-nc': [
    { href: '/how-to-hire-a-licensed-landscape-contractor-nc/', label: 'How to Hire a Licensed Contractor', description: 'Tips for homeowners choosing a contractor.' },
    { href: '/nc-landscape-contractor-license-verification/', label: 'License Verification', description: 'Confirm a contractor is licensed.' },
    { href: '/penalties-for-unlicensed-landscaping-nc/', label: 'Penalties for Unlicensed Work', description: 'Consequences for contractors and clients.' },
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
  ],
  'how-to-hire-a-licensed-landscape-contractor-nc': [
    { href: '/nc-landscape-contractor-license-verification/', label: 'License Verification', description: 'Check a contractor\'s license status.' },
    { href: '/landscape-contractor-insurance-bonding-nc/', label: 'Insurance & Bonding', description: 'What coverage to require.' },
    { href: '/licensed-vs-unlicensed-landscape-contractors-nc/', label: 'Licensed vs. Unlicensed', description: 'Risks of hiring unlicensed contractors.' },
    { href: '/file-complaint-landscape-contractor-nc/', label: 'File a Complaint', description: 'If issues arise after hiring.' },
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
  ],
  'file-complaint-landscape-contractor-nc': [
    { href: '/nc-landscape-contractor-license-verification/', label: 'License Verification', description: 'Verify before you file.' },
    { href: '/nc-landscape-contractor-laws-chapter-89d/', label: 'NC Laws — Chapter 89D', description: 'Legal basis for complaints.' },
    { href: '/licensed-vs-unlicensed-landscape-contractors-nc/', label: 'Licensed vs. Unlicensed', description: 'Understand your rights.' },
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
  ],
  'landscape-contractor-vs-lawn-care-nc': [
    { href: '/what-work-requires-a-landscape-license-nc/', label: 'What Work Requires a License', description: 'Scope of licensable activities.' },
    { href: '/types-of-landscape-work-nc/', label: 'Types of Landscape Work', description: 'Breakdown of work categories.' },
    { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed', description: 'If your work requires licensure.' },
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
  ],
  'types-of-landscape-work-nc': [
    { href: '/what-work-requires-a-landscape-license-nc/', label: 'What Work Requires a License', description: 'Which work categories are regulated.' },
    { href: '/landscape-contractor-vs-lawn-care-nc/', label: 'Landscape Contractor vs. Lawn Care', description: 'Key distinctions.' },
    { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed', description: 'Start the licensing process.' },
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
  ],
  'about': [
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Return to the homepage.' },
    { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed', description: 'Start here for licensing guidance.' },
    { href: '/nc-landscape-contractor-faq/', label: 'FAQ', description: 'Frequently asked questions.' },
  ],
  // City pages
  'landscape-contractor-license-raleigh-nc': [
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Statewide licensing information.' },
    { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed', description: 'Full licensing process for NC contractors.' },
    { href: '/nc-landscape-contractor-license-requirements/', label: 'License Requirements', description: 'What you need to qualify.' },
    { href: '/nc-landscape-contractor-faq/', label: 'FAQ', description: 'Common questions about NC licensing.' },
  ],
  'landscape-contractor-license-charlotte-nc': [
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Statewide licensing information.' },
    { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed', description: 'Full licensing process for NC contractors.' },
    { href: '/nc-landscape-contractor-license-requirements/', label: 'License Requirements', description: 'What you need to qualify.' },
    { href: '/nc-landscape-contractor-faq/', label: 'FAQ', description: 'Common questions about NC licensing.' },
  ],
  'landscape-contractor-license-greensboro-nc': [
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Statewide licensing information.' },
    { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed', description: 'Full licensing process for NC contractors.' },
    { href: '/nc-landscape-contractor-license-requirements/', label: 'License Requirements', description: 'What you need to qualify.' },
    { href: '/nc-landscape-contractor-faq/', label: 'FAQ', description: 'Common questions about NC licensing.' },
  ],
  'landscape-contractor-license-durham-nc': [
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Statewide licensing information.' },
    { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed', description: 'Full licensing process for NC contractors.' },
    { href: '/nc-landscape-contractor-license-requirements/', label: 'License Requirements', description: 'What you need to qualify.' },
    { href: '/nc-landscape-contractor-faq/', label: 'FAQ', description: 'Common questions about NC licensing.' },
  ],
  'landscape-contractor-license-fayetteville-nc': [
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Statewide licensing information.' },
    { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed', description: 'Full licensing process for NC contractors.' },
    { href: '/nc-landscape-contractor-license-requirements/', label: 'License Requirements', description: 'What you need to qualify.' },
    { href: '/nc-landscape-contractor-faq/', label: 'FAQ', description: 'Common questions about NC licensing.' },
  ],
  'landscape-contractor-license-wilmington-nc': [
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Statewide licensing information.' },
    { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed', description: 'Full licensing process for NC contractors.' },
    { href: '/nc-landscape-contractor-license-requirements/', label: 'License Requirements', description: 'What you need to qualify.' },
    { href: '/nc-landscape-contractor-faq/', label: 'FAQ', description: 'Common questions about NC licensing.' },
  ],
  'landscape-contractor-license-asheville-nc': [
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Statewide licensing information.' },
    { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed', description: 'Full licensing process for NC contractors.' },
    { href: '/nc-landscape-contractor-license-requirements/', label: 'License Requirements', description: 'What you need to qualify.' },
    { href: '/nc-landscape-contractor-faq/', label: 'FAQ', description: 'Common questions about NC licensing.' },
  ],
  'landscape-contractor-license-winston-salem-nc': [
    { href: '/', label: 'NC Landscape Contractor Resource Guide', description: 'Statewide licensing information.' },
    { href: '/how-to-get-a-landscape-contractor-license-in-nc/', label: 'How to Get Licensed', description: 'Full licensing process for NC contractors.' },
    { href: '/nc-landscape-contractor-license-requirements/', label: 'License Requirements', description: 'What you need to qualify.' },
    { href: '/nc-landscape-contractor-faq/', label: 'FAQ', description: 'Common questions about NC licensing.' },
  ],
};
