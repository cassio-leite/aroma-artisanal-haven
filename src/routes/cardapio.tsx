import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { ProductCard } from "@/components/site/ProductCard";
import { useReveal } from "@/hooks/use-reveal";
import { categories, products } from "@/data/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/cardapio")({
  head: () => ({
    meta: [
      { title: "Cardápio — Café Aurora" },
      {
        name: "description",
        content:
          "Cardápio completo da Café Aurora: cappuccinos, sobremesas, bolos e presentes artesanais.",
      },
      { property: "og:title", content: "Cardápio — Café Aurora" },
      {
        property: "og:description",
        content: "Conheça todas as receitas da casa, organizadas por categoria.",
      },
    ],
  }),
  component: CardapioPage,
});

function CardapioPage() {
  useReveal();
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Cardápio"
        title={
          <>
            Todas as receitas da <em className="italic">casa</em>.
          </>
        }
        description="Selecionamos a cada estação os preferidos da casa — preparados na hora, com ingredientes locais."
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 md:pb-36 space-y-20">
        {categories.map((cat) => {
          const items = products.filter((p) => p.category === cat.slug);
          if (items.length === 0) return null;
          return (
            <section key={cat.slug} id={cat.slug} className="reveal">
              <div className="flex items-end justify-between gap-6 mb-10">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-leaf">
                    {items.length} {items.length === 1 ? "item" : "itens"}
                  </span>
                  <h2 className="font-display text-3xl md:text-5xl mt-2">{cat.name}</h2>
                </div>
                <Link
                  to="/categorias/$slug"
                  params={{ slug: cat.slug }}
                  className="hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Ver categoria <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {items.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </SiteShell>
  );
}
