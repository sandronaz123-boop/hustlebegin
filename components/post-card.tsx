'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { Post } from '@/lib/markdown';

interface PostCardProps {
  post: Post;
  index?: number;
}

export default function PostCard({ post, index = 0 }: PostCardProps) {
  const safePost = post ?? ({} as Post);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <Link href={`/posts/${safePost?.slug ?? ''}`} className="block">
        {/* Image */}
        <div className="relative aspect-video bg-gray-100 overflow-hidden">
          <Image
            src={safePost?.image ?? '/images/placeholder.jpg'}
            alt={safePost?.title ?? 'Blog post image'}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full shadow">
              {safePost?.category ?? 'Uncategorized'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h2 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2 mb-2">
            {safePost?.title ?? 'Untitled'}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {safePost?.excerpt ?? ''}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(safePost?.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {safePost?.readTime ?? '5 min read'}
              </span>
            </div>
            <span className="flex items-center gap-1 text-emerald-600 font-medium group-hover:gap-2 transition-all">
              Read <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function formatDate(dateString?: string): string {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return dateString;
  }
}
