import type { Metadata } from "next";

import { portfolioData } from "@/lib/site";

import "./globals.css";

const resolvedTitle =
  portfolioData.seo.title.includes("Your Name")
    ? `${portfolioData.person.fullName} | ${portfolioData.person.title}`
    : portfolioData.seo.title;

export const metadata: Metadata = {
  metadataBase: new URL(portfolioData.seo.siteUrl),
  title: resolvedTitle,
  description: portfolioData.seo.description,
  openGraph: {
    title: resolvedTitle,
    description: portfolioData.seo.description,
    url: portfolioData.seo.siteUrl,
    images: [{ url: portfolioData.seo.ogImage }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto min-h-screen w-full max-w-6xl px-6 py-8 sm:py-10">{children}</div>
      </body>
    </html>
  );
}
