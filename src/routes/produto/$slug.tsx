import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ProductCard } from "@/components/site/ProductCard";
import { useReveal } from "@/hooks/use-reveal";
import { categories, products } from "@/data/site";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/produto/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    const category = categories.find((c) => c.slug === product.category)!;
    return { product, category };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Café Aurora` },
          { name: "description", content: loaderData.product.shortDesc },
          { property: "og:title", content: `${loaderData.product.name} — Café Aurora` },
          { property: "og:description", content: loaderData.product.shortDesc },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl mb-4">Produto não encontrado</h1>
        <Link to="/cardapio" className="text-primary underline">
          Ver cardápio
        </Link>
      </div>
    </SiteShell>
  ),
  errorComponent: ({ reset }) => (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl mb-4">Não conseguimos carregar este produto</h1>
        <button onClick={reset} className="text-primary underline">
          Tentar novamente
        </button>
      </div>
    </SiteShell>
  ),
  component: ProductPage,
});

function ProductPage() {
  useReveal();
  const { product, category } = Route.useLoaderData();
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-10">
        <Link
          to="/categorias/$slug"
          params={{ slug: category.slug }}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
        >
          <ArrowLeft className="w-4 h-4" /> {category.name}
        </Link>
      </div>

      <article className="mx-auto max-w-7xl px-6 lg:px-10 pt-10 pb-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="reveal image-zoom rounded-3xl overflow-hidden aspect-[4/5] border border-border/60">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="reveal lg:pt-8">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-leaf mb-5">
            <span className="w-8 h-px bg-leaf" />
            {product.tag}
          </span>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">{product.name}</h1>
          <div className="mt-8 mb-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
              Preço
            </div>
            <div className="text-4xl font-bold font-display text-primary">{product.price}</div>
          </div>
          <p className="mt-8 text-muted-foreground leading-relaxed text-[15px]">
            {product.longDesc}
          </p>

          {product.ingredients && (
            <div className="mt-10">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Ingredientes
              </div>
              <ul className="flex flex-wrap gap-2">
                {product.ingredients.map((i: string) => (
                  <li
                    key={i}
                    className="text-sm px-4 py-2 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/"
              hash="localizacao"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium hover:opacity-90 transition"
            >
              {product.category === 'presentes' ? 'Encomendar' : 'Provar na cafeteria'}{' '}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/cardapio"
              className="inline-flex items-center gap-2 rounded-full border border-border text-foreground px-7 py-3.5 font-medium hover:bg-secondary transition"
            >
              Ver cardápio
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-secondary/40 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="font-display text-3xl md:text-4xl mb-10">Você também vai gostar</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteShell>
  );
}
