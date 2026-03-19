import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content');
const BLOG_DIR = path.join(CONTENT_DIR, 'blog');

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
  content: string;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  intro: string;
  publishDate: string;
  category: string;
  toc?: { id: string; label: string }[];
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
}

// --- Page helpers ---

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
  return { slug, frontmatter: data as PageFrontmatter, content };
}

// --- Blog helpers ---

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getAllBlogPosts(): BlogPost[] {
  return getAllBlogSlugs()
    .map((slug) => getBlogPost(slug)!)
    .filter(Boolean)
    .sort((a, b) =>
      new Date(b.frontmatter.publishDate).getTime() -
      new Date(a.frontmatter.publishDate).getTime()
    );
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { slug, frontmatter: data as BlogFrontmatter, content };
}
