import Link from "next/link";
import { copy, localeHref, type Locale } from "@/lib/i18n";
import { EditorialImage } from "./editorial-image";
import { LocaleFrame } from "./locale-frame";
import { Newsletter } from "./newsletter";
import { ParallaxHero } from "./parallax-hero";
import { ProcessStory } from "./process-story";
import { Reveal } from "./reveal";

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale].home;
  return (
    <LocaleFrame locale={locale} heroHeader>
      <section className="home-hero">
        <ParallaxHero alt={locale === "ka" ? "ÓRIA-ს ფაიფურით გაწყობილი სუფრა" : "A table styled with ÓRIA fine china"} />
        <div className="hero-shade" />
        <div className="hero-content page-shell">
          <p className="eyebrow eyebrow--light">{t.heroKicker}</p>
          <h1 className={`hero-title hero-title--${locale}`}>{lineBreak(t.heroTitle)}</h1>
          <p>{t.heroLine}</p>
          <Link className="button button--light" href={localeHref(locale, "/collection")}>{t.explore}<span aria-hidden="true">↗</span></Link>
        </div>
        <span className="hero-scroll">{t.scroll}<i /></span>
      </section>

      <section className="collections-section page-shell">
        <Reveal className="section-intro section-intro--center">
          <p className="eyebrow">{t.collectionKicker}</p><h2>{t.collectionTitle}</h2><p>{t.collectionBody}</p>
        </Reveal>
        <div className="collection-grid">
          <Reveal className="collection-tile">
            <Link href={localeHref(locale, "/collection#dinner")}>
              <EditorialImage src="/images/dinner-set.webp" alt={t.dinner} className="collection-tile__image" />
              <div className="collection-tile__caption"><span>01 · {t.dinnerLine}</span><h3>{t.dinner}</h3><em>{t.view} ↗</em></div>
            </Link>
          </Reveal>
          <Reveal className="collection-tile collection-tile--offset" delay={120}>
            <Link href={localeHref(locale, "/collection#tea")}>
              <EditorialImage src="/images/tea-set.webp" alt={t.tea} className="collection-tile__image" />
              <div className="collection-tile__caption"><span>02 · {t.teaLine}</span><h3>{t.tea}</h3><em>{t.view} ↗</em></div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="story-teaser">
        <EditorialImage src="/images/process-sample.webp" alt={t.storyTitle} className="story-teaser__image" sizes="(max-width: 900px) 100vw, 52vw" />
        <Reveal className="story-teaser__copy">
          <p className="eyebrow">{t.storyKicker}</p><h2>{t.storyTitle}</h2><p>{t.storyBody}</p>
          <Link className="line-link" href={localeHref(locale, "/story")}>{t.storyLink}<span>↗</span></Link>
        </Reveal>
      </section>

      <ProcessStory locale={locale} />

      <section className="gifting-teaser page-shell">
        <Reveal className="gifting-teaser__copy">
          <p className="eyebrow">{t.giftingKicker}</p><h2>{t.giftingTitle}</h2><p>{t.giftingBody}</p>
          <Link className="button button--dark" href={localeHref(locale, "/gifting")}>{t.giftingLink}<span>↗</span></Link>
        </Reveal>
        <Reveal className="gifting-teaser__visual" delay={100}><EditorialImage src="/images/gifting.webp" alt={t.giftingTitle} /></Reveal>
      </section>

      <section className="editorial-section">
        <Reveal className="section-intro page-shell"><p className="eyebrow">{t.editorialKicker}</p><h2>{t.editorialTitle}</h2></Reveal>
        <div className="editorial-strip">
          {["/images/oria-hero.webp", "/images/process-gold.webp", "/images/tea-set.webp"].map((src, index) => (
            <Link href={localeHref(locale, "/journal")} className="editorial-card" key={src}>
              <EditorialImage src={src} alt={t.editorialCards[index]} sizes="(max-width: 700px) 82vw, 34vw" />
              <span>0{index + 1}</span><h3>{t.editorialCards[index]}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="signup-section">
        <div className="signup-ornament" aria-hidden="true">✦</div>
        <Reveal className="signup-copy"><p className="eyebrow">{t.signupKicker}</p><h2>{t.signupTitle}</h2><p>{t.signupBody}</p><Newsletter locale={locale} /></Reveal>
      </section>
    </LocaleFrame>
  );
}

function lineBreak(value: string) {
  return value.split("\n").map((line) => <span key={line}>{line}</span>);
}
