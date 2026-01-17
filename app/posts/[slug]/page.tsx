import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/markdown';
import PostContent from './_components/post-content';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post?.slug ?? '',
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug ?? '');
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post?.title ?? 'HustleBegin',
    description: post?.excerpt ?? '',
    openGraph: {
      title: post?.title ?? '',
      description: post?.excerpt ?? '',
      type: 'article',
      publishedTime: post?.date ?? '',
      authors: [post?.author ?? 'Alex Grant'],
      images: [post?.image ?? '/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post?.title ?? '',
      description: post?.excerpt ?? '',
      images: [post?.image ?? '/og-image.png'],
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug ?? '');
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug ?? '', post?.category ?? '', 3);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  const postUrl = `${baseUrl}/posts/${slug}`;

  return <PostContent post={post} relatedPosts={relatedPosts} postUrl={postUrl} />;
}
