import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import GoogleAnalytics from '@/components/google-analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'HustleBegin - Side Hustles & Making Money for Beginners',
    template: '%s | HustleBegin',
  },
  description: 'Your guide to starting side hustles and building extra income streams. Real strategies, no fluff. Learn how to make money online with proven methods.',
  keywords: ['side hustle', 'make money online', 'freelance', 'passive income', 'extra income', 'beginner'],
  authors: [{ name: 'Alex Grant' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'HustleBegin',
    title: 'HustleBegin - Side Hustles & Making Money for Beginners',
    description: 'Your guide to starting side hustles and building extra income streams.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'HustleBegin' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HustleBegin - Side Hustles & Making Money for Beginners',
    description: 'Your guide to starting side hustles and building extra income streams.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50`} suppressHydrationWarning>
        <GoogleAnalytics />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
