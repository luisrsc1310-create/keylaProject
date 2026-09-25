import React from 'react';
import { FileDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const SAMPLE_PDF = 'apps\web\public\projects\The_Comfort_of_Small_Things (1).pdf';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projetos" className="border-t border-foreground/15 py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary">
          <span className="inline-block h-1.5 w-1.5 bg-primary" aria-hidden="true" />
          {t.projects.kicker}
        </p>
        <h2 className="mt-4 font-display text-2xl font-medium tracking-tight md:text-3xl">
          {t.projects.title}
        </h2>

        <div className="mt-8">
          <div className="hidden grid-cols-12 gap-4 border-b border-foreground pb-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground md:grid">
            <span className="col-span-5">{t.projects.headProject}</span>
            <span className="col-span-3">{t.projects.headPair}</span>
            <span className="col-span-2">{t.projects.headArea}</span>
            <span className="col-span-2 text-right">{t.projects.headPdf}</span>
          </div>

          {t.projects.items.map((p) => (
            <div
              key={`${p.title}-${p.year}`}
              className="grid grid-cols-2 gap-1 border-b border-foreground/15 py-4 transition-colors hover:bg-card md:grid-cols-12 md:items-center md:gap-4"
            >
              <h3 className="col-span-2 font-display text-[15px] font-medium md:col-span-5">
                {p.title}
              </h3>
              <span className="text-sm font-medium text-primary md:col-span-3">{p.pair}</span>
              <span className="text-right text-sm text-muted-foreground md:col-span-2 md:text-left">
                {p.area}
              </span>
              <div className="col-span-2 mt-2 md:col-span-2 md:mt-0 md:text-right">
                <a
                  href={SAMPLE_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-1.5 border border-foreground px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  <FileDown className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                  {t.projects.pdfLabel}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-muted-foreground">{t.projects.note}</p>
      </div>
    </section>
  );
}
