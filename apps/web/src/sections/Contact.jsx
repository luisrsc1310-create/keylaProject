import React, { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

const inputClass =
  'w-full border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary';

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${form.service || t.contact.serviceOptions[0]} — ${form.name}`);
    const body = encodeURIComponent(
      `${t.contact.formName}: ${form.name}\n${t.contact.formEmail}: ${form.email}\n${t.contact.formService}: ${form.service}\n\n${form.message}`
    );
    window.location.href = `mailto:${t.contact.email}?subject=${subject}&body=${body}`;
  };

  const info = [
    { label: t.contact.locationLabel, value: t.contact.location },
    { label: t.contact.responseLabel, value: t.contact.response },
  ];

  return (
    <section id="contato" className="border-t border-foreground/15 py-14 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
        <div>
          <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary">
            <span className="inline-block h-1.5 w-1.5 bg-primary" aria-hidden="true" />
            {t.contact.kicker}
          </p>
          <h2 className="mt-4 font-display text-2xl font-medium tracking-tight md:text-3xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            {t.contact.text}
          </p>

          <dl className="mt-8 space-y-5">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {t.contact.emailLabel}
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${t.contact.email}`}
                  className="link-underline font-display text-lg font-medium"
                >
                  {t.contact.email}
                </a>
              </dd>
            </div>
            {info.map((row) => (
              <div key={row.label}>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {row.label}
                </dt>
                <dd className="mt-1 text-sm">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="frame-window shadow-cut h-fit p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {t.contact.formName}
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder={t.contact.formNamePh}
                className={inputClass}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {t.contact.formEmail}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder={t.contact.formEmailPh}
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-4 grid gap-2">
            <label htmlFor="service" className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              {t.contact.formService}
            </label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className={inputClass}
            >
              {t.contact.serviceOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 grid gap-2">
            <label htmlFor="message" className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              {t.contact.formMessage}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder={t.contact.formMessagePh}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="mt-5 w-full bg-foreground py-3 text-[12px] uppercase tracking-[0.18em] text-background transition-all hover:bg-primary active:scale-[0.98]"
          >
            {t.contact.formButton}
          </button>
        </form>
      </div>
    </section>
  );
}
