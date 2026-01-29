import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-blue-800/60 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-black">
          JobBoard
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-black">
          {/* ✅ NEW HOME BUTTON */}
          <Link href="/" className="hover:text-blue-200">
            Home
          </Link>

          <Link href="/jobs" className="hover:text-blue-200">
            Jobs
          </Link>

          <Link href="/saved" className="hover:text-blue-200">
            Saved
          </Link>
        </nav>
      </div>
    </header>
  );
}
