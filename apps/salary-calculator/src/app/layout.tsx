import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/src/lib/utils";
import { LanguageProvider } from "@/src/lib/i18n/language-context";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.hvadfårjegudbetalt.dk";
const SITE_NAME = "Hvad får jeg udbetalt";
const TITLE = "Hvad får jeg udbetalt – Beregn din skat og nettoløn 2026";
const DESCRIPTION =
  "Beregn din nettoløn efter AM-bidrag, bund-, mellem-, top- og kommuneskat med de gældende 2026-satser.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "hvad får jeg udbetalt",
    "lønberegner",
    "skatteberegner",
    "nettoløn",
    "AM-bidrag",
    "bundskat",
    "mellemskat",
    "topskat",
    "kommuneskat",
    "trækprocent",
    "dansk skat 2026",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/hfu-icon-filled.svg",
    shortcut: "/hfu-icon-filled.svg",
    apple: "/hfu-icon-filled.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="da"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-muted">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
      <GoogleAnalytics gaId="G-959QHL6L4N" />
    </html>
  );
}
