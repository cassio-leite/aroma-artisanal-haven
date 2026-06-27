import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { ProductCard } from "@/components/site/ProductCard";
import { useReveal } from "@/hooks/use-reveal";
import { categories, products } from "@/data/site";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/categorias/$slug")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.category.name} — Café Aurora` },
          { name: "description", content: loaderData.category.description },
          { property: "og:title", content: `${loaderData.category.name} — Café Aurora` },
          { property: "og:description", content: loaderData.category.description },
          { property: "og:image", content: loaderData.category.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl mb-4">Categoria não encontrada</h1>
        <Link to="/categorias" className="text-primary underline">
          Ver todas as categorias
        </Link>
      </div>
    </SiteShell>
  ),
  errorComponent: ({ reset }) => (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl mb-4">Não conseguimos carregar esta página</h1>
        <button onClick={reset} className="text-primary underline">
          Tentar novamente
        </button>
      </div>
    </SiteShell>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  useReveal();
  const { category } = Route.useLoaderData();
  const items = products.filter((p) => p.category === category.slug);

  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-10">
        <Link
          to="/categorias"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
        >
          <ArrowLeft className="w-4 h-4" /> Todas as categorias
        </Link>
      </div>
      <PageHeader
        eyebrow="Categoria"
        title={<>{category.name}</>}
        description={category.description}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 md:pb-36">
        {items.length === 0 ? (
          <p className="text-muted-foreground">Em breve novos produtos por aqui.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {items.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </div>
    </SiteShell>
  );
}
