import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <header className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 md:pt-24 pb-12 md:pb-16">
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-leaf mb-5">
        <span className="w-8 h-px bg-leaf" />
        {eyebrow}
      </span>
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
        {title}
      </h1>
      {description && (
        <p className="mt-6 text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}
