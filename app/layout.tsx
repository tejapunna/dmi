import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NinjaPromo | Full-Service Digital Marketing Agency",
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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
