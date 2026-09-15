import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import type { Locale } from "@/lib/i18n";

export function LocaleFrame({ locale, children, heroHeader = false, path = "" }: { locale: Locale; children: ReactNode; heroHeader?: boolean; path?: string }) {
  return <div className={`locale-${locale}`} lang={locale}><SiteHeader locale={locale} transparent={heroHeader} path={path} /><main id="main-content">{children}</main><SiteFooter locale={locale} /></div>;
}
