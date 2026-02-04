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
  title: "GameTime.ai | The AI Layer That Makes Sales Teams Unstoppable",
  description:
    "From pre-call research to post-call coaching — GameTime gives every rep an AI copilot that knows your playbook, preps your calls, and coaches in real-time. A product by GroundGame.",
  keywords: [
    "AI sales coaching",
    "sales intelligence",
    "BPO solutions",
    "call coaching", 
    "sales performance",
    "GroundGame",
    "pre-call research",
    "real-time coaching",
    "sales AI",
  ],
  authors: [{ name: "GroundGame" }],
  openGraph: {
    title: "GameTime.ai | The AI Layer That Makes Sales Teams Unstoppable",
    description:
      "From pre-call research to post-call coaching — GameTime gives every rep an AI copilot that knows your playbook, preps your calls, and coaches in real-time.",
    url: "https://gametime.ai",
    siteName: "GameTime.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GameTime.ai | The AI Layer That Makes Sales Teams Unstoppable",
    description:
      "From pre-call research to post-call coaching — GameTime gives every rep an AI copilot that knows your playbook, preps your calls, and coaches in real-time.",
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
