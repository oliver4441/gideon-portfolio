import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise-bg antialiased">
        {children}
      </body>
    </html>
  );
}
