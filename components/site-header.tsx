import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { copy, localeHref, type Locale } from "@/lib/i18n";

export function SiteHeader({ locale, transparent = false, path = "" }: { locale: Locale; transparent?: boolean; path?: string }) {
  const t = copy[locale];
  const other = locale === "ka" ? "en" : "ka";
  const links = [
    ["/collection", t.nav.collection],
    ["/story", t.nav.story],
    ["/gifting", t.nav.gifting],
    ["/journal", t.nav.journal],
    ["/contact", t.nav.contact],
  ] as const;

  return (
    <header className={`site-header${transparent ? " site-header--hero" : ""}`}>
      <Link className="header-brand" href={localeHref(locale)} aria-label="ÓRIA — home">
        <BrandMark compact />
      </Link>
      <nav className="desktop-nav" aria-label={locale === "ka" ? "მთავარი ნავიგაცია" : "Main navigation"}>
        {links.map(([href, label]) => <Link href={localeHref(locale, href)} key={href}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <Link className="language-link" href={localeHref(other, path)} aria-label={locale === "ka" ? "Switch to English" : "ქართულად გადასვლა"}>{t.otherLanguage}</Link>
        <details className="mobile-nav">
          <summary aria-label={locale === "ka" ? "მენიუს გახსნა" : "Open menu"}><span /><span /></summary>
          <nav aria-label={locale === "ka" ? "მობილური ნავიგაცია" : "Mobile navigation"}>
            {links.map(([href, label], index) => <Link href={localeHref(locale, href)} key={href}><small>0{index + 1}</small>{label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
