interface AdSensePlaceholderProps {
  slot: 'header' | 'sidebar' | 'in-article';
  className?: string;
}

export default function AdSensePlaceholder({ slot, className = '' }: AdSensePlaceholderProps) {
  const sizeClasses = {
    header: 'h-24 md:h-28',
    sidebar: 'h-64',
    'in-article': 'h-32',
  };

  return (
    <div
      className={`bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm ${sizeClasses[slot] ?? 'h-24'} ${className}`}
    >
      <div className="text-center">
        <div className="text-xs uppercase tracking-wider mb-1">Advertisement</div>
        <div className="text-xs opacity-75">AdSense Placeholder</div>
      </div>
    </div>
  );
}
