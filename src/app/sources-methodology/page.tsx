import Link from "next/link";
import { citations, methodology } from "@/data/mock-data";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export default function SourcesMethodologyPage() {
  return (
    <div className="space-y-8">
      <SectionHeading eyebrow="Sources & Methodology" title="How we research, verify, and keep information current" deck="Every issue summary and candidate profile links back to primary sources when available." />
      <Card className="space-y-3 p-5">
        <h2 className="text-xl font-semibold">Research standards</h2>
        <ul className="list-disc space-y-2 pl-5 text-white/80">
          {methodology.standards.map((standard) => <li key={standard}>{standard}</li>)}
        </ul>
        <p className="text-sm text-white/60">Last methodological review: {methodology.updatedAt}</p>
      </Card>
      <Card className="space-y-3 p-5">
        <h2 className="text-xl font-semibold">Source index</h2>
        <ul className="space-y-2 text-white/80">
          {citations.map((source) => (
            <li key={source.id}>
              <Link href={source.url} target="_blank" rel="noreferrer" className="text-gold-200 hover:text-gold-100">
                {source.label}
              </Link>
              <p className="text-sm text-white/60">{source.publisher} · Updated {source.updatedAt}</p>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
