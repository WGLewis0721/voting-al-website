"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { CountyMetric } from "@/lib/types";

export function TurnoutChart({ data }: { data: CountyMetric[] }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 16, right: 0, left: -16, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.12)" />
          <XAxis dataKey="county" tick={{ fill: "#c9d1e5", fontSize: 12 }} />
          <YAxis tick={{ fill: "#c9d1e5", fontSize: 12 }} />
          <Tooltip cursor={{ fill: "rgba(255,255,255,0.05)" }} />
          <Bar dataKey="turnout" fill="#c5a35c" radius={[6, 6, 0, 0]} name="Turnout %" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
