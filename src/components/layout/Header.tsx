"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = pathname === "/";

  const navLinks = [
    { label: "Início", href: isHome ? "#" : "/", active: pathname === "/" },
    { label: "Serviços", href: "/servicos", active: pathname === "/servicos" || pathname === "/servicos/marketing" || pathname === "/servicos/publicidade" || pathname === "/servicos/programacao" },
    { label: "Portfólio", href: "/portfolio", active: pathname.startsWith("/portfolio") },
    { 
      label: "Gráfica & Serigrafia", 
      shortLabel: "Gráfica",
      href: "/servicos/grafica", 
      active: pathname === "/servicos/grafica" || pathname === "/studio" 
    },
    { label: "Sobre", href: "/sobre", active: pathname === "/sobre" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0B0C0F]/85 backdrop-blur-xl border-b border-outline-variant/30">
      <div className="h-20 max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop flex items-center justify-between">
        {/* Brand Official Logo */}
        <Link className="flex items-center gap-3 group" data-path="home" href="/">
          <img
            alt="DigitAfrika"
            className="h-8 sm:h-9 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFY_EqSYk3OXk6NG8VIjGv6bxnAHEi55xvtAZ__xHqXTDW0ZW-qWVIP6WSyGtRnAlPn-igYfmewKbfSx_Et7jipWTON0UH_Y2n4yYtki8_qjOQ1g_Dn7kGN2VIMtQYHi7qQCv-1vUpqvcLZiwhoA3BPT-5ejjkf3Tc9oyS3bjFyXIuu6CNjamD5t9PzN0H9aXAC705iCkTmlOxbsSkzu5VF2guUKhObsKd_WhCswrV4K37p9EDKgC2dA"
          />
        </Link>

        {/* Rounded Floating Central Nav Pill */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-surface-container-high/60 backdrop-blur-md border border-outline-variant/40 shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`px-3 lg:px-4 py-1.5 rounded-full font-label-lg text-label-lg uppercase tracking-wider transition-all whitespace-nowrap ${
                link.active
                  ? "bg-primary-container text-on-primary-fixed font-bold shadow-sm"
                  : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
              }`}
            >
              {"shortLabel" in link && link.shortLabel ? (
                <>
                  <span className="hidden xl:inline">{link.label}</span>
                  <span className="inline xl:hidden">{link.shortLabel}</span>
                </>
              ) : (
                link.label
              )}
            </Link>
          ))}
        </nav>

        {/* Right: Badge & CTA */}
        <div className="flex items-center gap-space-sm sm:gap-space-md">
          <div className="hidden lg:flex items-center gap-space-xs font-label-technical text-label-technical text-on-surface-variant border border-outline-variant/40 px-3 py-1.5 rounded-full bg-surface-container-low">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="tracking-widest">MAPUTO [CAT]</span>
          </div>

          <Link
            className="relative inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-primary-container text-on-primary-fixed font-label-lg text-label-lg font-bold uppercase tracking-wider hover:bg-primary hover:text-surface-container-lowest transition-all"
            data-path="contact"
            href={isHome ? "#contact" : "/contactos"}
          >
            <span>Fale Connosco</span>
            <span className="material-symbols-outlined text-base">north_east</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-surface-container text-on-surface hover:text-primary-container border border-outline-variant/40"
            aria-label="Abrir menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest/95 backdrop-blur-xl border-b border-outline-variant/30 px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-label-lg text-label-lg uppercase tracking-wider flex items-center justify-between ${
                  link.active
                    ? "bg-primary-container text-on-primary-fixed font-bold"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
                }`}
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            ))}
            <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between text-on-surface-variant font-label-technical text-label-technical uppercase">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                MAPUTO [CAT]
              </span>
              <span>EDIÇÃO 2026</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
