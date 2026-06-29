import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useReveal } from "@/hooks/use-reveal";
import {
  Coffee,
  Cake,
  Gift,
  HeartHandshake,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";

import heroImg from "@/assets/hero-cappuccino.jpg";
import storyImg from "@/assets/story-cafe.jpg";
import galleryCafe1 from "@/assets/gallery-cafe-1.jpg";
import galleryCafe2 from "@/assets/gallery-cafe-2.jpg";
import galleryCafe3 from "@/assets/gallery-cafe-3.jpg";
import galleryCafe4 from "@/assets/gallery-cafe-4.jpg";
import galleryCafe5 from "@/assets/gallery-cafe-5.jpg";
import galleryCafe6 from "@/assets/gallery-cafe-6.jpg";
import galleryCafe7 from "@/assets/gallery-cafe-7.jpg";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { CategoryCard } from "@/components/site/CategoryCard";
import { BeanCard } from "@/components/site/BeanCard";
import { products, categories, beans } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Café Aurora — Cafeteria artesanal, acolhedora e regional" },
      {
        name: "description",
        content:
          "Cappuccinos artesanais, sobremesas exclusivas e um ambiente acolhedor para famílias e amantes de café. Visite a Café Aurora.",
      },
      { property: "og:title", content: "Café Aurora — Cafeteria artesanal" },
      {
        property: "og:description",
        content:
          "Onde cada xícara conta uma história. Cappuccinos artesanais, sobremesas exclusivas e um ambiente para chamar de seu.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Landing,
});

