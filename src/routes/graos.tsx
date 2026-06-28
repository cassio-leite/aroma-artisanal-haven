import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { BeanCard } from "@/components/site/BeanCard";
import { useReveal } from "@/hooks/use-reveal";
import { beans } from "@/data/site";

export const Route = createFileRoute("/graos")({
  head: () => ({
    meta: [
      { title: "Conheça nossos grãos — Café Aurora" },
      {
        name: "description",
        content:
          "Microlotes brasileiros e do mundo, torrados em pequenos lotes na casa. Conheça origem, notas e intensidade de cada grão.",
      },
      { property: "og:title", content: "Conheça nossos grãos — Café Aurora" },
      {
        property: "og:description",
        content: "Origem, notas sensoriais e intensidade de cada um dos nossos grãos.",
      },
    ],
  }),
  component: BeansPage,
});

function BeansPage() {
  useReveal();
  const routerState = useRouterState();
  const isIndex = routerState.location.pathname === "/graos";

  return isIndex ? <BeansList /> : <Outlet />;
}

function BeansList() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Conheça nossos grãos"
        title={
          <>
            Cada xícara começa <em className="italic">no campo</em>.
          </>
        }
        description="Trabalhamos diretamente com produtores selecionados e torramos em pequenos lotes na nossa casa. Conheça a história de cada grão."
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 md:pb-36">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {beans.map((b) => (
            <BeanCard key={b.slug} bean={b} />
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
