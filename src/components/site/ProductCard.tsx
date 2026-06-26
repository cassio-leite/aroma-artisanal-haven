import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/site";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/produto/$slug"
      params={{ slug: product.slug }}
      className="group reveal hover-lift bg-card rounded-3xl overflow-hidden border border-border/60 shadow-[0_1px_0_rgba(0,0,0,0.02)] block"
    >
      <div className="image-zoom aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-7">
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-leaf mb-3">
          <span>{product.tag}</span>
          <span className="text-muted-foreground">{product.price}</span>
        </div>
        <h3 className="font-display text-2xl mb-2 flex items-center justify-between gap-3">
          {product.name}
          <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{product.shortDesc}</p>
      </div>
    </Link>
  );
}
