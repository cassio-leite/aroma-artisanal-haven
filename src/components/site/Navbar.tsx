import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Coffee, Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[color-mix(in_oklab,var(--cream)_82%,transparent)] border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 min-w-0" onClick={() => setOpen(false)}>
          <span className="grid place-items-center w-9 h-9 shrink-0 rounded-full bg-primary text-primary-foreground">
            <Coffee className="w-4 h-4" />
          </span>
          <span className="font-display text-lg sm:text-xl md:text-2xl tracking-tight text-espresso truncate">
            Café <em className="not-italic text-leaf">Aurora</em>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/"
            hash="localizacao"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
          >
            Reservar mesa
          </Link>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center w-10 h-10 rounded-full border border-border/60 text-foreground hover:bg-secondary/60 transition"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-border/60 transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 sm:px-6 py-6 flex flex-col gap-1 bg-background/95">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="py-3 px-3 rounded-xl text-base text-foreground hover:bg-secondary/60 transition"
              activeProps={{ className: "bg-secondary text-primary font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="localizacao"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
          >
            Reservar mesa
          </Link>
        </nav>
      </div>
    </header>
  );
}
