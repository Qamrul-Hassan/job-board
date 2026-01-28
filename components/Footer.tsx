// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-32 bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">
            JobBoard<span className="text-primary">.</span>
          </h3>
          <p className="mt-4 text-sm text-muted-foreground">
            A modern job discovery platform built for clarity and speed.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Jobs</li>
            <li>Saved Jobs</li>
            <li>Remote Roles</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Stack</h4>
          <p className="text-sm text-muted-foreground">
            Next.js · Tailwind CSS · shadcn/ui
          </p>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} JobBoard
      </div>
    </footer>
  );
}