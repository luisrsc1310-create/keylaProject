import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { languages } from '@/i18n/translations';

function LanguageSwitcher({ className = '' }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`flex items-center gap-1.5 text-[12px] tracking-[0.14em] ${className}`}>
      {languages.map((l, i) => (
        <React.Fragment key={l.code}>
          {i > 0 && <span className="text-muted-foreground/50">/</span>}
          <button
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={lang === l.code}
            className={`px-1 py-1 transition-colors ${
              lang === l.code
                ? 'font-semibold text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {l.label}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#inicio', label: t.nav.home },
    { href: '#sobre', label: t.nav.about },
    { href: '#servicos', label: t.nav.services },
    { href: '#projetos', label: t.nav.projects },
    { href: '#contato', label: t.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/15 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="font-display text-lg font-semibold tracking-wide">
          KA<span className="text-primary">.</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-[12px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-foreground/15 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3" aria-label="Menu móvel">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-foreground/10 py-3 text-[13px] uppercase tracking-[0.16em] text-foreground last:border-b-0"
              >
                {l.label}
              </a>
            ))}
            <LanguageSwitcher className="py-3" />
          </nav>
        </div>
      )}
    </header>
  );
}
