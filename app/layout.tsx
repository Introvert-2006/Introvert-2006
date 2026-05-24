import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { portfolioData } from '@/lib/portfolio-data'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')
const portfolioOwner = portfolioData.portfolio_owner
const siteTitle = `${portfolioOwner.name} | Video Editor`
const siteDescription =
  'Gagan Kapoor is a video editor crafting cinematic shorts, branded edits, and social-first content with sharp pacing, clean motion, and strong storytelling.'

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteTitle,
    template: `%s | ${portfolioOwner.name}`,
  },
  description: siteDescription,
  keywords: [
    'Gagan Kapoor',
    'video editor',
    'video editing portfolio',
    'shorts editor',
    'reels editor',
    'motion graphics',
    'branded edits',
    'social media content',
    'cinematic editing',
  ],
  authors: [{ name: portfolioOwner.name }],
  creator: portfolioOwner.name,
  publisher: portfolioOwner.name,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteTitle,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    creator: `@${portfolioOwner.name.toLowerCase().replace(/\s+/g, '')}`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: portfolioOwner.name,
    jobTitle: portfolioOwner.title,
    email: portfolioOwner.email,
    url: siteUrl.toString(),
    sameAs: [portfolioOwner.instagram, portfolioOwner.discord].filter(Boolean),
    description: siteDescription,
    knowsAbout: [
      'Video Editing',
      'Short Form Content',
      'Reels',
      'Motion Graphics',
      'Storytelling',
    ],
    worksFor: {
      '@type': 'Organization',
      name: portfolioOwner.name,
    },
  }

  return (
    <html lang="en" className="bg-black">
      <body className="font-sans antialiased bg-black text-white overflow-x-hidden lg:overflow-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
