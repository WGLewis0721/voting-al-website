import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const lessons = [
  "How Alabama elections work",
  "What primaries are",
  "What judges actually do",
  "State vs. federal vs. local government",
  "What constitutional amendments mean",
  "How redistricting works",
  "How voting laws affect representation",
];

const faq = [
  ["Do I vote for every race on the ballot?", "You can vote race-by-race; leaving one blank does not void your other choices."],
  ["What is a constitutional amendment?", "A proposed change to Alabama's constitution that voters approve or reject statewide."],
  ["Why are primaries important?", "Primaries determine party nominees who often become finalists in the general election."],
];

export default function CivicEducationPage() {
  return (
    <div className="space-y-8">
      <SectionHeading eyebrow="Civic Education" title="Beginner-friendly election education for Alabama voters" deck="Learn the system first, then make decisions with confidence." />
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-5">
          <h2 className="mb-4 text-xl font-semibold">Learning roadmap</h2>
          <ol className="space-y-2 pl-5 text-white/85">
            {lessons.map((lesson, index) => <li key={lesson} className="list-decimal">{index + 1}. {lesson}</li>)}
          </ol>
        </Card>
        <Card className="p-5">
          <h2 className="mb-4 text-xl font-semibold">Election timeline (simplified)</h2>
          <ul className="space-y-3 text-white/80">
            <li><strong>Registration:</strong> Confirm status before deadline.</li>
            <li><strong>Primary:</strong> Choose party nominee options.</li>
            <li><strong>General election:</strong> Vote on final races and measures.</li>
            <li><strong>Certification:</strong> Counties report, state certifies outcomes.</li>
          </ul>
        </Card>
      </div>
      <Card className="space-y-4 p-5">
        <h2 className="text-xl font-semibold">FAQ</h2>
        {faq.map(([q, a]) => (
          <details key={q} className="rounded-lg border border-white/15 bg-white/5 p-3">
            <summary className="cursor-pointer font-medium">{q}</summary>
            <p className="mt-2 text-white/75">{a}</p>
          </details>
        ))}
      </Card>
    </div>
  );
}
