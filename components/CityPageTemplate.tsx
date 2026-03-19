import Breadcrumb from './Breadcrumb';
import PageHeader from './PageHeader';
import RelatedLinks from './RelatedLinks';
import { relatedLinksMap } from '@/lib/navigation';

interface CityPageTemplateProps {
  city: string;
  slug: string;
  intro: string;
  children: React.ReactNode;
}

export default function CityPageTemplate({ city, slug, intro, children }: CityPageTemplateProps) {
  const relatedLinks = relatedLinksMap[slug] ?? [];

  return (
    <main className="max-w-content mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: 'City Guides', href: '/landscape-contractor-license-raleigh-nc/' },
          { label: city },
        ]}
      />
      <PageHeader
        title={`Landscape Contractor License — ${city}, NC`}
        intro={intro}
      />
      <article className="prose-content">{children}</article>
      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
