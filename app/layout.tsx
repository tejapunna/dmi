import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import InquiryPrefill from "./components/InquiryPrefill";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const ankaCoder = localFont({
  src: [
    { path: "../public/fonts/anka-coder/AnkaCoder-r.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/anka-coder/AnkaCoder-i.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/anka-coder/AnkaCoder-b.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/anka-coder/AnkaCoder-bi.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-anka-coder",
});

export const metadata: Metadata = {
  title: "DMI-SUNRAISE | Full-Service Digital Marketing Agency",
  description:
    "We drive growth through digital excellence. Full-service digital marketing agency delivering measurable results from SEO to social media, paid advertising, and web development.",
  keywords: "digital marketing, SEO, social media marketing, paid advertising, branding, web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${lexend.variable} ${ankaCoder.variable}`}>
      <body>
        <InquiryPrefill />
        {children}
      </body>
    </html>
  );
}
