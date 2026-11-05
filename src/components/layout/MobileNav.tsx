"use client";

import React from "react";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string; highlight?: boolean }[];
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, links }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-canvas-deep/98 backdrop-blur-2xl flex flex-col justify-between p-6 md:hidden animate-in fade-in duration-200">
      {/* Header bar inside drawer */}
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
          <span className="text-label-technical uppercase tracking-widest text-editorial-grey">
            DIGITAFRIKA // MAPUTO [CAT]
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-white hover:text-kinetic-lime border border-white/10 rounded-none transition-colors"
          aria-label="Fechar Menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-5 py-8">
        {links.map((link, idx) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`text-2xl font-display uppercase tracking-tight flex items-center justify-between group transition-colors ${
              link.highlight
                ? "text-kinetic-lime hover:text-white"
                : "text-white hover:text-kinetic-lime"
            }`}
          >
            <span>{link.label}</span>
            <span className="text-label-technical text-editorial-muted font-mono">
              0{idx + 1}
            </span>
          </Link>
        ))}
      </nav>

      {/* Footer / CTA */}
      <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
        <Button
          href="/contactos"
          variant="primary"
          size="lg"
          fullWidth
          icon={<ArrowUpRight className="w-5 h-5" />}
          onClick={onClose}
        >
          Fale Connosco
        </Button>
        <div className="text-label-technical text-editorial-muted uppercase tracking-widest text-center">
          Disponibilidade: Projectos Abertos // 2026
        </div>
      </div>
    </div>
  );
};
