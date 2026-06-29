import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Heart, Users } from "lucide-react";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { useReveal } from "@/hooks/use-reveal";
import storyImg from "@/assets/story-cafe.jpg";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
  head: () => ({
    meta: [
      { title: "Sobre — Café Aurora" },
      {
        name: "description",
        content:
          "Conheça a história da Café Aurora: 15 anos de café artesanal, ingredientes locais e um espaço para chamar de seu em Florianópolis.",
      },
      { property: "og:title", content: "Sobre — Café Aurora" },
      {
        property: "og:description",
        content: "Uma cafeteria nascida do amor pelo café, pelo encontro e pelo que é local.",
      },
    ],
  }),
});

function SobrePage() {
  useReveal();

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Nossa história"
        title={
          <>
            Quinze anos servindo café <em className="italic">de verdade</em>.
          </>
        }
        description="Uma cafeteria nascida do amor pelo café artesanal, pelo encontro entre pessoas e pela valorização do que é local."
      />

      {/* Seção Origem */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="image-zoom rounded-3xl overflow-hidden aspect-[4/5] reveal">
            <img src={storyImg} alt="Nossa história" className="w-full h-full object-cover" />
          </div>
          <div className="reveal">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-leaf mb-4">
              <span className="w-8 h-px bg-leaf" />
              Como tudo começou
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
              Uma pequena casa de esquina, uma ideia grande.
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                A Café Aurora nasceu em 2009, em Florianópolis, quando Dona Maria Aurora decidiu
                transformar a varanda da sua casa em um espaço de café. Sem planejamento formal,
                apenas com receitas de família e um fogão à lenha.
              </p>
              <p>
                O que começou como um projeto pessoal virou ponto de encontro do bairro. Em 2014,
                nos mudamos para o espaço atual — maior, mas com o mesmo calor de sempre.
              </p>
              <p>
                Hoje somos uma equipe de doze pessoas apaixonadas, mas a filosofia não mudou: café
                feito com tempo, atenção e carinho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Números */}
      <section className="bg-secondary/40 py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "15", label: "anos de história" },
              { number: "8", label: "produtores parceiros" },
              { number: "+40", label: "receitas autorais" },
              { number: "12", label: "pessoas na equipe" },
            ].map((stat, i) => (
              <div
                key={i}
                className="reveal bg-card border border-border/60 rounded-3xl p-8 text-center"
              >
                <div className="font-display text-5xl text-primary">{stat.number}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Valores */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-36">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-leaf mb-4">
            <span className="w-8 h-px bg-leaf" />O que nos move
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Feito com <em className="italic">intenção</em>.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Leaf,
              title: "Ingredientes locais",
              desc: "Trabalhamos com produtores da região e valorizamos o que é cultivado perto de nós.",
            },
            {
              icon: Heart,
              title: "Feito à mão",
              desc: "Nada aqui é industrializado. Cada receita é preparada diariamente pela nossa equipe.",
            },
            {
              icon: Users,
              title: "Espaço de encontro",
              desc: "Mais do que uma cafeteria, somos um lugar para desacelerar e se reconectar com quem você ama.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="reveal hover-lift bg-card rounded-3xl p-8 border border-border/60"
            >
              <div className="grid place-items-center w-12 h-12 rounded-2xl bg-secondary text-primary mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção CTA */}
      <section className="bg-espresso text-cream py-24 md:py-36 text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
            Venha nos <em className="italic text-cappuccino">conhecer</em>.
          </h2>
          <p className="text-cream/80 mb-10 text-lg">
            Estamos na Rua das Acácias, 245 — Centro Histórico, Florianópolis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              hash="localizacao"
              className="inline-flex items-center gap-2 rounded-full bg-cream text-espresso px-7 py-3.5 font-medium hover:bg-cappuccino transition-colors"
            >
              Ver localização
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 text-cream px-7 py-3.5 font-medium hover:bg-cream/10 transition-colors"
            >
              Falar conosco
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
