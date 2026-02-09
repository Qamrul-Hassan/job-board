"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Jobs" },
  { href: "/saved", label: "Saved" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/65 glass-surface">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
          JobBoard
          <span className="ml-1 text-primary">Prime</span>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-white/80 bg-white/65 p-1 shadow-[0_8px_20px_rgba(35,72,146,0.12)] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-full px-4 py-1.5 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/25 hover:text-slate-900 hover:shadow-[0_8px_18px_rgba(38,98,216,0.25)]"
            >
              <span className="inline-block translate-x-0 transition-transform duration-300 group-hover:translate-x-1">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.92),rgba(240,247,255,0.9))] text-slate-700 shadow-[0_10px_24px_rgba(35,72,146,0.15),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/15 hover:text-primary hover:shadow-[0_16px_30px_rgba(35,72,146,0.3)] md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="relative inline-flex items-center justify-center">
            {open ? (
              <X className="size-5 transition-transform duration-300" />
            ) : (
              <Menu className="size-5 transition-transform duration-300" />
            )}
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/70 bg-white/85 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`px-4 py-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl border border-transparent px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-primary/25 hover:text-slate-900 hover:shadow-[0_8px_18px_rgba(38,98,216,0.2)] active:translate-y-0 active:scale-[0.99] active:border-primary/45 active:bg-primary/30 focus-visible:border-primary/45 focus-visible:bg-primary/20 focus-visible:outline-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
