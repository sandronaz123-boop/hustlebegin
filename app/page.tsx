import { getAllPosts, getAllCategories } from '@/lib/markdown';
import HomeContent from './_components/home-content';

export default function HomePage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return <HomeContent posts={posts} categories={categories} />;
}
