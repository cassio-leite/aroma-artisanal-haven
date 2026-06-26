import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { CategoryCard } from "@/components/site/CategoryCard";
import { useReveal } from "@/hooks/use-reveal";
import { categories } from "@/data/site";

export const Route = createFileRoute("/categorias")({
  head: () => ({
    meta: [
      { title: "Categorias — Café Aurora" },
      {
        name: "description",
        content:
          "Navegue pelas categorias da Café Aurora: cappuccinos, sobremesas, bolos e presentes.",
      },
      { property: "og:title", content: "Categorias — Café Aurora" },
      {
        property: "og:description",
        content: "Para todo momento do dia, uma categoria para chamar de sua.",
      },
    ],
  }),
  component: CategoriasPage,
});

function CategoriasPage() {
  useReveal();
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Categorias"
        title={<>Para todo <em className="italic">momento do dia</em>.</>}
        description="Quatro famílias de produtos, todas preparadas com a mesma atenção e ingredientes locais."
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 md:pb-36">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
