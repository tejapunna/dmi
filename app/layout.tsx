import type { Metadata } from "next";
import { Suspense } from "react";
import { Lexend } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import InquiryPrefill from "./components/InquiryPrefill";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const canterbury = localFont({
  src: "../public/fonts/Canterbury.ttf",
  variable: "--font-canterbury",
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
    <html lang="en" data-scroll-behavior="smooth" className={`${lexend.variable} ${canterbury.variable}`}>
      <body>
        <Suspense fallback={null}>
          <InquiryPrefill />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
