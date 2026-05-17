import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { candidates } from "@/data/mock-data";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export default function CandidatesPage() {
  const [left, right] = candidates;

  return (
    <div className="space-y-8">
      <SectionHeading eyebrow="Candidate Comparison" title="Compare candidates side-by-side, quickly and neutrally" deck="Scan biography, issue stances, endorsements, funding summaries, and direct campaign links." />

      <div className="grid gap-4 md:grid-cols-2">
        {[left, right].map((candidate) => (
          <Card key={candidate.id} className="space-y-4 p-5">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-gold-300">{candidate.race} · {candidate.party}</p>
              <h2 className="mt-1 text-2xl font-semibold text-white">{candidate.name}</h2>
              <p className="mt-2 text-white/75">{candidate.bio}</p>
            </div>
            <div className="space-y-2">
              <p><strong>Key issues:</strong> {candidate.topIssues.join(", ")}</p>
              <p><strong>Voting history:</strong> {candidate.votingHistory}</p>
              <p><strong>Funding:</strong> {candidate.fundingSummary}</p>
              <p><strong>Quote:</strong> “{candidate.quote}”</p>
              <p><strong>Endorsements:</strong> {candidate.endorsements.join(", ")}</p>
            </div>
            <Link href={candidate.website} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/25 px-3 py-2 text-sm hover:bg-white/10" target="_blank" rel="noreferrer">
              Official campaign site <ExternalLink className="h-4 w-4" />
            </Link>
          </Card>
        ))}
      </div>

      <Card className="overflow-x-auto p-2 md:p-4">
        <table className="w-full min-w-[680px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/15">
              <th className="p-3 text-white/70">Policy Area</th>
              <th className="p-3 text-white/90">{left.name}</th>
              <th className="p-3 text-white/90">{right.name}</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(left.positions).map((key) => (
              <tr key={key} className="border-b border-white/10 align-top">
                <td className="p-3 font-semibold text-gold-200">{key}</td>
                <td className="p-3 text-white/85">{left.positions[key]}</td>
                <td className="p-3 text-white/85">{right.positions[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
