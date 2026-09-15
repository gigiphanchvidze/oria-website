import Link from "next/link";
import { ConceptVisual } from "@/components/concept-visual";
import { Emblem } from "@/components/brand-mark";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="hero section-shell">
          <div className="hero-copy reveal">
            <p className="eyebrow">ÓRIA · Fine China</p>
            <h1>სილამაზე<br />ყოველდღიურ რიტუალებში.</h1>
            <p className="hero-lead">
              დახვეწილი ფაიფური ქართული სუფრისთვის — მშვიდი ფორმებით, ნაზი ორნამენტით და დეტალებით, რომლებიც რჩება.
            </p>
            <div className="button-row">
              <Link className="button button--dark" href="/collection">კოლექციის დათვალიერება</Link>
              <a className="text-link" href="#story">ჩვენი ისტორია</a>
            </div>
          </div>
          <ConceptVisual kind="table" label="სუფრის პირველი ისტორია" />
          <p className="hero-note">შექმნილია მასპინძლობისთვის.<br />შერჩეულია შესანარჩუნებლად.</p>
        </section>

        <section className="collection-preview section-shell" aria-labelledby="collection-title">
          <div className="section-heading centered reveal">
            <p className="eyebrow">პირველი კოლექცია</p>
            <h2 id="collection-title">ორი რიტუალი. ერთი ხელწერა.</h2>
            <p>სადილისთვის, რომელიც გვაერთიანებს. ჩაისთვის, რომელიც დროს ანელებს.</p>
          </div>
          <div className="category-grid">
            <Link className="category-card reveal" href="/collection#dinner">
              <ConceptVisual kind="dinner" label="სადილის სერვიზები" />
              <div className="category-copy">
                <div><span>01</span><h3>სადილის სერვიზები</h3></div>
                <span className="arrow" aria-hidden="true">↗</span>
              </div>
            </Link>
            <Link className="category-card reveal" href="/collection#tea">
              <ConceptVisual kind="tea" label="ჩაის სერვიზები" />
              <div className="category-copy">
                <div><span>02</span><h3>ჩაის სერვიზები</h3></div>
                <span className="arrow" aria-hidden="true">↗</span>
              </div>
            </Link>
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="story-visual" aria-hidden="true">
            <span className="story-ring" />
            <Emblem />
            <span className="story-line">ÓRIA</span>
          </div>
          <div className="story-copy reveal">
            <p className="eyebrow">ჩვენი ისტორია</p>
            <h2>სუფრა მხოლოდ ნივთების ერთობლიობა არ არის.</h2>
            <p>ეს არის ადგილი, სადაც ყოველდღიური წუთები მოგონებებად იქცევა. ÓRIA იქმნება ამ წუთებისთვის — ევროპული ფაიფურის კულტურისა და ქართული მასპინძლობის შეხვედრის წერტილში.</p>
            <p>თითოეული ორნამენტი ჩვენი დიზაინით ვითარდება. ფორმა, ფერი და ოქროს დეტალი ერთ მშვიდ კომპოზიციად იკრიბება.</p>
            <span className="text-link text-link--muted">სრული ისტორია · მალე</span>
          </div>
        </section>

        <section className="design-callout section-shell">
          <div className="callout-number">01</div>
          <div>
            <p className="eyebrow">საკუთარი დიზაინი</p>
            <h2>არა შერჩეული კატალოგიდან.<br />შექმნილი ÓRIA-სთვის.</h2>
          </div>
          <p>ნიმუშის პირველი ხაზიდან საბოლოო სერვიზამდე — ყოველი გადაწყვეტილება ბრენდის ერთიან ხელწერას ემსახურება.</p>
        </section>

        <section className="gifting-section section-shell" id="gifting">
          <div className="gifting-copy reveal">
            <p className="eyebrow">ÓRIA საჩუქრად</p>
            <h2>ჟესტი, რომელიც რჩება.</h2>
            <p>ქორწილისთვის. ახალი სახლისთვის. მასპინძლისთვის. ან საკუთარი თავისთვის — განსაკუთრებული მიზეზის გარეშე.</p>
            <span className="text-link text-link--muted">საჩუქრების მიმართულება · მალე</span>
          </div>
          <ConceptVisual kind="gift" label="შეფუთვა და საჩუქარი" />
        </section>

        <section className="journal-section section-shell" id="journal">
          <div className="section-heading reveal">
            <p className="eyebrow">ჟურნალი</p>
            <h2>სამყარო ÓRIA-ს გარშემო.</h2>
          </div>
          <div className="journal-grid">
            <article className="journal-card journal-card--one">
              <span>ინსპირაცია</span>
              <h3>როგორ იქცევა სუფრა საღამოს განწყობად</h3>
              <p>პირველი ჩანაწერი · მალე</p>
            </article>
            <article className="journal-card journal-card--two">
              <span>მასპინძლობა</span>
              <h3>დეტალები, რომლებსაც სტუმარი გრძნობს</h3>
              <p>პირველი ჩანაწერი · მალე</p>
            </article>
            <article className="journal-card journal-card--three">
              <span>მოვლა</span>
              <h3>ფაიფური ყოველდღიურ ცხოვრებაში</h3>
              <p>პირველი ჩანაწერი · მალე</p>
            </article>
          </div>
        </section>

        <section className="launch-note section-shell" aria-labelledby="launch-title">
          <Emblem />
          <p className="eyebrow">პირველებს შორის</p>
          <h2 id="launch-title">ÓRIA-ს პირველი კოლექცია გზაშია.</h2>
          <p>ლონჩის შეტყობინების ფორმა გააქტიურდება ელფოსტის სერვისთან დაკავშირების შემდეგ.</p>
          <button className="button button--outline" type="button" disabled>შეტყობინება · მალე</button>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
