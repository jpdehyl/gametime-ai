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
  title: "GameTime.ai | AI-Powered Sales Intelligence by GroundGame",
  description:
    "Transform your sales team with AI-powered coaching, real-time intelligence, and performance analytics. The AI layer that makes your humans work better.",
  keywords: [
    "AI sales coaching",
    "sales intelligence",
    "BPO solutions",
    "call coaching",
    "sales performance",
    "GroundGame",
  ],
  authors: [{ name: "GroundGame" }],
  openGraph: {
    title: "GameTime.ai | AI-Powered Sales Intelligence",
    description:
      "Transform your sales team with AI-powered coaching and real-time intelligence.",
    url: "https://gametime-ai-demo.vercel.app",
    siteName: "GameTime.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GameTime.ai | AI-Powered Sales Intelligence",
    description:
      "Transform your sales team with AI-powered coaching and real-time intelligence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
