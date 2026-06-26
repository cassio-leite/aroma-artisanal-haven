import { Link } from "@tanstack/react-router";
import { Coffee, Instagram, Facebook } from "lucide-react";
import { navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-espresso text-cream/80 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-cream text-espresso">
                <Coffee className="w-4 h-4" />
              </span>
              <span className="font-display text-2xl text-cream">
                Café <em className="not-italic text-cappuccino">Aurora</em>
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-cream/60">
              Cafeteria artesanal, familiar e acolhedora. Há quinze anos servindo café
              de verdade com o carinho de sempre.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-cappuccino mb-4">
              Navegar
            </div>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-cream transition">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/" hash="localizacao" className="hover:text-cream transition">
                  Visitar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-cappuccino mb-4">
              Acompanhe
            </div>
            <div className="flex gap-3">
              <SocialLink icon={Instagram} label="Instagram" />
              <SocialLink icon={Facebook} label="Facebook" />
            </div>
            <div className="mt-6 text-sm text-cream/60">
              (48) 99999-0000
              <br />
              ola@cafeaurora.com.br
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-cream/50">
          <span>© {new Date().getFullYear()} Café Aurora. Todos os direitos reservados.</span>
          <span>Feito com café e carinho em Florianópolis.</span>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon: Icon, label }: { icon: typeof Instagram; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid place-items-center w-10 h-10 rounded-full border border-cream/15 hover:bg-cream/10 transition"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
