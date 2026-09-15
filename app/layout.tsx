import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oria-website-gigi-51df.vercel.app"),
  title: {
    default: "ÓRIA — Fine China",
    template: "%s · ÓRIA",
  },
  description:
    "ÓRIA Fine China — ფაიფური ყოველდღიური რიტუალებისთვის, მასპინძლობისთვის და საჩუქრად.",
  openGraph: {
    title: "ÓRIA — Fine China",
    description:
      "დახვეწილი ფაიფური ყოველდღიური რიტუალებისთვის, მასპინძლობისთვის და საჩუქრად.",
    locale: "ka_GE",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ka">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          კონტენტზე გადასვლა
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
