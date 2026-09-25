import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const links = [
    { href: '#inicio', label: t.nav.home },
    { href: '#sobre', label: t.nav.about },
    { href: '#servicos', label: t.nav.services },
    { href: '#projetos', label: t.nav.projects },
    { href: '#contato', label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-foreground py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5">
        <div>
          <span className="font-display text-base font-semibold tracking-wide">
            KA<span className="text-primary">.</span>
          </span>
          <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {t.footer.tagline}
          </p>
        </div>

        <nav className="flex flex-wrap gap-4" aria-label="Rodapé">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-[11px] text-muted-foreground">
          © {year} Keyla Ayumi · {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
