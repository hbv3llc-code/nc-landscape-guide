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

export default async function SlugPage({ params }: Props) {
  const page = getPageData(params.slug);
  if (!page) notFound();

  const { frontmatter, content } = page;
  const relatedLinks = relatedLinksMap[params.slug] ?? [];

  return (
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
  );
}
