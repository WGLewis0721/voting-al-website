import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MobileNav } from "@/components/layout/mobile-nav";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wglewis0721.github.io/voting-al-website"),
  title: {
    default: "Voting AL Intelligence | Understand Alabama Elections Without the Noise",
    template: "%s | Voting AL Intelligence",
  },
  description:
    "A modern nonpartisan Alabama civic education platform for ballot explanations, candidate comparisons, and issue impact analysis.",
  openGraph: {
    title: "Voting AL Intelligence",
    description: "Understand Alabama elections without the noise.",
    type: "website",
    url: "https://wglewis0721.github.io/voting-al-website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voting AL Intelligence",
    description: "Understand Alabama elections without the noise.",
  },
  keywords: [
    "Alabama voter guide",
    "what's on my ballot Alabama",
    "Alabama amendment explanation",
    "who is running in Alabama",
    "Alabama election issues",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-gold-400 focus:px-3 focus:py-2 focus:text-navy-950">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="mx-auto w-full max-w-7xl px-4 pb-24 pt-8 md:px-6 md:pb-10">
          {children}
        </main>
        <SiteFooter />
        <MobileNav />
      </body>
    </html>
  );
}
