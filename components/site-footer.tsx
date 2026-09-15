import Link from "next/link";
import { BrandMark, Emblem } from "./brand-mark";
import { copy, localeHref, type Locale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <footer className="site-footer">
      <div className="footer-signature"><Emblem /><BrandMark /><p>{t.footer.line}</p></div>
      <div className="footer-grid">
        <div>
          <h2>{t.footer.discover}</h2>
          <Link href={localeHref(locale, "/collection")}>{t.nav.collection}</Link>
          <Link href={localeHref(locale, "/story")}>{t.nav.story}</Link>
          <Link href={localeHref(locale, "/gifting")}>{t.nav.gifting}</Link>
          <Link href={localeHref(locale, "/journal")}>{t.nav.journal}</Link>
        </div>
        <div><h2>{t.footer.contact}</h2><p>{t.footer.contactText}</p><span>Instagram · Coming soon</span></div>
        <div className="footer-monogram" aria-hidden="true">Ó</div>
      </div>
      <div className="footer-bottom"><span>© 2026 ÓRIA · {t.footer.rights}</span><span>{t.footer.country}</span></div>
    </footer>
  );
}
