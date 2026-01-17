import Link from 'next/link';
import { TrendingUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-emerald-400">Hustle</span>
                <span className="text-white">Begin</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your guide to starting side hustles and building extra income streams. Real strategies, no fluff.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/side-jobs" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Side Jobs
                </Link>
              </li>
              <li>
                <Link href="/category/passive-income" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Passive Income
                </Link>
              </li>
              <li>
                <Link href="/category/freelance-basics" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Freelance Basics
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  About Alex
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} HustleBegin. All rights reserved.</p>
          <p className="mt-2 text-xs">Some links may be affiliate links. We may earn a commission at no extra cost to you.</p>
        </div>
      </div>
    </footer>
  );
}
