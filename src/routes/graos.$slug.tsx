import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { BeanCard, IntensityDots } from "@/components/site/BeanCard";
import { useReveal } from "@/hooks/use-reveal";
import { beans } from "@/data/site";
import { ArrowLeft, MapPin, Flame, Sparkles } from "lucide-react";

export const Route = createFileRoute("/graos/$slug")({
  loader: ({ params }) => {
    const bean = beans.find((b) => b.slug === params.slug);
    if (!bean) throw notFound();
    return { bean };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.bean.name} — Café Aurora` },
          { name: "description", content: loaderData.bean.shortDesc },
          { property: "og:title", content: `${loaderData.bean.name} — Café Aurora` },
          { property: "og:description", content: loaderData.bean.shortDesc },
          { property: "og:image", content: loaderData.bean.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl mb-4">Grão não encontrado</h1>
        <Link to="/graos" className="text-primary underline">
          Ver todos os grãos
        </Link>
      </div>
    </SiteShell>
  ),
  errorComponent: ({ reset }) => (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl mb-4">Não conseguimos carregar este grão</h1>
        <button onClick={reset} className="text-primary underline">Tentar novamente</button>
      </div>
    </SiteShell>
  ),
  component: BeanPage,
});

function BeanPage() {
  useReveal();
  const { bean } = Route.useLoaderData();
  const related = beans.filter((b) => b.slug !== bean.slug).slice(0, 3);

  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-10">
        <Link
          to="/graos"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
        >
          <ArrowLeft className="w-4 h-4" /> Todos os grãos
        </Link>
      </div>

      <article className="mx-auto max-w-7xl px-6 lg:px-10 pt-10 pb-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="reveal image-zoom rounded-3xl overflow-hidden aspect-[4/5] border border-border/60">
          <img src={bean.image} alt={bean.name} className="w-full h-full object-cover" />
        </div>
        <div className="reveal lg:pt-8">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-leaf mb-5">
            <span className="w-8 h-px bg-leaf" />
            Grão da casa
          </span>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">{bean.name}</h1>
          <p className="mt-8 text-muted-foreground leading-relaxed text-[15px]">
            {bean.longDesc}
          </p>

          <dl className="mt-10 grid sm:grid-cols-2 gap-5">
            <Fact icon={MapPin} label="Origem" value={bean.origin} />
            <Fact
              icon={Flame}
              label="Intensidade"
              value={<IntensityDots value={bean.intensity} />}
            />
          </dl>

          <div className="mt-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-leaf" /> Notas sensoriais
            </div>
            <ul className="flex flex-wrap gap-2">
              {bean.notes.map((n) => (
                <li
                  key={n}
                  className="text-sm px-4 py-2 rounded-full bg-secondary text-secondary-foreground"
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-secondary/40 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="font-display text-3xl md:text-4xl mb-10">Outros grãos da casa</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {related.map((b) => (
                <BeanCard key={b.slug} bean={b} />
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteShell>
  );
}

function Fact({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5">
      <span className="grid place-items-center w-11 h-11 rounded-2xl bg-secondary text-primary shrink-0">
        <Icon className="w-4 h-4" />
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
          {label}
        </div>
        <div className="text-foreground">{value}</div>
      </div>
    </div>
  );
}
