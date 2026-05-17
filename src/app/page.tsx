import Link from "next/link";
import { ArrowRight, CheckCircle2, Database, Scale, SearchCheck, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/sections/motion";
import { Card } from "@/components/ui/card";
import { SectionHeading, Stat } from "@/components/ui/section-heading";
import { methodology } from "@/data/mock-data";

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-navy-900/80 via-navy-950/80 to-charcoal-950 p-6 md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(219,192,134,0.22),transparent_55%)]" aria-hidden="true" />
        <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
          <FadeIn>
            <p className="mb-4 inline-flex rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-gold-200">
              Nonpartisan Civic Intelligence
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Understand Alabama Elections Without the Noise.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Plain-English ballot guidance, neutral candidate comparison, and real-world issue impact analysis built for ordinary voters.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/ballot-explorer" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-gold-500 px-4 py-2.5 font-medium text-navy-950 transition hover:bg-gold-400">
                Explore the Ballot <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/issues" className="inline-flex min-h-11 items-center rounded-xl border border-white/30 px-4 py-2.5 font-medium text-white/90 transition hover:bg-white/10">
                Learn the Issues
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <Card className="grid gap-4 p-4 md:p-6">
              <Stat label="Ballot items simplified" value="120+" icon={<SearchCheck className="h-5 w-5" />} />
              <Stat label="Official citations linked" value="100%" icon={<Database className="h-5 w-5" />} />
              <Stat label="Methodology transparency" value="Public" icon={<Scale className="h-5 w-5" />} />
            </Card>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="space-y-6">
          <SectionHeading eyebrow="Why voters use this" title="Designed for people who are done with confusion." deck="If you have ever said: ‘I don’t know who to vote for’ or ‘Nobody explains what these laws mean,’ this platform is for you." />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "I don’t know who to vote for.",
              "I don’t understand the issues.",
              "I just want straightforward information.",
            ].map((line) => (
              <Card key={line} className="p-5 text-white/85">{line}</Card>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="space-y-6">
          <SectionHeading eyebrow="Trust & transparency" title="Built to inform, not manipulate." />
          <div className="grid gap-4 md:grid-cols-2">
            {methodology.standards.map((standard) => (
              <Card key={standard} className="flex items-start gap-3 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-gold-300" />
                <p className="text-white/85">{standard}</p>
              </Card>
            ))}
          </div>
          <p className="text-sm text-white/60">Data freshness timestamp: {methodology.updatedAt}</p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
          <SectionHeading
            eyebrow="Civic education"
            title="Learn how Alabama government actually works"
            deck="Beginner-friendly explainers on primaries, judges, amendments, and redistricting — with diagrams, FAQs, and practical examples."
          />
          <Link href="/civic-education" className="mt-6 inline-flex items-center gap-2 text-gold-200 hover:text-gold-100">
            Start learning <Sparkles className="h-4 w-4" />
          </Link>
        </section>
      </FadeIn>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Voting AL Intelligence",
            description: "Modern nonpartisan Alabama civic education platform",
            url: "https://wglewis0721.github.io/voting-al-website",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://wglewis0721.github.io/voting-al-website/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </div>
  );
}
