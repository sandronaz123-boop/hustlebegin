import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { TrendingUp, DollarSign, Clock, Target, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Alex Grant',
  description: 'Meet Alex Grant - ex-office worker who quit everything to live off side income. Learn about the journey behind HustleBegin.',
  openGraph: {
    title: 'About Alex Grant | HustleBegin',
    description: 'Meet Alex Grant - ex-office worker who quit everything to live off side income.',
    images: ['/alex-grant.jpg'],
  },
};

export default function AboutPage() {
  const stats = [
    { icon: <DollarSign className="w-6 h-6" />, value: '$4,200+', label: 'Monthly Side Income' },
    { icon: <Clock className="w-6 h-6" />, value: '3 Years', label: 'Full-Time Hustling' },
    { icon: <Target className="w-6 h-6" />, value: '15+', label: 'Income Streams Tested' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-square max-w-md mx-auto lg:ml-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/alex-grant.jpg"
                  alt="Alex Grant - Founder of HustleBegin"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg hidden lg:block">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">Living the Side Hustle Dream</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-2 lg:order-1">
              <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">About the Author</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Hey, I'm <span className="text-emerald-400">Alex Grant</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                Ex-office worker who quit everything to live off side income.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Three years ago, I was stuck in a cubicle, watching the clock, dreaming about freedom. Today, I work from anywhere, on my own schedule, earning more than my old salary—all through side hustles I started with zero experience.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-800/50 rounded-xl">
                    <div className="text-emerald-400 mb-2 flex justify-center">{stat?.icon}</div>
                    <div className="text-2xl font-bold text-white">{stat?.value ?? ''}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat?.label ?? ''}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Story</h2>
          
          <div className="prose prose-lg prose-emerald max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              I spent eight years climbing the corporate ladder. Good salary, decent benefits, soul-crushing boredom. Every Sunday night, I'd feel that familiar dread creeping in. Another week of meetings that could've been emails, office politics, and watching the clock.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              In 2023, I started experimenting with side hustles—not to get rich, but to feel something again. I tried everything: dropshipping (failed), day trading (lost money), blogging (took forever). But slowly, I found what worked.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 rounded-r-lg">
              <p className="text-emerald-800 font-medium italic">
                "The first month I made more from side hustles than my job, I cried. Not because of the money—because I finally saw a way out."
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              It took 18 months to replace my salary. Another 6 months to double it. Today, I run multiple income streams: freelance consulting, digital products, content creation, and affiliate marketing. None of them required special skills when I started.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              HustleBegin exists because I wish I had this resource when I started. Every article is something I've tested myself. No theory—just what actually works.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">What I Believe</h3>
            
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Anyone can build extra income with the right information and consistent effort</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>You don't need to be special, talented, or lucky—you need to start</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Small consistent actions beat big sporadic efforts every time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Financial freedom isn't about being rich—it's about having choices</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Check out my top guides and start building your side income today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/posts/top-five-side-hustles-2026"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-colors"
            >
              Top 5 Side Hustles for 2026 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/posts/zero-to-first-gig-freelance-roadmap"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition-colors"
            >
              7-Day Freelance Roadmap <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
