import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Use public/data/posts for production compatibility (public folder is always copied)
const postsDirectory = path.join(process.cwd(), 'public', 'data', 'posts');
const altPostsDirectory = path.join(process.cwd(), 'posts');

export interface PostFrontmatter {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  image: string;
  tags: string[];
  category: string;
  author?: string;
  readTime?: string;
}

export interface Post extends PostFrontmatter {
  content: string;
}

export function getAllPosts(): Post[] {
  // Try main directory first, then alternative
  let dir = postsDirectory;
  if (!fs.existsSync(dir)) {
    dir = altPostsDirectory;
  }
  if (!fs.existsSync(dir)) {
    console.error('Posts directory not found:', postsDirectory, 'or', altPostsDirectory);
    return [];
  }
  
  const fileNames = fs.readdirSync(dir);
  const allPosts = fileNames
    .filter((fileName) => fileName?.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(dir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        ...(data as PostFrontmatter),
        content,
      };
    });

  return allPosts.sort((a, b) => {
    const dateA = new Date(a?.date ?? '1970-01-01');
    const dateB = new Date(b?.date ?? '1970-01-01');
    return dateB.getTime() - dateA.getTime();
  });
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts();
  return posts.find((post) => post?.slug === slug) ?? null;
}

export function getPostsByCategory(category: string): Post[] {
  const posts = getAllPosts();
  return posts.filter((post) => 
    post?.category?.toLowerCase() === category?.toLowerCase()
  );
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post?.category).filter(Boolean));
  return Array.from(categories) as string[];
}

export function getRelatedPosts(currentSlug: string, category: string, limit: number = 3): Post[] {
  const posts = getAllPosts();
  return posts
    .filter((post) => post?.slug !== currentSlug && post?.category === category)
    .slice(0, limit);
}

export function searchPosts(query: string): Post[] {
  const posts = getAllPosts();
  const lowerQuery = query?.toLowerCase() ?? '';
  
  return posts.filter((post) => {
    const titleMatch = post?.title?.toLowerCase()?.includes(lowerQuery);
    const excerptMatch = post?.excerpt?.toLowerCase()?.includes(lowerQuery);
    const tagsMatch = post?.tags?.some((tag) => tag?.toLowerCase()?.includes(lowerQuery));
    return titleMatch || excerptMatch || tagsMatch;
  });
}