function Landing() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Featured />
      <Story />
      <Differentials />
      <Categories />
      <Beans />
      <Gallery />
      <Testimonials />
      <Location />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ───────────────── Hero ───────────────── */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const shouldReduceMotion = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative pt-16 md:pt-20 min-h-[100svh] flex items-end overflow-hidden"
    >
      <motion.img
        style={{ y: shouldReduceMotion ? 0 : y }}
        src={heroImg}
        alt="Cappuccino artesanal em ambiente acolhedor"
        width={1600}
        height={1808}
        className="absolute inset-0 w-full h-[120%] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-espresso/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/60 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 pb-16 md:pb-24 lg:pb-32 text-cream">
        <div className="max-w-2xl reveal">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cappuccino mb-6">
            <span className="w-8 h-px bg-cappuccino" />
            Cafeteria artesanal · desde 2009
          </span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Onde cada xícara
            <br />
            conta uma <em className="italic text-cappuccino">história</em>.
          </h1>
          <p className="mt-6 text-base md:text-lg text-cream/80 max-w-lg leading-relaxed">
            Cappuccinos artesanais, sobremesas feitas com carinho e um espaço para desacelerar. Um
            lugar para chamar de seu — em família, a dois ou em boa companhia.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/cardapio"
              className="inline-flex items-center gap-2 rounded-full bg-cream text-espresso px-7 py-3.5 font-medium hover:bg-cappuccino transition-colors"
            >
              Ver o cardápio
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#localizacao"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 text-cream px-7 py-3.5 font-medium hover:bg-cream/10 transition-colors"
            >
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Produtos em Destaque ───────────────── */
function Featured() {
  const featured = products.slice(0, 3);
  return (
    <section id="produtos" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-leaf mb-4">
              <span className="w-8 h-px bg-leaf" />
              Produtos em destaque
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl max-w-xl leading-[1.05]">
              Pequenos rituais, <em className="italic">grandes momentos</em>.
            </h2>
          </div>
          <Link
            to="/cardapio"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors self-start md:self-end"
          >
            Ver cardápio completo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Nossa História ───────────────── */
function Story() {
  return (
    <section id="historia" className="py-24 md:py-36 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal image-zoom rounded-3xl overflow-hidden aspect-[4/5] order-2 lg:order-1">
          <img
            src={storyImg}
            alt="Barista preparando café artesanal"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="reveal order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-leaf mb-4">
            <span className="w-8 h-px bg-leaf" />
            Nossa história
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            Quinze anos torrando café <em className="italic">grão a grão</em>.
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px]">
            <p>
              A Café Aurora nasceu em 2009, em uma pequena casa de esquina, com uma ideia simples:
              oferecer um café honesto, feito com tempo e atenção, em um espaço onde as pessoas se
              sentissem em casa.
            </p>
            <p>
              Trabalhamos diretamente com produtores da região, torramos nossos grãos em pequenos
              lotes e preparamos cada bebida no balcão — para que você sinta o cuidado em cada gole.
            </p>
            <p>
              Hoje somos um ponto de encontro de famílias, casais e amantes de café. Continuamos os
              mesmos: artesanais, próximos e apaixonados pelo que fazemos.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "15", l: "anos de história" },
              { n: "8", l: "produtores parceiros" },
              { n: "+40", l: "receitas autorais" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-primary">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Diferenciais ───────────────── */
const diffs = [
  {
    icon: Coffee,
    t: "Cappuccinos artesanais",
    d: "Grãos torrados em pequenos lotes e preparados no balcão por baristas formados.",
  },
  {
    icon: Cake,
    t: "Sobremesas exclusivas",
    d: "Receitas autorais, sem corantes artificiais, feitas diariamente na nossa cozinha.",
  },
  {
    icon: Gift,
    t: "Presentes personalizados",
    d: "Caixas e cestas montadas à mão para celebrar quem você ama.",
  },
  {
    icon: HeartHandshake,
    t: "Atendimento acolhedor",
    d: "Aqui você é recebido pelo nome — porque um bom café começa por uma boa companhia.",
  },
];

function Differentials() {
  return (
    <section className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16 reveal">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-leaf mb-4">
            <span className="w-8 h-px bg-leaf" />O que nos move
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Detalhes que fazem <em className="italic">a diferença</em>.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {diffs.map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="reveal hover-lift bg-card rounded-3xl p-8 border border-border/60"
            >
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-secondary text-primary mb-6">
                <Icon className="w-5 h-5" />
              </span>
              <h3 className="font-display text-2xl mb-3">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Categorias ───────────────── */
function Categories() {
  return (
    <section id="categorias" className="py-24 md:py-36 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-leaf mb-4">
              <span className="w-8 h-px bg-leaf" />
              Categorias
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-xl">
              Para todo <em className="italic">momento do dia</em>.
            </h2>
          </div>
          <Link
            to="/categorias"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition self-start md:self-end"
          >
            Todas as categorias <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Grãos ───────────────── */
function Beans() {
  return (
    <section id="graos" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-leaf mb-4">
              <span className="w-8 h-px bg-leaf" />
              Conheça nossos grãos
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
              Cada xícara começa <em className="italic">no campo</em>.
            </h2>
          </div>
          <Link
            to="/graos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition self-start md:self-end"
          >
            Todos os grãos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {beans.map((b) => (
            <BeanCard key={b.slug} bean={b} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Galeria ───────────────── */
function Gallery() {
  const galleryItems = [
    { src: galleryCafe1, alt: "Pessoas conversando enquanto tomam café", size: "hero" },
    { src: galleryCafe3, alt: "Prateleiras de cafés e decoração", size: "medium" },
    { src: galleryCafe5, alt: "Close da máquina de espresso", size: "medium" },
    { src: galleryCafe6, alt: "Barista preparando latte art", size: "small" },
    { src: galleryCafe2, alt: "Mesa com cappuccino e sobremesa", size: "small" },
    { src: galleryCafe4, alt: "Close de plantas e iluminação", size: "small" },
    { src: galleryCafe7, alt: "Mesa com cappuccino e sobremesa", size: "small" },
  ];

  return (
    <section id="galeria" className="py-24 md:py-36 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16 reveal">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-leaf mb-4">
            <span className="w-8 h-px bg-leaf" />
            Galeria
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Um espaço para <em className="italic">desacelerar</em>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`reveal rounded-3xl overflow-hidden ${
                item.size === "hero"
                  ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto"
                  : item.size === "medium"
                    ? "md:col-span-2 aspect-[2/1] md:aspect-auto"
                    : "aspect-square"
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Depoimentos ───────────────── */
const testimonials = [
  {
    quote:
      "O cappuccino é o melhor que já tomei. Mas o que me faz voltar é o jeito como sou recebida. Parece a casa da avó — com café de cafeteria premium.",
    name: "Marina Lopes",
    role: "Cliente há 4 anos",
  },
  {
    quote:
      "Levei minha família num domingo de manhã. As crianças amaram os bolos, e nós conseguimos finalmente conversar com calma. Virou nosso ritual.",
    name: "Rafael e Júlia",
    role: "Bairro Jardim",
  },
  {
    quote:
      "Pedi uma caixa de presente para um aniversário e foi um sucesso. Embalagem impecável, cuidado em cada detalhe. Recomendo sem pensar.",
    name: "Camila Andrade",
    role: "Designer local",
  },
];

function Testimonials() {
  return (
    <section className="py-24 md:py-36 bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16 reveal">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cappuccino mb-4">
            <span className="w-8 h-px bg-cappuccino" />
            Quem visita, volta
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Histórias que <em className="italic text-cappuccino">ficam com a gente</em>.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="reveal rounded-3xl p-8 bg-cream/[0.04] border border-cream/10 backdrop-blur-sm"
            >
              <Quote className="w-7 h-7 text-cappuccino mb-5" />
              <blockquote className="text-cream/90 leading-relaxed text-[15px] mb-8">
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center justify-between">
                <div>
                  <div className="font-display text-lg">{t.name}</div>
                  <div className="text-xs text-cream/60 mt-1">{t.role}</div>
                </div>
                <div className="flex gap-0.5 text-cappuccino">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Localização ───────────────── */
function Location() {
  return (
    <section id="localizacao" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-leaf mb-4">
            <span className="w-8 h-px bg-leaf" />
            Visite a Aurora
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            A gente te espera, com o <em className="italic">café no balcão</em>.
          </h2>

          <div className="space-y-6 mb-10">
            <InfoRow icon={MapPin} title="Endereço">
              Rua das Acácias, 245 — Centro Histórico
              <br />
              Florianópolis, SC
            </InfoRow>
            <InfoRow icon={Clock} title="Horário de funcionamento">
              Seg a Sex · 07h às 20h
              <br />
              Sáb e Dom · 08h às 21h
            </InfoRow>
            <InfoRow icon={Phone} title="Contato">
              (48) 99999-0000
            </InfoRow>
          </div>

          <a
            href="https://wa.me/5548999990000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-leaf text-cream px-7 py-3.5 font-medium hover:opacity-90 transition"
          >
            <Phone className="w-4 h-4" />
            Falar pelo WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="reveal rounded-3xl overflow-hidden aspect-[4/3] bg-secondary relative border border-border/60">
          <iframe
            title="Mapa Café Aurora"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-48.5710%2C-27.5990%2C-48.5390%2C-27.5780&layer=mapnik"
            className="w-full h-full grayscale-[0.3] contrast-[0.95]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="grid place-items-center w-11 h-11 rounded-2xl bg-secondary text-primary shrink-0">
        <Icon className="w-4 h-4" />
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{title}</div>
        <div className="text-foreground leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

/* ───────────────── CTA Final ───────────────── */
function FinalCTA() {
  return (
    <section className="pb-24 md:pb-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-primary text-primary-foreground p-10 md:p-20 text-center">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cappuccino/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-leaf/20 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cappuccino mb-6">
              <span className="w-8 h-px bg-cappuccino" />
              Sua próxima parada
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl mx-auto">
              Reserve uma mesa e
              <br />
              <em className="italic text-cappuccino">deixe o tempo passar</em>.
            </h2>
            <p className="mt-6 text-primary-foreground/80 max-w-xl mx-auto">
              Estamos te esperando para servir o melhor café da região, num lugar feito para ficar.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/5548999990000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-leaf text-white px-7 py-3.5 font-medium hover:bg-leaf/90 transition-colors"
              >
                Reservar pelo WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/cardapio"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 text-cream px-7 py-3.5 font-medium hover:bg-cream/10 transition-colors"
              >
                Ver cardápio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
