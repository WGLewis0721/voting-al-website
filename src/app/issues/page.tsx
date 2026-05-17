import { issueImpacts } from "@/data/mock-data";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export default function IssuesPage() {
  return (
    <div className="space-y-8">
      <SectionHeading eyebrow="Why This Matters" title="How policy choices change daily life in Alabama" deck="For each issue, we explain real-world impact, local consequences, and concrete examples without partisan framing." />
      <div className="grid gap-4 md:grid-cols-3">
        {issueImpacts.map((issue) => (
          <Card key={issue.id} className="space-y-3 p-5">
            <h2 className="text-2xl font-semibold text-white">{issue.title}</h2>
            <p className="text-white/80"><strong>Daily life:</strong> {issue.dailyLife}</p>
            <p className="text-white/80"><strong>Local impact:</strong> {issue.localImpact}</p>
            <div>
              <p className="text-sm font-semibold text-gold-200">Examples</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-white/75">
                {issue.examples.map((example) => <li key={example}>{example}</li>)}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
