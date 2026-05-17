import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Chip({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("inline-flex rounded-full border border-gold-400/35 bg-gold-400/10 px-3 py-1 text-xs text-gold-200", className)} {...props} />;
}
