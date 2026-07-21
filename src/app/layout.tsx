import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lang'at Gideon | Full-Stack Developer & AI Engineer",
  description: "Portfolio of Lang'at Gideon — full-stack developer, AI engineer, and builder from Kericho, Kenya. Specializing in Next.js, React, Node.js, Supabase, and AI-powered applications.",
  keywords: ["Lang'at Gideon", "Full-Stack Developer", "AI Engineer", "Next.js", "React", "Kenya", "Kericho", "Portfolio"],
  authors: [{ name: "Lang'at Gideon" }],
  openGraph: {
    title: "Lang'at Gideon | Full-Stack Developer & AI Engineer",
    description: "Full-stack developer and AI engineer from Kericho, Kenya. Building modern web applications with Next.js, Supabase, and AI.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth bg-dark-950 ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="noise-bg antialiased font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "name": "Lang'at Gideon - Portfolio",
              "url": "https://admin.omixsystems.store/",
              "about": {
                "@type": "Person",
                "name": "Lang'at Gideon",
                "jobTitle": "Full-Stack Developer & AI Engineer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Omix Systems",
                  "url": "https://omixsystems.store/"
                }
              }
            })
          }}
        />
      </body>
    </html>
  );
}
