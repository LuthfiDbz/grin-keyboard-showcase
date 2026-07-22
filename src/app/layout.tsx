import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://grainkeyboard.netlify.app";

export async function generateMetadata(): Promise<Metadata> {
  const title = "GRAIN G75 — Gasket-Mounted Mechanical Keyboard";
  const description =
    "GRAIN G75: a 75% gasket-mounted mechanical keyboard, CNC-machined from aluminum. Tri-mode connectivity, hot-swap PCB, PBT keycaps. Precision built for daily typing.";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: "%s · GRAIN",
    },
    description,
    keywords: [
      "mechanical keyboard",
      "gasket mount keyboard",
      "75% keyboard",
      "hot-swap keyboard",
      "GRAIN G75",
      "custom keyboard",
    ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      url: SITE_URL,
      siteName: "GRAIN",
      title,
      description,
      images: [
        {
          url: "/images/hero.jpg",
          width: 2400,
          height: 1800,
          alt: "GRAIN G75 mechanical keyboard, top-down detail view",
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "GRAIN G75",
  image: [`${SITE_URL}/images/hero.jpg`],
  description:
    "A 75% gasket-mounted mechanical keyboard, CNC-machined from aluminum, with tri-mode connectivity and a hot-swappable PCB.",
  brand: {
    "@type": "Brand",
    name: "GRAIN",
  },
  sku: "GRAIN-G75-CHR",
  offers: {
    "@type": "Offer",
    url: SITE_URL,
    priceCurrency: "IDR",
    price: "4290000",
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      </head>
      <body className="bg-grid-fade">{children}</body>
    </html>
  );
}
