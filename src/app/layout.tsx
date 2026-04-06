import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientEffects } from "@/components/ClientEffects";
import { getSiteUrl } from "@/lib/siteUrl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d0d",
};

function safeMetadataBase(): URL {
  try {
    return getSiteUrl();
  } catch {
    return new URL("http://localhost:3000");
  }
}

export const metadata: Metadata = {
  metadataBase: safeMetadataBase(),
  title: {
    default: "AxCode — Software House | Soluções digitais escaláveis",
    template: "%s | AxCode",
  },
  description:
    "Transformamos ideias em soluções digitais escaláveis: sistemas web, dashboards, automações e APIs. Performance, segurança e suporte contínuo.",
  keywords: [
    "software house",
    "desenvolvimento web",
    "dashboards",
    "automação",
    "API",
    "Next.js",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "AxCode — Software House",
    description:
      "Soluções digitais escaláveis com foco em performance e conversão.",
    images: [
      {
        url: "/images/axcode-logo.webp",
        width: 480,
        height: 372,
        alt: "AxCode",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/axcode-logo.webp"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/images/axcode-mark.webp", type: "image/webp" }],
    apple: "/images/axcode-mark.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen`}
      >
        <ClientEffects />
        {children}
      </body>
    </html>
  );
}
