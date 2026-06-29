import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/site";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/produto/$slug"
      params={{ slug: product.slug }}
      className="group hover-lift cursor-pointer transition-all hover:bg-secondary/60 bg-card rounded-3xl overflow-hidden border border-border/60 hover:border-primary/30 shadow-[0_1px_0_rgba(0,0,0,0.02)] block"
    >
      <div className="image-zoom aspect-[4/5] relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 right-4 grid place-items-center w-8 h-8 rounded-full bg-background/90 text-primary opacity-0 group-hover:opacity-100 transition-all duration-500">
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
      <div className="p-7">
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-leaf mb-3">
          <span>{product.tag}</span>
          <span className="text-sm font-semibold text-primary">{product.price}</span>
        </div>
        <h3 className="font-display text-2xl mb-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{product.shortDesc}</p>
      </div>
    </Link>
  );
}
