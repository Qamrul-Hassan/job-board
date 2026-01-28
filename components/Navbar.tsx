import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          JobBoard
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/jobs" className="hover:text-primary">
            Jobs
          </Link>
          <Link href="/saved" className="hover:text-primary">
            Saved
          </Link>
        </nav>
      </div>
    </header>
  );
}