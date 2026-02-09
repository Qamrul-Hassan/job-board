"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    if (!query.trim()) {
      router.push("/jobs");
      return;
    }

    router.push(`/jobs?query=${encodeURIComponent(query)}`);
  }

  return (
    <section className="relative flex min-h-[82vh] items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/career.jpg"
          alt="Career background"
          fill
          priority
          className="object-contain object-top"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(8,15,32,0.68)_18%,rgba(13,34,77,0.58)_58%,rgba(16,45,96,0.45)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-white/35 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-md">
            World-class remote opportunities
          </p>

          <h1 className="mt-7 text-4xl font-semibold leading-tight text-white sm:text-6xl">Find premium roles that grow your career faster.</h1>

          <p className="mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
            Discover top global openings with a cleaner hiring experience, beautiful UX, and curated opportunities from trusted companies.
          </p>

          <form onSubmit={handleSearch} className="mt-10 max-w-3xl">
            <div className="glass-surface flex flex-col gap-3 rounded-2xl p-3 shadow-[0_24px_46px_rgba(16,42,94,0.35)] sm:flex-row sm:items-center">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by job title, keyword, or role"
                className="h-12 border-white/70 bg-white/95"
              />

              <Button type="submit" size="lg" className="h-12 px-7">
                Search
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </form>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-10">
              <Link href="/jobs">Browse Jobs</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-10">
              <Link href="/saved">Saved Jobs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
