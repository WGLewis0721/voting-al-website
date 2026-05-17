"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Compass, FileSearch, House, Scale, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "Home", href: "/", icon: House },
  { label: "Ballot", href: "/ballot-explorer", icon: FileSearch },
  { label: "Issues", href: "/issues", icon: Scale },
  { label: "Candidates", href: "/candidates", icon: Users },
  { label: "Map", href: "/alabama-map", icon: Compass },
  { label: "Learn", href: "/civic-education", icon: BookOpen },
];

export function MobileNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-navy-950/95 px-1 pb-[calc(env(safe-area-inset-bottom)+0.25rem)] pt-1 backdrop-blur md:hidden" aria-label="Mobile">
      <ul className="grid grid-cols-6 gap-1">
        {tabs.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link href={href} className={cn("flex min-h-12 flex-col items-center justify-center rounded-lg text-[11px] text-white/70", active && "bg-white/10 text-gold-200")}>
                <Icon className="mb-1 h-4 w-4" aria-hidden="true" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
