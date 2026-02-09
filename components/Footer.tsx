import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/65 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            JobBoard
            <span className="ml-1 text-primary">Prime</span>
          </h3>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A curated hiring experience with premium discovery, cleaner flows, and focus on quality roles.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">Explore</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link href="/jobs" className="transition-colors hover:text-primary">
                All Jobs
              </Link>
            </li>
            <li>
              <Link href="/saved" className="transition-colors hover:text-primary">
                Saved Jobs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">Built With</h4>
          <p className="mt-4 text-sm text-muted-foreground">Next.js, Tailwind CSS, and a polished component system.</p>
        </div>
      </div>

      <div className="border-t border-white/70 py-4 text-center text-xs text-muted-foreground">
        Copyright {new Date().getFullYear()} JobBoard Prime
      </div>
    </footer>
  );
}
