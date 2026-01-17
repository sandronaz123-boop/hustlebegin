'use client';

import { Twitter, Facebook, Linkedin, Link2, Check } from 'lucide-react';
import { useState } from 'react';

interface SocialShareProps {
  url: string;
  title: string;
}

export default function SocialShare({ url, title }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const safeUrl = url ?? '';
  const safeTitle = title ?? '';
  const encodedUrl = encodeURIComponent(safeUrl);
  const encodedTitle = encodeURIComponent(safeTitle);

  const shareLinks = [
    {
      name: 'Twitter',
      icon: <Twitter className="w-4 h-4" />,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'hover:bg-sky-500',
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-4 h-4" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'hover:bg-blue-600',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-4 h-4" />,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      color: 'hover:bg-blue-700',
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator?.clipboard?.writeText?.(safeUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleWebShare = async () => {
    if (navigator?.share) {
      try {
        await navigator.share({
          title: safeTitle,
          url: safeUrl,
        });
      } catch (err) {
        console.error('Share failed:', err);
      }
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500 mr-1">Share:</span>
      {shareLinks.map((link) => (
        <a
          key={link?.name ?? ''}
          href={link?.href ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-lg bg-gray-100 text-gray-600 hover:text-white transition-all ${link?.color ?? ''}`}
          aria-label={`Share on ${link?.name ?? ''}`}
        >
          {link?.icon}
        </a>
      ))}
      <button
        onClick={handleCopy}
        className={`p-2 rounded-lg transition-all ${
          copied ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-emerald-500 hover:text-white'
        }`}
        aria-label="Copy link"
      >
        {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
      </button>
    </div>
  );
}
