"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ExternalLink, Filter } from "lucide-react";
import { ballotItems, citations, counties, years } from "@/data/mock-data";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export default function BallotExplorerPage() {
  const [county, setCounty] = useState("Statewide");
  const [year, setYear] = useState(2026);
  const [openId, setOpenId] = useState<string | null>(ballotItems[0]?.id ?? null);

  const countyOptions = useMemo(() => ["Statewide", ...counties], []);
  const filtered = ballotItems.filter((item) => (county === "Statewide" ? true : item.county === county || item.county === "Statewide") && item.year === year);

  return (
    <div className="space-y-8">
      <SectionHeading eyebrow="Ballot Explorer" title="See what is on your ballot in plain English" deck="Select your county and election year. Expand each item to see neutral arguments, practical impacts, and official sources." />

      <Card className="grid gap-4 p-4 md:grid-cols-2 md:p-5">
        <label className="space-y-2 text-sm">
          <span className="text-white/75">County</span>
          <select value={county} onChange={(e) => setCounty(e.target.value)} className="min-h-11 w-full rounded-lg border border-white/20 bg-charcoal-900 px-3 py-2 text-white">
            {countyOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label className="space-y-2 text-sm">
          <span className="text-white/75">Election Year</span>
          <select value={year} onChange={(e) => setYear(Number(e.target.value))} className="min-h-11 w-full rounded-lg border border-white/20 bg-charcoal-900 px-3 py-2 text-white">
            {years.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
      </Card>

      <div className="space-y-4">
        {filtered.map((item) => {
          const isOpen = openId === item.id;
          const itemCitations = citations.filter((c) => item.citationIds.includes(c.id));

          return (
            <Card key={item.id} className="overflow-hidden">
              <button onClick={() => setOpenId(isOpen ? null : item.id)} className="flex min-h-14 w-full items-center justify-between gap-3 px-4 py-4 text-left md:px-5" aria-expanded={isOpen}>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-gold-300">{item.officeOrMeasure}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <ChevronDown className={`h-5 w-5 text-white/70 transition ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen ? (
                <div className="grid gap-4 border-t border-white/10 px-4 py-4 md:grid-cols-2 md:px-5">
                  <div className="space-y-3">
                    <p><strong>Official summary:</strong> {item.officialSummary}</p>
                    <p><strong>Simplified:</strong> {item.plainEnglish}</p>
                    <p><strong>Why this matters:</strong> {item.whyItMatters}</p>
                    <p><strong>Who is affected:</strong> {item.impactedGroups.join(", ")}</p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gold-200">Supporters often argue:</p>
                      <ul className="list-disc space-y-1 pl-5 text-white/85">{item.supporterArguments.map((arg) => <li key={arg}>{arg}</li>)}</ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gold-200">Opponents often argue:</p>
                      <ul className="list-disc space-y-1 pl-5 text-white/85">{item.opponentArguments.map((arg) => <li key={arg}>{arg}</li>)}</ul>
                    </div>
                    <div className="space-y-1">
                      <p className="inline-flex items-center gap-2 font-semibold"><Filter className="h-4 w-4" /> Official sources</p>
                      {itemCitations.map((source) => (
                        <a key={source.id} href={source.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gold-200 hover:text-gold-100">
                          {source.label} <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
