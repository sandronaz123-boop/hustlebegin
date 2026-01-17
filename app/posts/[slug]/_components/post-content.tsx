'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react';
import SocialShare from '@/components/social-share';
import RelatedPosts from '@/components/related-posts';
import AdSensePlaceholder from '@/components/adsense-placeholder';
import ArticleSchema from '@/components/article-schema';
import type { Post } from '@/lib/markdown';
import { remark } from 'remark';
import html from 'remark-html';
import { useEffect, useState } from 'react';

interface PostContentProps {
  post: Post;
  relatedPosts: Post[];
  postUrl: string;
}

export default function PostContent({ post, relatedPosts, postUrl }: PostContentProps) {
  const [htmlContent, setHtmlContent] = useState('');
  const safePost = post ?? ({} as Post);
  const safeRelatedPosts = relatedPosts ?? [];
  const safePostUrl = postUrl ?? '';

  useEffect(() => {
    const processMarkdown = async () => {
      try {
        const result = await remark().use(html).process(safePost?.content ?? '');
        setHtmlContent(result?.toString?.() ?? '');
      } catch (error) {
        console.error('Error processing markdown:', error);
      }
    };
    processMarkdown();
  }, [safePost?.content]);

  return (
    <>
      <ArticleSchema post={safePost} url={safePostUrl} />
      
      <article className="min-h-screen">
        {/* Hero */}
        <header className="relative bg-gray-900 text-white">
          <div className="absolute inset-0">
            <Image
              src={safePost?.image ?? '/images/placeholder.jpg'}
              alt={safePost?.title ?? 'Article header image'}
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/60" />
          </div>
          
          <div className="relative max-w-[900px] mx-auto px-4 sm:px-6 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 text-sm"
              >
                <ArrowLeft className="w-4 h-4" /> Back to articles
              </Link>

              <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-sm font-medium rounded-full mb-4">
                {safePost?.category ?? 'Uncategorized'}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {safePost?.title ?? 'Untitled'}
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {safePost?.excerpt ?? ''}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {safePost?.author ?? 'Alex Grant'}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(safePost?.date)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {safePost?.readTime ?? '5 min read'}
                </span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {/* Social Share */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <SocialShare url={safePostUrl} title={safePost?.title ?? ''} />
              </div>

              {/* In-article Ad */}
              <AdSensePlaceholder slot="in-article" className="mb-8" />

              {/* Article Body */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="prose prose-lg prose-emerald max-w-none
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                  prose-p:text-gray-600 prose-p:leading-relaxed
                  prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900
                  prose-ul:text-gray-600 prose-ol:text-gray-600
                  prose-li:marker:text-emerald-500
                  prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
                  prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                  prose-table:text-sm
                  prose-th:bg-gray-100 prose-th:px-4 prose-th:py-2
                  prose-td:px-4 prose-td:py-2 prose-td:border-b prose-td:border-gray-200"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* Tags */}
              {(safePost?.tags?.length ?? 0) > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-4 h-4 text-gray-400" />
                    {safePost?.tags?.map?.((tag) => (
                      <span
                        key={tag ?? ''}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {tag ?? ''}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Affiliate Disclaimer */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-500">
                <strong>Disclosure:</strong> Some links in this article are affiliate links. This means we may earn a small commission if you make a purchase, at no extra cost to you. We only recommend products we genuinely believe in.
              </div>

              {/* Related Posts */}
              <RelatedPosts posts={safeRelatedPosts} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

function formatDate(dateString?: string): string {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  } catch {
    return dateString;
  }
}
