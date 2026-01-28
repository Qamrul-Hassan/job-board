import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-white to-gray-100" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Find work that <span className="text-primary">moves you</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated job board for remote and on-site roles,
            designed for clarity and speed.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link href="/jobs">
              <Button size="lg" className="px-8">
                Browse Jobs
              </Button>
            </Link>

            <Link href="/saved">
              <Button size="lg" variant="outline" className="px-8">
                Saved Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-10 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-xl font-semibold">Curated roles</h3>
            <p className="mt-3 text-muted-foreground">
              No spam. Only quality job listings from verified sources.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Fast & focused</h3>
            <p className="mt-3 text-muted-foreground">
              Minimal UI that helps you focus on what matters.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Modern stack</h3>
            <p className="mt-3 text-muted-foreground">
              Built with Next.js, Tailwind CSS, and shadcn/ui.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}