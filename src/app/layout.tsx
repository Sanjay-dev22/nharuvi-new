import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nharuvi Global | Trusted Growth & Advisory Partner",
    template: "%s | Nharuvi Global",
  },
  description:
    "Nharuvi Global is a premier professional services firm offering accounting, tax advisory, audit, CFO advisory, business consulting, and digital transformation services.",
  keywords: [
    "accounting firm",
    "tax advisory",
    "audit assurance",
    "CFO advisory",
    "business consulting",
    "risk advisory",
    "corporate finance",
    "digital transformation",
    "Nharuvi Global",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nharuvi Global",
    title: "Nharuvi Global | Trusted Growth & Advisory Partner",
    description:
      "Helping organizations navigate growth, compliance and transformation with confidence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-background antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
