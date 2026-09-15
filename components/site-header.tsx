import Link from "next/link";
import { BrandMark } from "./brand-mark";

const links = [
  { href: "/collection", label: "კოლექცია" },
  { href: "/#story", label: "ჩვენი ისტორია" },
  { href: "/#gifting", label: "საჩუქრად" },
  { href: "/#journal", label: "ჟურნალი" },
  { href: "/#contact", label: "კონტაქტი" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="header-brand" href="/" aria-label="ÓRIA — მთავარი გვერდი">
        <BrandMark compact />
      </Link>
      <nav className="desktop-nav" aria-label="მთავარი ნავიგაცია">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>{link.label}</Link>
        ))}
        <span className="phase-link" aria-label="მაღაზია გაიხსნება მეორე ეტაპზე">მაღაზია <small>II ეტაპი</small></span>
      </nav>
      <details className="mobile-nav">
        <summary>მენიუ</summary>
        <nav aria-label="მობილური ნავიგაცია">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
          <span>მაღაზია · II ეტაპი</span>
        </nav>
      </details>
    </header>
  );
}
