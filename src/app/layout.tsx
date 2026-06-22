import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Adel | Software Engineer & Flutter Developer",
  description:
    "Modern bilingual portfolio for Michael Adel Saleb, Software Engineer and Flutter Developer with production mobile apps, clean architecture skills, and payment integration experience.",
  keywords: [
    "Michael Adel",
    "Flutter Developer",
    "Software Engineer",
    "Clean Architecture",
    "BLoC",
    "Mobile Developer Portfolio"
  ],
  openGraph: {
    title: "Michael Adel Portfolio",
    description:
      "Software Engineer and Flutter Developer portfolio with featured projects, architecture-focused work, and mobile product impact.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
