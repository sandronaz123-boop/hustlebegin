'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Post } from '@/lib/markdown';

interface RelatedPostsProps {
  posts: Post[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  const safePosts = posts ?? [];

  if (safePosts.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {safePosts.map((post, index) => (
          <motion.article
            key={post?.slug ?? index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <Link href={`/posts/${post?.slug ?? ''}`} className="block">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 mb-3">
                <Image
                  src={post?.image ?? '/images/placeholder.jpg'}
                  alt={post?.title ?? 'Related post'}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2 text-sm">
                {post?.title ?? ''}
              </h4>
              <span className="flex items-center gap-1 text-xs text-emerald-600 mt-2 group-hover:gap-2 transition-all">
                Read more <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
