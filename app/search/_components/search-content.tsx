'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PostCard from '@/components/post-card';
import type { Post } from '@/lib/markdown';

interface SearchContentProps {
  query: string;
  results: Post[];
}

export default function SearchContent({ query, results }: SearchContentProps) {
  const [searchInput, setSearchInput] = useState(query ?? '');
  const router = useRouter();
  const safeResults = results ?? [];

  const handleSearch = (e: React.FormEvent) => {
    e?.preventDefault?.();
    if (searchInput?.trim()) {
      router?.push?.(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to articles
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 mb-6">Search Articles</h1>

          <form onSubmit={handleSearch} className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e?.target?.value ?? '')}
                placeholder="Search for side hustles, freelancing tips, and more..."
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg"
              />
            </div>
          </form>
        </div>
      </header>

      {/* Results */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        {query && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-600 mb-8">
              {safeResults.length > 0
                ? `Found ${safeResults.length} ${safeResults.length === 1 ? 'result' : 'results'} for "${query}"`
                : `No results found for "${query}"`}
            </p>

            {safeResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {safeResults.map((post, index) => (
                  <PostCard key={post?.slug ?? index} post={post} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">Try searching for different keywords</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['side hustle', 'freelance', 'passive income', 'make money'].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        setSearchInput(suggestion);
                        router?.push?.(`/search?q=${encodeURIComponent(suggestion)}`);
                      }}
                      className="px-4 py-2 bg-gray-100 hover:bg-emerald-100 text-gray-600 hover:text-emerald-700 rounded-lg text-sm transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {!query && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Enter a search term to find articles</p>
          </div>
        )}
      </section>
    </div>
  );
}
