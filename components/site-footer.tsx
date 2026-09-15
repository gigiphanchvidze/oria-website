import Link from "next/link";
import { BrandMark, Emblem } from "./brand-mark";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-intro">
        <Emblem />
        <BrandMark />
        <p>ფაიფური, რომელიც სუფრას ისტორიად აქცევს.</p>
      </div>
      <div className="footer-columns">
        <div>
          <h2>აღმოაჩინეთ</h2>
          <Link href="/collection">კოლექცია</Link>
          <Link href="/#story">ჩვენი ისტორია</Link>
          <Link href="/#gifting">საჩუქრად</Link>
        </div>
        <div>
          <h2>კონტაქტი</h2>
          <p>საკონტაქტო არხები დაემატება ლონჩამდე.</p>
          <span className="text-link text-link--muted">Instagram · მალე</span>
        </div>
        <div>
          <h2>მაღაზია</h2>
          <p>ონლაინ შეკვეთები გააქტიურდება მეორე ეტაპზე.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 ÓRIA Fine China</span>
        <span>საქართველო</span>
      </div>
    </footer>
  );
}
