import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export interface PageFrontmatter {
  title: string;
  intro: string;
  breadcrumbLabel: string;
  toc?: { id: string; label: string }[];
  isCity?: boolean;
  cityName?: string;
}

export interface PageData {
  slug: string;
  frontmatter: PageFrontmatter;
  content: string; // raw MDX string
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getPageData(slug: string): PageData | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as PageFrontmatter,
    content,
  };
}
