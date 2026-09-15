import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content-page";
import { copy, isLocale, locales, type PageKey } from "@/lib/i18n";

const pages: PageKey[] = ["collection", "story", "gifting", "journal", "contact"];
export function generateStaticParams() { return locales.flatMap((locale) => pages.map((page) => ({ locale, page }))); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string; page: string }> }): Promise<Metadata> {
  const { locale, page } = await params;
  if (!isLocale(locale) || !pages.includes(page as PageKey)) return {};
  const data = copy[locale].pages[page as PageKey];
  return { title: data.title.replace("\n", " "), description: data.intro, alternates: { languages: { ka: `/ka/${page}`, en: `/en/${page}` } } };
}
export default async function LocalizedContent({ params }: { params: Promise<{ locale: string; page: string }> }) {
  const { locale, page } = await params;
  if (!isLocale(locale) || !pages.includes(page as PageKey)) notFound();
  return <ContentPage locale={locale} page={page as PageKey} />;
}
