import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getAllSlugs, getPageData } from '@/lib/content';
import { pageMeta } from '@/lib/metadata';
import { relatedLinksMap } from '@/lib/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import RelatedLinks from '@/components/RelatedLinks';
import TableOfContents from '@/components/TableOfContents';
import SchemaOrg from '@/components/SchemaOrg';
import {
  articleSchema,
  breadcrumbSchema,
  faqPageSchema,
  howToGetLicensedSchema,
  cityPageSchema,
} from '@/lib/schema';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = pageMeta[params.slug];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: meta.canonical,
    },
  };
}

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
};

const CITY_SLUGS = new Set([
  'landscape-contractor-license-raleigh-nc',
  'landscape-contractor-license-charlotte-nc',
  'landscape-contractor-license-greensboro-nc',
  'landscape-contractor-license-durham-nc',
  'landscape-contractor-license-fayetteville-nc',
  'landscape-contractor-license-wilmington-nc',
  'landscape-contractor-license-asheville-nc',
  'landscape-contractor-license-winston-salem-nc',
]);

function buildSchemas(slug: string) {
  const meta = pageMeta[slug];
  if (!meta) return [];

  const crumb = breadcrumbSchema([
    { name: meta.title, href: meta.canonical },
  ]);

  // FAQ page — FAQPage schema
  if (slug === 'nc-landscape-contractor-faq') {
    return [crumb, faqPageSchema()];
  }

  // How-to-get-licensed — HowTo schema
  if (slug === 'how-to-get-a-landscape-contractor-license-in-nc') {
    return [crumb, howToGetLicensedSchema()];
  }

  // City pages — city-specific WebPage schema
  if (CITY_SLUGS.has(slug)) {
    const city = meta.title.replace('Landscape Contractor License in ', '').replace(', NC | NCLCRG', '');
    return [
      crumb,
      cityPageSchema({ city, slug, description: meta.description }),
    ];
  }

  // All other pages — Article schema
  return [
    crumb,
    articleSchema({
      title: meta.title,
      description: meta.description,
      url: meta.canonical,
    }),
  ];
}

export default async function SlugPage({ params }: Props) {
  const page = getPageData(params.slug);
  if (!page) notFound();

  const { frontmatter, content } = page;
  const relatedLinks = relatedLinksMap[params.slug] ?? [];
  const schemas = buildSchemas(params.slug);

  return (
    <>
      <SchemaOrg schema={schemas} />
      <div className="max-w-content mx-auto px-4 py-10 flex gap-10">
        <main className="flex-1 min-w-0">
          <Breadcrumb items={[{ label: frontmatter.breadcrumbLabel }]} />
          <PageHeader title={frontmatter.title} intro={frontmatter.intro} />
          <article className="prose-content">
            <MDXRemote source={content} options={mdxOptions} />
          </article>
          <RelatedLinks links={relatedLinks} />
        </main>
        {frontmatter.toc && frontmatter.toc.length > 0 && (
          <TableOfContents items={frontmatter.toc} />
        )}
      </div>
    </>
  );
}
