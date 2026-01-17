'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Briefcase, Coins, BookOpen, CheckCircle, Lightbulb, Target } from 'lucide-react';
import PostCard from '@/components/post-card';
import type { Post } from '@/lib/markdown';

interface CategoryContentProps {
  categoryName: string;
  description: string;
  posts: Post[];
}

const categoryIcons: Record<string, React.ReactNode> = {
  'Side Jobs': <Briefcase className="w-8 h-8" />,
  'Passive Income': <Coins className="w-8 h-8" />,
  'Freelance Basics': <BookOpen className="w-8 h-8" />,
};

const categoryExtras: Record<string, { tips: string[]; quickFacts: string[]; perfectFor: string }> = {
  'Side Jobs': {
    tips: [
      'Start with one side job and master it before adding more',
      'Track your time to ensure your hourly rate is worth it',
      'Set aside 25-30% of earnings for taxes',
      'Use weekends to test new opportunities risk-free'
    ],
    quickFacts: [
      '45% of Americans have a side hustle in 2026',
      'Average side hustler earns $1,122/month extra',
      'Flexible gigs grew 35% since 2023'
    ],
    perfectFor: 'People who want to earn extra income while keeping their day job. No experience required for most opportunities.'
  },
  'Passive Income': {
    tips: [
      'Passive income requires upfront work or capital investment',
      'Diversify across multiple income streams',
      'Reinvest early earnings to accelerate growth',
      'Track all income sources monthly'
    ],
    quickFacts: [
      'Average time to first passive income: 6-12 months',
      'Digital products have 70-95% profit margins',
      'Dividend investing averages 3-5% annual yield'
    ],
    perfectFor: 'Those willing to invest time or money upfront for long-term, recurring income with minimal ongoing effort.'
  },
  'Freelance Basics': {
    tips: [
      'Start with a niche to stand out from competition',
      'Your first clients often come from your network',
      'Always get contracts in writing before starting work',
      'Charge based on value, not hours worked'
    ],
    quickFacts: [
      '59 million Americans freelanced in 2025',
      'Top freelancers earn $100,000+ annually',
      'Average time to first client: 2-4 weeks with effort'
    ],
    perfectFor: 'Anyone with a marketable skill who wants location independence and control over their income.'
  }
};

export default function CategoryContent({ categoryName, description, posts }: CategoryContentProps) {
  const safePosts = posts ?? [];
  const safeCategoryName = categoryName ?? 'Category';
  const safeDescription = description ?? '';
  const extras = categoryExtras[safeCategoryName];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-emerald-100 hover:text-white transition-colors mb-6 text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back to all articles
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                {categoryIcons[safeCategoryName]}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{safeCategoryName}</h1>
            </div>

            <p className="text-xl text-emerald-100 max-w-2xl">{safeDescription}</p>

            <div className="mt-6 text-emerald-200">
              {safePosts.length} {safePosts.length === 1 ? 'article' : 'articles'}
            </div>
          </motion.div>
        </div>
      </header>

      {/* Category Info Section */}
      {extras && (
        <section className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Perfect For */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-semibold text-gray-900">Perfect For</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{extras.perfectFor}</p>
              </motion.div>

              {/* Quick Facts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-semibold text-gray-900">Quick Facts</h3>
                </div>
                <ul className="space-y-2">
                  {extras.quickFacts.map((fact, index) => (
                    <li key={index} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Tips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-semibold text-gray-900">Pro Tips</h3>
                </div>
                <ul className="space-y-2">
                  {extras.tips.map((tip, index) => (
                    <li key={index} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Posts */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">All {safeCategoryName} Articles</h2>
        {safePosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safePosts.map((post, index) => (
              <PostCard key={post?.slug ?? index} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No articles in this category yet.</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> Browse all articles
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
