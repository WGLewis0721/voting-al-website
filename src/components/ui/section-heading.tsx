import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, deck, className }: { eyebrow: string; title: string; deck?: string; className?: string; }) {
  return (
    <div className={cn("space-y-3", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {deck ? <p className="max-w-3xl text-base text-white/75 md:text-lg">{deck}</p> : null}
    </div>
  );
}

export function Stat({ label, value, icon }: { label: string; value: string; icon?: ReactNode }) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
      <div className="mb-2 text-gold-300">{icon}</div>
      <p className="text-2xl font-semibold text-white">{value}</p>
      <p className="text-sm text-white/65">{label}</p>
    </div>
  );
}
