"use client";

import { useState, type FormEvent } from "react";
import { copy, type Locale } from "@/lib/i18n";

export function Newsletter({ locale }: { locale: Locale }) {
  const [note, setNote] = useState<string>(copy[locale].newsletter.privacy);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setNote(copy[locale].newsletter.pending); };
  return (
    <form className="newsletter-form" onSubmit={submit}>
      <label className="sr-only" htmlFor={`newsletter-${locale}`}>{copy[locale].newsletter.placeholder}</label>
      <input id={`newsletter-${locale}`} type="email" placeholder={copy[locale].newsletter.placeholder} required />
      <button type="submit">{copy[locale].newsletter.button}<span aria-hidden="true">↗</span></button>
      <p aria-live="polite">{note}</p>
    </form>
  );
}
