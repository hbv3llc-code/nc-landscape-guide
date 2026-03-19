import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getAllBlogSlugs, getBlogPost } from '@/lib/content';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import TableOfContents from '@/components/TableOfContents';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  const canonical = `https://nclcrb.org/blog/${params.slug}/`;
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: { canonical },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: canonical,
    },
  };
}

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const { frontmatter, content } = post;

  return (
    <div className="max-w-content mx-auto px-4 py-10 flex gap-10">
      <main className="flex-1 min-w-0">
        <Breadcrumb items={[{ label: 'Blog', href: '/blog/' }, { label: frontmatter.title }]} />
        <div className="mb-2">
          <span className="font-ui text-xs text-text-muted">
            {formatDate(frontmatter.publishDate)}
          </span>
        </div>
        <PageHeader title={frontmatter.title} intro={frontmatter.intro} />
        <article className="prose-content">
          <MDXRemote source={content} options={mdxOptions} />
        </article>
        <div className="mt-10 pt-6 border-t border-border">
          <p className="font-ui text-xs text-text-muted">
            This article is for general informational purposes only and does not constitute legal
            or professional advice. Requirements vary — always verify with your local permitting
            authority and the{' '}
            <a href="https://www.nclcrb.com" className="text-link hover:text-link-hover">
              NC Landscape Contractors&apos; Registration Board
            </a>
            .
          </p>
        </div>
      </main>
      {frontmatter.toc && frontmatter.toc.length > 0 && (
        <TableOfContents items={frontmatter.toc} />
      )}
    </div>
  );
}
