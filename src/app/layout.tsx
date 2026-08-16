import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://admin.omixsystems.store";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gideon Langat — Founder & CEO, OMIX Systems",
  description:
    "Gideon Langat is the Founder & CEO of OMIX Systems, a software developer and product builder creating digital products, business systems and integrated technology.",
  keywords: [
    "Gideon Langat",
    "OMIX Systems",
    "Founder and CEO",
    "software developer",
    "product builder",
    "systems architect",
    "Kenya",
  ],
  authors: [{ name: "Gideon Langat" }],
  creator: "Gideon Langat",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Gideon Langat — Founder & CEO, OMIX Systems",
    description:
      "Software developer, product builder and founder of OMIX Systems.",
    siteName: "Gideon Langat",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gideon Langat — Founder & CEO, OMIX Systems",
    description:
      "Software developer, product builder and founder of OMIX Systems.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gideon Langat",
              jobTitle: "Founder & CEO",
              url: siteUrl,
              image: `${siteUrl}/images/gideon-profile.webp`,
              worksFor: {
                "@type": "Organization",
                name: "OMIX Systems",
                url: "https://omixsystems.com/",
                description: "Optimal Modular Integration Experts",
              },
              sameAs: [
                "https://omixsystems.com/",
                "https://blog.omixsystems.store/",
                "https://phikila.com/",
                "https://web-jade-one-82.vercel.app/?type=series",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
