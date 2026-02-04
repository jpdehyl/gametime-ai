import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gametime-ai.app'),
  title: {
    default: "GameTime.ai | AI-Powered Sales Intelligence Platform",
    template: "%s | GameTime.ai",
  },
  description:
    "The AI layer that makes sales teams unstoppable. Pre-call research, real-time coaching, post-call analysis, and AE handoff — all in one platform. Built by GroundGame.",
  keywords: [
    "AI sales intelligence",
    "sales coaching platform",
    "BPO AI solutions",
    "AI call analysis",
    "sales team productivity",
    "pre-call intelligence",
    "real-time sales coaching",
    "SDR performance",
    "AI lead research",
    "sales copilot",
    "GroundGame",
    "GameTime AI",
    "call center AI",
    "sales automation",
    "AI for BPO",
  ],
  authors: [{ name: "GroundGame" }],
  creator: "GroundGame",
  publisher: "GroundGame",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "GameTime.ai | AI-Powered Sales Intelligence Platform",
    description:
      "The AI layer that makes sales teams unstoppable. Pre-call research, real-time coaching, post-call analysis — all in one platform.",
    url: "https://gametime-ai.app",
    siteName: "GameTime.ai",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/screenshots/dashboard-callqueue.jpg",
        width: 1200,
        height: 630,
        alt: "GameTime.ai - AI-Powered Sales Intelligence Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GameTime.ai | AI-Powered Sales Intelligence Platform",
    description:
      "The AI layer that makes sales teams unstoppable. Pre-call research, real-time coaching, post-call analysis — all in one platform.",
    images: ["/screenshots/dashboard-callqueue.jpg"],
  },
  alternates: {
    canonical: "https://gametime-ai.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "GameTime.ai",
  applicationCategory: "BusinessApplication",
  description:
    "AI-powered sales intelligence platform. Pre-call research, real-time coaching, post-call analysis, and AE handoff for sales teams and BPOs.",
  url: "https://gametime-ai.app",
  author: {
    "@type": "Organization",
    name: "GroundGame",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
