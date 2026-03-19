import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog — NC Landscape Contractor Resource Guide',
  description:
    'Articles for NC homeowners and landscape contractors — project planning, permits, hiring tips, and contractor licensing guidance.',
  alternates: { canonical: 'https://nclcrb.org/blog/' },
};

const categoryLabels: Record<string, string> = {
  'homeowner-guide': 'Homeowner Guide',
  'contractor-guide': 'Contractor Guide',
  'local-requirements': 'Local Requirements',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="max-w-content mx-auto px-4 py-10">
      <div className="mb-8 pb-6 border-b border-border">
        <h1 className="font-display text-3xl font-bold text-text mb-3">Blog</h1>
        <p className="text-text-muted">
          Guides for NC homeowners and contractors — project planning, permits, hiring, and licensing.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-text-muted font-ui text-sm">No posts yet.</p>
      ) : (
        <ul className="space-y-8 list-none p-0 m-0">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-border pb-8 last:border-0">
              <div className="flex items-center gap-3 mb-2">
                {post.frontmatter.category && (
                  <span className="font-ui text-xs font-medium uppercase tracking-wide text-accent bg-accent-light px-2 py-0.5 rounded">
                    {categoryLabels[post.frontmatter.category] ?? post.frontmatter.category}
                  </span>
                )}
                <span className="font-ui text-xs text-text-muted">
                  {formatDate(post.frontmatter.publishDate)}
                </span>
              </div>
              <h2 className="font-display text-xl font-bold text-text mb-2 mt-0 border-0 pt-0">
                <Link
                  href={`/blog/${post.slug}/`}
                  className="no-underline hover:underline text-link hover:text-link-hover"
                >
                  {post.frontmatter.title}
                </Link>
              </h2>
              <p className="font-ui text-sm text-text-muted leading-relaxed m-0">
                {post.frontmatter.description}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
