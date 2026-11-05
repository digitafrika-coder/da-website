import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 text-on-surface">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop py-space-2xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-space-xl pb-space-xl border-b border-outline-variant/20">
          <div className="max-w-md">
            <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest block mb-space-sm">
              // MANIFESTO 01
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-primary leading-none mb-space-md">
              DigitAfrika.
              <br />
              <span className="text-outline">Repense Tudo.</span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Potência Criativa &amp; Digital Independente operando a partir de Maputo, Moçambique — servindo marcas globais e regionais destemidas através de reinvenção radical.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg w-full lg:w-auto">
            <div>
              <div className="font-label-technical text-label-technical text-outline uppercase tracking-widest mb-space-sm">
                // 01 — Pilar
              </div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-md">
                Marketing
              </h4>
              <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <Link className="hover:text-primary-container transition-colors" href="/servicos/marketing">
                    Estratégia de Marca
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary-container transition-colors" href="/servicos/marketing">
                    Posicionamento de Mercado
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary-container transition-colors" href="/servicos/marketing">
                    Crescimento &amp; Performance
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary-container transition-colors" href="/servicos/marketing">
                    Inteligência Cultural
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-label-technical text-label-technical text-outline uppercase tracking-widest mb-space-sm">
                // 02 — Pilar
              </div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-md">
                Publicidade
              </h4>
              <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <Link className="hover:text-primary-container transition-colors" href="/servicos/publicidade">
                    Identidade Visual
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary-container transition-colors" href="/servicos/publicidade">
                    Campanhas Multicanal
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary-container transition-colors" href="/servicos/publicidade">
                    Direcção de Arte
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary-container transition-colors" href="/servicos/publicidade">
                    Motion &amp; Cinema
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-label-technical text-label-technical text-outline uppercase tracking-widest mb-space-sm">
                // 03 — Pilar
              </div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-md">
                Programação
              </h4>
              <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <Link className="hover:text-primary-container transition-colors" href="/servicos/programacao">
                    Plataformas Digitais
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary-container transition-colors" href="/servicos/programacao">
                    Sistemas Web &amp; Mobile
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary-container transition-colors" href="/servicos/programacao">
                    UI/UX Empresarial
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary-container transition-colors" href="/servicos/programacao">
                    Arquitetura de Alta Performance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-label-technical text-label-technical text-outline uppercase tracking-widest mb-space-sm">
                // 04 — Estúdio
              </div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-md">
                Gráfica
              </h4>
              <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <Link className="hover:text-primary-container transition-colors" href="/servicos/grafica">
                    Serigrafia &amp; Têxtil
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary-container transition-colors" href="/servicos/grafica">
                    Papelaria Prestige
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary-container transition-colors" href="/servicos/grafica">
                    Brindes Corporativos
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary-container transition-colors text-primary-container font-medium" href="/studio">
                    Studio 3D Interativo ↗
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-space-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg border-b border-outline-variant/20 font-body-sm text-body-sm">
          <div>
            <span className="font-label-technical text-label-technical text-outline uppercase block mb-1">
              Hub do Estúdio
            </span>
            <p className="text-on-surface">
              Av. Julius Nyerere, Polana Cimento
              <br />
              Maputo, Moçambique [CAT]
            </p>
          </div>

          <div>
            <span className="font-label-technical text-label-technical text-outline uppercase block mb-1">
              Contacto Directo
            </span>
            <a
              className="text-primary hover:text-primary-container transition-colors block"
              href="mailto:hello@digitafrika.com"
            >
              hello@digitafrika.com
            </a>
            <span className="text-on-surface-variant">+258 84 000 0000 (Linha WhatsApp)</span>
          </div>

          <div>
            <span className="font-label-technical text-label-technical text-outline uppercase block mb-1">
              Estado Operacional
            </span>
            <div className="flex items-center gap-space-xs text-primary-container font-label-technical text-label-technical uppercase">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span>Disponível Para Projectos Globais</span>
            </div>
          </div>

          <div>
            <span className="font-label-technical text-label-technical text-outline uppercase block mb-1">
              Conectar // Redes Sociais
            </span>
            <div className="flex items-center gap-space-md pt-1">
              <a className="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" href="https://behance.net" target="_blank" rel="noopener noreferrer">
                Behance
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" href="https://x.com" target="_blank" rel="noopener noreferrer">
                X
              </a>
            </div>
          </div>
        </div>

        <div className="pt-space-lg flex flex-col md:flex-row justify-between items-center gap-space-md font-label-technical text-label-technical text-outline uppercase">
          <p>© 2026 DIGITAFRIKA DIGITAL LTD. TODOS OS DIREITOS RESERVADOS.</p>
          <p className="text-on-surface-variant">DESENHADO COM PRECISÃO BRUTAL &amp; ETHOS EDITORIAL AFRICANO</p>
        </div>
      </div>
    </footer>
  );
};
