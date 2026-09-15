import Link from "next/link";
import { copy, localeHref, type Locale, type PageKey } from "@/lib/i18n";
import { EditorialImage } from "./editorial-image";
import { LocaleFrame } from "./locale-frame";
import { Newsletter } from "./newsletter";
import { Reveal } from "./reveal";

export function ContentPage({ locale, page }: { locale: Locale; page: PageKey }) {
  if (page === "collection") return <CollectionPage locale={locale} />;
  if (page === "journal") return <JournalPage locale={locale} />;
  const t = copy[locale].pages[page];
  const image = page === "story" ? "/images/process-design.webp" : page === "gifting" ? "/images/gifting.webp" : "/images/oria-hero.webp";
  return (
    <LocaleFrame locale={locale} path={`/${page}`}>
      <section className="inner-hero page-shell">
        <Reveal className="inner-hero__copy"><p className="eyebrow">{t.kicker}</p><h1>{lineBreak(t.title)}</h1><p>{t.intro}</p></Reveal>
        <Reveal className="inner-hero__visual" delay={100}><EditorialImage src={image} alt={t.title.replace("\n", " ")} priority /></Reveal>
      </section>
      {page === "contact" ? <ContactBody locale={locale} /> : <NarrativeBody locale={locale} page={page} />}
    </LocaleFrame>
  );
}

function CollectionPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <LocaleFrame locale={locale} path="/collection">
      <section className="collection-page-hero page-shell"><p className="eyebrow">{t.pages.collection.kicker}</p><h1>{t.pages.collection.title}</h1><p>{t.pages.collection.intro}</p></section>
      <section className="collection-feature page-shell" id="dinner">
        <Reveal className="collection-feature__visual"><EditorialImage src="/images/dinner-set.webp" alt={t.home.dinner} priority /></Reveal>
        <Reveal className="collection-feature__copy"><span>01 · Dinner</span><h2>{t.home.dinner}</h2><p>{locale === "ka" ? "სერვიზი, რომელიც მშვიდ ყოველდღიურობასაც ერგება და ხანგრძლივ სადღესასწაულო საღამოსაც." : "A service designed for quiet everyday meals and long celebratory evenings alike."}</p><div className="detail-list"><span>{locale === "ka" ? "სასადილო თეფში" : "Dinner plate"}</span><span>{locale === "ka" ? "დესერტის თეფში" : "Dessert plate"}</span><span>{locale === "ka" ? "ღრმა თეფში" : "Deep plate"}</span></div><em>{locale === "ka" ? "შემადგენლობა და ფასი · მალე" : "Composition and pricing · Coming soon"}</em></Reveal>
      </section>
      <section className="collection-feature collection-feature--reverse page-shell" id="tea">
        <Reveal className="collection-feature__visual"><EditorialImage src="/images/tea-set.webp" alt={t.home.tea} /></Reveal>
        <Reveal className="collection-feature__copy"><span>02 · Tea</span><h2>{t.home.tea}</h2><p>{locale === "ka" ? "ნაზი ფორმები დილის სიმშვიდისთვის, შუადღის პაუზისთვის და სტუმრის მოლოდინისთვის." : "Graceful forms for quiet mornings, afternoon pauses and the anticipation of guests."}</p><div className="detail-list"><span>{locale === "ka" ? "ჩაის ფინჯანი" : "Tea cup"}</span><span>{locale === "ka" ? "ლამბაქი" : "Saucer"}</span><span>{locale === "ka" ? "ჩაიდანი" : "Teapot"}</span></div><em>{locale === "ka" ? "შემადგენლობა და ფასი · მალე" : "Composition and pricing · Coming soon"}</em></Reveal>
      </section>
      <blockquote className="collection-quote"><p>{t.pages.collection.quote}</p><span>ÓRIA · Fine China</span></blockquote>
    </LocaleFrame>
  );
}

function NarrativeBody({ locale, page }: { locale: Locale; page: "story" | "gifting" }) {
  const t = copy[locale].pages[page];
  const secondImage = page === "story" ? "/images/process-gold.webp" : "/images/tea-set.webp";
  return (
    <section className="narrative-section">
      <Reveal className="narrative-copy"><p className="eyebrow">ÓRIA · 2026</p><h2>{t.bodyTitle}</h2><p>{t.body}</p><span className="ornamental-rule">✦</span></Reveal>
      <EditorialImage src={secondImage} alt={t.bodyTitle} className="narrative-image" sizes="100vw" />
    </section>
  );
}

function JournalPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const images = ["/images/oria-hero.webp", "/images/process-gold.webp", "/images/tea-set.webp"];
  return (
    <LocaleFrame locale={locale} path="/journal">
      <section className="journal-hero page-shell"><p className="eyebrow">{t.pages.journal.kicker}</p><h1>{lineBreak(t.pages.journal.title)}</h1><p>{t.pages.journal.intro}</p></section>
      <section className="journal-list page-shell">{images.map((src, index) => <Reveal className="journal-entry" delay={index * 80} key={src}><EditorialImage src={src} alt={t.home.editorialCards[index]} /><span>0{index + 1} · {index === 0 ? "Hosting" : index === 1 ? "Details" : "Rituals"}</span><h2>{t.home.editorialCards[index]}</h2><p>{t.pages.journal.coming}</p></Reveal>)}</section>
    </LocaleFrame>
  );
}

function ContactBody({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section className="contact-panel page-shell">
      <div><p className="eyebrow">ÓRIA</p><h2>{locale === "ka" ? "სიახლეები ელფოსტაზე" : "Notes from ÓRIA"}</h2><Newsletter locale={locale} /></div>
      <div><p className="eyebrow">{t.nav.contact}</p><p>{t.pages.contact.note}</p><Link className="line-link" href={localeHref(locale, "/collection")}>{t.home.explore}<span>↗</span></Link></div>
    </section>
  );
}

function lineBreak(value: string) { return value.split("\n").map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>); }
