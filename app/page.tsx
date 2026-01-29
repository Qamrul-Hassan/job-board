"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
    <>
      {/* HOME BANNER */}
      <section className="relative min-h-[75vh] md:min-h-[90vh] flex items-center">
        {/* Background */}
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/career.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Find your next job
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
              Discover curated opportunities from companies around the world
            </p>

            {/* SEARCH BAR */}
            <form
              onSubmit={handleSearch}
              className="mt-10 max-w-3xl mx-auto"
            >
              <div className="flex items-center gap-3 rounded-2xl p-2
                              bg-white/90 backdrop-blur-xl shadow-2xl">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by job title, keyword, or role"
                  className="h-14 text-base border-0 focus-visible:ring-0"
                />

                <Button type="submit" size="lg" className="h-14 px-8">
                  Search
                </Button>
              </div>
            </form>

         {/* CTA BUTTONS */}
<div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
  <Link href="/jobs">
    <Button
      size="lg"
      className="
        px-12 h-12
        bg-gradient-to-r from-indigo-600 to-blue-600
        text-white
        shadow-lg shadow-indigo-600/30
        hover:from-indigo-500 hover:to-blue-500
        hover:shadow-xl hover:shadow-indigo-600/40
        transition-all duration-300
      "
    >
      Browse Jobs
    </Button>
  </Link>

  <Link href="/saved">
    <Button
      size="lg"
      variant="outline"
      className="
        px-12 h-12
        bg-transparent
        text-white
        border-white/80
        hover:bg-white hover:text-black
        transition-all duration-300
      "
    >
      Saved Jobs
    </Button>
  </Link>
</div>

          </div>
        </div>
      </section>

      {/* TRUST SECTION (unchanged) */}
    </>
  );
}
