import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicos" className="border-t border-foreground/15 py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary">
              <span className="inline-block h-1.5 w-1.5 bg-primary" aria-hidden="true" />
              {t.services.kicker}
            </p>
            <h2 className="mt-4 font-display text-2xl font-medium tracking-tight md:text-3xl">
              {t.services.title}
            </h2>
          </div>
          <span className="font-display text-sm text-muted-foreground">
            PT ⇄ EN ⇄ JA
          </span>
        </div>

        <div className="mt-8 border-y border-foreground/20">
          {t.services.items.map((s, i) => (
            <article
              key={s.n}
              className={`grid gap-2 py-6 transition-colors hover:bg-card md:grid-cols-12 md:items-baseline md:gap-4 ${
                i > 0 ? 'border-t border-foreground/15' : ''
              }`}
            >
              <span className="font-display text-sm font-medium text-primary md:col-span-1">
                {s.n}
              </span>
              <h3 className="font-display text-xl font-medium tracking-tight md:col-span-4">
                {s.title}
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:col-span-5">
                {s.desc}
              </p>
              <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground md:col-span-2 md:text-right">
                {s.meta}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
