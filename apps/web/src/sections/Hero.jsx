import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import RotatingBadge from '@/components/RotatingBadge';

const IMG_BOOK = 'https://images.hostinger.com/8bd45894-6735-4b84-8087-960539a64251.png';
const IMG_PEN = 'https://images.hostinger.com/286d6556-c118-494e-b53b-db5729818e99.png';
const IMG_STACK = 'https://images.hostinger.com/466ed88b-aff3-4ee7-952d-563e06c0e694.png';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="pt-24 md:pt-28">
      <div className="mx-auto max-w-6xl px-5">
        {/* Editorial rule */}
        <div className="flex items-center justify-between border-t border-foreground py-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>{t.hero.eyebrow}</span>
          <span>{t.hero.languages}</span>
        </div>

        {/* Masthead */}
        <div className="mt-8 md:mt-10">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-medium text-primary-foreground md:h-12 md:w-12">
              KA.
            </span>
            <h1 className="font-display text-4xl font-medium leading-none tracking-tight md:text-6xl">
              {t.hero.name}
            </h1>
          </div>

          <p className="mt-5 font-display text-sm font-medium uppercase tracking-[0.22em] text-primary md:text-base">
            {t.hero.role}
          </p>

          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            {t.hero.tagline}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {t.hero.certs.map((c) => (
              <span
                key={c}
                className="border border-foreground px-3 py-1 text-[11px] uppercase tracking-[0.14em]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Layered collage band */}
      <div className="relative mx-auto mt-10 h-[270px] max-w-6xl px-5 md:mt-12 md:h-[340px]">
        {/* Left framed window, cropped at edge */}
        <figure className="frame-window shadow-cut absolute -left-4 top-6 w-[168px] md:-left-8 md:top-2 md:w-[240px]">
          <img src={IMG_BOOK} alt="Livro aberto com texto em japonês" className="aspect-[3/4]" loading="eager" />
        </figure>

        {/* Center circular mask (signature shape) */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-full bg-primary" aria-hidden="true" />
          <img
            src={IMG_STACK}
            alt="Pilha de livros em japonês e inglês"
            className="relative h-[190px] w-[190px] rounded-full border border-foreground object-cover md:h-[270px] md:w-[270px]"
            loading="eager"
          />
        </div>

        {/* Right broken frame */}
        <figure className="frame-window shadow-cut-terra absolute -right-3 top-14 w-[190px] rotate-[3.5deg] md:-right-6 md:top-16 md:w-[290px]">
          <img src={IMG_PEN} alt="Caneta-tinteiro sobre manuscrito anotado" className="aspect-[4/3]" loading="eager" />
        </figure>

        {/* Focal continuous animation */}
        <RotatingBadge className="absolute bottom-0 left-[26%] md:left-[30%]" />
      </div>
    </section>
  );
}
