import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gideon Kipkirui | Full-Stack Developer & AI Engineer",
  description: "Portfolio of Gideon Kipkirui (Oliver) — full-stack developer, AI engineer, and builder from Kericho, Kenya. Specializing in Next.js, React, Node.js, Supabase, and AI-powered applications.",
  keywords: ["Gideon Kipkirui", "Oliver", "Full-Stack Developer", "AI Engineer", "Next.js", "React", "Kenya", "Kericho", "Portfolio"],
  authors: [{ name: "Gideon Kipkirui" }],
  openGraph: {
    title: "Gideon Kipkirui | Full-Stack Developer & AI Engineer",
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
