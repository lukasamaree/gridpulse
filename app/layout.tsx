import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gridpulse.lukasamaree.chatgpt.site"),
  title: "GridPulse — Electricity Demand Intelligence",
  description: "An independent portfolio project for electricity demand and forecast analytics.",
  openGraph: {
    title: "GridPulse",
    description: "Electricity Demand & Forecast Intelligence",
    type: "website",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "GridPulse — Electricity Demand & Forecast Intelligence" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GridPulse",
    description: "Electricity Demand & Forecast Intelligence",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
