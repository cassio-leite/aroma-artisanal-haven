import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/data/site";
import { products } from "@/data/site";

export function CategoryCard({ category }: { category: Category }) {
  const count = products.filter((p) => p.category === category.slug).length;
  return (
    <Link
      to="/categorias/$slug"
      params={{ slug: category.slug }}
      className="group relative image-zoom rounded-3xl overflow-hidden aspect-[3/4] block hover-lift transition-shadow hover:shadow-xl"
    >
      <img
        src={category.image}
        alt={category.name}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent" />
      <div className="absolute inset-0 p-5 md:p-7 flex flex-col justify-end text-cream">
        <div className="text-[11px] uppercase tracking-[0.2em] text-cappuccino mb-1">
          {count} {count === 1 ? "produto" : "produtos"}
        </div>
        <div className="font-display text-2xl md:text-3xl flex items-center justify-between">
          {category.name}
          <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
        </div>
      </div>
    </Link>
  );
}
