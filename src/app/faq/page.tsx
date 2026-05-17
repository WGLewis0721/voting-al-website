import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const items = [
  ["Is this site affiliated with a political campaign?", "No. This platform is designed as nonpartisan civic education and transparency infrastructure."],
  ["How often is data updated?", "Source timestamps are shown and reviewed on a rolling basis during election cycles."],
  ["Do you tell people who to vote for?", "No. We provide context, source links, and plain-English explanations so voters can make their own decisions."],
];

export default function FaqPage() {
  return (
    <div className="space-y-8">
      <SectionHeading eyebrow="FAQ" title="Straightforward answers about this voter guide" />
      <Card className="space-y-3 p-5">
        {items.map(([q, a]) => (
          <details key={q} className="rounded-lg border border-white/15 bg-white/5 p-3">
            <summary className="cursor-pointer font-medium">{q}</summary>
            <p className="mt-2 text-white/75">{a}</p>
          </details>
        ))}
      </Card>
    </div>
  );
}
