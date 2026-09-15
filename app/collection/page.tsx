import type { Metadata } from "next";
import Link from "next/link";
import { ConceptVisual } from "@/components/concept-visual";
import { Emblem } from "@/components/brand-mark";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "კოლექცია",
  description: "აღმოაჩინეთ ÓRIA-ს სადილისა და ჩაის სერვიზების პირველი კოლექცია.",
};

const dinnerPieces = ["სასადილო თეფში", "დესერტის თეფში", "ღრმა თეფში"];
const teaPieces = ["ჩაის ფინჯანი", "ლამბაქი", "ჩაიდანი"];

export default function CollectionPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="collection-hero section-shell">
          <p className="eyebrow">ÓRIA · პირველი კოლექცია</p>
          <h1>სუფრის რიტუალები,<br />ერთიან ხელწერაში.</h1>
          <p>ორი ფორმა ყოველდღიური შეკრებებისთვის — სადილისა და ჩაის სერვიზები, შექმნილი ერთმანეთის შესავსებად.</p>
          <div className="collection-index" aria-label="კოლექციის კატეგორიები">
            <a href="#dinner"><span>01</span>სადილის სერვიზები</a>
            <a href="#tea"><span>02</span>ჩაის სერვიზები</a>
          </div>
        </section>

        <section className="collection-feature section-shell" id="dinner">
          <ConceptVisual kind="dinner" label="სადილის სერვიზები" />
          <div className="feature-copy reveal">
            <p className="eyebrow">01 · Dinner sets</p>
            <h2>სადილის სერვიზები</h2>
            <p className="feature-lead">მშვიდი ფონი, დახვეწილი ორნამენტი და ოქროს თხელი ხაზი — ყოველდღიური სუფრიდან სადღესასწაულო შეხვედრამდე.</p>
            <ul className="piece-list">
              {dinnerPieces.map((piece) => <li key={piece}>{piece}<span>პირველ კოლექციაში</span></li>)}
            </ul>
            <span className="availability">დეტალური შემადგენლობა და ფასი · მალე</span>
          </div>
        </section>

        <section className="collection-feature collection-feature--reverse section-shell" id="tea">
          <ConceptVisual kind="tea" label="ჩაის სერვიზები" />
          <div className="feature-copy reveal">
            <p className="eyebrow">02 · Tea sets</p>
            <h2>ჩაის სერვიზები</h2>
            <p className="feature-lead">ნაზი ფორმები ნელი საუბრებისთვის. სერვიზი, რომელიც დილის სიმშვიდესაც ერგება და სტუმრის მოლოდინსაც.</p>
            <ul className="piece-list">
              {teaPieces.map((piece) => <li key={piece}>{piece}<span>პირველ კოლექციაში</span></li>)}
            </ul>
            <span className="availability">დეტალური შემადგენლობა და ფასი · მალე</span>
          </div>
        </section>

        <section className="detail-banner">
          <ConceptVisual kind="detail" label="ორნამენტის დეტალი" />
          <div>
            <p className="eyebrow">დეტალი</p>
            <h2>ოქროს ხაზი.<br />ÓRIA-ს ხელწერა.</h2>
            <p>მაკრო-ფოტო აქ ჩაანაცვლებს საკონცეფციო ვიზუალს, როგორც კი პირველი ნიმუშის ფოტოსესია დასრულდება.</p>
          </div>
        </section>

        <section className="collection-closing section-shell">
          <Emblem />
          <h2>შექმნილი ერთად დასაწყობად.</h2>
          <p>სადილისა და ჩაის სერვიზები ერთი ვიზუალური ოჯახის ნაწილია — მშვიდი სუფრისთვის, რომელიც იცვლება შემთხვევასთან ერთად.</p>
          <Link className="text-link" href="/#gifting">იხილეთ საჩუქრის იდეა</Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
