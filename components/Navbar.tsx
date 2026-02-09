import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Jobs" },
  { href: "/saved", label: "Saved" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/65 glass-surface">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
          JobBoard
          <span className="ml-1 text-primary">Prime</span>
        </Link>

        <nav className="flex items-center gap-2 rounded-full border border-white/80 bg-white/65 p-1 shadow-[0_8px_20px_rgba(35,72,146,0.12)]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-full px-4 py-1.5 text-sm font-medium text-slate-700 transition-all hover:bg-primary/15 hover:text-slate-900"
            >
              <span className="inline-block translate-x-0 transition-transform duration-300 group-hover:translate-x-1">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
