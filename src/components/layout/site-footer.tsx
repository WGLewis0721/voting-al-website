import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-charcoal-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-white/70 md:flex-row md:items-center md:justify-between md:px-6">
        <p>© 2026 Voting AL Intelligence. Nonpartisan civic education for Alabama voters.</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/sources-methodology" className="hover:text-white">Sources & Methodology</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/faq" className="hover:text-white">FAQ</Link>
        </div>
      </div>
    </footer>
  );
}
