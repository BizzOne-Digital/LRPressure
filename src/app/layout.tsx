import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { company } from "@/data/site";

// Self-hosted (not fetched from Google at build time). Both files are true variable
// fonts covering the full weight axis, so a single file per family covers every
// weight used across the site (font-weight classes select the instance at render time).
// This avoids the "Can't resolve '@vercel/turbopack-next/internal/font/google/font'"
// Turbopack build error, which happens when next/font/google can't reach Google's
// font servers during the build (offline, firewall, or flaky network).
const archivo = localFont({
  src: "../fonts/Archivo-Variable.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
});

const montserrat = localFont({
  src: "../fonts/Montserrat-Variable.woff2",
  variable: "--font-montserrat",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.website),
  title: {
    default: `Power Washing Philadelphia | Trusted Home Cleaning | ${company.shortName}`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "Philadelphia's top-rated pressure washing & window cleaning company. House washing, roof washing, window cleaning, and more.",
  openGraph: {
    title: `Power Washing Philadelphia | Trusted Home Cleaning | ${company.shortName}`,
    description:
      "Philadelphia's top-rated pressure washing & window cleaning company.",
    siteName: company.shortName,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col overflow-x-hidden bg-white pb-16 sm:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
