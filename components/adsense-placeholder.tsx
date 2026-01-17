'use client';

import { useEffect, useRef } from 'react';

interface AdSensePlaceholderProps {
  slot: 'header' | 'sidebar' | 'in-article';
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdSensePlaceholder({ slot, className = '' }: AdSensePlaceholderProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isAdLoaded = useRef(false);

  useEffect(() => {
    if (adRef.current && !isAdLoaded.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isAdLoaded.current = true;
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, []);

  const adFormats: Record<string, { format: string; style: React.CSSProperties }> = {
    header: {
      format: 'horizontal',
      style: { display: 'block', minHeight: '90px' },
    },
    sidebar: {
      format: 'vertical',
      style: { display: 'block', minHeight: '250px' },
    },
    'in-article': {
      format: 'fluid',
      style: { display: 'block', textAlign: 'center' as const },
    },
  };

  const adConfig = adFormats[slot] || adFormats['in-article'];

  return (
    <div className={`ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={adConfig.style}
        data-ad-client="ca-pub-3879212699132253"
        data-ad-slot=""
        data-ad-format={adConfig.format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
