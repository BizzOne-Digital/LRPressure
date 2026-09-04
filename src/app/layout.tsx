import type { Metadata } from "next";
import { Archivo, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { company } from "@/data/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
