import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts } from '@/lib/markdown';
import CategoryContent from './_components/category-content';

const categoryMap: Record<string, string> = {
  'side-jobs': 'Side Jobs',
  'passive-income': 'Passive Income',
  'freelance-basics': 'Freelance Basics',
};

const categoryDescriptions: Record<string, string> = {
  'Side Jobs': 'Discover practical side jobs you can start today to earn extra income alongside your regular job. From app testing to reselling, we cover beginner-friendly opportunities that fit any schedule.',
  'Passive Income': 'Learn how to build income streams that generate money while you sleep. Explore dividends, digital products, affiliate marketing, and other proven strategies for financial freedom.',
  'Freelance Basics': 'Master the fundamentals of freelancing and land your first clients. From building your portfolio to communicating with clients, get the skills you need to succeed.',
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(categoryMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = categoryMap[slug ?? ''] ?? null;
  
  if (!categoryName) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `${categoryName} Articles`,
    description: categoryDescriptions[categoryName] ?? `Browse all ${categoryName} articles on HustleBegin.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const categoryName = categoryMap[slug ?? ''] ?? null;
  
  if (!categoryName) {
    notFound();
  }

  const allPosts = getAllPosts();
  const posts = allPosts.filter((post) => post?.category === categoryName);
  const description = categoryDescriptions[categoryName] ?? '';

  return <CategoryContent categoryName={categoryName} description={description} posts={posts} />;
}
