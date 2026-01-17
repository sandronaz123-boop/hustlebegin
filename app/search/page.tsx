import { searchPosts } from '@/lib/markdown';
import { Metadata } from 'next';
import SearchContent from './_components/search-content';

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q ? `Search: ${q}` : 'Search',
    description: 'Search HustleBegin articles about side hustles, freelancing, and making money online.',
  };
}

export default async function SearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const query = q ?? '';
  const results = query ? searchPosts(query) : [];

  return <SearchContent query={query} results={results} />;
}
