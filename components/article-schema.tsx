import type { Post } from '@/lib/markdown';

interface ArticleSchemaProps {
  post: Post;
  url: string;
}

export default function ArticleSchema({ post, url }: ArticleSchemaProps) {
  const safePost = post ?? ({} as Post);
  const safeUrl = url ?? '';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: safePost?.title ?? '',
    description: safePost?.excerpt ?? '',
    image: safePost?.image ?? '',
    datePublished: safePost?.date ?? '',
    dateModified: safePost?.date ?? '',
    author: {
      '@type': 'Person',
      name: safePost?.author ?? 'Alex Grant',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HustleBegin',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL ?? ''}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': safeUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
