import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Clock, CheckCircle, Loader2 } from "lucide-react";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { useReveal } from "@/hooks/use-reveal";
import { useForm, type Resolver } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  component: ContatoPage,
  head: () => ({
    meta: [
      { title: "Contato — Café Aurora" },
      {
        name: "description",
        content:
          "Entre em contato com a Café Aurora. Tire dúvidas, faça reservas, encomende presentes artesanais ou venha tomar um café conosco.",
      },
      { property: "og:title", content: "Contato — Café Aurora" },
      {
        property: "og:description",
        content: "Entre em contato conosco para tirar dúvidas, fazer reservas ou encomendas.",
      },
    ],
  }),
});

const contatoSchema = z.object({
  name: z.string().min(3, "Mínimo 3 caracteres").max(100),
  email: z.string().email("Email inválido"),
  phone: z
  .string()
  .regex(/^\(?\d{2}\)?[\s-]?9?\d{4}-?\d{4}$/, "Formato: (48) 99999-9999 ou 48999999999"),
  message: z.string().min(10, "Mínimo 10 caracteres").max(1000),
});
type ContatoFormData = z.infer<typeof contatoSchema>;

const contatoResolver: Resolver<ContatoFormData> = async (values) => {
  const result = contatoSchema.safeParse(values);
  if (result.success) {
    return { values: result.data, errors: {} };
  }

  const errors: Record<string, { type: string; message: string }> = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0];
    if (typeof field === "string" && !errors[field]) {
      errors[field] = { type: issue.code, message: issue.message };
    }
  }
  return { values: {}, errors };
};

function ContatoPage() {
  useReveal();

  const [showSuccess, setShowSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<ContatoFormData>({
    resolver: contatoResolver,
    mode: "all",
  });

  const onSubmit = async (data: ContatoFormData) => {
    await new Promise((r) => setTimeout(r, 1500));
    setShowSuccess(true);
    reset();
    setTimeout(() => setShowSuccess(false), 4000);
  };

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
              Escolha o canal que for mais confortável para você. Nossa equipe está pronta para lhe
              atender.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  icon: MapPin,
                  title: "Endereço",
                  desc: "Rua das Acácias, 245\nCentro Histórico\nFlorianópolis — SC",
                },
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
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="text-sm font-medium mb-2 block">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  {...register("name")}
                  disabled={isSubmitting}
                  className={`w-full rounded-2xl bg-background border p-3 transition-colors focus:border-primary focus:ring-1 disabled:opacity-50 ${errors.name ? "border-red-500" : "border-border/60"}`}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                  disabled={isSubmitting}
                  className={`w-full rounded-2xl bg-background border p-3 transition-colors focus:border-primary focus:ring-1 disabled:opacity-50 ${errors.email ? "border-red-500" : "border-border/60"}`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Telefone</label>
                <input
                  type="tel"
                  placeholder="(48) 99999-9999"
                  {...register("phone")}
                  disabled={isSubmitting}
                  className={`w-full rounded-2xl bg-background border p-3 transition-colors focus:border-primary focus:ring-1 disabled:opacity-50 ${errors.phone ? "border-red-500" : "border-border/60"}`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Mensagem</label>
                <textarea
                  placeholder="Como podemos te ajudar?"
                  {...register("message")}
                  disabled={isSubmitting}
                  className={`w-full rounded-2xl bg-background border p-3 transition-colors focus:border-primary focus:ring-1 h-32 disabled:opacity-50 ${errors.message ? "border-red-500" : "border-border/60"}`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="w-full rounded-2xl bg-primary text-primary-foreground py-3.5 font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar mensagem"
                )}
              </button>
            </form>
            {showSuccess && (
              <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-auto max-w-sm z-50 flex items-center gap-3 bg-green-50 border border-green-200 rounded-2xl p-4 shadow-lg">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                <p className="text-sm font-medium text-green-700">Mensagem enviada com sucesso!</p>
              </div>
            )}
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
            className="inline-flex items-center gap-2 rounded-full bg-leaf text-white px-8 py-3.5 font-medium hover:bg-leaf transition-colors"
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
            {
              q: "É necessário fazer reserva?",
              a: "Não. Porém recomendamos reservas aos finais de semana.",
            },
            {
              q: "Vocês possuem opções sem lactose?",
              a: "Sim. Temos bebidas com leite vegetal e sobremesas selecionadas.",
            },
            {
              q: "Posso encomendar presentes?",
              a: "Sim. Produzimos kits personalizados sob encomenda.",
            },
            { q: "Aceitam pets?", a: "Sim. Nossa área externa é pet friendly." },
          ].map((item, i) => (
            <div
              key={i}
              className="reveal hover-lift bg-card rounded-3xl p-8 border border-border/60"
            >
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
