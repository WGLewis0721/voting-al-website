"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { countyMetrics } from "@/data/mock-data";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const TurnoutChart = dynamic(
  () => import("@/components/charts/turnout-chart").then((m) => m.TurnoutChart),
  { ssr: false }
);

export default function AlabamaMapPage() {
  const [selectedCounty, setSelectedCounty] = useState(countyMetrics[0]?.county ?? "");
  const selected = useMemo(() => countyMetrics.find((item) => item.county === selectedCounty), [selectedCounty]);

  return (
    <div className="space-y-8">
      <SectionHeading eyebrow="Alabama Map" title="County-level turnout and issue priority dashboard" deck="Tap a county to view turnout, demographics, and issue overlays. Designed for clear mobile use." />

      <div className="grid gap-4 md:grid-cols-[1.1fr,1fr]">
        <Card className="p-4 md:p-5">
          <p className="mb-3 text-sm text-white/70">County selector</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {countyMetrics.map((item) => (
              <button key={item.county} onClick={() => setSelectedCounty(item.county)} className={`min-h-11 rounded-lg border px-3 py-2 text-left text-sm ${selectedCounty === item.county ? "border-gold-300 bg-gold-400/20 text-gold-100" : "border-white/20 bg-white/5 text-white/80 hover:bg-white/10"}`}>
                {item.county}
              </button>
            ))}
          </div>
        </Card>

        <Card className="space-y-2 p-4 md:p-5">
          <h2 className="text-xl font-semibold">{selected?.county}</h2>
          <p>Turnout: <strong>{selected?.turnout}%</strong></p>
          <p>Population: <strong>{selected?.population.toLocaleString()}</strong></p>
          <p>Median income: <strong>${selected?.medianIncome.toLocaleString()}</strong></p>
          <p>Top issue overlay: <strong>{selected?.issuePriority}</strong></p>
        </Card>
      </div>

      <Card className="p-4 md:p-5">
        <h2 className="mb-3 text-xl font-semibold">Turnout comparison</h2>
        <TurnoutChart data={countyMetrics} />
      </Card>
    </div>
  );
}
