import { Link } from "@tanstack/react-router";
import { ArrowRight, Flame } from "lucide-react";
import type { Bean } from "@/data/site";

export function BeanCard({ bean }: { bean: Bean }) {
  return (
    <Link
      to="/graos/$slug"
      params={{ slug: bean.slug }}
      className="reveal group hover-lift bg-card rounded-3xl overflow-hidden border border-border/60 block"
    >
      <div className="image-zoom aspect-[5/4]">
        <img
          src={bean.image}
          alt={bean.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-7">
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-leaf mb-3">
          <span>{bean.origin}</span>
          <IntensityDots value={bean.intensity} />
        </div>
        <h3 className="font-display text-2xl mb-2 flex items-center justify-between gap-3">
          {bean.name}
          <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{bean.shortDesc}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {bean.notes.map((n) => (
            <span
              key={n}
              className="text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function IntensityDots({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-muted-foreground" aria-label={`Intensidade ${value} de 5`}>
      <Flame className="w-3.5 h-3.5 text-primary" />
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${i < value ? "bg-primary" : "bg-border"}`}
        />
      ))}
    </span>
  );
}
