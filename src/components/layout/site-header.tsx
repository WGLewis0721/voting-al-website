import Link from "next/link";
import { ShieldCheck } from "lucide-react";

const nav = [
  ["Home", "/"],
  ["Ballot Explorer", "/ballot-explorer"],
  ["Issues", "/issues"],
  ["Candidates", "/candidates"],
  ["Civic Education", "/civic-education"],
  ["Alabama Map", "/alabama-map"],
  ["FAQ", "/faq"],
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-white">
          <ShieldCheck className="h-5 w-5 text-gold-300" aria-hidden="true" />
          <span className="font-semibold">Voting AL Intelligence</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-lg px-3 py-2 text-sm text-white/75 transition hover:bg-white/10 hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
