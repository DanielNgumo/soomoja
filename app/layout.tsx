import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soomoja – Shopping And Department Store",
  description:
    "Soomoja is your one-stop shopping destination. Get 50% off on selected items. Shop furniture, handbags, books, tech, sneakers, travel gear and more.",
  keywords: "shopping, department store, deals, furniture, tech, sneakers, soomoja",
  openGraph: {
    title: "Soomoja – Shopping And Department Store",
    description: "Your one-stop shopping destination. Get 50% off on selected items.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
