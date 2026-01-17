'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Sparkles } from 'lucide-react';
import PostCard from '@/components/post-card';
import CategoryFilter from '@/components/category-filter';
import AdSensePlaceholder from '@/components/adsense-placeholder';
import type { Post } from '@/lib/markdown';

interface HomeContentProps {
  posts: Post[];
  categories: string[];
}

export default function HomeContent({ posts, categories }: HomeContentProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const safePosts = posts ?? [];
  const safeCategories = categories ?? [];

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return safePosts;
    return safePosts.filter((post) => post?.category === activeCategory);
  }, [safePosts, activeCategory]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-emerald-200" />
              <span className="text-emerald-100 text-sm font-medium uppercase tracking-wider">Start Your Journey</span>
              <Sparkles className="w-5 h-5 text-emerald-200" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Turn Your <span className="text-emerald-200">Spare Time</span> Into Extra Income
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-8 leading-relaxed">
              Practical guides, real strategies, and proven methods to start earning on the side. No fluff, no hype—just actionable advice.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-emerald-200">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                4+ In-depth Guides
              </span>
              <span>•</span>
              <span>Free Resources</span>
              <span>•</span>
              <span>Real Results</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        {/* Ad Space */}
        <AdSensePlaceholder slot="header" className="mb-8" />

        {/* Category Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
          <CategoryFilter
            categories={safeCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <PostCard key={post?.slug ?? index} post={post} index={index} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No articles found in this category yet.</p>
          </div>
        )}
      </section>

      {/* Newsletter CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Hustling?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Pick any article above and take your first step today. Every successful side hustler started exactly where you are now.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/posts/top-five-side-hustles-2026"
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition-colors"
              >
                Read Our Top Guide
              </a>
              <a
                href="/about"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-colors"
              >
                About Alex Grant
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
