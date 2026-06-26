import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/contato")({
  component: ContatoPage,
  head: () => ({
    meta: [
      { title: "Contato — Café Aurora" },
      { name: "description", content: "Entre em contato com a Café Aurora. Tire dúvidas, faça reservas, encomende presentes artesanais ou venha tomar um café conosco." },
      { property: "og:title", content: "Contato — Café Aurora" },
      { property: "og:description", content: "Entre em contato conosco para tirar dúvidas, fazer reservas ou encomendas." },
    ],
  }),
});

function ContatoPage() {
  useReveal();

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Entre em contato"
        title={
          <>
            Vamos conversar <em className="italic">tomando um café</em>.
          </>
        }
        description="Seja para tirar dúvidas, fazer uma reserva, encomendar presentes ou simplesmente dizer um olá, estaremos felizes em conversar com você."
      />

      {/* Seção Informações */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-36">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="reveal">
            <h2 className="font-display text-4xl md:text-5xl mb-6">Estamos esperando por você.</h2>
            <p className="text-muted-foreground mb-12">
              Escolha o canal que for mais confortável para você. Nossa equipe está pronta para lhe atender.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: MapPin, title: "Endereço", desc: "Rua das Acácias, 245\nCentro Histórico\nFlorianópolis — SC" },
                { icon: Phone, title: "Telefone", desc: "(48) 99999-0000" },
                { icon: MessageCircle, title: "WhatsApp", desc: "(48) 99999-0000" },
                { icon: Clock, title: "Horário", desc: "Seg-Sex: 07h às 20h\nSáb-Dom: 08h às 21h" },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border/60 rounded-3xl p-6">
                  <div className="text-primary mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal bg-card border border-border/60 rounded-3xl p-8 md:p-10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-medium mb-2 block">Nome</label>
                <input type="text" className="w-full rounded-2xl bg-background border border-border/60 p-3 transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Seu nome" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input type="email" className="w-full rounded-2xl bg-background border border-border/60 p-3 transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Telefone</label>
                <input type="tel" className="w-full rounded-2xl bg-background border border-border/60 p-3 transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="(48) 99999-9999" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Mensagem</label>
                <textarea className="w-full rounded-2xl bg-background border border-border/60 p-3 transition-colors focus:border-primary focus:ring-1 focus:ring-primary h-32" placeholder="Como podemos te ajudar?"></textarea>
              </div>
              <button className="w-full rounded-2xl bg-primary text-primary-foreground py-3.5 font-medium hover:bg-primary/90 transition-colors">
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Seção WhatsApp */}
      <section className="bg-secondary/40 py-24 md:py-36 text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 reveal">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Prefere uma conversa <em className="italic">mais rápida</em>?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Nosso atendimento pelo WhatsApp responde rapidamente durante o horário de funcionamento.
          </p>
          <a
            href="https://wa.me/5548999990000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-8 py-3.5 font-medium hover:bg-emerald-700 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Falar pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Seção FAQ */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-36">
        <div className="text-center mb-16 reveal">
          <h2 className="font-display text-4xl md:text-5xl">Perguntas Frequentes</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { q: "É necessário fazer reserva?", a: "Não. Porém recomendamos reservas aos finais de semana." },
            { q: "Vocês possuem opções sem lactose?", a: "Sim. Temos bebidas com leite vegetal e sobremesas selecionadas." },
            { q: "Posso encomendar presentes?", a: "Sim. Produzimos kits personalizados sob encomenda." },
            { q: "Aceitam pets?", a: "Sim. Nossa área externa é pet friendly." },
          ].map((item, i) => (
            <div key={i} className="reveal hover-lift bg-card rounded-3xl p-8 border border-border/60">
              <h4 className="font-display text-2xl mb-3">{item.q}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção CTA Final */}
      <section className="bg-espresso text-cream py-24 md:py-36 text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 reveal">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
            Esperamos sua <em className="italic text-cappuccino">visita</em>.
          </h2>
          <p className="text-cream/80 mb-10 text-lg">O melhor café sempre começa com um convite.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/cardapio"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 text-cream px-7 py-3.5 font-medium hover:bg-cream/10 transition-colors"
            >
              Ver Cardápio
            </Link>
            <Link
              to="/"
              hash="localizacao"
              className="inline-flex items-center gap-2 rounded-full bg-cream text-espresso px-7 py-3.5 font-medium hover:bg-cappuccino transition-colors"
            >
              Ver localização
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
