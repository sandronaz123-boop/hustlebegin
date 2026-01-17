'use client';

import { motion } from 'framer-motion';
import { Briefcase, Coins, BookOpen } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  'All': null,
  'Side Jobs': <Briefcase className="w-4 h-4" />,
  'Passive Income': <Coins className="w-4 h-4" />,
  'Freelance Basics': <BookOpen className="w-4 h-4" />,
};

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  const allCategories = ['All', ...(categories ?? [])];

  return (
    <div className="flex flex-wrap gap-2">
      {allCategories.map((category) => (
        <motion.button
          key={category ?? ''}
          onClick={() => onCategoryChange?.(category ?? '')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
            activeCategory === category
              ? 'bg-emerald-500 text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {categoryIcons[category ?? '']}
          {category ?? ''}
        </motion.button>
      ))}
    </div>
  );
}
