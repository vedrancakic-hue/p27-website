import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LICENSE_PRICE, PRICE_UNTIL } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "P27 Solver — Exact GTO postflop",
    template: "%s — P27 Solver",
  },
  description:
    `Native Windows GTO solver for heads-up postflop. Lifetime license ${LICENSE_PRICE} until ${PRICE_UNTIL}. Published by NRG REAL d.o.o.`,
  metadataBase: new URL("https://p27solver.com"),
  alternates: {
    canonical: "https://p27solver.com",
  },
  icons: {
    icon: "/brand/p27-cube.png",
    apple: "/brand/p27-cube.png",
  },
  openGraph: {
    title: "P27 Solver — Exact GTO postflop",
    description:
      `Native Windows GTO solver for heads-up postflop. Lifetime license ${LICENSE_PRICE} until ${PRICE_UNTIL}. Published by NRG REAL d.o.o.`,
    type: "website",
    images: ["/brand/p27-solver-mark.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-bg font-sans text-text antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
