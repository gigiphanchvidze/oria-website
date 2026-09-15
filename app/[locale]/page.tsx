import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/home-page";
import { isLocale, locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const en = locale === "en";
  return { title: "ÓRIA — Fine China", description: en ? "Refined porcelain for daily rituals, generous hosting and meaningful gifts." : "დახვეწილი ფაიფური ყოველდღიური რიტუალებისთვის, სტუმართმოყვარეობისთვის და საჩუქრად.", alternates: { languages: { ka: "/ka", en: "/en" } } };
}
export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <HomePage locale={locale as Locale} />;
}
