import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <SectionHeading eyebrow="About" title="A modern civic platform for trust, clarity, and informed participation" />
      <Card className="space-y-4 p-5 text-white/80">
        <p>
          Voting AL Intelligence was built to reduce voter confusion by combining investigative-style context, plain-language writing,
          and transparent sourcing.
        </p>
        <p>
          Our mission is to help Alabama voters understand ballot choices, candidate differences, and issue impacts without campaign-style pressure.
        </p>
        <p>
          We prioritize neutrality, source visibility, accessibility, and practical explanations grounded in daily life outcomes.
        </p>
      </Card>
    </div>
  );
}
