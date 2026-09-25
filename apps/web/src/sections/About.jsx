import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="mt-16 border-t border-foreground/15 py-14 md:mt-20 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary">
            <span className="inline-block h-1.5 w-1.5 bg-primary" aria-hidden="true" />
            {t.about.kicker}
          </p>
          <h2 className="mt-4 max-w-md font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
            {t.about.title}
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-foreground/85">
            {t.about.p1}
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            {t.about.p2}
          </p>
        </div>

        <div className="md:col-span-5">
          <div className="frame-window shadow-cut-sm p-6">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {t.about.traitsTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              {t.about.traits.map((trait) => (
                <li key={trait} className="flex items-center gap-3 text-[14px]">
                  <span className="h-1.5 w-1.5 shrink-0 bg-primary" aria-hidden="true" />
                  {trait}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-foreground/15 pt-5">
              {t.hero.certs.map((c) => (
                <span
                  key={c}
                  className="bg-foreground px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-background"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
